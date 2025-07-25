import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Users,
  BarChart3,
  TrendingUp,
  Calendar,
  Download,
  Eye,
  Edit,
  Send
} from "lucide-react";

export default function GradeManagement() {
  const [activeTab, setActiveTab] = useState("pending");

  const pendingGrading = [
    {
      id: "AS001",
      course: "Data Structures & Algorithms",
      assignment: "Binary Tree Implementation",
      submissions: 47,
      graded: 23,
      deadline: "Dec 20, 2024",
      type: "Programming",
      maxMarks: 50
    },
    {
      id: "AS002", 
      course: "Machine Learning",
      assignment: "Neural Network Project",
      submissions: 38,
      graded: 15,
      deadline: "Dec 22, 2024",
      type: "Project",
      maxMarks: 100
    },
    {
      id: "AS003",
      course: "Database Systems",
      assignment: "SQL Query Optimization",
      submissions: 52,
      graded: 35,
      deadline: "Dec 18, 2024",
      type: "Theory",
      maxMarks: 30
    }
  ];

  const gradingStats = {
    totalAssignments: 15,
    pendingGrading: 89,
    completedGrading: 234,
    averageGradingTime: "2.3 hours",
    studentsSatisfaction: 4.6
  };

  const recentGrades = [
    {
      student: "Rahul Sharma",
      course: "Data Structures",
      assignment: "Graph Algorithms",
      score: 42,
      maxScore: 50,
      submittedOn: "Dec 15, 2024",
      gradedOn: "Dec 16, 2024"
    },
    {
      student: "Priya Patel",
      course: "Machine Learning",
      assignment: "Classification Model",
      score: 88,
      maxScore: 100,
      submittedOn: "Dec 14, 2024", 
      gradedOn: "Dec 16, 2024"
    },
    {
      student: "Amit Kumar",
      course: "Database Systems",
      assignment: "Normalization",
      score: 26,
      maxScore: 30,
      submittedOn: "Dec 13, 2024",
      gradedOn: "Dec 15, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Grade Management</h1>
              <p className="text-gray-600 mt-1">Assignment Grading & Academic Assessment</p>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Export Grades
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Assignments</p>
                <p className="text-2xl font-bold">{gradingStats.totalAssignments}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Pending Grading</p>
                <p className="text-2xl font-bold">{gradingStats.pendingGrading}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Completed</p>
                <p className="text-2xl font-bold">{gradingStats.completedGrading}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Avg Time</p>
                <p className="text-2xl font-bold">{gradingStats.averageGradingTime}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm">Satisfaction</p>
                <p className="text-2xl font-bold">{gradingStats.studentsSatisfaction}/5</p>
              </div>
              <TrendingUp className="h-8 w-8 text-pink-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Grading Dashboard */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white shadow-lg">
          <TabsTrigger value="pending" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Pending Grading
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            Recent Grades
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Grading Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-6">
          <div className="space-y-4">
            {pendingGrading.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{item.assignment}</CardTitle>
                      <p className="text-gray-600">{item.course}</p>
                    </div>
                    <Badge className={`${
                      item.graded / item.submissions > 0.7 ? 'bg-green-100 text-green-800' :
                      item.graded / item.submissions > 0.4 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Submissions</p>
                      <p className="font-semibold">{item.submissions} total</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Graded</p>
                      <p className="font-semibold text-green-600">{item.graded}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Deadline</p>
                      <p className="font-semibold">{item.deadline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Max Marks</p>
                      <p className="font-semibold">{item.maxMarks}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Grading Progress</span>
                      <span className="text-sm text-gray-600">{Math.round((item.graded / item.submissions) * 100)}%</span>
                    </div>
                    <Progress value={(item.graded / item.submissions) * 100} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">{item.submissions - item.graded}</span> submissions pending
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View All
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Edit className="h-4 w-4 mr-1" />
                        Start Grading
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="space-y-4">
            {recentGrades.map((grade, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{grade.student}</h3>
                        <p className="text-gray-600">{grade.course} • {grade.assignment}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span>Submitted: {grade.submittedOn}</span>
                          <span>•</span>
                          <span>Graded: {grade.gradedOn}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">
                        {grade.score}/{grade.maxScore}
                      </div>
                      <div className="text-sm text-gray-600">
                        {Math.round((grade.score / grade.maxScore) * 100)}%
                      </div>
                      <Badge className={`mt-1 ${
                        (grade.score / grade.maxScore) > 0.8 ? 'bg-green-100 text-green-800' :
                        (grade.score / grade.maxScore) > 0.6 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {(grade.score / grade.maxScore) > 0.8 ? 'Excellent' :
                         (grade.score / grade.maxScore) > 0.6 ? 'Good' : 'Needs Improvement'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                  <span>Grading Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Average Grading Time</span>
                    <span className="font-bold text-blue-600">2.3 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Student Satisfaction</span>
                    <span className="font-bold text-green-600">4.6/5.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>On-time Grading Rate</span>
                    <span className="font-bold text-purple-600">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Grade Distribution</span>
                    <span className="font-bold text-orange-600">Normal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <span>Course Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Data Structures</span>
                      <span className="text-sm">78% avg</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Machine Learning</span>
                      <span className="text-sm">85% avg</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Database Systems</span>
                      <span className="text-sm">82% avg</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}