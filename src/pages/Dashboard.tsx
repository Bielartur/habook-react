import {Section} from "../components/layout/Section"
import {PageTitle} from "../components/shared/titles/PageTitle"

import {CardContainer} from "../components/shared/containers/CardContainer"
import {ListCardsDashboard} from "../components/dashboard/cardsDashboard/ListCardsDashboard"
import {TitleChart} from "../components/dashboard/charts/TitleChart"
import {ProgressBarChart} from "../components/dashboard/charts/ProgressBarChart"
import {PagesPerDayChart} from "../components/dashboard/charts/PagesPerDayChart"
import {Subtitle} from "../components/shared/titles/Subtitle"
import {ListCurrentBooks} from "../components/dashboard/currentBooks/ListCurrentBooks.tsx";
import {ListCardRecentCompletedBooks} from "../components/dashboard/completedBooks/ListCardRecentCompletedBook.tsx";
import {Link} from "react-router";
import {AddBookModal} from "../components/dashboard/modals/addBook/AddBookModal.tsx";
import {useEffect} from "react";
import {useRequests} from "../hooks/useRequests.ts";


export const Dashboard = () => {7
    const { getUserBooks } = useRequests()

    useEffect(() => {
        const loadBooks = async () => {
            const books = await getUserBooks()
            console.log(books)
        }

        loadBooks();
    }, [getUserBooks])

    return (
        <>
            <Section>
                <PageTitle title="Sua Jornada de Leitura"
                           subtitle="Acompanhe seu progresso, mantenha a consistência e alcance suas metas de leitura"/>

                <ListCardsDashboard/>

                <CardContainer className="w-full">
                    <TitleChart paginasLidas={234} metaMensal={null}/>
                    <ProgressBarChart pctConcluida={0}/>
                    <PagesPerDayChart/>
                </CardContainer>

            </Section>

            <Section>
                <Subtitle text="Livros em andamento">
                    <AddBookModal />
                </Subtitle>
                <ListCurrentBooks/>
            </Section>

            <Section>
                <Subtitle text="Concluídos Recentemente">
                    <Link to="/livros_concluidos"
                          className="text-accent hover:text-accent-alt font-medium transition-colors whitespace-nowrap">
                        Ver todos →
                    </Link>
                </Subtitle>
                <ListCardRecentCompletedBooks/>
            </Section>
        </>
    )
}