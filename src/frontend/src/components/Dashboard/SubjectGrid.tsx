import { useUserProfile } from '../../hooks/useUserProfile';
import { generateSubjects } from '../../utils/subjectGenerator';
import SubjectCard from './SubjectCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SubjectGrid() {
  const { profile } = useUserProfile();

  if (!profile) return null;

  const subjects = generateSubjects(profile.grade, profile.stream);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Your Subjects
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
