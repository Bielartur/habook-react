import {ButtonAddPage} from "../../../shared/buttons/ButtonAddPage.tsx";
import type {UpdatePagesPayload} from "../../../../models/UserBooks.ts";

type Props = {
    onValidSubmit: (data: UpdatePagesPayload) => Promise<void> | void
    isLoading: boolean
}

export const FormAddDefinedPages = ({ isLoading, onValidSubmit }: Props) => {

    const handleSubmit = (qtdPages: number) => {
        onValidSubmit({delta_paginas: qtdPages});
    }

    return (
        <div className="flex items-center space-x-2 pt-2 border-t border-slate-100">
            <span className="text-xs text-slate-500">Adicionar: </span>
            <ButtonAddPage
                qtdPages={5}
                onClick={() =>
                    handleSubmit(5)
                }
                disabled={isLoading}
            />
            <ButtonAddPage
                qtdPages={10}
                onClick={() =>
                    handleSubmit( 10)
                }
                disabled={isLoading}
            />
            <ButtonAddPage
                qtdPages={25}
                onClick={() =>
                    handleSubmit( 25)
                }
                disabled={isLoading}
            />
        </div>
    )
}