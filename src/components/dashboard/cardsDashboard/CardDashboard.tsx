import { CardContainer } from "../../shared/containers/CardContainer"

type Props = React.HTMLAttributes<HTMLDivElement> & {
    infoCard: {
        label: string
        icon: React.ReactNode
        qtd: number
        descricao_qtd: string
        bgColor: string
        textColor: string
        complemento?: React.ReactNode
    }
    children?: React.ReactNode
}

export const CardDashboard = ({ infoCard, children, ...props }: Props) => {
    return (
        <CardContainer {...props}>
            <div className="w-full flex justify-between items-center">
                <div className={`py-2 px-3 ${infoCard.bgColor} w-fit rounded-lg ${infoCard.textColor} text-xl`}>
                    {infoCard.icon}
                </div>
                <span className="text-sm font-semibold text-slate-500">{infoCard.label}</span>
            </div>
            <strong className="text-3xl my-1 text-slate-700 flex items-center gap-2">
                {infoCard.qtd}
                <span className="text-lg text-slate-600 font-normal">{infoCard.descricao_qtd}</span>
            </strong>

            {children}

        </CardContainer>
    )
}