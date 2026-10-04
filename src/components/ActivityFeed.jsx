import {
  ShoppingCart,
  UserPlus,
  Server,
  FileText,
  CreditCard,
  AlertCircle,
  Database,
  ShieldCheck,
  Star,
  Clock,
} from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'New order received',
    description: 'Order #ORD-005 placed by Sarah',
    time: '5 mins ago',
    icon: ShoppingCart,
    color: 'bg-indigo-500/10 text-indigo-500',
  },
  {
    id: 2,
    title: 'User registered',
    description: 'Michael created an account',
    time: '1 hour ago',
    icon: UserPlus,
    color: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    id: 3,
    title: 'System update completed',
    description: 'Dashboard v2.0 successfully deployed',
    time: '2 hours ago',
    icon: Server,
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    id: 4,
    title: 'Payment processed',
    description: 'Invoice #INV-2024 paid by John',
    time: '3 hours ago',
    icon: CreditCard,
    color: 'bg-teal-500/10 text-teal-500',
  },
  {
    id: 5,
    title: 'Log file generated',
    description: 'Weekly system report generated',
    time: '5 hours ago',
    icon: FileText,
    color: 'bg-amber-500/10 text-amber-500',
  },
  {
    id: 6,
    title: 'Database backup',
    description: 'Automatic daily backup completed',
    time: '8 hours ago',
    icon: Database,
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    id: 7,
    title: 'Security alert',
    description: 'Multiple failed login attempts detected',
    time: '12 hours ago',
    icon: AlertCircle,
    color: 'bg-rose-500/10 text-rose-500',
  },
  {
    id: 8,
    title: '2FA Enabled',
    description: 'Two-factor auth enabled by Alex',
    time: '1 day ago',
    icon: ShieldCheck,
    color: 'bg-cyan-500/10 text-cyan-500',
  },
  {
    id: 9,
    title: 'New product review',
    description: '5-star review received for Pro Laptop',
    time: '1 day ago',
    icon: Star,
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    id: 10,
    title: 'Maintenance scheduled',
    description: 'Server update planned for Sunday midnight',
    time: '2 days ago',
    icon: Clock,
    color: 'bg-slate-500/10 text-slate-500',
  },
];

export default function ActivityFeed() {
  return (
    <div className="p-5 md:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm h-full">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold dark:text-white">
            Recent Activity
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Latest system activity
          </p>
        </div>

        <button className="text-xs font-medium text-indigo-500 hover:text-indigo-600 transition-colors">
          View all
        </button>
      </div>

      <div className="flex flex-col space-y-3.5">
        {activities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <div
                className={`p-2.5 rounded-xl shrink-0 ${item.color}`}
              >
                <Icon size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-xs md:text-sm dark:text-white truncate">
                    {item.title}
                  </p>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap">
                    {item.time}
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}