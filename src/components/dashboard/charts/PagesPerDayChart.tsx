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

const data = [
    {day: 1, pages: 45},
    {day: 2, pages: 20},
    {day: 3, pages: 12},
    {day: 4, pages: 15},
    {day: 5, pages: 8},
    {day: 6, pages: 0},
    {day: 7, pages: 0},
    {day: 8, pages: 10},
    {day: 9, pages: 20},
    {day: 10, pages: 20},
    {day: 11, pages: 20},
    {day: 12, pages: 0},
    {day: 13, pages: 0},
    {day: 14, pages: 0},
    {day: 15, pages: 0},
    {day: 16, pages: 0},
    {day: 17, pages: 0},
    {day: 18, pages: 0},
    {day: 19, pages: 0},
    {day: 20, pages: 0},
    {day: 21, pages: 0},
    {day: 22, pages: 0},
    {day: 23, pages: 0},
    {day: 24, pages: 0},
    {day: 25, pages: 0},
    {day: 26, pages: 0},
    {day: 27, pages: 0},
    {day: 28, pages: 0},
    {day: 29, pages: 0},
    {day: 30, pages: 0},
    {day: 31, pages: 0},
]

export const PagesPerDayChart = () => {
  return (
    <div className="w-full h-72 p-4 px-0 pb-12">
    <h3 className="text-base text-slate-600 font-semibold mb-4">Páginas por dia</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={18}>
          {/* Grade pontilhada */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* Eixo X: dias */}
          <XAxis
            dataKey="day"
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
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
          />

          {/* Gradiente para as barras */}
          <defs>
            <linearGradient id="pagesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(186, 80%, 38%)" />
              <stop offset="100%" stopColor="hsl(252, 46%, 33%)" />
            </linearGradient>
          </defs>

          {/* Barra usando o gradiente */}
          <Bar
            dataKey="pages"
            radius={[6, 6, 0, 0]}
            fill="url(#pagesGradient)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
