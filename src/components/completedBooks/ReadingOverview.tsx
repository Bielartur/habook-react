import {CardContainer} from "../shared/containers/CardContainer.tsx";
import {StarRating} from "../shared/StarRating.tsx";

type Props = {
    key: number | string;
    label: string;
    value?: number;
    icon: React.ReactNode
    rating?: number | undefined;
    bgColor?: string
}

export const ReadingOverview = ({
                                    label,
                                    value,
                                    icon,
                                    rating,
                                    bgColor = "bg-slate-100",
                                }: Props) => {
    return (
        <CardContainer>
            <div className="flex items-center space-x-3 mb-3">
                <div className={`p-2 rounded-lg text-lg ${bgColor}`}>
                    {icon}
                </div>
                <span className="text-sm font-medium text-slate-500">{label}</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-700 flex gap-2">{typeof rating === "number" ? rating : value} {typeof rating === "number" ?
                <StarRating rating={rating}/> : null}
            </h3>
        </CardContainer>
    )
}