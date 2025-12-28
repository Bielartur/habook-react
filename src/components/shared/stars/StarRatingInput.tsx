import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

type Props = {
    value: number | null;
    onChange: (rating: number) => void;
    maxStars?: number;
    sizeClassName?: string;
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
                        className="p-1 cursor-pointer focus:outline-none transition-transform hover:scale-110 active:scale-95"
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
                    </button>
                );
            })}
        </div>
    );
};
