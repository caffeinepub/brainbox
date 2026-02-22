import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Star, Target } from 'lucide-react';

export default function OlympiadHub() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
          <Trophy className="w-8 h-8 text-yellow-600" />
          Olympiad Preparation
        </h1>
        <p className="text-muted-foreground">Challenge yourself with advanced problems and compete at the highest level</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              What are Olympiads?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Olympiads are prestigious academic competitions that challenge students with advanced problems in subjects like Mathematics, Science, and more.
            </p>
            <ul className="space-y-2 list-disc list-inside text-sm">
              <li>Develop critical thinking and problem-solving skills</li>
              <li>Compete with top students nationally and internationally</li>
              <li>Gain recognition and boost college applications</li>
              <li>Access to advanced learning resources</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Target className="w-5 h-5" />
              Diagnostic Quiz
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/90">
              Take our 5-question diagnostic quiz to assess your current level and get personalized recommendations for Olympiad preparation.
            </p>
            <Button size="lg" className="w-full bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-900 font-bold">
              Start Diagnostic Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
