export interface Categoria {
    id: number;
    nome: string;
}

export interface LivroResumo {
    id: number;
    titulo: string;
    autor: string;
    total_paginas: number;
    categoria: Categoria;
    capa_url?: string | null;
}

export interface Status {
    codigo: "em_andamento" | "concluido" | "abandonado"; // Enumerado de status
    rotulo: string; // Ex: "Lendo"
}

export interface Avaliacao {
    quantidade: number;
    media: number; // Decimal em Python é um número de ponto flutuante
}

export interface Progresso {
    iniciado_em: string | null; // ISO date
    status: Status;
    avaliacao: Avaliacao;
    pagina_atual: number;
    paginas_restantes: number;
    progresso_percentual: number;
    dias_em_leitura: number;
    concluido_em?: string | null; // ISO date
}

export interface UserLivro {
    livro: LivroResumo;
    progresso: Progresso;
}

