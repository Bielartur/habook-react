import {CardContainer} from "../shared/containers/CardContainer.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";
import {StarRating} from "../shared/StarRating.tsx";
import type {UserLivro} from "../../models/UserBooks.ts";
import {formatDate} from "../../utils/globalHelpers.ts";
import {SmallLoading} from "../shared/loadings/SmallLoading.tsx";


type Props = UserLivro

export const CardCompletedBooks = ({ livro, progresso }: Props) => {
    const { titulo, autor, capa_url, categoria, total_paginas } = livro;
    const { concluido_em, avaliacao } = progresso;

    return (
        <CardContainer>
            <div className="relative mb-4">
                <img
                    src={capa_url ? capa_url : "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400"}
                    alt={titulo}
                    className="w-full h-48 object-contain rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-xs font-medium text-slate-600">{categoria.nome}</span>
                </div>
            </div>
            <div className="space-y-3">
                <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1 truncate">{titulo}</h3>
                    <p className="text-slate-600 text-sm">{autor}</p>
                </div>
                <div className="flex items-center space-x-1 mb-2">
                    <StarRating rating={avaliacao.media} />
                    <span className="text-sm text-slate-500 ml-2">({avaliacao.quantidade})</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>{concluido_em ? formatDate(concluido_em) : <SmallLoading />}</span>
                    </div>
                    <span>{total_paginas} páginas</span>
                </div>
            </div>
        </CardContainer>
    )
}