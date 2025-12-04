import {CardContainer} from "../../shared/containers/CardContainer.tsx";
import {StarRating} from "../../shared/StarRating.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";

type Props = {
    livro: {
        titulo: string
        autor: string
        capaUrl: string
    }
    userbook: {
        avaliacao: number
        concluido_em: string
    }
}

export const CardRecentCompletedBook = ({ livro, userbook }: Props) => {
    return (
        <CardContainer>
            <div className="flex items-start space-x-3">
                <img
                    src={livro.capaUrl}
                    alt="O Homem Mais Rico da Babilônia" className="w-12 h-16 object-cover rounded-lg shadow-sm"
                />
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-800 text-sm truncate">
                        {livro.titulo}
                    </h3>
                    <p className="text-xs text-slate-500 mb-2">{livro.autor}</p>
                    <div className="flex items-center space-x-1 mb-1">
                        <StarRating rating={userbook.avaliacao} />
                    </div>
                    <div className="flex items-center space-x-1">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 text-xs" />

                        <span className="text-xs text-slate-500">{userbook.concluido_em}</span></div>
                </div>
            </div>
        </CardContainer>
    )
}