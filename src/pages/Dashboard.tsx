import { Section } from "../components/layout/Section"
import { PageTitle } from "../components/shared/titles/PageTitle"

import { CardContainer } from "../components/shared/containers/CardContainer"
import { ListCardsDashboard } from "../components/dashboard/cardsDashboard/ListCardsDashboard"
import { TitleChart } from "../components/dashboard/charts/TitleChart"
import { ProgressBarChart } from "../components/dashboard/charts/ProgressBarChart"
import { PagesPerDayChart } from "../components/dashboard/charts/PagesPerDayChart"
import { Subtitle } from "../components/shared/titles/Subtitle"
import {ListCurrentBooks} from "../components/dashboard/currentBooks/ListCurrentBooks.tsx";
import {ListCardRecentCompletedBooks} from "../components/dashboard/completedBooks/ListCardRecentCompletedBook.tsx";
import {ButtonGradient} from "../components/shared/buttons/ButtonGradient.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router";


export const Dashboard = () => {
    return (
        <>
            <Section>
                <PageTitle title="Sua Jornada de Leitura"
                           subtitle="Acompanhe seu progresso, mantenha a consistência e alcance suas metas de leitura"/>

                <ListCardsDashboard/>

                <CardContainer className="w-full">
                    <TitleChart paginasLidas={234} metaMensal={300}/>
                    <ProgressBarChart pctConcluida={80}/>
                    <PagesPerDayChart/>
                </CardContainer>

            </Section>

            <Section>
                <Subtitle text="Livros em andamento">
                    <ButtonGradient>
                        <FontAwesomeIcon icon={faPlus}/>
                        Novo Livro
                    </ButtonGradient>
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