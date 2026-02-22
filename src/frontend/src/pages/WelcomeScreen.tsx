import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Zap, Brain } from 'lucide-react';

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-electric-blue via-purple-600 to-lightning-yellow flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/assets/generated/brainbox-hero.dim_1200x600.png" 
            alt="BrainBox Hero" 
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-slide-up flex items-center justify-center gap-4 flex-wrap">
          Welcome to BrainBox! 
          <span className="inline-flex items-center gap-2">
            <Brain className="w-12 h-12 md:w-16 md:h-16 animate-bounce" />
            <Zap className="w-12 h-12 md:w-16 md:h-16 text-yellow-300 animate-pulse" />
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-4xl font-bold text-yellow-300 mb-12 animate-slide-up delay-200">
          Charge Your Brain. Unlock Your Game.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          onClick={() => navigate({ to: '/onboarding' })}
          className="text-2xl px-12 py-8 bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-900 font-black rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-slide-up delay-400"
        >
          Let's Start
          <Zap className="ml-3 w-8 h-8" />
        </Button>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
