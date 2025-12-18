import {ListCards} from "../../../shared/ListCards.tsx";
import {CardCurrentBook} from "./CardCurrentBook.tsx";
import {ButtonGradient} from "../../../shared/buttons/ButtonGradient.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {BigLoading} from "../../../shared/loadings/BigLoading.tsx";
import type {UserLivro} from "../../../../models/UserBooks.ts";

type Props = {
    isLoading: boolean;
    currentBooks: UserLivro[]
}

export const ListCurrentBooks = ({ isLoading, currentBooks }: Props) => {

    if (isLoading) {
        return <BigLoading />
    }
    else if (currentBooks.length === 0) {
        return (
            <div
                className="h-36 p-4 flex justify-center items-center flex-col gap-4 text-xl italic text-slate-600 font-[500]">
                <p>Nenhum livro em andamento no momento</p>
                <ButtonGradient>
                    <FontAwesomeIcon icon={faPlus} />
                    Iniciar Jornada
                </ButtonGradient>
            </div>
        )
    }

    return (
        <ListCards
            minWidth="22rem"
            autoFill={true}
            cards={currentBooks.map((item) => (
                <CardCurrentBook livro={item.livro} progresso={item.progresso}/>
            ))}
        />
    )
}