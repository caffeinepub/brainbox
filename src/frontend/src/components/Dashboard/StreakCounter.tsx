import { useEffect } from 'react';
import { useStreak } from '../../hooks/useStreak';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export default function StreakCounter() {
  const { streak, updateStreak } = useStreak();

  useEffect(() => {
    updateStreak();
  }, [updateStreak]);

  return (
    <Card className="bg-gradient-to-br from-red-500 to-orange-600 text-white border-0 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-white">
          <Flame className="w-6 h-6" />
          Daily Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-5xl font-black">{streak}</span>
            <span className="text-xl">days</span>
          </div>
          <p className="text-sm text-white/90">
            {streak === 0 ? 'Start your streak today!' : 'Amazing consistency! 🔥'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
