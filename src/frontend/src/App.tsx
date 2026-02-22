import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import WelcomeScreen from './pages/WelcomeScreen';
import OnboardingFlow from './pages/OnboardingFlow';
import Dashboard from './pages/Dashboard';
import QuizView from './pages/QuizView';
import EnergyShop from './pages/EnergyShop';
import ResourcesHub from './pages/ResourcesHub';
import ToolsHub from './pages/ToolsHub';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import OlympiadHub from './pages/OlympiadHub';
import MiniGamesHub from './pages/MiniGamesHub';
import ParentPortal from './pages/ParentPortal';
import SettingsPage from './pages/SettingsPage';
import AppLayout from './components/Layout/AppLayout';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

function RootComponent() {
  const { identity } = useInternetIdentity();
  
  if (!identity) {
    return <Outlet />;
  }
  
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

const rootRoute = createRootRoute({
  component: RootComponent,
});

const welcomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: WelcomeScreen,
});

const onboardingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/onboarding',
  component: OnboardingFlow,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
});

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz/$subject',
  component: QuizView,
});

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/shop',
  component: EnergyShop,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  component: ResourcesHub,
});

const toolsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools',
  component: ToolsHub,
});

const analyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/analytics',
  component: AnalyticsDashboard,
});

const olympiadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/olympiad',
  component: OlympiadHub,
});

const miniGamesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/minigames',
  component: MiniGamesHub,
});

const parentPortalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/parent-portal',
  component: ParentPortal,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: SettingsPage,
});

const routeTree = rootRoute.addChildren([
  welcomeRoute,
  onboardingRoute,
  dashboardRoute,
  quizRoute,
  shopRoute,
  resourcesRoute,
  toolsRoute,
  analyticsRoute,
  olympiadRoute,
  miniGamesRoute,
  parentPortalRoute,
  settingsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
