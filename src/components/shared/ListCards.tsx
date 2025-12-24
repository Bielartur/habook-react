import React, {Activity, useEffect, useState} from "react";
import {motion, type Variants} from "framer-motion";

const item: Variants = {
    hidden: {opacity: 0, y: 10, scale: 0.96},
    show: ({index}: { index: number; }) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: index * 0.12, // 👈 AQUI entra o startDelay
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
    startDelay?: number; // 👈 nova prop
};

export const ListCards = <T, >({
       items,
       renderItem,
       getKey,
       minWidth = "16rem",
       autoFill = false,
       className = "",
       startDelay = 0,
   }: Props<T>) => {
    const [applyDelay, setApplyDelay] = useState<boolean>(!!startDelay);

    useEffect(() => {
        if (applyDelay) {
            setTimeout(() => {
                setApplyDelay(false);
            }, startDelay * 1000);
        }

    }, [applyDelay, startDelay]);


    return (
        <Activity mode={applyDelay ? "hidden" : "visible"}>
            <ul
                className={`w-full py-4 grid gap-5 ${className}`}
                style={{
                    gridTemplateColumns: `repeat(${autoFill ? "auto-fill" : "auto-fit"}, minmax(${minWidth}, 1fr))`,
                }}
            >
                {items.map((it, index) => (
                    <motion.li
                        key={getKey(it, index)}
                        custom={{index}}
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.25}}
                    >
                        {renderItem(it)}
                    </motion.li>
                ))}
            </ul>
        </Activity>
    );
};

