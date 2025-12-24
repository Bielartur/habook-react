import { ListCards } from "../../../shared/ListCards.tsx";
import { CardCurrentBook } from "./CardCurrentBook.tsx";
import { ButtonGradient } from "../../../shared/buttons/ButtonGradient.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import type { UserLivro } from "../../../../models/UserBooks.ts";
import {BigLoading} from "../../../shared/loadings/BigLoading.tsx";

type Props = {
    isLoading: boolean;
    currentBooks: UserLivro[];
};

export const ListCurrentBooks = ({ isLoading, currentBooks }: Props) => {

    if (isLoading) {
        return <BigLoading />
    }

    if (currentBooks.length === 0) {
        return (
            <div className="h-36 p-4 flex justify-center items-center flex-col gap-4 text-xl italic text-slate-600 font-[500]">
                <p>Nenhum livro em andamento no momento</p>
                <ButtonGradient>
                    <FontAwesomeIcon icon={faPlus} />
                    Iniciar Jornada
                </ButtonGradient>
            </div>
        );
    }

    return (
        <ListCards
            items={currentBooks}
            minWidth="22rem"
            autoFill
            getKey={(item) => `current-book-${item.livro.id}`}
            renderItem={(item) => (
                <CardCurrentBook livro={item.livro} progresso={item.progresso} />
            )}
        />
    );
};
