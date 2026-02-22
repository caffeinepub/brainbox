import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight } from 'lucide-react';
import { Subject } from '../../utils/subjectGenerator';

interface SubjectCardProps {
  subject: Subject;
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  const navigate = useNavigate();
  const progress = Math.floor(Math.random() * 100);

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
      onClick={() => navigate({ to: '/quiz/$subject', params: { subject: subject.id } })}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg ${subject.color} flex items-center justify-center text-2xl`}>
              {subject.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{subject.name}</h3>
              <p className="text-sm text-muted-foreground">{progress}% mastered</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground" />
        </div>
        <Progress value={progress} className="h-2" />
      </CardContent>
    </Card>
  );
}
