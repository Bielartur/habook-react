import {BasicInput} from "../../shared/inputs/BasicInput.tsx";
import {ButtonGradient} from "../../shared/buttons/ButtonGradient.tsx";
import {ButtonSubtle} from "../../shared/buttons/ButtonSubtle.tsx";
import {Activity, useEffect, useRef, useState} from "react";
import {Pen} from "lucide-react";
import type {UpdatePagesPayload} from "../../../models/UserBooks.ts";

type Props = Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
    paginaAtual: number
    totalPaginas: number
    onValidSubmit: (data: UpdatePagesPayload) => Promise<void> | void
}


export const FormEditPages = ({ paginaAtual, totalPaginas, onValidSubmit, ...props }: Props) => {
    const containerRef = useRef<HTMLFormElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editingValue, setEditingValue] = useState(paginaAtual);

    useEffect(() => {
        setEditingValue(paginaAtual);
    }, [paginaAtual]);

    useEffect(() => {
        if (!isEditing) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                containerRef.current &&
                !containerRef.current.contains(target)
            ) {
                setIsEditing(false);
                setEditingValue(paginaAtual); // opcional: cancela edição
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        requestAnimationFrame(() => {
            if (!inputRef.current) return;
            inputRef.current.focus();
            inputRef.current.select();
        });

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isEditing, paginaAtual]);

    const handleStartEditing = () => {
        setIsEditing(true)
        console.log(inputRef.current);
        inputRef.current?.focus();
    }

    const handleAbortEditing = () => {
        setIsEditing(false)
        setEditingValue(paginaAtual);
    }

    const handleChangePagina = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if (typeof setPaginaAtual !== "function") {
        //     throw new Error(`setPaginaAtual inválido: ${typeof setPaginaAtual}`);
        // }
        setEditingValue(e.currentTarget.valueAsNumber);
    };


    const onSubmitChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsEditing(false);
        onValidSubmit({pagina_atual: editingValue})
    };

    return (
        <form ref={containerRef} onSubmit={onSubmitChange} className="flex items-center space-x-2" {...props}>
            <Activity mode={isEditing ? "visible" : "hidden"}>
                <BasicInput ref={inputRef} type="number" value={editingValue}
                            onChange={handleChangePagina}
                            className="rounded-md px-2 py-1 bg-white text-slate-800 font-semibold"
                            classNameContainer="w-20!"/>
            </Activity>
            <Activity mode={isEditing ? "hidden" : "visible"}>
                <span className="text-lg font-bold text-slate-700">{paginaAtual}</span>
            </Activity>

            <span className="text-sm text-slate-500">
                            / {totalPaginas} <Activity
                mode={isEditing ? "hidden" : "visible"}><span>páginas</span></Activity>
                        </span>

            {isEditing ? (
                <div className="flex items-center space-x-2">
                    <ButtonGradient
                        type="submit"
                        className="py-1 px-2 font-normal text-xs rounded-sm"
                    >
                        OK
                    </ButtonGradient>
                    <ButtonSubtle
                        className="py-1 px-2 font-normal text-xs rounded-sm"
                        onClick={handleAbortEditing}
                    >
                        Cancelar
                    </ButtonSubtle>
                </div>
            ) : (
                <button
                    className="p-1 text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-60 disabled:"
                    title="Editar página atual"
                    onClick={handleStartEditing}
                >
                    <Pen size="18" className="cursor-pointer"/>
                </button>
            )}
        </form>
    )
}