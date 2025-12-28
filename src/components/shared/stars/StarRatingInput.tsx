import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useState, Activity } from "react";

type Props = {
    value: number | null;
    onChange: (rating: number) => void;
    maxStars?: number;
    sizeClassName?: "text-xs" | "text-sm" | "text-md" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl" | "text-6xl" | "text-7xl";
};

const ratingLabels: Record<number, string> = {
    1: "Péssimo",
    2: "Ruim",
    3: "Regular",
    4: "Bom",
    5: "Ótimo",
};

export const StarRatingInput = ({ value, onChange, maxStars = 5, sizeClassName = "text-2xl" }: Props) => {
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(null);
    };

    const handleClick = (index: number) => {
        // If clicking the same rating, maybe we could deselect? 
        // But usually in 5 stars, clicking 3 means 3.
        onChange(index);
    };

    // Determine which rating to display (hover or actual)
    const displayRating = hoverRating !== null ? hoverRating : (value || 0);

    return (
        <div className="flex items-center justify-evenly w-full">
            {Array.from({ length: maxStars }).map((_, i) => {
                const starIndex = i + 1;
                const isFilled = starIndex <= displayRating;
                const isConfirmed = starIndex <= (value || 0);

                return (
                    <button
                        key={starIndex}
                        type="button"
                        className="relative flex flex-col items-center p-1 cursor-pointer focus:outline-none transition-transform hover:scale-110 active:scale-95"
                        onMouseEnter={() => handleMouseEnter(starIndex)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(starIndex)}
                        aria-label={`Avaliar ${starIndex} estrelas`}
                    >
                        <FontAwesomeIcon
                            icon={isFilled ? faStarSolid : faStarRegular}
                            className={`${sizeClassName} transition-colors ${isFilled ? "text-yellow-400" : "text-gray-300"
                                } ${isFilled && !isConfirmed ? "opacity-30" : "opacity-100"}`}
                        />
                        <Activity mode={hoverRating === starIndex || starIndex === value ? "visible" : "hidden"}>
                            <span className="absolute top-full text-xs font-medium text-gray-600 whitespace-nowrap">
                                {ratingLabels[starIndex]}
                            </span>
                        </Activity>
                    </button>
                );
            })}
        </div>
    );
};
