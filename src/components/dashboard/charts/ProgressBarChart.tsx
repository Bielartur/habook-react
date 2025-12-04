import {LineProgressBar} from "../../shared/LineProgressBar.tsx";

type Props = {
    pctConcluida?: number
    pagsFaltantes?: number
    pagsFaltantesPorDia?: number
}

export const ProgressBarChart = ({ pctConcluida = 0, pagsFaltantes = 0, pagsFaltantesPorDia = 0 }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-slate-600 font-semibold">Progresso da meta</p>
                <strong className="text-sm text-semibold text-accent">{ pctConcluida }%</strong>
            </div>

            <LineProgressBar porcentagem={pctConcluida} height={"0.8rem"} />

            <div className="flex justify-between items-center">
                <p className="text-[0.75rem] text-slate-500">Faltam {pagsFaltantes} páginas</p>
                <p className="text-[0.75rem] text-slate-500">{pagsFaltantesPorDia} páginas/dia restantes</p>
            </div>
        </div>
    )
}