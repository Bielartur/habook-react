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
    hoverEffect?: boolean;
    delay?: number;
};


export const CardContainer = ({
      children,
      className = "",
      hoverEffect = true,
      delay = 0,
      ...props
  }: Props) => {
    return (
        <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            custom={delay}
            className={`py-4 px-6 flex flex-col grow h-full gap-2 bg-white shadow-md hover:shadow-lg rounded-xl ${
                hoverEffect ? "card-hover" : ""
            } ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};