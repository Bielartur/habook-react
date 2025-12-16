import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowTrendUp, faFire } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { BookText } from "lucide-react";
import { ProgressBar } from "./ProgressBar"
import { TextoMotivador } from "./TextoMotivador"
import { AddBookTrigger } from "./AddBookTrigger"
import { CardDashboard } from "./CardDashboard"
import { ListCards } from "../../shared/ListCards"
import {SmallLoading} from "../../shared/loadings/SmallLoading.tsx";

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
            qtd: typeof paginasLidas === "number" ? paginasLidas : <SmallLoading hasLabel={false} />,
            descricao_qtd: "páginas lidas",
            bgColor: "bg-indigo-100",
            textColor: "text-accent-alt",
            complemento: <ProgressBar pctConcluida={pctConcluida ? pctConcluida : 0} />
        },
        {
            label: "Sequência",
            icon: <FontAwesomeIcon icon={faFire} />,
            qtd: typeof diasConsecutivos === "number" ? diasConsecutivos : <SmallLoading hasLabel={false} />,
            descricao_qtd: "dias consecutivos",
            bgColor: "bg-cyan-100",
            textColor: "text-accent",
            complemento: <TextoMotivador icon={<FontAwesomeIcon icon={faArrowTrendUp} />} text="Mantendo o rítmo" />
        },
        {
            label: "Em andamento",
            icon: <FontAwesomeIcon icon={faCalendar} />,
            qtd: typeof qtdLivrosAndamento === "number" ? qtdLivrosAndamento : <SmallLoading hasLabel={false} />,
            descricao_qtd: "livros ativos",
            bgColor: "bg-violet-100",
            textColor: "text-violet-600",
            complemento: <AddBookTrigger />
        },
    ]

    return (
        <ListCards
            cards={infoCards.map((item) => (
                <CardDashboard key={`card-dashboard-${item.label}`} infoCard={item}>
                    {item.complemento}
                </CardDashboard>
            ))}
        />
    )
}