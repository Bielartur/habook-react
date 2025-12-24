import {ListCards} from "../shared/ListCards.tsx";
import {BookOpen} from "lucide-react";
import {ReadingOverview} from "./ReadingOverview.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowTrendUp} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {useRequests} from "../../hooks/useRequests.ts";
import {useEffect, useState} from "react";
import type {ReadingSummaryType} from "../../models/Statistics.ts";
import {renderNumberOrLoading} from "../shared/loadings/renderNumberOrLoading.tsx";


export const ListReadingOverview = () => {
    const { getReadingSummary } = useRequests()
    const [summaryData, setSummaryData] = useState<ReadingSummaryType | null>();

    useEffect(() => {
        const loadSummary = async () => {
            const response = await getReadingSummary();

            if (response.success) {
                setSummaryData(response.payload)
            }
        }

        loadSummary();
    }, [getReadingSummary]);

    const readingOverviews = [
        {
            label: "Total de Livros",
            icon: <BookOpen className={"text-emerald-600"}/>,
            bgColor: "bg-emerald-100",
            value: renderNumberOrLoading(summaryData?.total_livros_concluidos),
        },
        {
            label: "Total de Páginas",
            icon: <FontAwesomeIcon icon={faArrowTrendUp} className="text-blue-600" />,
            bgColor: "bg-blue-100",
            value: renderNumberOrLoading(summaryData?.total_paginas_lidas),
        },
        {
            label: "Avaliação média",
            icon: <FontAwesomeIcon icon={faStar} className="text-yellow-600" />,
            bgColor: "bg-yellow-100",
            rating: summaryData?.avaliacao_media ? parseFloat(summaryData?.avaliacao_media) : 0
        }
    ]

    return (
        <ListCards
            items={readingOverviews}
            getKey={({ label }) => `reading-overview-${label}`}
            renderItem={({ label, icon, value, rating, bgColor }) => (
                <ReadingOverview
                    label={label}
                    value={value}
                    icon={icon}
                    rating={rating}
                    bgColor={bgColor}
                />
            )}
        />

    )
}