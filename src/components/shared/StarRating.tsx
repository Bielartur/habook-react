import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";

type Props = {
    rating: number; // 0 a 5
}
export const StarRating = ({ rating }: Props) => {
    const totalStars = 5;

    const normalizeRating = rating > totalStars ? totalStars : rating;


    return (
        <div className="flex items-center gap-1">
            {/* estrelas cheias */}
            {[...Array(normalizeRating)].map((_, i) => (
                <FontAwesomeIcon key={`full-${i}`} icon={faStarSolid} className="text-yellow-400 text-sm" />
            ))}

            {/* estrelas vazias */}
            {[...Array(totalStars - normalizeRating)].map((_, i) => (
                <FontAwesomeIcon key={`empty-${i}`} icon={faStarRegular} className="text-slate-300 text-sm" />
            ))}
        </div>
    );
};
