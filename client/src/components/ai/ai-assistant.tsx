import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Bot, 
  MessageSquare, 
  Send, 
  Loader2, 
  User, 
  BookOpen, 
  Calculator, 
  GraduationCap, 
  Users, 
  BarChart3,
  ClipboardList,
  Lightbulb,
  TrendingUp,
  FileText,
  Calendar,
  Star,
  Target,
  Zap
} from "lucide-react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'suggestion' | 'analysis';
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: string;
  userName?: string;
}

export default function AIAssistant({ isOpen, onClose, userRole, userName = "User" }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Role-specific AI capabilities based on research from top UMS ERPs
  const getAICapabilities = () => {
    switch (userRole) {
      case 'student':
        return {
          title: "Student AI Assistant",
          icon: <GraduationCap className="h-5 w-5" />,
          capabilities: [
            { name: "Academic Planning", icon: <BookOpen className="h-4 w-4" />, desc: "Course recommendations & academic pathway optimization" },
            { name: "Grade Analytics", icon: <BarChart3 className="h-4 w-4" />, desc: "Performance insights & improvement suggestions" },
            { name: "Study Assistant", icon: <Lightbulb className="h-4 w-4" />, desc: "Personalized study plans & learning materials" },
            { name: "Career Guidance", icon: <Target className="h-4 w-4" />, desc: "Job market insights & skill development recommendations" },
            { name: "Assignment Help", icon: <FileText className="h-4 w-4" />, desc: "Research assistance & writing support" },
            { name: "Schedule Optimizer", icon: <Calendar className="h-4 w-4" />, desc: "Class scheduling & time management" }
          ],
          quickActions: [
            "What courses should I take next semester?",
            "How can I improve my CGPA?",
            "Show me my academic progress",
            "What careers match my skills?",
            "Help me plan my study schedule"
          ]
        };
      
      case 'faculty':
        return {
          title: "Faculty AI Assistant",
          icon: <Users className="h-5 w-5" />,
          capabilities: [
            { name: "Student Analytics", icon: <BarChart3 className="h-4 w-4" />, desc: "At-risk student identification & intervention suggestions" },
            { name: "Auto Grading", icon: <Calculator className="h-4 w-4" />, desc: "Automated essay grading & feedback generation" },
            { name: "Curriculum Design", icon: <BookOpen className="h-4 w-4" />, desc: "Course content optimization & learning outcomes" },
            { name: "Research Assistant", icon: <FileText className="h-4 w-4" />, desc: "Paper analysis, citation management & research insights" },
            { name: "Class Engagement", icon: <TrendingUp className="h-4 w-4" />, desc: "Teaching effectiveness analysis & improvement tips" },
            { name: "Plagiarism Detection", icon: <Star className="h-4 w-4" />, desc: "Advanced AI content detection & academic integrity" }
          ],
          quickActions: [
            "Which students need academic support?",
            "Grade my latest assignment submissions",
            "Suggest improvements for my course curriculum",
            "Analyze student engagement patterns",
            "Help me design effective assessments"
          ]
        };
      
      case 'admin':
        return {
          title: "Administrator AI Assistant",
          icon: <ClipboardList className="h-5 w-5" />,
          capabilities: [
            { name: "Predictive Analytics", icon: <TrendingUp className="h-4 w-4" />, desc: "Enrollment forecasting & retention modeling" },
            { name: "Budget Optimization", icon: <Calculator className="h-4 w-4" />, desc: "Resource allocation & cost efficiency analysis" },
            { name: "Decision Support", icon: <Lightbulb className="h-4 w-4" />, desc: "Data-driven insights for strategic planning" },
            { name: "Performance Monitoring", icon: <BarChart3 className="h-4 w-4" />, desc: "KPI tracking & institutional effectiveness" },
            { name: "Risk Assessment", icon: <Star className="h-4 w-4" />, desc: "Early warning systems & compliance monitoring" },
            { name: "Report Generation", icon: <FileText className="h-4 w-4" />, desc: "Automated reporting & executive summaries" }
          ],
          quickActions: [
            "What are the enrollment predictions for next semester?",
            "Analyze our budget efficiency",
            "Show me key performance indicators",
            "Identify operational risks",
            "Generate executive summary report"
          ]
        };
      
      case 'parent':
        return {
          title: "Parent AI Assistant",
          icon: <Users className="h-5 w-5" />,
          capabilities: [
            { name: "Child's Progress", icon: <TrendingUp className="h-4 w-4" />, desc: "Academic performance tracking & insights" },
            { name: "Communication Hub", icon: <MessageSquare className="h-4 w-4" />, desc: "Faculty interactions & meeting scheduling" },
            { name: "Fee Management", icon: <Calculator className="h-4 w-4" />, desc: "Payment tracking & financial planning" },
            { name: "Career Guidance", icon: <Target className="h-4 w-4" />, desc: "Future planning & career pathway suggestions" },
            { name: "Event Updates", icon: <Calendar className="h-4 w-4" />, desc: "Campus activities & important notifications" },
            { name: "Support Resources", icon: <Lightbulb className="h-4 w-4" />, desc: "Parenting tips & educational guidance" }
          ],
          quickActions: [
            "How is my child performing academically?",
            "What extracurricular activities are recommended?",
            "Schedule a meeting with teachers",
            "Show upcoming fee payments",
            "Career options for my child's interests"
          ]
        };
      
      default:
        return {
          title: "AI Assistant",
          icon: <Bot className="h-5 w-5" />,
          capabilities: [
            { name: "General Inquiry", icon: <MessageSquare className="h-4 w-4" />, desc: "University information & support" },
            { name: "Navigation Help", icon: <Lightbulb className="h-4 w-4" />, desc: "System guidance & feature explanations" }
          ],
          quickActions: [
            "How can I use this system?",
            "What features are available to me?"
          ]
        };
    }
  };

  const aiConfig = getAICapabilities();

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          userRole,
          userName,
          context: messages.slice(-5) // Send last 5 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
        type: data.type || 'text'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('AI chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I apologize, but I'm having trouble processing your request right now. Please try again later or contact support if the issue persists.",
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
    handleSendMessage();
  };

  const formatMessage = (content: string) => {
    // Simple formatting for better readability
    return content.split('\n').map((line, index) => (
      <p key={index} className="mb-2 last:mb-0">
        {line}
      </p>
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center space-x-2 text-xl">
            {aiConfig.icon}
            <span>{aiConfig.title}</span>
            <Badge variant="secondary" className="ml-2">
              <Zap className="h-3 w-3 mr-1" />
              Powered by AI
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex h-[70vh]">
          {/* Sidebar with capabilities */}
          <div className="w-1/3 p-6 border-r bg-gray-50">
            <h3 className="font-semibold mb-4 text-sm text-gray-700 uppercase tracking-wide">AI Capabilities</h3>
            <div className="space-y-3 mb-6">
              {aiConfig.capabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-blue-600 mt-0.5">
                    {capability.icon}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{capability.name}</p>
                    <p className="text-xs text-gray-600">{capability.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="font-semibold mb-4 text-sm text-gray-700 uppercase tracking-wide">Quick Actions</h3>
            <div className="space-y-2">
              {aiConfig.quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left text-xs h-auto p-3 whitespace-normal"
                  onClick={() => handleQuickAction(action)}
                >
                  {action}
                </Button>
              ))}
            </div>
          </div>

          {/* Chat interface */}
          <div className="flex-1 flex flex-col">
            <ScrollArea className="flex-1 p-6">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 mt-12">
                  <Bot className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium">Welcome to your AI Assistant!</p>
                  <p className="text-sm mt-2">Ask me anything or try one of the quick actions.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.role === 'assistant' && (
                            <Bot className="h-5 w-5 mt-0.5 text-blue-600" />
                          )}
                          {message.role === 'user' && (
                            <User className="h-5 w-5 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <div className="text-sm">
                              {formatMessage(message.content)}
                            </div>
                            <div className={`text-xs mt-2 opacity-70`}>
                              {message.timestamp.toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                        <span className="text-sm text-gray-600">AI is thinking...</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>

            {/* Input area */}
            <div className="p-6 border-t bg-white">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask your AI assistant anything..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Powered by advanced AI • Your conversations are secure and personalized
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}