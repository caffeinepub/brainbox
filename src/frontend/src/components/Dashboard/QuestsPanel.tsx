import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Circle } from 'lucide-react';

const dailyQuests = [
  { id: 1, title: 'Answer 10 questions', progress: 7, target: 10, reward: 50 },
  { id: 2, title: 'Study for 30 minutes', progress: 15, target: 30, reward: 30 },
  { id: 3, title: 'Complete 1 quiz', progress: 0, target: 1, reward: 20 },
];

export default function QuestsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Daily Quests</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {dailyQuests.map((quest) => {
          const percentage = (quest.progress / quest.target) * 100;
          const isComplete = percentage >= 100;

          return (
            <div key={quest.id} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  {isComplete ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium text-sm">{quest.title}</p>
                    <p className="text-xs text-muted-foreground">+{quest.reward} energy</p>
                  </div>
                </div>
                <span className="text-xs font-medium">{quest.progress}/{quest.target}</span>
              </div>
              <Progress value={percentage} className="h-1.5" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
