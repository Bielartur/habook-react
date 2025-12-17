import {addBookSchema} from "./schemas/AddBookSchemas.ts";
import * as yup from "yup"

export type Category = {
    id: number
    nome: string,
}

export type Book = {
    id: number;
    titulo: string;
    autor: string;
    total_paginas: number;
    categoria: Category;
    isbn?: string | null;
    capa_url?: string | null;
    google_id?: string | null;
    criado_em: string;      // ISO datetime
    atualizado_em: string; // ISO datetime
};

export type AddBook = {
    titulo: string;
    autor: string;
    total_paginas: number;
    categoria_id: number;
    capa_url?: string | null
    isbn?: string | null
    google_id?: string | null
}

export type AddBookForm = yup.InferType<typeof addBookSchema>
