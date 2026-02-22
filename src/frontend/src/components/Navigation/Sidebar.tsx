import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Brain, Home, BookOpen, ShoppingBag, Wrench, BarChart3, Trophy, Gamepad2, Users, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: BookOpen, label: 'Resources', path: '/resources' },
  { icon: ShoppingBag, label: 'Shop', path: '/shop' },
  { icon: Gamepad2, label: 'Mini Games', path: '/minigames' },
  { icon: Wrench, label: 'Tools', path: '/tools' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Trophy, label: 'Olympiad', path: '/olympiad' },
  { icon: Users, label: 'Parent Portal', path: '/parent-portal' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <aside className="hidden md:flex w-64 bg-card border-r border-border flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-600" />
          <span className="text-2xl font-black">BrainBox</span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate({ to: item.path })}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'hover:bg-accent text-foreground'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
