import { useState, useEffect } from 'react';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export default function App() {
  // UBAH NILAI INITIAL STATE DI BARIS INI DARI false MENJADI true:
  const [collapsed, setCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Sidebar dibuat sticky h-screen agar penuh ke bawah */}
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        <Header
          isDark={isDark}
          onToggleDark={() => setIsDark(!isDark)}
          onOpenSidebar={() => setCollapsed(false)}
        />

        {/* Hanya bagian main ini yang scrollable */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {currentPage === 'dashboard' && <Dashboard />}

          {currentPage !== 'dashboard' && (
            <div className="min-h-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 text-2xl">
                  🚧
                </div>

                <h2 className="text-xl font-bold dark:text-white capitalize">
                  {currentPage}
                </h2>

                <p className="text-sm text-slate-400 mt-2">
                  This page is currently under construction.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}