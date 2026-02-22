import { useNavigate } from '@tanstack/react-router';
import { useUserProfile } from '../hooks/useUserProfile';
import { useEnergy } from '../hooks/useEnergy';
import { useStreak } from '../hooks/useStreak';
import EnergyMeter from '../components/Dashboard/EnergyMeter';
import StreakCounter from '../components/Dashboard/StreakCounter';
import DailyGoalTracker from '../components/Dashboard/DailyGoalTracker';
import SubjectGrid from '../components/Dashboard/SubjectGrid';
import AchievementShelf from '../components/Dashboard/AchievementShelf';
import QuestsPanel from '../components/Dashboard/QuestsPanel';
import ContinueLearningButton from '../components/Dashboard/ContinueLearningButton';
import OlympiadBanner from '../components/Olympiad/OlympiadBanner';
import MotivationalQuote from '../components/Dashboard/MotivationalQuote';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Dashboard() {
  const { profile, isLoading } = useUserProfile();
  const { energy } = useEnergy();
  const { streak } = useStreak();

  if (isLoading) {
    return (
      <div className="space-y-6 p-6">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="p-8 text-center">
          <p className="text-lg">Please complete onboarding first</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-30 dark:opacity-20">
        <img 
          src="/assets/generated/dashboard-bg-light.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover dark:hidden"
        />
        <img 
          src="/assets/generated/dashboard-bg-dark.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover hidden dark:block"
        />
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Olympiad Banner */}
        <OlympiadBanner />

        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <EnergyMeter />
          <StreakCounter />
          <DailyGoalTracker />
        </div>

        {/* Continue Learning CTA */}
        <ContinueLearningButton />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Subjects */}
          <div className="lg:col-span-2 space-y-6">
            <SubjectGrid />
          </div>

          {/* Right Column - Quests & Achievements */}
          <div className="space-y-6">
            <QuestsPanel />
            <AchievementShelf />
            <MotivationalQuote />
          </div>
        </div>
      </div>
    </div>
  );
}
