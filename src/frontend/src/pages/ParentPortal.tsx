import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock, BarChart3, Settings } from 'lucide-react';

export default function ParentPortal() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
          <Users className="w-8 h-8" />
          Parent Portal
        </h1>
        <p className="text-muted-foreground">Monitor your child's progress and manage settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Progress Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">View detailed learning progress and achievements</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Screen Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Set daily time limits and break reminders</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Parental Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Manage safety settings and content filters</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
