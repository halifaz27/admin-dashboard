import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';

import { menuItems } from '../assets/data';

export default function Sidebar({
  collapsed,
  onToggle,
  currentPage,
  onPageChange,
}) {
  const [expandedItems, setExpandedItems] = useState(
    new Set(['analytics'])
  );

  const toggleExpand = (id) => {
    const newExpanded = new Set(expandedItems);

    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }

    setExpandedItems(newExpanded);
  };

  const handlePageChange = (id) => {
    onPageChange(id);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {!collapsed && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        className={`
          fixed lg:relative z-40
          h-screen
          bg-white dark:bg-slate-900
          border-r border-slate-200 dark:border-slate-800
          flex flex-col
          transition-all duration-300
          ${collapsed ? 'w-20' : 'w-72'}
          ${collapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          {!collapsed && (
            <div>
              <span className="font-bold text-xl bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                AdminPanel
              </span>

              <p className="text-[10px] text-slate-400 mt-0.5">
                Management System
              </p>
            </div>
          )}

          <button
            onClick={onToggle}
            aria-label="Toggle sidebar"
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {!collapsed && (
            <p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Main Menu
            </p>
          )}

          {menuItems.map((item) => {
            const Icon = item.icon;
            const hasSubMenu = Boolean(item.subMenu);
            const isExpanded = expandedItems.has(item.id);
            const isSelected = currentPage === item.id;

            return (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (hasSubMenu) {
                      toggleExpand(item.id);
                    } else {
                      handlePageChange(item.id);
                    }
                  }}
                  title={collapsed ? item.label : undefined}
                  className={`
                    w-full flex items-center justify-between
                    p-3 rounded-xl
                    text-sm font-medium
                    transition-all duration-200
                    ${
                      isSelected
                        ? 'bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }
                  `}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon size={20} className="shrink-0" />

                    {!collapsed && (
                      <span className="truncate">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {!collapsed && (
                    <div className="flex items-center gap-2">
                      {item.page && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                          {item.page}
                        </span>
                      )}

                      {item.count && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800">
                          {item.count}
                        </span>
                      )}

                      {hasSubMenu &&
                        (isExpanded ? (
                          <ChevronDown size={15} />
                        ) : (
                          <ChevronRight size={15} />
                        ))}
                    </div>
                  )}
                </button>

                {/* Submenu */}
                {!collapsed && hasSubMenu && isExpanded && (
                  <div className="ml-9 mt-1 space-y-1">
                    {item.subMenu.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handlePageChange(sub.id)}
                        className={`
                          w-full text-left
                          px-3 py-2
                          rounded-lg
                          text-sm
                          transition-colors
                          ${
                            currentPage === sub.id
                              ? 'text-indigo-500 bg-indigo-500/10'
                              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
                          }
                        `}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        {!collapsed && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="rounded-xl bg-linear-to-r from-indigo-500/10 to-purple-500/10 p-3">
              <p className="text-xs font-semibold dark:text-white">
                Pro Dashboard
              </p>
              <p className="text-[10px] text-slate-400 mt-1">
                System running smoothly
              </p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}