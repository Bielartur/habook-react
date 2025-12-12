
type Props = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
    hoverEffect?: boolean;
};

export const CardContainer = ({ children, className, hoverEffect = true, ...props }: Props) => {
    return (
        <div className={`py-4 px-6 flex flex-col grow h-full gap-2 bg-white shadow-md hover:shadow-lg rounded-xl ${hoverEffect ? "card-hover" : ""} ${className}` }
            {...props}
        >
            { children }
        </div>
    )
}