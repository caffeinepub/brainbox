import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function QuizView() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">
      <Button variant="ghost" onClick={() => navigate({ to: '/dashboard' })} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Quiz Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Interactive quiz system with multiple question types will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
