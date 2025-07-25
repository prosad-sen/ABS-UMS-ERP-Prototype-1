import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import AchievementBadge from "@/components/gamification/achievement-badge";
import ProgressRing from "@/components/gamification/progress-ring";
import Leaderboard from "@/components/gamification/leaderboard";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  BookOpen, 
  QrCode, 
  DollarSign,
  Sparkles,
  Flame,
  Star
} from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  
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

  const userName = user?.firstName 
    ? `${user.firstName} ${user.lastName || ''}`.trim()
    : user?.email?.split('@')[0] || 'Student';

  // Mock leaderboard data
  const leaderboardData = [
    { rank: 1, studentId: "2024001", name: "Rahul Sharma", points: 1850, streak: 15, badge: 'gold' as const },
    { rank: 2, studentId: "2024002", name: "Priya Patel", points: 1720, streak: 12, badge: 'silver' as const },
    { rank: 3, studentId: "2024003", name: "Arjun Singh", points: 1690, streak: 8, badge: 'bronze' as const },
    { rank: 4, studentId: "2024004", name: "Sneha Desai", points: 1580, streak: 5, badge: null },
    { rank: 5, studentId: "2024005", name: "Vikram Joshi", points: 1520, streak: 3, badge: null },
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6">
      {/* Welcome Section with Gamification */}
      <div className="bg-gradient-to-r from-coep-blue to-blue-600 rounded-lg p-6 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">Welcome back, {userName}!</h2>
            <p className="text-blue-100 mt-2">You're doing great! Keep up the momentum.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <Flame className="h-6 w-6 mx-auto mb-1" />
              <p className="text-sm font-medium">7 Day Streak</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <Star className="h-6 w-6 mx-auto mb-1" />
              <p className="text-sm font-medium">Level 12</p>
            </div>
          </div>
        </div>
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

        <Card className="relative overflow-hidden">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">XP Points</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">1,250</p>
                <Badge className="bg-yellow-100 text-yellow-800 text-xs mt-1">250 to next level</Badge>
              </div>
              <Sparkles className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gamification Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-600" />
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
            <Button className="w-full justify-start" variant="outline">
              <QrCode className="h-4 w-4 mr-2" />
              Scan QR for Attendance
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              View Assignments
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <DollarSign className="h-4 w-4 mr-2" />
              Pay Fees
            </Button>
            <Button className="w-full justify-start bg-coep-blue text-white hover:bg-blue-700">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Assistant
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Announcements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-coep-blue pl-4">
              <h4 className="font-semibold">Mid-semester exams starting from March 15th</h4>
              <p className="text-sm text-gray-600">All students are requested to check the exam schedule on the academics portal.</p>
              <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">New library books available</h4>
              <p className="text-sm text-gray-600">Latest editions of computer science and engineering books have been added to the library.</p>
              <p className="text-xs text-gray-500 mt-1">1 day ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}