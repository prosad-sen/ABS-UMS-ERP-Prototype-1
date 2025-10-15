import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import AchievementBadge from "@/components/gamification/achievement-badge";
import ProgressRing from "@/components/gamification/progress-ring";
import Leaderboard from "@/components/gamification/leaderboard";
import AnimatedInfoSlider from "@/components/ui/animated-info-slider";
import AWSLabSystem from "@/components/labs/aws-lab-system";
import DetailedStatsModal from "@/components/analytics/detailed-stats-modal";
import EnhancedSliderModal from "@/components/ui/enhanced-slider-modal";
import AIQuickActions from "@/components/ai/ai-quick-actions";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  BookOpen, 
  QrCode, 
  DollarSign,
  Sparkles,
  Flame,
  Star,
  X,
  Send,
  Crown,
  Zap,
  Instagram,
  Linkedin,
  Server,
  MessageSquare,
  Briefcase,
  Eye,
  BarChart3,
  FileText,
  Building,
  LogOut,
  Home
} from "lucide-react";
import UserWalkthrough from "@/components/onboarding/user-walkthrough";
import React from "react";

export default function Dashboard() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [showAIChat, setShowAIChat] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedDetailType, setSelectedDetailType] = useState<string>("");
  const [selectedDetailTitle, setSelectedDetailTitle] = useState<string>("");
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleLogout = () => {
    setLocation("/");
  };
  
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["/api/dashboard/stats"],
    enabled: !!user,
  });

  const { data: announcements, isLoading: announcementsLoading } = useQuery({
    queryKey: ["/api/announcements"],
    enabled: !!user,
  });

  if (statsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const userName = 'Student';
  
  // Check if onboarding should be shown
  React.useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('onboarding_completed');
    const hasSkippedOnboarding = localStorage.getItem('onboarding_skipped');
    
    if (!hasCompletedOnboarding && !hasSkippedOnboarding) {
      setTimeout(() => {
        setShowOnboarding(true);
      }, 1500);
    }
  }, []);

  const handleAiQuery = async () => {
    if (!aiMessage.trim()) return;
    
    setIsAiLoading(true);
    try {
      const response = await fetch('/api/ai/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: aiMessage,
          context: `Student dashboard query. User: ${userName}. Current academic status: Semester 4, CGPA 8.45, Computer Science Engineering.`
        })
      });
      
      const data = await response.json();
      setAiResponse(data.response || "I'm here to help with your university queries!");
      setAiMessage("");
    } catch (error) {
      setAiResponse("Sorry, I'm experiencing technical difficulties. Please try again later.");
    } finally {
      setIsAiLoading(false);
    }
  };

  // Student Dashboard Slider Content
  const studentSliderItems = [
    {
      id: "academic-progress",
      title: "Academic Excellence Journey",
      description: "Your CGPA has improved by 0.8 points this semester! Keep up the great work and maintain your position in the top 15% of your class.",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      stats: { value: "8.7", label: "Current CGPA", trend: "up" as const },
      action: { label: "View Detailed Report", onClick: () => {
        setSelectedDetailType("student-progress");
        setSelectedDetailTitle("Academic Excellence Journey");
        setShowDetailModal(true);
      }}
    },
    {
      id: "attendance",
      title: "Attendance Achievement Unlocked",
      description: "Congratulations! You've maintained 95%+ attendance for 3 consecutive months. This dedication will boost your internal assessment scores.",
      icon: Target,
      color: "text-green-600", 
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
      stats: { value: "96%", label: "This Month", trend: "up" as const },
      action: { label: "Check QR Scanner", onClick: () => {
        setSelectedDetailType("student-progress");
        setSelectedDetailTitle("Attendance Achievement Unlocked");
        setShowDetailModal(true);
      }}
    },
    {
      id: "aws-labs",
      title: "Cloud Computing Mastery",
      description: "You're leading in AWS Labs completion! 3 more modules to become a certified Cloud Computing specialist and unlock internship opportunities.",
      icon: Server,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-500", 
      stats: { value: "87%", label: "Labs Completed", trend: "up" as const },
      action: { label: "Continue Learning", onClick: () => window.location.href = '/labs' }
    },
    {
      id: "achievements",
      title: "Rising Star Recognition",
      description: "Your consistent performance earned you the 'Academic Champion' badge! You're now eligible for departmental scholarship and leadership programs.",
      icon: Crown,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      stats: { value: "12", label: "Badges Earned", trend: "up" as const },
      action: { label: "View All Achievements", onClick: () => {
        setSelectedDetailType("rising-star");
        setSelectedDetailTitle("Rising Star Recognition");
        setShowDetailModal(true);
      }}
    },
    {
      id: "upcoming-opportunities",
      title: "Exciting Opportunities Ahead",
      description: "Based on your profile, we've found 5 internship opportunities and 3 project collaborations that match your skills and interests perfectly.",
      icon: Sparkles,
      color: "text-indigo-600", 
      bgColor: "bg-gradient-to-r from-indigo-500 to-blue-500",
      stats: { value: "8", label: "New Opportunities", trend: "up" as const },
      action: { label: "Explore Now", onClick: () => {
        setSelectedDetailType("exciting-opportunities");
        setSelectedDetailTitle("Exciting Opportunities Ahead");
        setShowDetailModal(true);
      }}
    }
  ];

  const handleQuickQuery = async (query: string) => {
    setAiMessage(query);
    
    if (!query.trim()) return;
    
    setIsAiLoading(true);
    try {
      const response = await fetch('/api/ai/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: query,
          context: `Student dashboard query. User: ${userName}. Current academic status: Semester 4, CGPA 8.45, Computer Science Engineering.`
        })
      });
      
      const data = await response.json();
      setAiResponse(data.response || "I'm here to help with your university queries!");
      setAiMessage("");
    } catch (error) {
      setAiResponse("Sorry, I'm experiencing technical difficulties. Please try again later.");
    } finally {
      setIsAiLoading(false);
    }
  };

  // Enhanced leaderboard data with comprehensive stats
  const leaderboardData = [
    { rank: 1, studentId: "2025001", name: "Rahul Sharma", points: 1850, streak: 15, badge: 'gold' as const, cgpa: 9.2, attendance: 98, achievements: 12 },
    { rank: 2, studentId: "2025002", name: "Priya Patel", points: 1720, streak: 12, badge: 'silver' as const, cgpa: 8.8, attendance: 96, achievements: 10 },
    { rank: 3, studentId: "2025003", name: "Arjun Singh", points: 1690, streak: 8, badge: 'bronze' as const, cgpa: 8.9, attendance: 94, achievements: 8 },
    { rank: 4, studentId: "2025004", name: "Sneha Desai", points: 1580, streak: 5, badge: null, cgpa: 8.5, attendance: 92, achievements: 6 },
    { rank: 5, studentId: "2025005", name: "Vikram Joshi", points: 1520, streak: 3, badge: null, cgpa: 8.3, attendance: 88, achievements: 5 },
  ];

  return (
    <div className="px-2 sm:px-4 lg:px-8 pb-6 gradient-depth min-h-screen" style={{paddingTop: '0px', marginTop: '0px'}}>
      {/* Onboarding Walkthrough */}
      {showOnboarding && (
        <UserWalkthrough 
          userRole="Student"
          onComplete={() => setShowOnboarding(false)}
          onSkip={() => setShowOnboarding(false)}
        />
      )}
      
      {/* Dynamic Hero Section with Events - Mobile Responsive */}
      <div className="bg-gradient-to-br from-coep-blue via-blue-600 to-purple-600 rounded-xl p-4 sm:p-6 text-white relative overflow-hidden mb-4 sm:mb-6 card-hover animate-slide-up" data-testid="dashboard-hero">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="relative z-10">
          <div className="mb-4">
            <div style={{position: 'relative', width: '100%', minHeight: '80px'}}>
              <div style={{position: 'absolute', left: '0', top: '0', width: 'calc(100% - 200px)'}}>
                <h2 className="text-2xl lg:text-3xl font-bold animate-fade-in">🎉 Welcome back, {userName}!</h2>
                <p className="text-blue-100 mt-2 text-lg">Level 12 Champion • 7-day streak • Top 5% performer</p>
              </div>
              <div style={{position: 'absolute', right: '0', top: '0'}}>
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Back to Main
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex-1">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-sm font-medium">🚀 Upcoming: TechFest 2025 Hackathon</p>
                <p className="text-xs text-blue-200">Registration closes in 3 days • Win ₹1,00,000</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 rounded-lg p-3 text-center transform hover:scale-105 transition-transform">
                <Flame className="h-6 w-6 mx-auto mb-1 animate-bounce" />
                <p className="text-sm font-medium">7 Day Streak</p>
                <p className="text-xs text-blue-200">🔥 On Fire!</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center transform hover:scale-105 transition-transform">
                <Star className="h-6 w-6 mx-auto mb-1 animate-pulse" />
                <p className="text-sm font-medium">Level 12</p>
                <p className="text-xs text-blue-200">250 to Lv 13</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* University Social Media & Info Slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            <span>University Updates & Social Feed</span>
          </h2>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
              asChild
            >
              <a href="https://www.instagram.com/xyz_engineering" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4 mr-1" />
                Follow
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
              asChild
            >
              <a href="https://www.linkedin.com/school/xyz-engineering/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-1" />
                Connect
              </a>
            </Button>
          </div>
        </div>
        <AnimatedInfoSlider items={studentSliderItems} />
      </div>

      {/* Live Events & Activities Banner - Mobile Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div>
                <p className="font-semibold">🎯 CodeChef Contest</p>
                <p className="text-sm opacity-90">Live Now • 234 participating</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div>
                <p className="font-semibold">🤖 AI/ML Workshop</p>
                <p className="text-sm opacity-90">Tomorrow 2PM • Register now</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div>
                <p className="font-semibold">🏆 Sports Meet</p>
                <p className="text-sm opacity-90">This Weekend • 15 events</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Quick Stats Cards with Drill-down - Mobile Optimized */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-6">
        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => window.location.href = '/attendance'}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Attendance</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">85%</p>
                <Badge className="bg-green-100 text-green-800 text-xs mt-1">+5 XP today</Badge>
              </div>
              <QrCode className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
            </div>
            
            {/* Mini Analytics Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>This Week</span>
                <span className="text-green-600 font-medium">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-green-600 h-1 rounded-full" style={{width: '92%'}}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Missed: 2 classes</span>
                <span>Streak: 8 days</span>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 group-hover:bg-green-700">
              <Eye className="h-3 w-3 mr-1" />
              View Analytics
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => window.location.href = '/academics'}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">CGPA</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">8.4</p>
                <Badge className="bg-blue-100 text-blue-800 text-xs mt-1">Above Average</Badge>
              </div>
              <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
            </div>
            
            {/* Academic Performance Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Current Sem</span>
                <span className="text-blue-600 font-medium">8.7</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Best: 9.2</span>
                <span>Rank: 15/120</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-blue-600 h-1 rounded-full" style={{width: '84%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700">
              <BarChart3 className="h-3 w-3 mr-1" />
              Grade Analysis
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => window.location.href = '/lms'}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Assignments</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">12/15</p>
                <Badge className="bg-orange-100 text-orange-800 text-xs mt-1">3 pending</Badge>
              </div>
              <BookOpen className="h-6 w-6 lg:h-8 lg:w-8 text-orange-600" />
            </div>
            
            {/* Assignment Analytics Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Due This Week</span>
                <span className="text-orange-600 font-medium">3</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Submitted</span>
                <span>Pending</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-orange-600 h-1 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700 group-hover:bg-orange-700">
              <FileText className="h-3 w-3 mr-1" />
              Assignment Hub
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => window.location.href = '/student-placements'}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Placement Rate</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">87.3%</p>
                <Badge className="bg-green-100 text-green-800 text-xs mt-1">Top Companies</Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="p-1 hover:bg-blue-100"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://www.linkedin.com/school/xyz-engineering/', '_blank');
                }}
              >
                <Linkedin className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
              </Button>
            </div>
            
            {/* Placement Analytics Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Highest Package</span>
                <span className="text-green-600 font-medium">₹45 LPA</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Average: ₹12.5 LPA</span>
                <span>Offers: 423</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-green-600 h-1 rounded-full" style={{width: '87%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 group-hover:bg-green-700">
              <TrendingUp className="h-3 w-3 mr-1" />
              Career Portal
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Gamification Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5" />
              <span>Recent Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <AchievementBadge
              type="attendance"
              level="gold"
              title="Perfect Attendance"
              description="100% attendance for 30 days"
              earned={true}
            />
            <AchievementBadge
              type="academic"
              level="silver"
              title="Academic Excellence"
              description="Maintain CGPA above 8.0"
              earned={true}
            />
            <AchievementBadge
              type="assignment"
              level="bronze"
              title="Assignment Master"
              description="Submit 15 assignments on time"
              earned={false}
              progress={80}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span>Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <ProgressRing
                progress={75}
                size={120}
                strokeWidth={8}
                color="#3b82f6"
                backgroundColor="#e5e7eb"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">75%</div>
                  <div className="text-sm text-gray-600">Semester</div>
                </div>
              </ProgressRing>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Level 12 Student</span>
                <span>1,250 / 1,500 XP</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: '83%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Leaderboard
          title="Class Leaderboard"
          entries={leaderboardData}
          category="academic"
        />

        <AIQuickActions userRole="student" userName={userName} />
      </div>

      {/* AI Assistant Dialog */}
      <Dialog open={showAIChat} onOpenChange={setShowAIChat}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span>AI Assistant</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">
                Hi! I'm your University AI assistant. I can help you with:
              </p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Academic queries and course information</li>
                <li>• Attendance and grade summaries</li>
                <li>• Fee status and payment guidance</li>
                <li>• Library resources and research help</li>
              </ul>
            </div>
            
            {aiResponse && (
              <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800">{aiResponse}</p>
              </div>
            )}
            
            <div className="flex space-x-2">
              <Input
                placeholder="Ask me anything about your academics..."
                value={aiMessage}
                onChange={(e) => setAiMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAiQuery()}
                className="flex-1"
              />
              <Button 
                onClick={handleAiQuery}
                disabled={isAiLoading || !aiMessage.trim()}
                className="bg-coep-blue hover:bg-blue-700"
              >
                {isAiLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleQuickQuery("What are my upcoming assignments?")}
                className="text-xs"
              >
                Assignments
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleQuickQuery("Show my attendance summary")}
                className="text-xs"
              >
                Attendance
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleQuickQuery("What fees are pending?")}
                className="text-xs"
              >
                Fees
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dynamic Updates & Social Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardTitle className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span>Live Updates</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              <div className="p-4 border-b bg-red-50 hover:bg-red-100 transition-colors">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  <h4 className="font-semibold text-red-800">🚨 TechFest 2025 Registration Deadline</h4>
                </div>
                <p className="text-sm text-red-700 mt-1">Only 3 days left! Grand prize ₹1,00,000. Register now!</p>
                <p className="text-xs text-red-600 mt-1">Posted 15 mins ago • 234 registrations today</p>
              </div>
              
              <div className="p-4 border-b bg-green-50 hover:bg-green-100 transition-colors">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-green-800">🎯 CodeChef Contest Live</h4>
                </div>
                <p className="text-sm text-green-700 mt-1">University Team leading! Join now for bonus XP points.</p>
                <p className="text-xs text-green-600 mt-1">Live now • 234 participants</p>
              </div>
              
              <div className="p-4 border-b bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-blue-800">📚 New AI/ML Course Books</h4>
                </div>
                <p className="text-sm text-blue-700 mt-1">Latest AI/ML textbooks added to digital library. Download now!</p>
                <p className="text-xs text-blue-600 mt-1">2 hours ago • 89 downloads</p>
              </div>
              
              <div className="p-4 bg-purple-50 hover:bg-purple-100 transition-colors">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <h4 className="font-semibold text-purple-800">🏆 Placement Update</h4>
                </div>
                <p className="text-sm text-purple-700 mt-1">Google, Microsoft visits next week. Prepare for aptitude tests!</p>
                <p className="text-xs text-purple-600 mt-1">1 day ago • Practice tests available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-pink-600 text-white">
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span>Student Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              <div className="p-4 border-b hover:bg-yellow-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Rahul Sharma won Inter-College Coding Contest</p>
                    <p className="text-xs text-gray-600">First place in ACM ICPC Regional • +500 XP</p>
                  </div>
                  <span className="text-xs text-gray-500">2h ago</span>
                </div>
              </div>
              
              <div className="p-4 border-b hover:bg-green-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">CS Dept achieves 95% placement record</p>
                    <p className="text-xs text-gray-600">Highest in university history • Avg package ₹12 LPA</p>
                  </div>
                  <span className="text-xs text-gray-500">1d ago</span>
                </div>
              </div>
              
              <div className="p-4 border-b hover:bg-blue-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Research paper accepted at IEEE Conference</p>
                    <p className="text-xs text-gray-600">By Final Year students • International recognition</p>
                  </div>
                  <span className="text-xs text-gray-500">2d ago</span>
                </div>
              </div>
              
              <div className="p-4 hover:bg-purple-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Flame className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Start-up funded by alumni network</p>
                    <p className="text-xs text-gray-600">₹50 lakh seed funding • EdTech innovation</p>
                  </div>
                  <span className="text-xs text-gray-500">3d ago</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events Calendar */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>This Week's Events</span>
            </div>
            <Badge className="bg-white/20 text-white">5 Events</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800">🤖 AI/ML Workshop</h4>
              <p className="text-sm text-blue-700 mt-1">Hands-on with TensorFlow</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Tomorrow 2PM</span>
                <span className="text-xs text-blue-600">Lab 301</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800">🏆 Sports Tournament</h4>
              <p className="text-sm text-purple-700 mt-1">Cricket, Football, Badminton</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">This Weekend</span>
                <span className="text-xs text-purple-600">Sports Complex</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800">💼 Placement Drive</h4>
              <p className="text-sm text-green-700 mt-1">Google, Microsoft, Amazon</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Next Week</span>
                <span className="text-xs text-green-600">Auditorium</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Slider Modal */}
      <EnhancedSliderModal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title={selectedDetailTitle}
        type={selectedDetailType}
      />
      
      {/* Detailed Stats Modal */}
      <DetailedStatsModal
        isOpen={false}
        onClose={() => setShowDetailModal(false)}
        title={selectedDetailTitle}
        type={selectedDetailType as any}
        data={{}}
      />
    </div>
  );
}