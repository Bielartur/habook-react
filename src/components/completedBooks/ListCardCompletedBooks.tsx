import {ListCards} from "../shared/ListCards.tsx";
import {CardCompletedBooks} from "./CardCompletedBooks.tsx";
import {useRequests} from "../../hooks/useRequests.ts";
import {useEffect, useState} from "react";
import type {UserLivro} from "../../models/UserBooks.ts";
import type {ApiResponse} from "../../models/Auth.ts";

// const completedBooks = [
//     {
//         livro: {
//             id: 1,
//             titulo: "Mindset",
//             autor: "Carol Dweck",
//             capaUrl: "https://books.google.com/books/content?id=aizjDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//             categoria: {
//                 id: 1,
//                 nome: "Autoajuda"
//             },
//             totalPaginas: 349
//         },
//         userbook: {
//             concluido_em: "24/10/2025"
//         }
//     },
//     {
//         livro: {
//             id: 2,
//             titulo: "Mindset",
//             autor: "Carol Dweck",
//             capaUrl: "https://books.google.com/books/content?id=aizjDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//             categoria: {
//                 id: 1,
//                 nome: "Autoajuda"
//             },
//             totalPaginas: 349
//         },
//         userbook: {
//             concluido_em: "24/10/2025"
//         }
//     },
//     {
//         livro: {
//             id: 3,
//             titulo: "Mindset",
//             autor: "Carol Dweck",
//             capaUrl: "https://books.google.com/books/content?id=aizjDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//             categoria: {
//                 id: 1,
//                 nome: "Autoajuda"
//             },
//             totalPaginas: 349
//         },
//         userbook: {
//             concluido_em: "24/10/2025"
//         }
//     }
// ]

export const ListCardCompletedBooks = () => {
    const {getUserBooks} = useRequests()
    const [completedBooks, setCompletedBooks] = useState<UserLivro[]>([])

    useEffect(() => {
        const loadUserBooks = async () => {
            const response: ApiResponse<UserLivro[]> = await getUserBooks({status: "concluidos"});

            if (!response.success || !response.payload) return;

            setCompletedBooks(response.payload);
        }

        loadUserBooks();
    }, [getUserBooks])


    if (!completedBooks.length) {
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