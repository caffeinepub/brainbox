import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grade, EducationalSystem, Stream } from '../backend';
import { useUserProfile } from '../hooks/useUserProfile';
import { Brain, Zap, ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const grades = [
  { value: 'grade1', label: 'Grade 1' },
  { value: 'grade2', label: 'Grade 2' },
  { value: 'grade3', label: 'Grade 3' },
  { value: 'grade4', label: 'Grade 4' },
  { value: 'grade5', label: 'Grade 5' },
  { value: 'grade6', label: 'Grade 6' },
  { value: 'grade7', label: 'Grade 7' },
  { value: 'grade8', label: 'Grade 8' },
  { value: 'grade9', label: 'Grade 9' },
  { value: 'grade10', label: 'Grade 10' },
  { value: 'grade11', label: 'Grade 11' },
  { value: 'grade12', label: 'Grade 12' },
];

const educationalSystems = [
  { value: 'cbse', label: 'CBSE' },
  { value: 'icse', label: 'ICSE' },
  { value: 'stateBoard', label: 'State Board' },
  { value: 'ib', label: 'IB' },
  { value: 'igcse', label: 'IGCSE' },
  { value: 'other', label: 'Other' },
];

const streams = [
  { value: 'science', label: 'Science' },
  { value: 'commerce', label: 'Commerce' },
  { value: 'humanities', label: 'Humanities' },
];

export default function OnboardingFlow() {
  const navigate = useNavigate();
  const { createProfile, isCreating } = useUserProfile();
  const [step, setStep] = useState(1);
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedSystem, setSelectedSystem] = useState<EducationalSystem | null>(null);
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);

  const needsStream = selectedGrade === 'grade11' || selectedGrade === 'grade12';

  const handleNext = () => {
    if (step === 1 && !selectedGrade) {
      toast.error('Please select your grade');
      return;
    }
    if (step === 2 && !selectedSystem) {
      toast.error('Please select your educational system');
      return;
    }
    if (step === 3 && needsStream && !selectedStream) {
      toast.error('Please select your stream');
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3 && !needsStream) {
      handleComplete();
    }
  };

  const handleComplete = async () => {
    if (!selectedGrade || !selectedSystem) {
      toast.error('Please complete all required fields');
      return;
    }

    if (needsStream && !selectedStream) {
      toast.error('Please select your stream');
      return;
    }

    try {
      await createProfile(selectedGrade, selectedSystem, needsStream ? selectedStream : null);
      toast.success('Profile created successfully! 🎉');
      navigate({ to: '/dashboard' });
    } catch (error) {
      toast.error('Failed to create profile. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-10 h-10 text-purple-600" />
            <CardTitle className="text-3xl font-black">Let's Get Started!</CardTitle>
            <Zap className="w-10 h-10 text-yellow-500" />
          </div>
          <CardDescription className="text-lg">
            Tell us about yourself so we can personalize your learning journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  s === step ? 'w-12 bg-purple-600' : s < step ? 'w-8 bg-green-500' : 'w-8 bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Step 1: Grade Selection */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-bold text-center">What grade are you in?</h3>
              <Select value={selectedGrade || ''} onValueChange={(value) => setSelectedGrade(value as Grade)}>
                <SelectTrigger className="w-full text-lg py-6">
                  <SelectValue placeholder="Select your grade" />
                </SelectTrigger>
                <SelectContent>
                  {grades.map((grade) => (
                    <SelectItem key={grade.value} value={grade.value} className="text-lg">
                      {grade.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Step 2: Educational System */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-bold text-center">Which educational system do you follow?</h3>
              <Select value={selectedSystem || ''} onValueChange={(value) => setSelectedSystem(value as EducationalSystem)}>
                <SelectTrigger className="w-full text-lg py-6">
                  <SelectValue placeholder="Select your educational system" />
                </SelectTrigger>
                <SelectContent>
                  {educationalSystems.map((system) => (
                    <SelectItem key={system.value} value={system.value} className="text-lg">
                      {system.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Step 3: Stream Selection (for Grade 11-12) */}
          {step === 3 && needsStream && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-bold text-center">Choose your stream</h3>
              <Select value={selectedStream || ''} onValueChange={(value) => setSelectedStream(value as Stream)}>
                <SelectTrigger className="w-full text-lg py-6">
                  <SelectValue placeholder="Select your stream" />
                </SelectTrigger>
                <SelectContent>
                  {streams.map((stream) => (
                    <SelectItem key={stream.value} value={stream.value} className="text-lg">
                      {stream.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button
              onClick={step === 3 ? handleComplete : handleNext}
              disabled={isCreating}
              className="gap-2 bg-purple-600 hover:bg-purple-700"
            >
              {isCreating ? 'Creating...' : step === 3 ? 'Complete' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
