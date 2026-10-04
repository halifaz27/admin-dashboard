import { useState } from 'react';

import StatusGrid from './StatusGrid';
import RevenueChart from './RevenueChart';
import SalesChart from './SalesChartNew';
import TableSection from './TableSection';
import ActivityFeed from './ActivityFeed';

export default function Dashboard() {
  const [period, setPeriod] = useState('This year');

  return (
    <div className="space-y-6">

      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">
            Overview
          </p>

          <h1 className="text-2xl md:text-3xl font-bold dark:text-white mt-1">
            Welcome back, Admin 👋
          </h1>

          <p className="text-sm text-slate-400 mt-1">
            Here's what's happening with your business today.
          </p>
        </div>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="w-fit px-3 py-2 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none dark:text-white"
        >
          <option>This year</option>
          <option>Last 6 months</option>
          <option>Last 30 days</option>
          <option>Last 7 days</option>
        </select>
      </div>

      {/* Stats Grid */}
      <StatusGrid />

      {/* Charts Grid (8 Kolom Revenue Analytics + 4 Kolom Sales Channels) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8">
          <RevenueChart />
        </div>

        <div className="lg:col-span-4">
          <SalesChart />
        </div>
      </div>

      {/* Section Bawah (8 Kolom Orders & Top Products + 4 Kolom Activity Feed) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Kolom Kiri */}
        <div className="lg:col-span-8 space-y-5">
          <TableSection />
        </div>

        {/* Kolom Kanan */}
        <div className="lg:col-span-4">
          <ActivityFeed />
        </div>
      </div>

    </div>
  );
}