import {
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

import { statusData } from '../assets/data';

export default function StatusGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {statusData.map((item) => {
        const Icon = item.icon;
        const isUp = item.trend === 'up';

        return (
          <div
            key={item.title}
            className="
              group
              p-5
              bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-800
              rounded-2xl
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-0.5
              transition-all duration-200
            "
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500 font-medium">
                {item.title}
              </span>

              <div
                className={`p-3 rounded-xl ${item.color} group-hover:scale-105 transition-transform`}
              >
                <Icon size={20} />
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold dark:text-white">
                  {item.value}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  {item.description}
                </p>
              </div>

              <span
                className={`
                  inline-flex items-center
                  text-xs font-semibold
                  px-2 py-1
                  rounded-full
                  ${
                    isUp
                      ? 'text-emerald-500 bg-emerald-500/10'
                      : 'text-rose-500 bg-rose-500/10'
                  }
                `}
              >
                {isUp ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}

                {item.change}
              </span>
            </div>

            <div className="mt-5">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] text-slate-400">
                  Performance
                </span>

                <span className="text-[10px] text-slate-400">
                  {item.progress}%
                </span>
              </div>

              <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className={`
                    h-full rounded-full transition-all duration-700
                    ${
                      isUp
                        ? 'bg-emerald-500'
                        : 'bg-rose-500'
                    }
                  `}
                  style={{
                    width: `${item.progress}%`,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}