import {CardRecentCompletedBook} from "./CardRecentCompletedBook.tsx";
import {useRequests} from "../../../hooks/useRequests.ts";
import {useEffect, useState} from "react";
import type {UserLivro} from "../../../models/UserBooks.ts";
import type {ApiResponse} from "../../../models/Auth.ts";

// const livrosConcluidos = [
//     {
//         livro: {
//             titulo: "As armas da persuasão",
//             autor: "Robert B. Cialdini",
//             capaUrl: "https://books.google.com/books/content?id=8ciHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         userbook: {
//             avaliacao: 5,
//             concluido_em: "02/12/2025"
//         }
//     },
//     {
//         livro: {
//             titulo: "As armas da persuasão",
//             autor: "Robert B. Cialdini",
//             capaUrl: "https://books.google.com/books/content?id=8ciHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         userbook: {
//             avaliacao: 5,
//             concluido_em: "02/12/2025"
//         }
//     },
//     {
//         livro: {
//             titulo: "As armas da persuasão",
//             autor: "Robert B. Cialdini",
//             capaUrl: "https://books.google.com/books/content?id=8ciHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         userbook: {
//             avaliacao: 5,
//             concluido_em: "02/12/2025"
//         }
//     },
//     {
//         livro: {
//             titulo: "As armas da persuasão",
//             autor: "Robert B. Cialdini",
//             capaUrl: "https://books.google.com/books/content?id=8ciHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         userbook: {
//             avaliacao: 5,
//             concluido_em: "02/12/2025"
//         }
//     },
//     {
//         livro: {
//             titulo: "As armas da persuasão",
//             autor: "Robert B. Cialdini",
//             capaUrl: "https://books.google.com/books/content?id=8ciHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         userbook: {
//             avaliacao: 5,
//             concluido_em: "02/12/2025"
//         }
//     }
// ]

export const ListCardRecentCompletedBooks = () => {
    const {getUserBooks} = useRequests()
    const [recentCompletedBooks, setRecentCompletedBooks] = useState<UserLivro[]>([])

    useEffect(() => {
        const loadUserBooks = async () => {
            const response: ApiResponse<UserLivro[]> = await getUserBooks({status: "concluidos"});

            if (!response.success || !response.payload) return;

            setRecentCompletedBooks(response.payload);
        }

        loadUserBooks();
    }, [getUserBooks])

    return (
        <div className="w-full py-4 grid gap-4"
             style={{gridTemplateColumns: `repeat(auto-fill, minmax(16rem, 1fr))`}}
        >
            {recentCompletedBooks.length > 0 && (
                recentCompletedBooks.map((item, index) => (
                    <CardRecentCompletedBook
                        key={`recent-completed-book-${index}`}
                        livro={item.livro}
                        progresso={item.progresso}
                    />
                ))
            )}
        </div>
    )
}