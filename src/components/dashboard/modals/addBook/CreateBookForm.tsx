// CreateBookForm.tsx
import {BasicInput} from "../../../shared/inputs/BasicInput.tsx";
import {
    faBook,
    faHashtag,
    faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {SelectOptions} from "../../../shared/inputs/SelectOptions.tsx";
import type {BookFormValues, FieldLocks} from "../../../../models/GoogleApi.ts";
import {type Dispatch, type SetStateAction, useEffect, useState} from "react";
import {useRequests} from "../../../../hooks/useRequests.ts";
import toast from "react-hot-toast";
import type {AddBookForm, Category} from "../../../../models/Books.ts";
import {type Resolver, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addBookSchema} from "../../../../models/schemas/AddBookSchemas.ts";
import {ErrorMessage} from "../../../shared/ErrorMessage.tsx";
import {useAuth} from "../../../../hooks/useAuth.tsx";

const resolver = yupResolver(addBookSchema) as unknown as Resolver<AddBookForm>

type Props = {
    values: BookFormValues;
    locks: FieldLocks;
    onSubmittingChange?: (v: boolean) => void
    setIsOpen: Dispatch<SetStateAction<boolean>>
};

export const CreateBookForm = ({values, locks, setIsOpen, onSubmittingChange}: Props) => {
    const {getCategories, addBook} = useRequests()
    const [categories, setCategories] = useState<Category[]>([]);
    const { setRefresh } = useAuth()

    const {
        handleSubmit,
        register,
        setValue,
        reset,
        formState: {isSubmitting, errors},
    } = useForm<AddBookForm>({
        resolver,
        defaultValues: {
            titulo: "",
            autor: "",
            total_paginas: 0,
            categoria_id: 0,
            capa_url: null,
            isbn: null,
            google_id: null,
        },
    });


    useEffect(() => {
        const loadCategories = async () => {
            const response = await getCategories();

            if (response.success) {
                setCategories(response.payload ? response.payload : []);
            } else {
                toast.error(response.message);
            }
        }

        loadCategories();
    }, [getCategories]);

    useEffect(() => {
        setValue("isbn", values.isbn)
        setValue("capa_url", values.cover)
        setValue("google_id", values.googleId)
        setValue("titulo", values.title)
        setValue("autor", values.author)
        setValue("total_paginas", Number(values.totalPages))
    }, [values, setValue])

    useEffect(() => {
        onSubmittingChange?.(isSubmitting)
    }, [isSubmitting, onSubmittingChange])


    const onSubmit = async (data: AddBookForm) => {
        const response = await addBook(data)

        if (response.success) {
            toast.success(response.message);
            reset();
            setIsOpen(false);
            setRefresh((prev) => !prev)
            setTimeout(() => {
                document
                    .getElementById("current-books")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" })
            }, 300)
        } else {
            toast.error(response.message);
        }
    }

    return (
        <form id="add-book-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="flex flex-col gap-4">
                <div className="w-full flex gap-4">
                    <div className="w-1/2 flex flex-col gap-1">
                        <BasicInput
                            placeholder="Ex: O poder do hábito"
                            faIcon={faBook}
                            label="Título"
                            required
                            readOnly={locks.title}
                            {...register("titulo")}
                        />
                        {errors?.titulo && <ErrorMessage message={errors.titulo.message}/>}

                    </div>

                    <div className="w-1/2 flex flex-col gap-1">
                        <BasicInput
                            placeholder="Ex: Charles Duhigg"
                            faIcon={faUser}
                            label="Autor"
                            required
                            readOnly={locks.author}
                            {...register("autor")}
                        />
                        {errors?.autor && <ErrorMessage message={errors.autor.message}/>}
                    </div>
                </div>

                <div className="w-full flex gap-4">
                    <div className="w-1/2 flex flex-col gap-1">
                        <BasicInput
                            placeholder="408"
                            faIcon={faHashtag}
                            label="Total de páginas"
                            required
                            readOnly={locks.totalPages}
                            {...register("total_paginas")}
                        />
                        {errors?.total_paginas && <ErrorMessage message={errors.total_paginas.message}/>}
                    </div>

                    <div className="w-1/2 flex flex-col gap-1">
                        <SelectOptions
                            options={categories}
                            faIcon={faLayerGroup}
                            label="Categoria"
                            required={true}
                            {...register("categoria_id", {valueAsNumber: true})}
                        />
                        {errors?.categoria_id && <ErrorMessage message={errors.categoria_id.message}/>}
                    </div>
                </div>

                {/* campos “fantasma” se você quiser manter isbn/cover/googleId no form */}
                <input type="hidden" {...register("isbn")}/>
                <input type="hidden" {...register("capa_url")}/>
                <input type="hidden" {...register("google_id")}/>
            </div>
        </form>
    );
};
