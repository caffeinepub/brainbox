import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, Lock } from 'lucide-react';

const games = [
  { id: 'word-rush', name: 'Word Rush', image: '/assets/generated/minigame-word-rush.dim_256x256.png', unlocked: false },
  { id: 'math-blaster', name: 'Math Blaster', image: '/assets/generated/minigame-math-blaster.dim_256x256.png', unlocked: false },
  { id: 'science-snap', name: 'Science Snap', image: '/assets/generated/minigame-science-snap.dim_256x256.png', unlocked: false },
  { id: 'memory-grid', name: 'Memory Grid', image: '/assets/generated/minigame-memory-grid.dim_256x256.png', unlocked: false },
  { id: 'quiz-battle', name: 'Quiz Battle', image: '/assets/generated/minigame-quiz-battle.dim_256x256.png', unlocked: false },
];

export default function MiniGamesHub() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
          <Gamepad2 className="w-8 h-8" />
          Mini Games
        </h1>
        <p className="text-muted-foreground">Unlock fun educational games by earning energy!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card key={game.id} className={!game.unlocked ? 'opacity-75' : ''}>
            <CardHeader className="p-0">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center relative">
                <img src={game.image} alt={game.name} className="w-32 h-32 object-contain" />
                {!game.unlocked && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Lock className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-4">{game.name}</CardTitle>
              <Button className="w-full" disabled={!game.unlocked}>
                {game.unlocked ? 'Play Now' : 'Locked'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
