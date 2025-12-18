import {Section} from "../components/layout/Section"
import {PageTitle} from "../components/shared/titles/PageTitle"

import {CardContainer} from "../components/shared/containers/CardContainer"
import {ListCardsDashboard} from "../components/dashboard/cardsDashboard/ListCardsDashboard"
import {TitleChart} from "../components/dashboard/charts/TitleChart"
import {ProgressBarChart} from "../components/dashboard/charts/ProgressBarChart"
import {PagesPerDayChart} from "../components/dashboard/charts/PagesPerDayChart"
import {useRequests} from "../hooks/useRequests.ts";
import {useEffect, useState} from "react";
import type {DashboardType} from "../models/Statistics.ts";
import {useAuth} from "../hooks/useAuth.tsx";
import {UserBooks} from "../components/dashboard/userBooks/UserBooks.tsx";


export const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState<DashboardType | null>()
    const { getDashboard } = useRequests()
    const {userData, refresh} = useAuth()

    useEffect(() => {
        const loadDashboard = async () => {
            const response = await getDashboard();

            if (response.success) {
                setDashboardData(response.payload)
            }
        }

        loadDashboard()
    }, [refresh, userData, getDashboard])

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

            <UserBooks />
        </>
    )
}