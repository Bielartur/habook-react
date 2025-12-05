import {ConfigContainer} from "./ConfigContainer.tsx";

type Props = {
    label: string
    info: string
}

export const InfoContainer = ({ label, info }: Props) => {
    return (
        <ConfigContainer className="text-slate-600 gap-1!">
            <p className="text-sm">{label}:</p>
            <p className="font-bold text-xl">{info}</p>
        </ConfigContainer>
    )
}