import {CardRecentCompletedBook} from "./CardRecentCompletedBook.tsx";
import type {UserLivro} from "../../../../models/UserBooks.ts";
import {BigLoading} from "../../../shared/loadings/BigLoading.tsx";

type Props = {
    isLoading: boolean;
    recentCompletedBooks: UserLivro[]
}

export const ListCardRecentCompletedBooks = ({isLoading, recentCompletedBooks }: Props) => {

    if (isLoading) {
        return <BigLoading />
    } if (recentCompletedBooks.length === 0) {
        return (
            <div
                className="h-28 p-4 flex justify-center items-center flex-col gap-4 text-xl italic text-slate-600 font-[500]">
                <p>Nenhum livro concluído nos últimos <span className="text-gradient font-semibold">30 dias</span>
                </p>
            </div>
        )
    }

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