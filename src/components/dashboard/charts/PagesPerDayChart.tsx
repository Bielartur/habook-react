// PagesPerDayChart.tsx
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
import type {DiarioData} from "../../../models/Statistics.ts";
import {SmallLoading} from "../../shared/loadings/SmallLoading.tsx";

type Props = {
    diario?: DiarioData;
}

export const PagesPerDayChart = ({diario}: Props) => {

    if (!diario) {
        return <SmallLoading />
    }

    console.log(diario);

    return (
        <div className="w-full h-72 p-4 px-0 pb-12">
            <h3 className="text-base text-slate-600 font-semibold mb-4">Páginas por dia</h3>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={diario} barSize={18}>
                    {/* Grade pontilhada */}
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>

                    {/* Eixo X: dias */}
                    <XAxis
                        dataKey="dia"
                        tickLine={false}
                        axisLine={false}
                    />

                    {/* Eixo Y: páginas */}
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                    />

                    {/* Tooltip padrão */}
                    <Tooltip
                        cursor={{fill: "rgba(0,0,0,0.04)"}}
                    />

                    {/* Gradiente para as barras */}
                    <defs>
                        <linearGradient id="pagesGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="hsl(186, 80%, 38%)"/>
                            <stop offset="100%" stopColor="hsl(252, 46%, 33%)"/>
                        </linearGradient>
                    </defs>

                    {/* Barra usando o gradiente */}
                    <Bar
                        dataKey="paginas"
                        radius={[6, 6, 0, 0]}
                        fill="url(#pagesGradient)"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
