import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Settings, Volume2, Type, Eye } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
          <Settings className="w-8 h-8" />
          Settings
        </h1>
        <p className="text-muted-foreground">Customize your learning experience</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="w-5 h-5" />
              Audio Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="background-music">Background Music</Label>
              <Switch id="background-music" />
            </div>
            <div className="space-y-2">
              <Label>Volume</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sound-effects">Sound Effects</Label>
              <Switch id="sound-effects" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Accessibility
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="text-to-speech">Text-to-Speech</Label>
              <Switch id="text-to-speech" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="dyslexia-font">Dyslexia-Friendly Font</Label>
              <Switch id="dyslexia-font" />
            </div>
            <div className="space-y-2">
              <Label>Font Size</Label>
              <Slider defaultValue={[16]} min={12} max={24} step={1} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="w-5 h-5" />
              Learning Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="offline-mode">Offline Mode</Label>
              <Switch id="offline-mode" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="low-data-mode">Low Data Mode</Label>
              <Switch id="low-data-mode" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
