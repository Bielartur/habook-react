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

export interface GetUserBooksParams {
    status?: "em_andamento" | "concluidos" | "abandonados";
    q?: string; // Busca por título ou por autor
    categoria_id?: number;
    autor?: string;
    min_paginas?: number;
    max_paginas?: number;
    ids?: Array<number>;
    ordering?: "titulo" | "-titulo" | "autor" | "-autor" | "paginas" | "-paginas"
    | "publicado" | "-publicado" | "atualizado" | "-atualizado" | "avaliacao_media"
    | "-avaliacao_media" | "-qtd_avaliacoes"
    ;
}

export type UpdatePagesPayload =
    | { delta_paginas: number; pagina_atual?: never }
    | { pagina_atual: number; delta_paginas?: never };

export type updatePagesResponse = {
    pagina_atual: number;
    concluido_em: string | null;
}