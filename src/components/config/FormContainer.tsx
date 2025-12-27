import {ConfigContainer} from "./ConfigContainer.tsx";

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    delay?: number;
};

export const FormContainer = ({title, subtitle, children, delay}: Props) => {
    return (
        <ConfigContainer delay={delay}>
            <div className="flex flex-col gap-[0.1rem] mb-1 w-full">
                <h3 className="text-xl font-bold text-slate-600">{title}</h3>
                <p className="text-sm text-slate-600">{subtitle}</p>
            </div>
            {children}
        </ConfigContainer>
    )
}