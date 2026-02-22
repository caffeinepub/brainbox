import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, Clock, Target } from 'lucide-react';

export default function AnalyticsDashboard() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
          <BarChart3 className="w-8 h-8" />
          Performance Analytics
        </h1>
        <p className="text-muted-foreground">Track your progress and identify areas for improvement</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="w-4 h-4" />
              Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">87%</p>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Study Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12.5h</p>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">+15%</p>
            <p className="text-xs text-muted-foreground">Overall progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">234</p>
            <p className="text-xs text-muted-foreground">Answered this week</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Analytics Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Charts, graphs, and AI-powered insights will be available here to help you track your learning journey.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
