
export type DiarioData = Array<{
    dia: number;
    paginas: number;
}>

export interface DashboardType {
    mes: string; // ISO date, sempre o 1º dia do mês (ex: "2025-09-01")
    meta: number;
    lidas: number;
    pct: number;
    streak: number;
    qtd_livros_ativos: number;
    necessarias_por_dia: number;
    diario: DiarioData;
    // ex: { "2025-09-01": 12, "2025-09-02": 0 }
}