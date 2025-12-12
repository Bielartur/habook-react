import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type Props = {
    text: string;
    faIcon?: IconProp;
    required?: boolean;
}

export const Label = ({ text, faIcon, required}: Props) => {
    return (
        <label className="text-sm text-slate-700 font-semibold mb-1 ml-0.5 flex items-center gap-1">
            {faIcon && <FontAwesomeIcon icon={faIcon} />}
            {text}
            {required && <span className="text-red-600">*</span>}
        </label>
    )
}