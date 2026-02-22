import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Trophy } from 'lucide-react';

const badges = [
  { id: 'brain-starter', name: 'Brain Starter', image: '/assets/generated/badge-brain-starter.dim_256x256.png', unlocked: true },
  { id: 'energy-master', name: 'Energy Master', image: '/assets/generated/badge-energy-master.dim_256x256.png', unlocked: false },
  { id: 'streak-hero', name: '7-Day Streak Hero', image: '/assets/generated/badge-streak-hero.dim_256x256.png', unlocked: false },
  { id: 'math-wizard', name: 'Math Wizard', image: '/assets/generated/badge-math-wizard.dim_256x256.png', unlocked: false },
  { id: 'science-champ', name: 'Science Champ', image: '/assets/generated/badge-science-champ.dim_256x256.png', unlocked: false },
];

export default function AchievementShelf() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="w-5 h-5" />
          Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          <TooltipProvider>
            {badges.map((badge) => (
              <Tooltip key={badge.id}>
                <TooltipTrigger>
                  <div className={`aspect-square rounded-lg overflow-hidden ${!badge.unlocked && 'grayscale opacity-50'}`}>
                    <img src={badge.image} alt={badge.name} className="w-full h-full object-cover" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-medium">{badge.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {badge.unlocked ? 'Unlocked!' : 'Keep going!'}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
}
