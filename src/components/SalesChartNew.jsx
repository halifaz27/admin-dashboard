import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

import { pieData } from '../assets/data';

export default function SalesChart() {
  const total = pieData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="p-5 md:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm h-full">
      <h3 className="text-lg font-bold dark:text-white">
        Sales Channels
      </h3>

      <p className="text-xs text-slate-400 mt-1">
        Traffic acquisition breakdown
      </p>

      <div className="h-56 relative mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              innerRadius={62}
              outerRadius={82}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {pieData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '12px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold dark:text-white">
            {total}
          </span>

          <span className="text-[10px] text-slate-400 uppercase tracking-wider">
            Visitors
          </span>
        </div>
      </div>

      <div className="space-y-3 mt-2">
        {pieData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <span className="text-xs text-slate-500 dark:text-slate-400">
                {item.name}
              </span>
            </div>

            <span className="text-xs font-semibold dark:text-white">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}