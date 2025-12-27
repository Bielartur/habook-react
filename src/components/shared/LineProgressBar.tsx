type Props = {
    porcentagem: number;
    height?: string;
    width?: string;
}

export const LineProgressBar = ({porcentagem, height, width}: Props) => {
    return (
        <div className="h-2 w-full rounded-full bg-slate-200"
             style={{ height: `${height}`, width: `${width}` }}
        >
            <div
                className="h-full rounded-full relative overflow-hidden bg-linear-to-l from-purple-2 to-accent transition-all ease-out duration-800"
                style={{width: porcentagem + "%"}}
            />
        </div>
    )
}