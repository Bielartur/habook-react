import {type HTMLMotionProps } from "framer-motion";
import { AnimateContainer } from "../shared/animations/AnimateContainer.tsx";

type Props = HTMLMotionProps<"div"> & {
    delay?: number;
    title: string
    subtitle: string
}

export const TitleConfig = ({ delay = 0, title, subtitle, ...props }: Props) => {
    return (
        <AnimateContainer
            delay={delay}
            className="flex flex-col grow w-full"
            {...props}
        >
            <div className="w-full mb-4">
                <div className="w-fit">
                    <h2 className="text-3xl font-semibold text-gradient leading-10">
                        {title}
                    </h2>
                </div>

                <p className="text-slate-600">{subtitle}</p>
            </div>
        </AnimateContainer>
    )
}