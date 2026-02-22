import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Sparkles } from 'lucide-react';

export default function ContinueLearningButton() {
  const navigate = useNavigate();

  return (
    <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-bold text-lg">AI Suggestion</h3>
            </div>
            <p className="text-white/90">Time to revise Algebra! You're almost there.</p>
          </div>
          <Button 
            size="lg"
            onClick={() => navigate({ to: '/quiz/$subject', params: { subject: 'mathematics' } })}
            className="bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-900 font-bold"
          >
            <Brain className="w-5 h-5 mr-2" />
            Continue Learning
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
