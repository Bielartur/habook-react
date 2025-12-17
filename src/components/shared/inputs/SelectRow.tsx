import {Label} from "./Label.tsx";
import {useMemo, useState} from "react";
import {BasicInput} from "./BasicInput.tsx";
import type {UserGoalsForm} from "../../../models/User.ts";

const options = [
    {
        label: "Meta anual",
        value: "meta_anual_paginas",
        placeholder: "ex: 2500 páginas/ano",
        helpText: "Páginas que você deseja ler este ano",
    },
    {
        label: "Meta mensal",
        value: "meta_mensal_paginas",
        placeholder: "ex: 200 páginas/mês",
        helpText: "Páginas que você deseja ler por mês",
    },
    {
        label: "Meta diária",
        value: "meta_diaria_paginas",
        placeholder: "ex: 10 páginas/dia",
        helpText: "Páginas que você deseja ler por dia",
    },
] as const

type Props = {
    goals: UserGoalsForm
    setGoals: React.Dispatch<
        React.SetStateAction<UserGoalsForm>
    >
}


export const SelectRow = ({ goals, setGoals }: Props) => {

    type Option = (typeof options)[number]
    type SelectedOptionValue = Option["value"]

    const [selectedOption, setSelectedOption] = useState<SelectedOptionValue>(
        "meta_diaria_paginas"
    )

    const selectedOptionData = useMemo(
        () => options.find(o => o.value === selectedOption)!,
        [selectedOption]
    )

    const handleChange = (raw: string) => {
        // deixa o input livre (""), mas quando tiver número recalcula
        const n = raw === "" ? null : Number(raw)
        if (raw !== "" && Number.isNaN(n)) return

        setGoals(prev => {
            // começa atualizando o campo que o usuário está editando
            const next = { ...prev, [selectedOption]: raw }

            if (n === null) {
                // se apagou, não recalcula (ou poderia limpar tudo, se preferir)
                return next
            }

            if (selectedOption === "meta_diaria_paginas") {
                next.meta_mensal_paginas = Math.round(n * 30).toString()
                next.meta_anual_paginas = Math.round(n * 365).toString()
            }

            if (selectedOption === "meta_mensal_paginas") {
                const daily = n / 30
                next.meta_diaria_paginas = Math.round(daily).toString()
                next.meta_anual_paginas = Math.round(daily * 365).toString()
            }

            if (selectedOption === "meta_anual_paginas") {
                const daily = n / 365
                next.meta_diaria_paginas = Math.round(daily).toString()
                next.meta_mensal_paginas = Math.round(daily * 30).toString()
            }

            return next
        })
    }

    const inputValue = goals[selectedOption]

    return (
        <div className="w-full flex flex-col gap-2">
            <Label text={"Tipo de metas"}/>
            <div className="inline-flex rounded-xl overflow-hidden border border-slate-300 mb-1">
                {options.map((option) => (
                    <button
                        key={option.value}
                        type="button"
                        className={`
                            flex flex-grow items-center justify-center px-4 py-2 cursor-pointer text-sm
                            ${selectedOption === option.value ? "bg-accent text-slate-50" : "bg-slate-50 hover:bg-slate-50 text-slate-600"}
                        `}
                        onClick={() => {
                            setSelectedOption(option.value)
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
            <BasicInput
                type="number"
                label={selectedOptionData.label}
                placeholder={selectedOptionData.placeholder}
                value={inputValue ? inputValue : ""}
                helpText={selectedOptionData.helpText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
            />
        </div>
    )
}