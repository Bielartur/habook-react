
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
};

export const ButtonSubtle = ({children, className, ...props}: Props) => {
    return (
        <button type="reset"
                className={`flex-1 px-3 py-2 border border-slate-300 text-slate-700 rounded-xl
                    hover:scale-102 active:scale-96 hover:bg-slate-200 hover:text-slate-700 
                    transition-all duration-200 cursor-pointer ${className}`}
                {...props}
        >
            {children}
        </button>
    )
}