import { type HTMLMotionProps } from "framer-motion";
import { AnimateContainer } from "../shared/animations/AnimateContainer";

type Props = HTMLMotionProps<"div"> & {
    delay?: number;
    children: React.ReactNode
    className?: string
};


export const ConfigContainer = ({ delay = 0, children, className, ...props }: Props) => {
    return (
        <AnimateContainer
            delay={delay}
            className={
                "flex flex-col grow gap-2 p-4 rounded-lg border border-slate-300 bg-white  " +
                "items-center justify-center border border-slate-300 " + className}
            {...props}
        >
            {children}
        </AnimateContainer>
    )
}