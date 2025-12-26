import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

const item: Variants = {
    initial: { opacity: 0, y: 10, scale: 0.96 },
    show: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: index * 0.12, // stagger por índice
            duration: 0.25,
            ease: "easeOut" as const,
        },
    }),
};

type Props<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    getKey: (item: T, index: number) => string | number;
    minWidth?: string;
    autoFill?: boolean;
    className?: string;
    startDelay?: number; // delay global (só pra armar)
};

export const ListCards = <T,>({
                                  items,
                                  renderItem,
                                  getKey,
                                  minWidth = "16rem",
                                  autoFill = false,
                                  className = "",
                                  startDelay = 0,
                              }: Props<T>) => {
    const [armed, setArmed] = useState(startDelay === 0);

    useEffect(() => {
        if (startDelay <= 0) return;
        const t = setTimeout(() => setArmed(true), startDelay * 1000);
        return () => clearTimeout(t);
    }, [startDelay]);

    return (
        <ul
            className={`w-full py-4 grid gap-5 ${className}`}
            style={{
                gridTemplateColumns: `repeat(${autoFill ? "auto-fill" : "auto-fit"}, minmax(${minWidth}, 1fr))`,
            }}
        >
            {items.map((it, index) => (
                <motion.li
                    key={getKey(it, index)}
                    custom={index}                 // 👈 só o índice
                    variants={item}
                    initial="initial"
                    whileInView={armed ? "show" : "initial"}  // 👈 li controla; startDelay só “arma”
                    viewport={{ once: true, amount: 0.25 }}
                >
                    {renderItem(it)}
                </motion.li>
            ))}
        </ul>
    );
};
