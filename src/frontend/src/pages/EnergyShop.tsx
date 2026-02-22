import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Lock } from 'lucide-react';
import { useEnergy } from '../hooks/useEnergy';
import { toast } from 'sonner';

const shopItems = [
  { id: 'word-rush', name: 'Word Rush', image: '/assets/generated/minigame-word-rush.dim_256x256.png', cost: 100, type: 'game' },
  { id: 'math-blaster', name: 'Math Blaster', image: '/assets/generated/minigame-math-blaster.dim_256x256.png', cost: 100, type: 'game' },
  { id: 'science-snap', name: 'Science Snap', image: '/assets/generated/minigame-science-snap.dim_256x256.png', cost: 100, type: 'game' },
  { id: 'memory-grid', name: 'Memory Grid', image: '/assets/generated/minigame-memory-grid.dim_256x256.png', cost: 100, type: 'game' },
  { id: 'quiz-battle', name: 'Quiz Battle', image: '/assets/generated/minigame-quiz-battle.dim_256x256.png', cost: 150, type: 'game' },
];

export default function EnergyShop() {
  const { energy, spendEnergy } = useEnergy();

  const handlePurchase = (item: typeof shopItems[0]) => {
    if (spendEnergy(item.cost)) {
      toast.success(`${item.name} unlocked! 🎉`);
    } else {
      toast.error('Not enough energy!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
          <ShoppingBag className="w-8 h-8" />
          Energy Shop
        </h1>
        <p className="text-muted-foreground">Unlock amazing mini-games and rewards with your energy!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center">
                <img src={item.image} alt={item.name} className="w-32 h-32 object-contain" />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">{item.name}</CardTitle>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-yellow-600">{item.cost} ⚡</span>
                <Button 
                  onClick={() => handlePurchase(item)}
                  disabled={energy < item.cost}
                  className="gap-2"
                >
                  {energy < item.cost ? (
                    <>
                      <Lock className="w-4 h-4" />
                      Locked
                    </>
                  ) : (
                    'Unlock'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
