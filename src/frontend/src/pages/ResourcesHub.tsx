import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, FileText, Layers, Video } from 'lucide-react';

export default function ResourcesHub() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
          <BookOpen className="w-8 h-8" />
          Learning Resources
        </h1>
        <p className="text-muted-foreground">Study notes, flashcards, and more to boost your learning</p>
      </div>

      <Tabs defaultValue="notes" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="notes">
            <FileText className="w-4 h-4 mr-2" />
            Notes
          </TabsTrigger>
          <TabsTrigger value="flashcards">
            <Layers className="w-4 h-4 mr-2" />
            Flashcards
          </TabsTrigger>
          <TabsTrigger value="summaries">
            <BookOpen className="w-4 h-4 mr-2" />
            Summaries
          </TabsTrigger>
          <TabsTrigger value="videos">
            <Video className="w-4 h-4 mr-2" />
            Videos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Study Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Interactive study notes coming soon!</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flashcards">
          <Card>
            <CardHeader>
              <CardTitle>Flashcards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Flashcard system coming soon!</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summaries">
          <Card>
            <CardHeader>
              <CardTitle>Quick Summaries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Summary cards coming soon!</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos">
          <Card>
            <CardHeader>
              <CardTitle>Concept Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Educational videos coming soon!</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
