import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";

type Props = {
    rating: number; // 0 a 5
};

export const StarRating = ({ rating }: Props) => {
    const totalStars = 5;

    // Garante que rating esteja dentro do intervalo
    const safeRating = Math.min(Math.max(rating, 0), totalStars);

    const intPart = Math.floor(safeRating);
    const floatPart = safeRating - intPart;

    return (
        <div className="flex items-center gap-1">
            {/* Estrelas inteiras */}
            {[...Array(intPart)].map((_, i) => (
                <FontAwesomeIcon
                    key={`full-${i}`}
                    icon={faStarSolid}
                    className="text-yellow-400 text-sm"
                />
            ))}

            {/* Estrela parcial */}
            {floatPart > 0 && (
                <div className="relative w-4.5 h-4">
                    {/* estrela vazia no fundo */}
                    <FontAwesomeIcon
                        icon={faStarRegular}
                        className="text-slate-400 text-sm absolute top-0 left-0"
                    />

                    {/* estrela cheia cortada proporcionalmente */}
                    <div
                        className="overflow-hidden absolute -top-4.5"
                        style={{ width: `${floatPart * 100}%` }}
                    >
                        <FontAwesomeIcon
                            icon={faStarSolid}
                            className="text-yellow-400 text-sm"
                        />
                    </div>
                </div>
            )}

            {/* Estrelas restantes vazias */}
            {[...Array(totalStars - intPart - (floatPart > 0 ? 1 : 0))].map((_, i) => (
                <FontAwesomeIcon
                    key={`empty-${i}`}
                    icon={faStarRegular}
                    className="text-slate-400 text-sm"
                />
            ))}
        </div>
    );
};

