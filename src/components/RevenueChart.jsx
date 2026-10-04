import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

import { revenueData } from '../assets/data';

export default function RevenueChart() {
  return (
    <div className="p-5 md:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold dark:text-white">
            Revenue Analytics
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            Revenue vs expenses over the year
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500" />
            Revenue
          </span>

          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-rose-500" />
            Expenses
          </span>
        </div>
      </div>

      <div className="h-90 *:relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={revenueData}
            margin={{
              top: 5,
              right: 5,
              left: -20,
              bottom: 5,
            }}
            barGap={6}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.08}
              vertical={false}
            />

            <XAxis
              dataKey="month"
              stroke="#888888"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#888888"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{ fill: 'rgba(99,102,241,0.05)' }}
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '12px',
              }}
            />

            <Bar
              dataKey="revenue"
              name="Revenue"
              fill="#6366f1"
              radius={[5, 5, 0, 0]}
              barSize={12}
            />

            <Bar
              dataKey="expenses"
              name="Expenses"
              fill="#f43f5e"
              radius={[5, 5, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}