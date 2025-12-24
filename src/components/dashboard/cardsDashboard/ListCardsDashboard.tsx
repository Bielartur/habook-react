import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowTrendUp, faFire } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { BookText } from "lucide-react";
import { ProgressBar } from "./ProgressBar"
import { TextoMotivador } from "./TextoMotivador"
import { AddBookTrigger } from "./AddBookTrigger"
import { CardDashboard } from "./CardDashboard"
import { ListCards } from "../../shared/ListCards"
import {renderNumberOrLoading} from "../../shared/loadings/renderNumberOrLoading.tsx";

type Props = {
    paginasLidas: number | undefined
    pctConcluida: number | undefined
    diasConsecutivos: number | undefined
    qtdLivrosAndamento: number | undefined
}

export const ListCardsDashboard = ({paginasLidas, pctConcluida, diasConsecutivos, qtdLivrosAndamento}: Props) => {

    const infoCards = [
        {
            label: "Este mês",
            icon: <BookText />,
            qtd: renderNumberOrLoading(paginasLidas),
            descricao_qtd: "páginas lidas",
            bgColor: "bg-indigo-100",
            textColor: "text-accent-alt",
            complemento: <ProgressBar pctConcluida={pctConcluida ? pctConcluida : 0} />
        },
        {
            label: "Sequência",
            icon: <FontAwesomeIcon icon={faFire} />,
            qtd: renderNumberOrLoading(diasConsecutivos),
            descricao_qtd: "dias consecutivos",
            bgColor: "bg-cyan-100",
            textColor: "text-accent",
            complemento: <TextoMotivador icon={<FontAwesomeIcon icon={faArrowTrendUp} />} text="Mantendo o rítmo" />
        },
        {
            label: "Em andamento",
            icon: <FontAwesomeIcon icon={faCalendar} />,
            qtd: renderNumberOrLoading(qtdLivrosAndamento),
            descricao_qtd: "livros ativos",
            bgColor: "bg-violet-100",
            textColor: "text-violet-600",
            complemento: <AddBookTrigger />
        },
    ]

    return (
        <ListCards
            startDelay={0.12}
            items={infoCards}
            getKey={(item) => `card-dashboard-${item.label}`}
            renderItem={(item) => (
                <CardDashboard infoCard={item}>
                    {item.complemento}
                </CardDashboard>
            )}
        />
    )
}