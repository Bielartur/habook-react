import {ListCards} from "../../shared/ListCards.tsx";
import {CardCurrentBook} from "./CardCurrentBook.tsx";
import {ButtonGradient} from "../../shared/buttons/ButtonGradient.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const livrosEmAndamento = [
    {
        livro:
            {
                "id": 7,
                "titulo": "Devocional Louvor e Adoração.",
                "autor": "Marcos Melo",
                "totalPaginas": 114,
                "capaUrl": "https://books.google.com/books/content?id=K9xMEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
        userbook: {
            diasEmLeitura: 12,
            paginaAtual: 25,
            pctProgresso: 25,
            paginasFaltantes: 89,
            pctFaltante: 78,
        }
    },
    {
        livro:
            {
                "id": 7,
                "titulo": "Devocional Louvor e Adoração.",
                "autor": "Marcos Melo",
                "totalPaginas": 114,
                "capaUrl": "https://books.google.com/books/content?id=K9xMEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
        userbook: {
            diasEmLeitura: 12,
            paginaAtual: 25,
            pctProgresso: 25,
            paginasFaltantes: 89,
            pctFaltante: 78,
        }
    },
    {
        livro:
            {
                "id": 7,
                "titulo": "Devocional Louvor e Adoração.",
                "autor": "Marcos Melo",
                "totalPaginas": 114,
                "capaUrl": "https://books.google.com/books/content?id=K9xMEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
        userbook: {
            diasEmLeitura: 12,
            paginaAtual: 25,
            pctProgresso: 25,
            paginasFaltantes: 89,
            pctFaltante: 78,
        }
    },
    {
        livro:
            {
                "id": 7,
                "titulo": "Devocional Louvor e Adoração.",
                "autor": "Marcos Melo",
                "totalPaginas": 114,
                "capaUrl": "https://books.google.com/books/content?id=K9xMEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
        userbook: {
            diasEmLeitura: 12,
            paginaAtual: 25,
            pctProgresso: 25,
            paginasFaltantes: 89,
            pctFaltante: 78,
        }
    }
]

export const ListCurrentBooks = () => {

    if (!livrosEmAndamento.length) {
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
            cards={livrosEmAndamento.map((item) => (
                <CardCurrentBook livro={item.livro} userbook={item.userbook}/>
            ))}
        />
    )
}