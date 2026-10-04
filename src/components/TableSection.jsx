import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  Search,
} from 'lucide-react';

import { recentOrders, topProducts } from '../assets/data';

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-emerald-500/10 text-emerald-500';

    case 'Pending':
      return 'bg-amber-500/10 text-amber-500';

    default:
      return 'bg-rose-500/10 text-rose-500';
  }
};

export default function TableSection() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredOrders = recentOrders.filter((order) => {
    const matchesFilter =
      filter === 'All' || order.status === filter;

    const matchesSearch =
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.product
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.id
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-5">
      {/* 1. Recent Orders Card */}
      <div className="p-5 md:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
          <div>
            <h3 className="text-lg font-bold dark:text-white">
              Recent Orders
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Latest transactions from customers
            </p>
          </div>

          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search orders..."
              className="w-full lg:w-48 pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {['All', 'Completed', 'Pending', 'Cancelled'].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`
                px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition
                ${
                  filter === item
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                <th className="pb-3 font-medium">Order</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Product</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
                >
                  <td className="py-4 font-medium text-indigo-500">
                    {order.id}
                  </td>
                  <td className="py-4">{order.customer}</td>
                  <td className="py-4 text-slate-500 dark:text-slate-400">
                    {order.product}
                  </td>
                  <td className="py-4 font-semibold">{order.amount}</td>
                  <td className="py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Top Products Card */}
      <div className="p-5 md:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
        <div className="mb-5">
          <h3 className="text-lg font-bold dark:text-white">
            Top Products
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Best performing products
          </p>
        </div>

        <div className="space-y-4">
          {topProducts.map((product) => {
            const isUp = product.trend === 'up';

            return (
              <div
                key={product.name}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50"
              >
                <div className="flex justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-sm dark:text-white truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {product.sales} sales
                    </p>
                  </div>
                  <span className="font-bold text-sm dark:text-white whitespace-nowrap">
                    {product.revenue}
                  </span>
                </div>

                <div className="flex items-center gap-1 mt-3 text-xs">
                  {isUp ? (
                    <ArrowUpRight size={14} className="text-emerald-500" />
                  ) : (
                    <ArrowDownRight size={14} className="text-rose-500" />
                  )}
                  <span className={isUp ? 'text-emerald-500' : 'text-rose-500'}>
                    {product.change}
                  </span>
                  <span className="text-slate-400">vs last month</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}