import {faFaceSadCry} from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {LineProgressBar} from "../../shared/LineProgressBar.tsx";

type Props = {
    pctConcluida?: number | undefined
}

export const ProgressBar = ({pctConcluida}: Props) => {

    if (pctConcluida === undefined) {
        return (
            <div className="w-full text-accent-alt text-sm">
                <FontAwesomeIcon icon={faFaceSadCry}/>
                <span className="font-semibold">Nenhuma meta definida</span>
            </div>
        )
    }

    const pctFinal = pctConcluida > 100 ? 100 : pctConcluida

    return (
        <>
            <LineProgressBar porcentagem={pctFinal}/>
            <p className="text-sm text-slate-500">{pctFinal}% da meta mensal</p>
        </>
    )
}