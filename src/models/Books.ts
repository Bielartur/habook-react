
export type Categoria = {
    id: number
    nome: string,
}

export type Book = {
    id: number;
    titulo: string;
    autor: string;
    total_paginas: number;
    categoria: Categoria;
    isbn?: string | null;
    capa_url?: string | null;
    google_id?: string | null;
    criado_em: string;      // ISO datetime
    atualizado_em: string; // ISO datetime
};
