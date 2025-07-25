import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
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
  Briefcase
} from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const [showAIChat, setShowAIChat] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedDetailType, setSelectedDetailType] = useState<string>("");
  const [selectedDetailTitle, setSelectedDetailTitle] = useState<string>("");
  
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
      action: { label: "View All Achievements", onClick: () => {} }
    },
    {
      id: "upcoming-opportunities",
      title: "Exciting Opportunities Ahead",
      description: "Based on your profile, we've found 5 internship opportunities and 3 project collaborations that match your skills and interests perfectly.",
      icon: Sparkles,
      color: "text-indigo-600", 
      bgColor: "bg-gradient-to-r from-indigo-500 to-blue-500",
      stats: { value: "8", label: "New Opportunities", trend: "up" as const },
      action: { label: "Explore Now", onClick: () => {} }
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
    { rank: 1, studentId: "2024001", name: "Rahul Sharma", points: 1850, streak: 15, badge: 'gold' as const, cgpa: 9.2, attendance: 98, achievements: 12 },
    { rank: 2, studentId: "2024002", name: "Priya Patel", points: 1720, streak: 12, badge: 'silver' as const, cgpa: 8.8, attendance: 96, achievements: 10 },
    { rank: 3, studentId: "2024003", name: "Arjun Singh", points: 1690, streak: 8, badge: 'bronze' as const, cgpa: 8.9, attendance: 94, achievements: 8 },
    { rank: 4, studentId: "2024004", name: "Sneha Desai", points: 1580, streak: 5, badge: null, cgpa: 8.5, attendance: 92, achievements: 6 },
    { rank: 5, studentId: "2024005", name: "Vikram Joshi", points: 1520, streak: 3, badge: null, cgpa: 8.3, attendance: 88, achievements: 5 },
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 min-h-screen">
      {/* Dynamic Hero Section with Events */}
      <div className="bg-gradient-to-br from-coep-blue via-blue-600 to-purple-600 rounded-xl p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold animate-fade-in">🎉 Welcome back, {userName}!</h2>
              <p className="text-blue-100 mt-2 text-lg">Level 12 Champion • 7-day streak • Top 5% performer</p>
              <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-sm font-medium">🚀 Upcoming: TechFest 2024 Hackathon</p>
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

      {/* COEP Social Media & Info Slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            <span>COEP Updates & Social Feed</span>
          </h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
              <Instagram className="h-4 w-4 mr-1" />
              Follow
            </Button>
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
              <Linkedin className="h-4 w-4 mr-1" />
              Connect
            </Button>
          </div>
        </div>
        <AnimatedInfoSlider items={studentSliderItems} />
      </div>

      {/* Live Events & Activities Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

      {/* Quick Stats Cards with Gamification */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <Card className="relative overflow-hidden">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Attendance</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">85%</p>
                <Badge className="bg-green-100 text-green-800 text-xs mt-1">+5 XP today</Badge>
              </div>
              <QrCode className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">CGPA</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">8.4</p>
                <Badge className="bg-blue-100 text-blue-800 text-xs mt-1">Above Average</Badge>
              </div>
              <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Assignments</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">12/15</p>
                <Badge className="bg-orange-100 text-orange-800 text-xs mt-1">3 pending</Badge>
              </div>
              <BookOpen className="h-6 w-6 lg:h-8 lg:w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => window.location.href = '/student-placements'}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Placement Rate</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">87.3%</p>
                <Badge className="bg-green-100 text-green-800 text-xs mt-1">View Details →</Badge>
              </div>
              <Briefcase className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
            </div>
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

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => window.location.href = '/attendance'}
            >
              <QrCode className="h-4 w-4 mr-2" />
              Scan QR for Attendance
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => window.location.href = '/academics'}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              View Assignments
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => window.location.href = '/fees'}
            >
              <DollarSign className="h-4 w-4 mr-2" />
              Pay Fees
            </Button>
            <Button 
              className="w-full justify-start bg-orange-600 text-white hover:bg-orange-700"
              onClick={() => window.location.href = '/labs'}
            >
              <Server className="h-4 w-4 mr-2" />
              AWS Cloud Labs
            </Button>
            <Button 
              className="w-full justify-start bg-purple-600 text-white hover:bg-purple-700"
              onClick={() => window.location.href = '/grievances'}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Voice Concerns
            </Button>
            <Button 
              className="w-full justify-start bg-coep-blue text-white hover:bg-blue-700"
              onClick={() => setShowAIChat(true)}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              AI Assistant
            </Button>
          </CardContent>
        </Card>

        {/* AWS Labs Widget */}
        <AWSLabSystem compact={true} />
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
                Hi! I'm your COEP AI assistant. I can help you with:
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
                  <h4 className="font-semibold text-red-800">🚨 TechFest 2024 Registration Deadline</h4>
                </div>
                <p className="text-sm text-red-700 mt-1">Only 3 days left! Grand prize ₹1,00,000. Register now!</p>
                <p className="text-xs text-red-600 mt-1">Posted 15 mins ago • 234 registrations today</p>
              </div>
              
              <div className="p-4 border-b bg-green-50 hover:bg-green-100 transition-colors">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-green-800">🎯 CodeChef Contest Live</h4>
                </div>
                <p className="text-sm text-green-700 mt-1">COEP Team leading! Join now for bonus XP points.</p>
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

      {/* Detailed Stats Modal */}
      <DetailedStatsModal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title={selectedDetailTitle}
        type={selectedDetailType as any}
        data={{}}
      />
    </div>
  );
}