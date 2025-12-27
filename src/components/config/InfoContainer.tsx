import {ConfigContainer} from "./ConfigContainer.tsx";

type Props = {
    delay?: number
    label: string
    info?: string
}

export const InfoContainer = ({ delay = 0, label, info = "Não informada" }: Props) => {
    return (
        <ConfigContainer delay={delay} className="text-slate-600 gap-1!">
            <p className="text-sm">{label}:</p>
            <p className="font-bold text-xl">{info}</p>
        </ConfigContainer>
    )
}