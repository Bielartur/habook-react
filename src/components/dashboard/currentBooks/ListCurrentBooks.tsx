import {ListCards} from "../../shared/ListCards.tsx";
import {CardCurrentBook} from "./CardCurrentBook.tsx";
import {ButtonGradient} from "../../shared/buttons/ButtonGradient.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import type {UserLivro} from "../../../models/UserBooks.ts";
import {useRequests} from "../../../hooks/useRequests.ts";
import type {ApiResponse} from "../../../models/Auth.ts";

export const ListCurrentBooks = () => {
    const { getUserBooks } = useRequests()
    const [currentBooks, setCurrentBooks] = useState<UserLivro[]>([])

    useEffect(() => {
        const loadUserBooks = async () => {
            const response: ApiResponse<UserLivro[]> = await getUserBooks({status: "em_andamento"});

            if (!response.success || !response.payload) return;

            setCurrentBooks(response.payload);
        }

        loadUserBooks();
    }, [getUserBooks])


    if (!currentBooks) {
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