import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowTrendUp, faFire } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { BookText } from "lucide-react";
import { ProgressBar } from "./ProgressBar"
import { TextoMotivador } from "./TextoMotivador"
import { AddBookTrigger } from "./AddBookTrigger"
import { CardDashboard } from "./CardDashboard"
import { ListCards } from "../../shared/ListCards"

const infoCards = [
  {
    label: "Este mês",
    icon: <BookText />,
    qtd: 394,
    descricao_qtd: "páginas lidas",
    bgColor: "bg-indigo-100",
    textColor: "text-accent-alt",
    complemento: <ProgressBar pctConcluida={null} />
  },
  {
    label: "Sequência",
    icon: <FontAwesomeIcon icon={faFire} />,
    qtd: 1,
    descricao_qtd: "dias consecutivos",
    bgColor: "bg-cyan-100",
    textColor: "text-accent",
    complemento: <TextoMotivador icon={<FontAwesomeIcon icon={faArrowTrendUp} />} text="Mantendo o rítmo" />
  },
  {
    label: "Em andamento",
    icon: <FontAwesomeIcon icon={faCalendar} />,
    qtd: 3,
    descricao_qtd: "livros ativos",
    bgColor: "bg-violet-100",
    textColor: "text-violet-600",
    complemento: <AddBookTrigger />
  },
]

export const ListCardsDashboard = () => {
    return (
        <ListCards
            cards={infoCards.map((item, index) => (
                <CardDashboard key={`card-dashboard-${index}`} infoCard={item}>
                    {item.complemento}
                </CardDashboard>
            ))}
        />
    )
}