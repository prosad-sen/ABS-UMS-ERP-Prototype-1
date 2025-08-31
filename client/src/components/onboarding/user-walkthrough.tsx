import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, ArrowLeft, ArrowRight, Star, CheckCircle2, Target, Zap } from 'lucide-react';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  target: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  icon: React.ReactNode;
  action?: string;
}

interface UserWalkthroughProps {
  userRole: string;
  onComplete: () => void;
  onSkip: () => void;
}

export default function UserWalkthrough({ userRole, onComplete, onSkip }: UserWalkthroughProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const getStepsForRole = (role: string): OnboardingStep[] => {
    const commonSteps = [
      {
        id: 'welcome',
        title: `Welcome to COEP UMS, ${role}!`,
        description: `Let's take a quick tour of your personalized ${role.toLowerCase()} portal and discover all the features available to you.`,
        target: '.header',
        position: 'bottom' as const,
        icon: <Star className="w-5 h-5 text-yellow-500" />,
        action: 'Get started with your tour'
      }
    ];

    const roleSpecificSteps: Record<string, OnboardingStep[]> = {
      student: [
        {
          id: 'dashboard',
          title: 'Your Personal Dashboard',
          description: 'Here you can see your academic progress, upcoming assignments, attendance streak, and achievement badges. The dashboard is gamified to make learning more engaging!',
          target: '[data-testid="dashboard-hero"]',
          position: 'bottom' as const,
          icon: <Target className="w-5 h-5 text-blue-500" />
        },
        {
          id: 'academics',
          title: 'Academic Management',
          description: 'Access your courses, view grades, submit assignments, and track your academic performance. Everything you need for your studies is here.',
          target: '[data-testid="nav-academics"]',
          position: 'right' as const,
          icon: <CheckCircle2 className="w-5 h-5 text-green-500" />
        },
        {
          id: 'attendance',
          title: 'Attendance Tracking',
          description: 'Monitor your attendance with our advanced CCTV-based photo attendance system. Maintain your streak and earn achievement badges!',
          target: '[data-testid="nav-attendance"]',
          position: 'right' as const,
          icon: <Zap className="w-5 h-5 text-orange-500" />
        },
        {
          id: 'fees',
          title: 'Fee Management',
          description: 'View and pay your fees online, check payment history, and apply for scholarships through our integrated government scholarship API.',
          target: '[data-testid="nav-fees"]',
          position: 'right' as const,
          icon: <CheckCircle2 className="w-5 h-5 text-purple-500" />
        }
      ],
      faculty: [
        {
          id: 'dashboard',
          title: 'Faculty Dashboard',
          description: 'Your command center for managing classes, viewing student progress, and accessing teaching resources. Stay on top of your academic responsibilities.',
          target: '[data-testid="dashboard-hero"]',
          position: 'bottom' as const,
          icon: <Target className="w-5 h-5 text-blue-500" />
        },
        {
          id: 'academics',
          title: 'Academic Management',
          description: 'Manage your courses, create assignments, grade submissions, and track student performance with advanced analytics.',
          target: '[data-testid="nav-academics"]',
          position: 'right' as const,
          icon: <CheckCircle2 className="w-5 h-5 text-green-500" />
        },
        {
          id: 'attendance',
          title: 'Attendance Management',
          description: 'Mark attendance using our photo-based system, generate reports, and monitor student participation patterns.',
          target: '[data-testid="nav-attendance"]',
          position: 'right' as const,
          icon: <Zap className="w-5 h-5 text-orange-500" />
        },
        {
          id: 'research',
          title: 'Research Portal',
          description: 'Access research management tools, track publications, manage projects, and collaborate with colleagues.',
          target: '[data-testid="nav-research"]',
          position: 'right' as const,
          icon: <CheckCircle2 className="w-5 h-5 text-purple-500" />
        }
      ],
      admin: [
        {
          id: 'dashboard',
          title: 'Administrator Dashboard',
          description: 'Your comprehensive control panel for managing university operations, viewing analytics, and overseeing all academic and administrative functions.',
          target: '[data-testid="dashboard-hero"]',
          position: 'bottom' as const,
          icon: <Target className="w-5 h-5 text-blue-500" />
        },
        {
          id: 'student-records',
          title: 'Student Records Management',
          description: 'Access complete student information, academic records, and administrative tools for student lifecycle management.',
          target: '[data-testid="nav-student-records"]',
          position: 'right' as const,
          icon: <CheckCircle2 className="w-5 h-5 text-green-500" />
        },
        {
          id: 'analytics',
          title: 'Management Analytics',
          description: 'Powerful business intelligence tools with pivot tables, AI-powered insights, and comprehensive reporting for data-driven decisions.',
          target: '[data-testid="nav-analytics"]',
          position: 'right' as const,
          icon: <Zap className="w-5 h-5 text-orange-500" />
        },
        {
          id: 'hr-management',
          title: 'HR Management System',
          description: 'Complete human resource management including faculty records, payroll, performance tracking, and recruitment.',
          target: '[data-testid="nav-hr-management"]',
          position: 'right' as const,
          icon: <CheckCircle2 className="w-5 h-5 text-purple-500" />
        }
      ]
    };

    return [...commonSteps, ...(roleSpecificSteps[role.toLowerCase()] || [])];
  };

  const steps = getStepsForRole(userRole);
  const currentStepData = steps[currentStep];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
      // Store completion in localStorage
      localStorage.setItem('onboarding_completed', 'true');
      localStorage.setItem('onboarding_role', userRole);
    }, 300);
  };

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      onSkip();
      localStorage.setItem('onboarding_skipped', 'true');
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300" />
      
      {/* Walkthrough Card */}
      <div className="fixed z-[70] transition-all duration-300 ease-out transform">
        <Card className="w-80 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-coep-blue via-blue-600 to-purple-600 p-4 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {currentStepData?.icon}
                    <Badge className="bg-white/20 text-white border-white/30">
                      Step {currentStep + 1} of {steps.length}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSkip}
                    className="text-white hover:bg-white/20 h-6 w-6 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="text-lg font-bold">{currentStepData?.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {currentStepData?.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-coep-blue to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>

                <div className="flex gap-2">
                  {currentStep === steps.length - 1 ? (
                    <Button
                      onClick={handleComplete}
                      size="sm"
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Get Started
                    </Button>
                  ) : (
                    <Button
                      onClick={nextStep}
                      size="sm"
                      className="bg-gradient-to-r from-coep-blue to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center gap-2"
                    >
                      {currentStepData?.action || 'Next'}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step Indicators */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[70]">
        <div className="flex gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'bg-white scale-125'
                  : index < currentStep
                  ? 'bg-green-400'
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}