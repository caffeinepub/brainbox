import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target } from 'lucide-react';

export default function DailyGoalTracker() {
  const questionsAnswered = 12;
  const dailyGoal = 20;
  const percentage = (questionsAnswered / dailyGoal) * 100;

  return (
    <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-white">
          <Target className="w-6 h-6" />
          Daily Goal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">{questionsAnswered}/{dailyGoal}</span>
            <span className="text-sm">questions</span>
          </div>
          <Progress value={percentage} className="h-3 bg-white/30" />
          <p className="text-sm text-white/90">
            {percentage >= 100 ? 'Goal achieved! 🎉' : `${dailyGoal - questionsAnswered} more to go!`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
