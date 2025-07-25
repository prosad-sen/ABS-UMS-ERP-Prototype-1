import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Target, BookOpen, Clock } from "lucide-react";

interface AchievementBadgeProps {
  type: 'attendance' | 'academic' | 'participation' | 'assignment' | 'reading' | 'punctuality';
  level: 'bronze' | 'silver' | 'gold' | 'platinum';
  title: string;
  description: string;
  earned?: boolean;
  progress?: number;
}

const badgeIcons = {
  attendance: Target,
  academic: Trophy,
  participation: Star,
  assignment: Award,
  reading: BookOpen,
  punctuality: Clock
};

const badgeColors = {
  bronze: 'bg-amber-600 text-white',
  silver: 'bg-gray-400 text-white',
  gold: 'bg-yellow-500 text-white',
  platinum: 'bg-purple-600 text-white'
};

export default function AchievementBadge({ 
  type, 
  level, 
  title, 
  description, 
  earned = false, 
  progress = 0 
}: AchievementBadgeProps) {
  const Icon = badgeIcons[type];
  const colorClass = badgeColors[level];

  return (
    <div className={`relative p-4 rounded-lg border-2 ${earned ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'} transition-all hover:shadow-md`}>
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-full ${earned ? colorClass : 'bg-gray-300 text-gray-500'}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${earned ? 'text-green-800' : 'text-gray-600'}`}>
            {title}
          </h3>
          <p className="text-sm text-gray-600">
            {description}
          </p>
          {!earned && progress > 0 && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{progress}% complete</p>
            </div>
          )}
        </div>
      </div>
      {earned && (
        <Badge className="absolute top-2 right-2 bg-green-600 text-white text-xs">
          Earned!
        </Badge>
      )}
    </div>
  );
}