import {ListCards} from "../shared/ListCards.tsx";
import {CardCompletedBooks} from "./CardCompletedBooks.tsx";

const completedBooks = [
    {
        livro: {
            id: 1,
            titulo: "Mindset",
            autor: "Carol Dweck",
            capaUrl: "https://books.google.com/books/content?id=aizjDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            categoria: {
                id: 1,
                nome: "Autoajuda"
            },
            totalPaginas: 349
        },
        userbook: {
            concluido_em: "24/10/2025"
        }
    },
    {
        livro: {
            id: 2,
            titulo: "Mindset",
            autor: "Carol Dweck",
            capaUrl: "https://books.google.com/books/content?id=aizjDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            categoria: {
                id: 1,
                nome: "Autoajuda"
            },
            totalPaginas: 349
        },
        userbook: {
            concluido_em: "24/10/2025"
        }
    },
    {
        livro: {
            id: 3,
            titulo: "Mindset",
            autor: "Carol Dweck",
            capaUrl: "https://books.google.com/books/content?id=aizjDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            categoria: {
                id: 1,
                nome: "Autoajuda"
            },
            totalPaginas: 349
        },
        userbook: {
            concluido_em: "24/10/2025"
        }
    }
]

export const ListCardCompletedBooks = () => {

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
            cards={completedBooks.map(({livro, userbook}) => (
                <CardCompletedBooks
                    key={"completed-books-" + livro.id}
                    livro={livro}
                    userbook={userbook}
                />
            ))}
        />
    )
}