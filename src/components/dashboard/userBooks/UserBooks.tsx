import { Link } from "react-router"
import { Section } from "../../layout/Section"
import { Subtitle } from "../../shared/titles/Subtitle"
import { ListCurrentBooks } from "./currentBooks/ListCurrentBooks"
import {ListCardRecentCompletedBooks} from "./completedBooks/ListCardRecentCompletedBook.tsx";
import {AddBookModal} from "../modals/addBook/AddBookModal.tsx";
import {useAuth} from "../../../hooks/useAuth.tsx";
import {useEffect, useState} from "react";
import type {ApiResponse} from "../../../models/Auth.ts";
import type {UserLivro} from "../../../models/UserBooks.ts";
import {useRequests} from "../../../hooks/useRequests.ts";

export const UserBooks = () => {
    const { getUserBooks } = useRequests()
    const [userBooks, setUserBooks] = useState<UserLivro[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { refresh } = useAuth()

    useEffect(() => {
        const loadUserBooks = async () => {
            const response: ApiResponse<UserLivro[]> = await getUserBooks({ordering: "titulo"});

            if (!response.success || !response.payload) return;

            setIsLoading(false)
            setUserBooks(response.payload);
        }

        loadUserBooks();
    }, [refresh, getUserBooks])

    const currentBooks = userBooks.filter((book) => book.progresso.status.codigo === "em_andamento")
    const completedBooks = userBooks.filter((book) => book.progresso.status.codigo === "concluido")

    return (
        <>
            <Section id="current-books">
                <Subtitle text="Livros em andamento">
                    <AddBookModal />
                </Subtitle>
                <ListCurrentBooks isLoading={isLoading} currentBooks={currentBooks} />
            </Section>

            <Section>
                <Subtitle text="Concluídos Recentemente">
                    <Link to="/livros_concluidos"
                          className="text-accent hover:text-accent-alt font-medium transition-colors whitespace-nowrap">
                        Ver todos →
                    </Link>
                </Subtitle>
                <ListCardRecentCompletedBooks isLoading={isLoading} recentCompletedBooks={completedBooks} />
            </Section>
        </>
    )
}