import {CardContainer} from "../../shared/containers/CardContainer.tsx";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LineProgressBar} from "../../shared/LineProgressBar.tsx";
import {ButtonAddPage} from "../../shared/buttons/ButtonAddPage.tsx";
import {truncate} from "../../../utils/globalHelpers.ts";
import {FormEditPages} from "./FormEditPages.tsx";
import type {LivroResumo, Progresso} from "../../../models/UserBooks.ts";


type Props = {
    livro: LivroResumo
    progresso: Progresso
}

export const CardCurrentBook = ({livro, progresso}: Props) => {

    const {titulo, autor, capa_url, total_paginas} = livro;
    const {dias_em_leitura, progresso_percentual, pagina_atual, paginas_restantes} = progresso;
    const percentualRestante = 100 - progresso_percentual;

    // const [paginaAtual, setPaginaAtual] = useState(userbook.paginaAtual);

    return (
        <CardContainer key={`livro-${livro.id}`}>
            <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                    <img
                        src={capa_url ? capa_url : "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400" }
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
                            <span>{dias_em_leitura} dias</span>
                        </div>
                        <span>{total_paginas} páginas</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">

                    <FormEditPages paginaAtual={pagina_atual} totalPaginas={total_paginas} />

                    <span className="text-sm font-medium text-accent">
                        {progresso_percentual}%
                </span>
                </div>

                <LineProgressBar porcentagem={progresso_percentual}/>

                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Restam <span>{paginas_restantes}</span> páginas</span>
                    <span>{percentualRestante}% restante</span>
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