import {PageTitle} from "../components/shared/titles/PageTitle.tsx";
import {Section} from "../components/layout/Section.tsx";
import {ListReadingOverview} from "../components/completedBooks/ListReadingOverview.tsx";
import {SearchBooks} from "../components/completedBooks/SearchBooks.tsx";
import {ListCardCompletedBooks} from "../components/completedBooks/ListCardCompletedBooks.tsx";

export const CompletedBooks = () => {
    return (
        <Section>
            <PageTitle
                title="Livros Concluídos"
                subtitle="Celebre suas conquistas literárias e reviva suas leituras favoritas"
            />
            <ListReadingOverview/>

            <SearchBooks/>

            <ListCardCompletedBooks/>
        </Section>
    )
}