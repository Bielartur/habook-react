import {Label} from "./Label.tsx";
import {useState} from "react";
import {BasicInput} from "./BasicInput.tsx";

export const SelectRow = () => {
    const [selectedOption, setSelectedOption] = useState("meta_diaria")

    const options = [
        {
            label: "Meta anual",
            value: "meta_anual",
            placeholder: "ex: 2500 páginas/ano",
            helpText: "Páginas que você deseja ler este ano"
        },
        {
            label: "Meta mensal",
            value: "meta_mensal",
            placeholder: "ex: 200 páginas/mês",
            helpText: "Páginas que você deseja ler por mês"
        },
        {
            label: "Meta diária",
            value: "meta_diaria",
            placeholder: "ex: 10 páginas/dia",
            helpText: "Páginas que você deseja ler por dia"
        }
    ]

    const selectedOptionData = options.find(o => o.value === selectedOption) ?? {
        label: "Meta diária",
        value: "meta_diaria",
        placeholder: "ex: 10 páginas/dia",
        helpText: "Páginas que você deseja ler por dia"
    };


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
                label={selectedOptionData.label} placeholder={selectedOptionData.placeholder}
                helpText={selectedOptionData.helpText}
            />
        </div>
    )
}