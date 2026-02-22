import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, ArrowRight } from 'lucide-react';

export default function OlympiadBanner() {
  const navigate = useNavigate();

  return (
    <Card className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/assets/generated/olympiad-banner.dim_800x200.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Trophy className="w-12 h-12" />
            <div>
              <h3 className="text-2xl font-black mb-1">Want to prepare for Olympiads?</h3>
              <p className="text-white/90">Take our diagnostic quiz and unlock advanced challenges!</p>
            </div>
          </div>
          <Button 
            size="lg"
            onClick={() => navigate({ to: '/olympiad' })}
            className="bg-white text-orange-600 hover:bg-yellow-300 hover:text-orange-700 font-bold"
          >
            Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
