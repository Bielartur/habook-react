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
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadUserBooks = async () => {
            try {
                const response: ApiResponse<UserLivro[]> = await getUserBooks({ status: "concluidos" });

                if (response.success && response.payload) {
                    setCompletedBooks(response.payload);
                }
            } finally {
                setIsLoading(false);
            }
        };

        loadUserBooks();
    }, [getUserBooks]);


    if (isLoading) {
        return <BigLoading className="my-16"/>
    } else if (completedBooks.length === 0) {
        return (
            <div className="h-48 w-full flex items-center justify-center">
                <p className="text-xl font-semibold italic text-slate-600">Nenhum livro concluído até o momento</p>
            </div>
        )
    }

    return (
        <ListCards
            startDelay={0.48}
            items={completedBooks}
            autoFill
            getKey={(item) => `completed-books-${item.livro.id}`}
            renderItem={(item) => (
                <CardCompletedBooks
                    livro={item.livro}
                    progresso={item.progresso}
                />
            )}
        />
    )
}