import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Star, 
  Flame, 
  Target, 
  Award, 
  Zap, 
  Crown, 
  Medal,
  Lock,
  CheckCircle,
  TrendingUp,
  Calendar,
  Users,
  BookOpen
} from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  category: 'academic' | 'attendance' | 'social' | 'special';
  unlockedDate?: string;
}

interface AchievementSystemProps {
  studentLevel: number;
  totalXP: number;
  nextLevelXP: number;
}

export default function AchievementSystem({ studentLevel, totalXP, nextLevelXP }: AchievementSystemProps) {
  const achievements: Achievement[] = [
    {
      id: 'perfect_attendance',
      title: 'Perfect Attendance',
      description: 'Attend 30 consecutive classes',
      icon: Target,
      progress: 28,
      maxProgress: 30,
      unlocked: false,
      points: 500,
      rarity: 'epic',
      category: 'attendance'
    },
    {
      id: 'academic_excellence',
      title: 'Academic Excellence',
      description: 'Maintain 9+ CGPA for one semester',
      icon: Trophy,
      progress: 8.4,
      maxProgress: 9.0,
      unlocked: false,
      points: 750,
      rarity: 'legendary',
      category: 'academic'
    },
    {
      id: 'coding_champion',
      title: 'Coding Champion',
      description: 'Win 3 coding competitions',
      icon: Crown,
      progress: 2,
      maxProgress: 3,
      unlocked: false,
      points: 600,
      rarity: 'epic',
      category: 'special'
    },
    {
      id: 'early_bird',
      title: 'Early Bird',
      description: 'Submit 10 assignments before deadline',
      icon: Star,
      progress: 10,
      maxProgress: 10,
      unlocked: true,
      points: 300,
      rarity: 'rare',
      category: 'academic',
      unlockedDate: '2024-03-15'
    },
    {
      id: 'knowledge_seeker',
      title: 'Knowledge Seeker',
      description: 'Borrow 20 books from library',
      icon: BookOpen,
      progress: 18,
      maxProgress: 20,
      unlocked: false,
      points: 200,
      rarity: 'common',
      category: 'academic'
    },
    {
      id: 'team_player',
      title: 'Team Player',
      description: 'Participate in 5 group projects',
      icon: Users,
      progress: 5,
      maxProgress: 5,
      unlocked: true,
      points: 250,
      rarity: 'common',
      category: 'social',
      unlockedDate: '2024-03-10'
    },
    {
      id: 'streak_master',
      title: 'Streak Master',
      description: 'Maintain 15-day login streak',
      icon: Flame,
      progress: 12,
      maxProgress: 15,
      unlocked: false,
      points: 150,
      rarity: 'common',
      category: 'attendance'
    },
    {
      id: 'exam_ace',
      title: 'Exam Ace',
      description: 'Score 85+ in all midterm exams',
      icon: Medal,
      progress: 4,
      maxProgress: 5,
      unlocked: false,
      points: 400,
      rarity: 'rare',
      category: 'academic'
    }
  ];

  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'academic': return <BookOpen className="h-4 w-4" />;
      case 'attendance': return <Calendar className="h-4 w-4" />;
      case 'social': return <Users className="h-4 w-4" />;
      case 'special': return <Zap className="h-4 w-4" />;
    }
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0);

  return (
    <div className="space-y-6">
      {/* Level Progress */}
      <Card className="overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold">Level {studentLevel}</h3>
              <p className="text-blue-100">Student Adventurer</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">{totalXP.toLocaleString()}</p>
              <p className="text-blue-100">Total XP</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to Level {studentLevel + 1}</span>
              <span>{totalXP - (studentLevel * 1000)} / {nextLevelXP} XP</span>
            </div>
            <Progress 
              value={((totalXP - (studentLevel * 1000)) / nextLevelXP) * 100} 
              className="h-3 bg-blue-800"
            />
          </div>
        </CardContent>
      </Card>

      {/* Achievement Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 mx-auto text-yellow-600 mb-2" />
            <p className="text-2xl font-bold">{unlockedCount}/{achievements.length}</p>
            <p className="text-sm text-gray-600">Achievements</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">{totalPoints}</p>
            <p className="text-sm text-gray-600">Achievement Points</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-gray-600">This Week</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Crown className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">#{Math.floor(Math.random() * 10) + 1}</p>
            <p className="text-sm text-gray-600">Class Rank</p>
          </CardContent>
        </Card>
      </div>

      {/* Achievement Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-yellow-600" />
            <span>Achievement Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              const progressPercentage = (achievement.progress / achievement.maxProgress) * 100;
              
              return (
                <Card 
                  key={achievement.id} 
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    achievement.unlocked 
                      ? 'border-green-300 bg-gradient-to-r from-green-50 to-emerald-50' 
                      : 'hover:border-gray-300'
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        achievement.unlocked 
                          ? 'bg-green-100' 
                          : progressPercentage > 80 
                            ? 'bg-yellow-100' 
                            : 'bg-gray-100'
                      }`}>
                        {achievement.unlocked ? (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        ) : progressPercentage > 80 ? (
                          <IconComponent className="h-6 w-6 text-yellow-600" />
                        ) : (
                          <Lock className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-semibold ${
                            achievement.unlocked ? 'text-green-800' : 'text-gray-800'
                          }`}>
                            {achievement.title}
                          </h4>
                          <div className="flex space-x-1">
                            <Badge className={getRarityColor(achievement.rarity)}>
                              {achievement.rarity}
                            </Badge>
                            {getCategoryIcon(achievement.category)}
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                        
                        {achievement.unlocked ? (
                          <div className="space-y-1">
                            <Badge className="bg-green-100 text-green-800">
                              <Trophy className="h-3 w-3 mr-1" />
                              +{achievement.points} XP
                            </Badge>
                            <p className="text-xs text-gray-500">
                              Unlocked on {achievement.unlockedDate}
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>
                                {typeof achievement.progress === 'number' && achievement.progress % 1 !== 0 
                                  ? achievement.progress.toFixed(1) 
                                  : achievement.progress
                                } / {achievement.maxProgress}
                              </span>
                            </div>
                            <Progress value={progressPercentage} className="h-2" />
                            <p className="text-xs text-gray-500">
                              Reward: +{achievement.points} XP
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Boost Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Target className="h-6 w-6 text-blue-600" />
              <span>Check Attendance</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <BookOpen className="h-6 w-6 text-green-600" />
              <span>Submit Assignment</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Users className="h-6 w-6 text-purple-600" />
              <span>Join Study Group</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}