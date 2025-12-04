import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

type Props = {
    qtdPages: number;
}

export const ButtonAddPage = ({qtdPages}: Props) => {
    return (
        <button className={
            "flex items-center space-x-1 px-2 py-1 bg-slate-100 " +
            "hover:bg-slate-200 text-slate-700 " +
            "text-xs rounded transition-colors cursor-pointer " +
            "disabled:opacity-60 disabled:cursor-not-allowed"
        }>

            <FontAwesomeIcon icon={faPlus}/>
            <span>{qtdPages}p</span>
        </button>
    )
}