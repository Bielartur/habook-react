import {CardContainer} from "../shared/containers/CardContainer.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";
import {StarRating} from "../shared/StarRating.tsx";


type Props = {
    livro: {
        id: number
        titulo: string
        autor: string
        capaUrl: string
        categoria: {
            id: number
            nome: string
        }
        totalPaginas: number
    },
    userbook: {
        concluido_em: string
    }
}

export const CardCompletedBooks = ({ livro, userbook }: Props) => {
    const { titulo, autor, capaUrl, categoria, totalPaginas } = livro;
    const { concluido_em } = userbook;

    return (
        <CardContainer>
            <div className="relative mb-4">
                <img
                    src={capaUrl}
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
                    <StarRating rating={4} />
                    <span className="text-sm text-slate-500 ml-2">(5/5)</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>{concluido_em}</span>
                    </div>
                    <span>{totalPaginas} páginas</span>
                </div>
            </div>
        </CardContainer>
    )
}