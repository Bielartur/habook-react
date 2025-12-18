import {ListCards} from "../../shared/ListCards.tsx";
import {CardCurrentBook} from "./CardCurrentBook.tsx";
import {ButtonGradient} from "../../shared/buttons/ButtonGradient.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import type {UserLivro} from "../../../models/UserBooks.ts";
import {useRequests} from "../../../hooks/useRequests.ts";
import type {ApiResponse} from "../../../models/Auth.ts";
import {useAuth} from "../../../hooks/useAuth.tsx";
import {BigLoading} from "../../shared/loadings/BigLoading.tsx";

export const ListCurrentBooks = () => {
    const { getUserBooks } = useRequests()
    const [currentBooks, setCurrentBooks] = useState<UserLivro[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const { refresh } = useAuth()

    useEffect(() => {
        const loadUserBooks = async () => {
            const response: ApiResponse<UserLivro[]> = await getUserBooks({status: "em_andamento", ordering: "titulo"});

            if (!response.success || !response.payload) return;

            setLoading(false)
            setCurrentBooks(response.payload);
        }

        loadUserBooks();
    }, [refresh, getUserBooks])


    if (loading) {
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