import { useEnergy } from '../../hooks/useEnergy';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Zap } from 'lucide-react';

export default function EnergyMeter() {
  const { energy } = useEnergy();
  const maxEnergy = 1000;
  const percentage = Math.min((energy / maxEnergy) * 100, 100);

  return (
    <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-white">
          <img src="/assets/generated/energy-icon.dim_128x128.png" alt="Energy" className="w-8 h-8" />
          Energy Meter
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-black">{energy}</span>
            <Zap className="w-8 h-8 animate-pulse" />
          </div>
          <Progress value={percentage} className="h-3 bg-white/30" />
          <p className="text-sm text-white/90">Keep learning to charge up!</p>
        </div>
      </CardContent>
    </Card>
  );
}
