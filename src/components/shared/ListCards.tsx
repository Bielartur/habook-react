import React from "react";
import {motion, stagger, type Variants} from "framer-motion";

const list: Variants = {
    hidden: {},
    show: {
        transition: {
            delayChildren: stagger(0.12),
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.25, ease: "easeOut" as const },
    },
};

type Props<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    getKey: (item: T, index: number) => string | number;
    minWidth?: string;
    autoFill?: boolean;
    className?: string;
};

export const ListCards = <T,>({
      items,
      renderItem,
      getKey,
      minWidth = "16rem",
      autoFill = false,
      className = "",
  }: Props<T>) => {
    return (
        <motion.ul
            className={`w-full py-4 grid gap-5 ${className}`}
            style={{
                gridTemplateColumns: `repeat(${autoFill ? "auto-fill" : "auto-fit"}, minmax(${minWidth}, 1fr))`,
            }}
            variants={list}
            initial="hidden"
            animate="show"
        >
            {items.map((it, index) => (
                <motion.li key={getKey(it, index)} variants={item}>
                    {renderItem(it)}
                </motion.li>
            ))}
        </motion.ul>
    );
};
