import {Label} from "./Label.tsx";
import {useState} from "react";
import {BasicInput} from "./BasicInput.tsx";

export const SelectRow = () => {
    const [selectedOption, setSelectedOption] = useState("meta_diaria")

    const options = [
        {label: "Meta anual", value: "meta_anual"},
        {label: "Meta mensal", value: "meta_mensal"},
        {label: "Meta diária", value: "meta_diaria"}
    ]

    const label = options.find(o => o.value === selectedOption)?.label ?? "";


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
                        onClick={() => {setSelectedOption(option.value)}}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
            <BasicInput type="number" label={label} placeholder={`Digite sua ${label.toLowerCase()}`}/>
        </div>
    )
}