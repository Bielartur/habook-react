import {CardRecentCompletedBook} from "./CardRecentCompletedBook.tsx";

const livrosConcluidos = [
    {
        livro: {
            titulo: "As armas da persuasão",
            autor: "Robert B. Cialdini",
            capaUrl: "https://books.google.com/books/content?id=8ciHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        userbook: {
            avaliacao: 5,
            concluido_em: "02/12/2025"
        }
    },
    {
        livro: {
            titulo: "As armas da persuasão",
            autor: "Robert B. Cialdini",
            capaUrl: "https://books.google.com/books/content?id=8ciHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        userbook: {
            avaliacao: 5,
            concluido_em: "02/12/2025"
        }
    },
    {
        livro: {
            titulo: "As armas da persuasão",
            autor: "Robert B. Cialdini",
            capaUrl: "https://books.google.com/books/content?id=8ciHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        userbook: {
            avaliacao: 5,
            concluido_em: "02/12/2025"
        }
    },
    {
        livro: {
            titulo: "As armas da persuasão",
            autor: "Robert B. Cialdini",
            capaUrl: "https://books.google.com/books/content?id=8ciHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        userbook: {
            avaliacao: 5,
            concluido_em: "02/12/2025"
        }
    },
    {
        livro: {
            titulo: "As armas da persuasão",
            autor: "Robert B. Cialdini",
            capaUrl: "https://books.google.com/books/content?id=8ciHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        userbook: {
            avaliacao: 5,
            concluido_em: "02/12/2025"
        }
    }
]

export const ListCardRecentCompletedBooks = () => {
    return (
        <div className="w-full py-4 grid gap-4"
             style={{gridTemplateColumns: `repeat(auto-fill, minmax(16rem, 1fr))`}}
        >
            {livrosConcluidos.map((item) => (
                <CardRecentCompletedBook livro={item.livro} userbook={item.userbook}/>
            ))}
        </div>
    )
}