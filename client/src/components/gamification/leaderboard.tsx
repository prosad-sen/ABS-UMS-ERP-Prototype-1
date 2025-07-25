import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  studentId: string;
  name: string;
  avatar?: string;
  points: number;
  streak: number;
  badge: 'gold' | 'silver' | 'bronze' | null;
}

interface LeaderboardProps {
  title: string;
  entries: LeaderboardEntry[];
  category: 'attendance' | 'academic' | 'participation';
}

const categoryIcons = {
  attendance: Trophy,
  academic: Award,
  participation: TrendingUp
};

const rankIcons = {
  1: Trophy,
  2: Medal,
  3: Award
};

const badgeColors = {
  gold: 'bg-yellow-500 text-white',
  silver: 'bg-gray-400 text-white',
  bronze: 'bg-amber-600 text-white'
};

export default function Leaderboard({ title, entries, category }: LeaderboardProps) {
  const CategoryIcon = categoryIcons[category];

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2">
          <CategoryIcon className="h-5 w-5 text-coep-blue" />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {entries.map((entry) => {
          const RankIcon = rankIcons[entry.rank as keyof typeof rankIcons];
          
          return (
            <div 
              key={entry.studentId}
              className={`flex items-center space-x-3 p-3 rounded-lg ${
                entry.rank <= 3 ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8">
                {entry.rank <= 3 && RankIcon ? (
                  <RankIcon className={`h-5 w-5 ${
                    entry.rank === 1 ? 'text-yellow-500' :
                    entry.rank === 2 ? 'text-gray-400' :
                    'text-amber-600'
                  }`} />
                ) : (
                  <span className="text-sm font-semibold text-gray-600">#{entry.rank}</span>
                )}
              </div>
              
              <Avatar className="h-10 w-10">
                <AvatarImage src={entry.avatar} alt={entry.name} />
                <AvatarFallback className="bg-coep-blue text-white text-sm">
                  {entry.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <p className="font-medium text-gray-900">{entry.name}</p>
                <p className="text-sm text-gray-600">ID: {entry.studentId}</p>
              </div>
              
              <div className="text-right space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-coep-blue">{entry.points}</span>
                  <span className="text-sm text-gray-500">pts</span>
                </div>
                {entry.streak > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    {entry.streak} day streak
                  </Badge>
                )}
              </div>
              
              {entry.badge && (
                <Badge className={`${badgeColors[entry.badge]} text-xs`}>
                  {entry.badge.toUpperCase()}
                </Badge>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}