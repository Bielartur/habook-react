import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

const item: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.96 },
    show: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.25,
            delay,                      // 👈 delay controlado por prop
            ease: "easeOut" as const,
        },
    }),
};

type Props = HTMLMotionProps<"div"> & {
    delay?: number;
    children: React.ReactNode
}


export const AnimateContainer = ({delay, children, ...props }: Props) => {
    return (
        <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            custom={delay}
            {...props}
        >
            {children}
        </motion.div>
    )
}