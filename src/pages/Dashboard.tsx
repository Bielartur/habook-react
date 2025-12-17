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
import {useRequests} from "../hooks/useRequests.ts";
import {useEffect, useState} from "react";
import type {DashboardType} from "../models/Statistics.ts";
import {useAuth} from "../hooks/useAuth.tsx";


export const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState<DashboardType | null>()
    const { getDashboard } = useRequests()
    const {userData} = useAuth()

    useEffect(() => {
        const loadDashboard = async () => {
            const response = await getDashboard();

            if (response.success) {
                setDashboardData(response.payload)
            }
        }

        loadDashboard()
    }, [userData, getDashboard])

    let pagsFaltantes = 0
    if (dashboardData) {
        pagsFaltantes = dashboardData?.meta - dashboardData?.lidas
    }

    return (
        <>
            <Section>
                <PageTitle title="Sua Jornada de Leitura"
                           subtitle="Acompanhe seu progresso, mantenha a consistência e alcance suas metas de leitura"/>

                <ListCardsDashboard
                    paginasLidas={dashboardData?.lidas}
                    diasConsecutivos={dashboardData?.streak}
                    qtdLivrosAndamento={dashboardData?.qtd_livros_ativos}
                    pctConcluida={dashboardData?.pct}
                />

                <CardContainer className="w-full">
                    <TitleChart paginasLidas={dashboardData?.lidas} metaMensal={dashboardData?.meta}/>
                    <ProgressBarChart pctConcluida={dashboardData?.pct} pagsFaltantes={pagsFaltantes} pagsFaltantesPorDia={dashboardData?.necessarias_por_dia}/>
                    <PagesPerDayChart diario={dashboardData?.diario}/>
                </CardContainer>

            </Section>

            <Section id="current-books">
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