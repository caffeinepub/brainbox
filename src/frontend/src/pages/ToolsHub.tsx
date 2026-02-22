import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Target, BookMarked } from 'lucide-react';

export default function ToolsHub() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-black mb-2">Learning Tools</h1>
        <p className="text-muted-foreground">Organize your study schedule and track your goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Timetable Planner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Coming soon!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Exam Countdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Coming soon!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Goal Setting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Coming soon!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookMarked className="w-5 h-5" />
              Homework Reminders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Coming soon!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
