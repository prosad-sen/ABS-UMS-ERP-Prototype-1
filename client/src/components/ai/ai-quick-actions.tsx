import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AIAssistant from "./ai-assistant";
import { 
  Bot, 
  Zap, 
  BookOpen, 
  BarChart3, 
  Users, 
  Calculator,
  TrendingUp,
  Lightbulb
} from "lucide-react";

interface AIQuickActionsProps {
  userRole: string;
  userName?: string;
}

export default function AIQuickActions({ userRole, userName }: AIQuickActionsProps) {
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const getQuickActions = () => {
    switch (userRole) {
      case 'student':
        return [
          { 
            title: "Course Recommendations", 
            icon: <BookOpen className="h-4 w-4" />, 
            action: "What courses should I take next semester based on my academic progress?",
            color: "bg-blue-500"
          },
          { 
            title: "Grade Analysis", 
            icon: <BarChart3 className="h-4 w-4" />, 
            action: "Analyze my academic performance and suggest improvement strategies",
            color: "bg-green-500"
          },
          { 
            title: "Study Planner", 
            icon: <Lightbulb className="h-4 w-4" />, 
            action: "Help me create an optimal study schedule for my current courses",
            color: "bg-purple-500"
          }
        ];
      
      case 'faculty':
        return [
          { 
            title: "Student Analytics", 
            icon: <Users className="h-4 w-4" />, 
            action: "Show me students who might need academic support in my courses",
            color: "bg-orange-500"
          },
          { 
            title: "Auto Grading", 
            icon: <Calculator className="h-4 w-4" />, 
            action: "Help me set up automated grading for my latest assignment",
            color: "bg-red-500"
          },
          { 
            title: "Curriculum Insights", 
            icon: <BookOpen className="h-4 w-4" />, 
            action: "Analyze my course curriculum and suggest improvements for better learning outcomes",
            color: "bg-teal-500"
          }
        ];
      
      case 'admin':
        return [
          { 
            title: "Enrollment Forecasting", 
            icon: <TrendingUp className="h-4 w-4" />, 
            action: "What are the enrollment predictions for the next academic year?",
            color: "bg-indigo-500"
          },
          { 
            title: "Budget Analytics", 
            icon: <Calculator className="h-4 w-4" />, 
            action: "Analyze our current budget efficiency and suggest optimization strategies",
            color: "bg-green-600"
          },
          { 
            title: "Performance KPIs", 
            icon: <BarChart3 className="h-4 w-4" />, 
            action: "Show me key performance indicators and institutional effectiveness metrics",
            color: "bg-blue-600"
          }
        ];
      
      default:
        return [
          { 
            title: "General Help", 
            icon: <Bot className="h-4 w-4" />, 
            action: "How can I best use this university management system?",
            color: "bg-gray-500"
          }
        ];
    }
  };

  const quickActions = getQuickActions();

  return (
    <>
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Bot className="h-5 w-5 text-blue-600" />
            <span>AI Assistant</span>
            <Badge variant="secondary" className="ml-2">
              <Zap className="h-3 w-3 mr-1" />
              Smart
            </Badge>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Get intelligent insights and personalized assistance powered by AI
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 gap-2">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-3 text-left justify-start hover:shadow-md transition-all"
                onClick={() => setShowAIAssistant(true)}
              >
                <div className={`p-2 rounded-full ${action.color} text-white mr-3`}>
                  {action.icon}
                </div>
                <div>
                  <p className="font-medium text-sm">{action.title}</p>
                  <p className="text-xs text-gray-500 truncate">{action.action}</p>
                </div>
              </Button>
            ))}
          </div>
          
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => setShowAIAssistant(true)}
          >
            <Bot className="h-4 w-4 mr-2" />
            Open AI Assistant
          </Button>
        </CardContent>
      </Card>

      <AIAssistant
        isOpen={showAIAssistant}
        onClose={() => setShowAIAssistant(false)}
        userRole={userRole}
        userName={userName}
      />
    </>
  );
}