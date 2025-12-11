import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

export const SearchInputGradient = ({className, ...props}: Props) => {
    return (
        <div className="relative bg-linear-to-r from-accent to-purple-2 rounded-xl">
            <FontAwesomeIcon icon={faSearch}
                             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 z-10"/>
            <input
                type="text"
                placeholder="Buscar por título ou autor..."
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white text-slate-800 bg-clip-padding border-3 border-transparent outline-none ${className}`}
                autoComplete="off"
                role="combobox"
                aria-expanded="true"
                aria-autocomplete="list"
                aria-controls="resultado-busca"
                {...props}
            />
        </div>
    )
}