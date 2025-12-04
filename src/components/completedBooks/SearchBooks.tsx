import {Funnel} from "lucide-react";
import {type ChangeEvent, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {CardContainer} from "../shared/containers/CardContainer.tsx";

export const SearchBooks = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <CardContainer className="w-full" hoverEffect={false}>
            <div className="flex flex-col grow sm:flex-row gap-4">
                <div className="flex-1 relative">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                    />
                    <input
                        type="text"
                        placeholder="Buscar por título ou autor..."
                        className="simple-input w-full max-w-150 pl-10"
                        value={inputValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <Funnel className="text-slate-400"/>
                    <select
                        className="simple-input">
                        <option value="">Todas as avaliações</option>
                        <option value="5">5 estrelas</option>
                        <option value="4">4 estrelas</option>
                        <option value="3">3 estrelas</option>
                        <option value="2">2 estrelas</option>
                        <option value="1">1 estrela</option>
                    </select></div>
            </div>
        </CardContainer>
    )
}