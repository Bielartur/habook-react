import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faBullseye, faPlus, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonGradient } from "../../shared/buttons/ButtonGradient"
import {SetGoalsModal} from "../modals/setGoals/SetGoalsModal.tsx";

type Props = {
    metaMensal?: number | undefined | null
    paginasLidas?: number | undefined | null
    mesGrafico?: string
    anoGrafico?: number
}

export const TitleChart = ({ 
    metaMensal, 
    paginasLidas, 
    mesGrafico = new Date().toLocaleString("pt-BR", { month: "long" }) ,
    anoGrafico = new Date().getFullYear()
}: Props) => {

    return (
        <div className="w-full min-h-18 flex justify-between">
            <div>
                <div className="flex items-center flex-wrap">
                    <div className="bg-indigo-100 w-10 h-10 rounded-lg text-indigo-500 text-xl flex items-center justify-center mr-3">
                        <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <div className="h-full flex flex-col justify-between">
                        <h2 className="font-semibold text-xl text-slate-700">Progresso Mensal</h2>
                        <p className="text-sm text-slate-500 capitalize">{mesGrafico} {anoGrafico}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end">
                {metaMensal ? (
                    <>
                        <p className="text-sm text-slate-500 whitespace-nowrap space-x-1">
                            <FontAwesomeIcon icon={faBullseye} />
                            <span>Meta: {metaMensal} páginas</span>
                        </p>
                        <strong className="text-slate-700 text-2xl">
                            {paginasLidas} / {metaMensal}
                        </strong>
                    </>
                ) : (
                    <>
                        <p className="text-md text-slate-600 whitespace-nowrap mb-2 space-x-1">
                            <FontAwesomeIcon icon={faSquarePollVertical} />
                            <span>Defina seu objetivo</span>
                        </p>
                        <SetGoalsModal trigger={(
                            <ButtonGradient className="py-1 px-2.5 text-sm">
                                <FontAwesomeIcon icon={faPlus} />
                                Definir meta
                            </ButtonGradient>
                        )} />
                    </>
                )
                }
            </div>
        </div>
    )
}