import {ListCards} from "../shared/ListCards.tsx";
import {BookOpen} from "lucide-react";
import {ReadingOverview} from "./ReadingOverview.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowTrendUp} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons";

const readingOverviews = [
    {
        label: "Total de Livros",
        icon: <BookOpen className={"text-emerald-600"}/>,
        bgColor: "bg-emerald-100",
        value: 5,
    },
    {
        label: "Total de Páginas",
        icon: <FontAwesomeIcon icon={faArrowTrendUp} className="text-blue-600" />,
        bgColor: "bg-blue-100",
        value: 1234,
    },
    {
        label: "Avaliação média",
        icon: <FontAwesomeIcon icon={faStar} className="text-yellow-600" />,
        bgColor: "bg-yellow-100",
        rating: 4.8
    }
]

export const ListReadingOverview = () => {
    return (
        <ListCards
            cards={readingOverviews.map(({label, icon, value, rating, bgColor}, index) => (
                <ReadingOverview
                    key={"reading-overview-" + index}
                    label={label}
                    value={value}
                    icon={icon}
                    rating={rating}
                    bgColor={bgColor}
                />
            ))}
        />
    )
}