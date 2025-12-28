import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

type Props = {
    rating: number; // 0 a 5 (pode ter decimal)
};

export const StarRating = ({ rating }: Props) => {
    const totalStars = 5;

    const safeRating = Math.min(Math.max(rating, 0), totalStars);
    const intPart = Math.floor(safeRating);
    const floatPart = safeRating - intPart;

    const remaining = totalStars - intPart - (floatPart > 0 ? 1 : 0);

    return (
        <div className="flex items-center gap-1">
            {/* Estrelas inteiras */}
            {Array.from({ length: intPart }).map((_, i) => (
                <FontAwesomeIcon
                    key={`full-${i}`}
                    icon={faStarSolid}
                    className="text-yellow-400 text-sm"
                />
            ))}

            {/* Estrela parcial (corte sólido) */}
            {floatPart > 0 && (
                <span className="relative inline-block text-sm leading-none">
          {/* fundo: estrela vazia */}
                    <FontAwesomeIcon icon={faStarRegular} className="text-slate-400" />

                    {/* topo: estrela cheia cortada */}
                    <span
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${floatPart * 100}%` }}
                        aria-hidden="true"
                    >
            <FontAwesomeIcon icon={faStarSolid} className="text-yellow-400" />
          </span>
        </span>
            )}

            {/* Estrelas restantes vazias */}
            {Array.from({ length: remaining }).map((_, i) => (
                <FontAwesomeIcon
                    key={`empty-${i}`}
                    icon={faStarRegular}
                    className="text-slate-400 text-sm"
                />
            ))}
        </div>
    );
};
