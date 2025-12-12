import {CardContainer} from "../../shared/containers/CardContainer.tsx";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LineProgressBar} from "../../shared/LineProgressBar.tsx";
import {ButtonAddPage} from "../../shared/buttons/ButtonAddPage.tsx";
import {truncate} from "../../../utils/truncateStrings.ts";
import {FormEditPages} from "./FormEditPages.tsx";


type Props = {
    livro: {
        id: number
        titulo: string
        autor: string
        capaUrl: string
        totalPaginas: number
    }
    userbook: {
        diasEmLeitura: number
        paginaAtual: number
        pctProgresso: number
        paginasFaltantes: number
        pctFaltante: number
    }
}

export const CardCurrentBook = ({livro, userbook}: Props) => {

    const {titulo, autor, capaUrl, totalPaginas} = livro;
    const {diasEmLeitura, pctProgresso, paginaAtual, paginasFaltantes, pctFaltante} = userbook;

    // const [paginaAtual, setPaginaAtual] = useState(userbook.paginaAtual);

    return (
        <CardContainer key={`livro-${livro.id}`}>
            <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                    <img
                        src={capaUrl}
                        alt={`Capa de ${titulo}`}
                        className="w-16 h-20 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1 truncate">
                        {truncate(titulo, 28)}
                    </h3>
                    <p className="text-slate-600 text-sm mb-2">{autor}</p>
                    <div className="flex items-center space-x-4 text-xs text-slate-500">
                        <div className="flex items-center space-x-1">
                            <FontAwesomeIcon icon={faClock}/>
                            <span>{diasEmLeitura} dias</span>
                        </div>
                        <span>{totalPaginas} páginas</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">

                    <FormEditPages paginaAtual={paginaAtual} totalPaginas={totalPaginas} />

                    <span className="text-sm font-medium text-accent">
                        {pctProgresso}%
                </span>
                </div>

                <LineProgressBar porcentagem={pctProgresso}/>

                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Restam <span>{paginasFaltantes}</span> páginas</span>
                    <span>{pctFaltante}% restante</span>
                </div>

                <div className="flex items-center space-x-2 pt-2 border-t border-slate-100">
                    <span className="text-xs text-slate-500">Adicionar: </span>
                    <ButtonAddPage qtdPages={5}/>
                    <ButtonAddPage qtdPages={10}/>
                    <ButtonAddPage qtdPages={25}/>
                </div>
            </div>
        </CardContainer>
    )
}