import {CardContainer} from "../shared/containers/CardContainer.tsx";
import {StarRating} from "../shared/stars/StarRating.tsx";
import {renderNumberOrLoading} from "../shared/loadings/renderNumberOrLoading.tsx";

type Props = {
    label: string;
    value?: number | React.ReactNode;
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
            <h3 className="text-3xl font-bold text-slate-700 flex gap-2">{value ? renderNumberOrLoading(value) : rating} {typeof rating === "number" ?
                <StarRating rating={rating}/> : null}
            </h3>
        </CardContainer>
    )
}