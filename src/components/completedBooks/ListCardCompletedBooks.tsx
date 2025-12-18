import {ListCards} from "../shared/ListCards.tsx";
import {CardCompletedBooks} from "./CardCompletedBooks.tsx";
import {useRequests} from "../../hooks/useRequests.ts";
import {useEffect, useState} from "react";
import type {UserLivro} from "../../models/UserBooks.ts";
import type {ApiResponse} from "../../models/Auth.ts";
import {BigLoading} from "../shared/loadings/BigLoading.tsx";


export const ListCardCompletedBooks = () => {
    const {getUserBooks} = useRequests()
    const [completedBooks, setCompletedBooks] = useState<UserLivro[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadUserBooks = async () => {
            const response: ApiResponse<UserLivro[]> = await getUserBooks({status: "concluidos"});

            if (!response.success || !response.payload) return;

            setLoading(false)
            setCompletedBooks(response.payload);
        }

        loadUserBooks();
    }, [getUserBooks])


    if (loading) {
        <BigLoading className="my-16"/>
    }
    else if (completedBooks.length === 0) {
        return (
            <div className="h-48 w-full flex items-center justify-center">
                <p className="text-xl font-semibold italic text-slate-600">Nenhum livro concluído até o momento</p>
            </div>
        )
    }

    return (
        <ListCards
            autoFill={true}
            cards={completedBooks.map(({livro, progresso}) => (
                <CardCompletedBooks
                    key={"completed-books-" + livro.id}
                    livro={livro}
                    progresso={progresso}
                />
            ))}
        />
    )
}