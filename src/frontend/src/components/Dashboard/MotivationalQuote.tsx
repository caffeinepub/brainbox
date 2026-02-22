import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const quotes = [
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Learning is a treasure that will follow its owner everywhere.", author: "Chinese Proverb" },
  { text: "Education is the most powerful weapon you can use to change the world.", author: "Nelson Mandela" },
  { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
];

export default function MotivationalQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0">
      <CardContent className="p-6">
        <Quote className="w-8 h-8 mb-3 opacity-50" />
        <p className="text-lg font-medium mb-2 italic">"{quote.text}"</p>
        <p className="text-sm text-white/80">— {quote.author}</p>
      </CardContent>
    </Card>
  );
}
