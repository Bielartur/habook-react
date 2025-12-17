import * as yup from "yup";

export const addBookSchema = yup
    .object({
        titulo: yup
            .string()
            .required("O título do livro é obrigatório"),

        autor: yup
            .string()
            .required("O nome do autor é obrigatório"),

        total_paginas: yup
            .number()
            .typeError("O total de páginas deve ser um número")
            .positive("O total de páginas deve ser maior que zero")
            .required("O total de páginas do livro é obrigatório"),

        categoria_id: yup
            .number()
            .typeError("Escolha uma categoria válida")
            .required("Escolha uma categoria para esse livro"),

        capa_url: yup
            .string()
            .nullable()
            .notRequired()
            .url("A capa deve ser um link válido"),

        isbn: yup
            .string()
            .nullable()
            .notRequired(),

        google_id: yup
            .string()
            .nullable()
            .notRequired(),
    })
    .test(
        "isbn-or-google-id",
        "Informe pelo menos um ISBN ou um Google ID",
        function (values) {
            if (!values) return false

            const hasIsbn = !!values.isbn && values.isbn.trim() !== ""
            const hasGoogleId = !!values.google_id && values.google_id.trim() !== ""

            return hasIsbn || hasGoogleId
        }
    )
    .required()