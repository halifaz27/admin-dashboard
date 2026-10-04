import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingBag,
  Settings,
  DollarSign,
  ShoppingCart,
  Eye,
  Package,
  UserPlus,
  CheckCircle,
} from 'lucide-react';

export const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    subMenu: [
      { id: 'overview', label: 'Overview' },
      { id: 'performance', label: 'Performance' },
    ],
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: Users,
    count: 24,
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: ShoppingBag,
    page: 'New',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
  },
];

export const statusData = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
    description: 'vs. last month',
    icon: DollarSign,
    color: 'text-emerald-500 bg-emerald-500/10',
    progress: 78,
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+15.2%',
    trend: 'up',
    description: 'vs. last month',
    icon: Users,
    color: 'text-blue-500 bg-blue-500/10',
    progress: 65,
  },
  {
    title: 'Total Orders',
    value: '12,234',
    change: '-4.5%',
    trend: 'down',
    description: 'vs. last month',
    icon: ShoppingCart,
    color: 'text-indigo-500 bg-indigo-500/10',
    progress: 45,
  },
  {
    title: 'Page Views',
    value: '324,120',
    change: '+12.4%',
    trend: 'up',
    description: 'vs. last month',
    icon: Eye,
    color: 'text-amber-500 bg-amber-500/10',
    progress: 82,
  },
];

export const revenueData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 5200, expenses: 3200 },
  { month: 'Apr', revenue: 4780, expenses: 2908 },
  { month: 'May', revenue: 5890, expenses: 3800 },
  { month: 'Jun', revenue: 6390, expenses: 4100 },
  { month: 'Jul', revenue: 7490, expenses: 4300 },
  { month: 'Aug', revenue: 6890, expenses: 3900 },
  { month: 'Sep', revenue: 7890, expenses: 4500 },
  { month: 'Oct', revenue: 8290, expenses: 4700 },
  { month: 'Nov', revenue: 8790, expenses: 4900 },
  { month: 'Dec', revenue: 9240, expenses: 5100 },
];

export const pieData = [
  {
    name: 'Direct Search',
    value: 400,
    color: '#6366f1',
  },
  {
    name: 'Social Media',
    value: 300,
    color: '#60a5fa',
  },
  {
    name: 'Referrals',
    value: 300,
    color: '#34d399',
  },
  {
    name: 'Organic Email',
    value: 200,
    color: '#fbbf24',
  },
];

export const recentOrders = [
  {
    id: '#ORD-001',
    customer: 'John Doe',
    product: 'Pro Laptop',
    amount: '$1,200',
    status: 'Completed',
    date: '2026-03-01',
  },
  {
    id: '#ORD-002',
    customer: 'Jane Smith',
    product: 'Wireless Mouse',
    amount: '$45',
    status: 'Pending',
    date: '2026-03-02',
  },
  {
    id: '#ORD-003',
    customer: 'Robert Johnson',
    product: 'HD Monitor',
    amount: '$300',
    status: 'Cancelled',
    date: '2026-03-02',
  },
  {
    id: '#ORD-004',
    customer: 'Emily Davis',
    product: 'USB-C Hub',
    amount: '$25',
    status: 'Completed',
    date: '2026-03-03',
  },
  {
    id: '#ORD-005',
    customer: 'Sarah Wilson',
    product: 'Mechanical Keyboard',
    amount: '$120',
    status: 'Completed',
    date: '2026-03-04',
  },
];

export const topProducts = [
  {
    name: 'MacBook Pro 16"',
    sales: '1,240',
    revenue: '$2,480,000',
    trend: 'up',
    change: '+12%',
  },
  {
    name: 'iPhone 15 Pro',
    sales: '2,100',
    revenue: '$2,100,000',
    trend: 'up',
    change: '+8%',
  },
  {
    name: 'AirPods Max',
    sales: '850',
    revenue: '$467,500',
    trend: 'down',
    change: '-3%',
  },
];

export const activities = [
  {
    id: 1,
    title: 'New order received',
    description: 'Order #ORD-005 placed by Sarah',
    time: '5 mins ago',
    icon: Package,
    bg: 'bg-blue-500/10',
    color: 'text-blue-500',
  },
  {
    id: 2,
    title: 'User registered',
    description: 'Michael created an account',
    time: '1 hour ago',
    icon: UserPlus,
    bg: 'bg-emerald-500/10',
    color: 'text-emerald-500',
  },
  {
    id: 3,
    title: 'System update completed',
    description: 'Dashboard v2.4 successfully deployed',
    time: '2 hours ago',
    icon: CheckCircle,
    bg: 'bg-purple-500/10',
    color: 'text-purple-500',
  },
];