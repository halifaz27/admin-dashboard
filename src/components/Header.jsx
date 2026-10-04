import { useState } from 'react';
import {
  Search,
  Bell,
  Sun,
  Moon,
  User,
  LogOut,
  Settings,
  Menu,
} from 'lucide-react';

export default function Header({
  isDark,
  onToggleDark,
  onOpenSidebar,
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="h-16 shrink-0 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 md:px-6 flex items-center justify-between sticky top-0 z-20">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Menu size={20} />
        </button>

        <div className="relative w-44 sm:w-64 md:w-96">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-full
              pl-10 pr-4 py-2
              text-sm
              bg-slate-100 dark:bg-slate-800
              border border-transparent
              focus:border-indigo-500
              rounded-xl
              outline-none
              transition
              dark:text-white
            "
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1 sm:gap-3">

        {/* Theme */}
        <button
          onClick={onToggleDark}
          aria-label="Toggle theme"
          className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          {isDark ? (
            <Sun size={20} className="text-amber-400" />
          ) : (
            <Moon size={20} />
          )}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 relative"
          >
            <Bell size={20} />

            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500 ring-2 ring-white dark:ring-slate-900" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
              <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold dark:text-white">
                    Notifications
                  </h3>

                  <span className="text-xs text-indigo-500">
                    3 new
                  </span>
                </div>
              </div>

              <div className="p-2">
                <div className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">
                  <p className="text-sm font-medium dark:text-white">
                    New order received
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Order #ORD-005 was placed.
                  </p>
                </div>

                <div className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">
                  <p className="text-sm font-medium dark:text-white">
                    New user registered
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Michael created an account.
                  </p>
                </div>

                <div className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">
                  <p className="text-sm font-medium dark:text-white">
                    System update
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Dashboard v2.4 deployed.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <div className="w-9 h-9 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
              AD
            </div>

            <div className="hidden md:block text-left">
              <h4 className="text-xs font-semibold dark:text-white">
                Admin User
              </h4>

              <p className="text-[10px] text-slate-400">
                Administrator
              </p>
            </div>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-2">
              <button className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <User size={17} />
                Profile
              </button>

              <button className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Settings size={17} />
                Settings
              </button>

              <div className="my-1 border-t border-slate-200 dark:border-slate-800" />

              <button className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-rose-500 hover:bg-rose-500/10">
                <LogOut size={17} />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}