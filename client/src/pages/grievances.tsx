import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Users,
  FileText,
  Eye,
  ThumbsUp,
  MessageCircle,
  Sparkles,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

interface Grievance {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'submitted' | 'under-review' | 'in-progress' | 'resolved' | 'closed';
  submittedBy: string;
  submittedAt: string;
  resolvedAt?: string;
  assignedTo?: string;
  solution?: string;
  studentSolution?: string;
  aiGuidance?: string;
  upvotes: number;
  comments: number;
  estimatedResolutionTime: string;
  department: string;
}

export default function Grievances() {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [selectedGrievance, setSelectedGrievance] = useState<Grievance | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "medium",
    department: "",
    studentSolution: ""
  });
  const [aiGuidanceLoading, setAiGuidanceLoading] = useState(false);
  const [aiGuidance, setAiGuidance] = useState("");
  const { toast } = useToast();

  // Mock data for grievances
  const grievancesData: Grievance[] = [
    {
      id: "GRV-001",
      title: "Wi-Fi Connectivity Issues in Computer Lab",
      description: "Frequent disconnections and slow internet speed in Lab 301 affecting online coding sessions and research work.",
      category: "Infrastructure",
      priority: "high",
      status: "in-progress",
      submittedBy: "Rahul Sharma (2024001)",
      submittedAt: "2024-03-20T10:30:00Z",
      assignedTo: "IT Department",
      studentSolution: "Suggested installing mesh Wi-Fi routers and updating network infrastructure with higher bandwidth allocation.",
      aiGuidance: "Based on similar issues, implementing dual-band mesh networks with load balancing can improve connectivity by 85%. Estimated cost: ₹2,50,000 for lab upgrade.",
      upvotes: 23,
      comments: 8,
      estimatedResolutionTime: "5-7 days",
      department: "IT Services"
    },
    {
      id: "GRV-002", 
      title: "Insufficient Parking Space for Students",
      description: "Limited parking causing students to park far away, creating safety concerns especially for evening classes.",
      category: "Campus Facilities",
      priority: "medium",
      status: "under-review",
      submittedBy: "Priya Patel (2024002)",
      submittedAt: "2024-03-18T14:15:00Z",
      studentSolution: "Propose multi-level parking structure and designated areas for two-wheelers with proper lighting and security.",
      aiGuidance: "Analysis suggests implementing smart parking with real-time availability tracking. Recommended: 3-tier parking structure accommodating 500+ vehicles. Investment: ₹1.2 crores.",
      upvotes: 45,
      comments: 12,
      estimatedResolutionTime: "30-45 days",
      department: "Campus Infrastructure"
    },
    {
      id: "GRV-003",
      title: "Library Extended Hours Request",
      description: "Current library hours (9 AM - 6 PM) insufficient for research work and exam preparation, especially during exam periods.",
      category: "Academic Support",
      priority: "medium",
      status: "resolved",
      submittedBy: "Arjun Singh (2024003)",
      submittedAt: "2024-03-15T09:00:00Z",
      resolvedAt: "2024-03-22T16:30:00Z",
      solution: "Extended library hours to 9 AM - 10 PM on weekdays and 10 AM - 8 PM on weekends. Added night security and additional staff.",
      studentSolution: "Suggested 24/7 access during exam weeks with student ID card system and CCTV monitoring.",
      aiGuidance: "Studies show 40% increase in academic performance with extended library access. Cost-benefit analysis supports implementation with minimal staffing costs.",
      upvotes: 67,
      comments: 15,
      estimatedResolutionTime: "Resolved",
      department: "Library Services"
    },
    {
      id: "GRV-004",
      title: "Canteen Food Quality and Hygiene Concerns",
      description: "Reports of food quality issues and need for more healthy, affordable options in campus canteens.",
      category: "Health & Safety",
      priority: "high",
      status: "submitted",
      submittedBy: "Sneha Desai (2024004)",
      submittedAt: "2024-03-22T11:45:00Z",
      studentSolution: "Regular health inspections, student feedback system, and introduction of salad bars and healthy meal options.",
      aiGuidance: "Implementing HACCP standards and real-time food safety monitoring can reduce complaints by 70%. Suggested partnership with nutrition experts for menu optimization.",
      upvotes: 34,
      comments: 9,
      estimatedResolutionTime: "10-15 days",
      department: "Campus Services"
    }
  ];

  const categories = [
    "Academic Support",
    "Infrastructure", 
    "Campus Facilities",
    "Health & Safety",
    "Administrative",
    "IT Services",
    "Library Services",
    "Transportation",
    "Hostel Services",
    "Finance & Fees"
  ];

  const departments = [
    "Academic Affairs",
    "IT Services", 
    "Campus Infrastructure",
    "Student Affairs",
    "Library Services",
    "Campus Services",
    "Finance Department",
    "Human Resources",
    "Security",
    "Maintenance"
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'under-review': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'submitted': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'closed': return 'bg-gray-100 text-gray-600 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const generateAIGuidance = async () => {
    if (!formData.description.trim()) return;
    
    setAiGuidanceLoading(true);
    try {
      // Simulate AI response generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const guidance = `Based on your grievance about "${formData.title}", here are some immediate steps and recommendations:

1. **Immediate Actions**: Document the issue with photos/evidence and report to ${formData.department}
2. **Escalation Path**: If not resolved in 7 days, escalate to Student Affairs Dean
3. **Similar Cases**: 3 similar issues resolved in past 6 months with average resolution time of 12 days
4. **Suggested Solutions**: Your proposed solution aligns with successful past implementations
5. **Support Resources**: Student advocacy groups and grievance committee available for assistance

The system will automatically track your grievance and provide updates via email and dashboard notifications.`;
      
      setAiGuidance(guidance);
    } catch (error) {
      toast({
        title: "Error generating guidance",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setAiGuidanceLoading(false);
    }
  };

  const submitGrievance = async () => {
    try {
      // Generate AI guidance before submission
      await generateAIGuidance();
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Grievance Submitted Successfully!",
        description: "Your grievance has been registered and will be reviewed within 24 hours.",
      });
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        category: "",
        priority: "medium",
        department: "",
        studentSolution: ""
      });
      setAiGuidance("");
      setShowSubmitForm(false);
      
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  const stats = {
    totalGrievances: 156,
    resolved: 89,
    inProgress: 34,
    pending: 33,
    averageResolutionTime: "8.5 days",
    satisfactionRate: 87
  };

  return (
    <div className="space-y-6 p-3 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Student Grievances & Feedback</h1>
          <p className="text-gray-600">Voice your concerns and help improve campus life</p>
        </div>
        <Button 
          onClick={() => setShowSubmitForm(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Submit Grievance
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <MessageSquare className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">{stats.totalGrievances}</p>
            <p className="text-sm text-gray-600">Total Submissions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">{stats.resolved}</p>
            <p className="text-sm text-gray-600">Resolved</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Activity className="h-8 w-8 mx-auto text-orange-600 mb-2" />
            <p className="text-2xl font-bold">{stats.inProgress}</p>
            <p className="text-sm text-gray-600">In Progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto text-yellow-600 mb-2" />
            <p className="text-2xl font-bold">{stats.pending}</p>
            <p className="text-sm text-gray-600">Pending Review</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">{stats.averageResolutionTime}</p>
            <p className="text-sm text-gray-600">Avg Resolution</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <ThumbsUp className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">{stats.satisfactionRate}%</p>
            <p className="text-sm text-gray-600">Satisfaction</p>
          </CardContent>
        </Card>
      </div>

      {/* Grievances List */}
      <div className="grid grid-cols-1 gap-4">
        {grievancesData.map((grievance) => (
          <Card key={grievance.id} className="hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold">{grievance.title}</h3>
                    <Badge className={getPriorityColor(grievance.priority)}>
                      {grievance.priority}
                    </Badge>
                    <Badge className={getStatusColor(grievance.status)}>
                      {grievance.status}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2">{grievance.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span>#{grievance.id}</span>
                    <span>{grievance.category}</span>
                    <span>{grievance.department}</span>
                    <span>{new Date(grievance.submittedAt).toLocaleDateString()}</span>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{grievance.upvotes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{grievance.comments}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSelectedGrievance(grievance);
                      setShowDetails(true);
                    }}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  <div className="text-xs text-gray-500 text-center">
                    ETA: {grievance.estimatedResolutionTime}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Submit Grievance Dialog */}
      <Dialog open={showSubmitForm} onOpenChange={setShowSubmitForm}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <span>Submit New Grievance</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Title *</label>
              <Input
                placeholder="Brief description of your issue"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Category *</label>
                <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Priority</label>
                <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Relevant Department</label>
              <Select value={formData.department} onValueChange={(value) => setFormData({...formData, department: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Detailed Description *</label>
              <Textarea
                placeholder="Describe your issue in detail. Include when it occurs, impact on your studies, and any relevant context..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={4}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Your Suggested Solution</label>
              <Textarea
                placeholder="If you have ideas on how this could be resolved, please share them here..."
                value={formData.studentSolution}
                onChange={(e) => setFormData({...formData, studentSolution: e.target.value})}
                rows={3}
              />
            </div>
            
            {/* AI Guidance Section */}
            {formData.description.trim() && (
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">AI Guidance & Recommendations</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={generateAIGuidance}
                    disabled={aiGuidanceLoading}
                  >
                    {aiGuidanceLoading ? "Generating..." : "Get AI Guidance"}
                  </Button>
                </div>
                
                {aiGuidanceLoading && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Activity className="h-4 w-4 animate-spin" />
                      <span>Analyzing your grievance and generating personalized guidance...</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                )}
                
                {aiGuidance && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="text-sm text-purple-800 whitespace-pre-line">
                      {aiGuidance}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <div className="flex space-x-3 pt-4">
              <Button 
                onClick={submitGrievance}
                disabled={!formData.title.trim() || !formData.description.trim() || !formData.category}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Grievance
              </Button>
              <Button variant="outline" onClick={() => setShowSubmitForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Grievance Details Dialog */}
      {selectedGrievance && (
        <Dialog open={showDetails} onOpenChange={setShowDetails}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>{selectedGrievance.title}</span>
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 mt-4">
              {/* Header Info */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={getPriorityColor(selectedGrievance.priority)}>
                  {selectedGrievance.priority} priority
                </Badge>
                <Badge className={getStatusColor(selectedGrievance.status)}>
                  {selectedGrievance.status}
                </Badge>
                <Badge variant="outline">{selectedGrievance.category}</Badge>
                <Badge variant="outline">{selectedGrievance.department}</Badge>
              </div>
              
              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">Issue Description</h3>
                <p className="text-gray-700">{selectedGrievance.description}</p>
              </div>
              
              {/* Student Solution */}
              {selectedGrievance.studentSolution && (
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Lightbulb className="h-4 w-4 mr-1 text-yellow-600" />
                    Student's Suggested Solution
                  </h3>
                  <p className="text-gray-700 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    {selectedGrievance.studentSolution}
                  </p>
                </div>
              )}
              
              {/* AI Guidance */}
              {selectedGrievance.aiGuidance && (
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Sparkles className="h-4 w-4 mr-1 text-purple-600" />
                    AI Analysis & Guidance
                  </h3>
                  <p className="text-gray-700 bg-purple-50 p-3 rounded-lg border border-purple-200">
                    {selectedGrievance.aiGuidance}
                  </p>
                </div>
              )}
              
              {/* Resolution */}
              {selectedGrievance.solution && (
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                    Resolution
                  </h3>
                  <p className="text-gray-700 bg-green-50 p-3 rounded-lg border border-green-200">
                    {selectedGrievance.solution}
                  </p>
                </div>
              )}
              
              {/* Metadata */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Submitted by</p>
                  <p className="font-medium">{selectedGrievance.submittedBy}</p>
                </div>
                <div>
                  <p className="text-gray-600">Submitted on</p>
                  <p className="font-medium">{new Date(selectedGrievance.submittedAt).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Estimated Resolution</p>
                  <p className="font-medium">{selectedGrievance.estimatedResolutionTime}</p>
                </div>
                <div>
                  <p className="text-gray-600">Community Support</p>
                  <p className="font-medium">{selectedGrievance.upvotes} upvotes, {selectedGrievance.comments} comments</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}