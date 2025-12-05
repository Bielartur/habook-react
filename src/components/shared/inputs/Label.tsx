
type Props = {
    text: string
}

export const Label = ({text}: Props) => {
    return (
        <label className="text-sm text-slate-700 font-semibold mb-1">
            {text}
        </label>
    )
}