import {ListCards} from "../shared/ListCards.tsx";
import {BookOpen} from "lucide-react";
import {ReadingOverview} from "./ReadingOverview.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowTrendUp} from "@fortawesome/free-solid-svg-icons";

const readingOverviews = [
    {
        label: "Total de Livros",
        icon: <BookOpen className={"text-emerald-600"}/>,
        bgColor: "bg-emerald-100",
    },
    {
        label: "Total de Páginas",
        icon: <FontAwesomeIcon icon={faArrowTrendUp} className="text-blue-600" />,
        bgColor: "bg-blue-100",
    },
    // {
    //     label: "Total de Livros",
    //     iconColor: "text-emerald-600",
    //     bgColor: "bg-emerald-100",
    // }
]

export const ListReadingOverview = () => {
    return (
        <ListCards
            cards={readingOverviews.map(({label, icon, bgColor}, index) => (
                <ReadingOverview
                    key={"reading-overview-" + index}
                    label={label}
                    value={5}
                    icon={icon}
                    bgColor={bgColor}
                />
            ))}
        />
    )
}