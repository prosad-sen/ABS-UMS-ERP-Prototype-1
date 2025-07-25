import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Calendar, 
  Clock, 
  FileText,
  BookOpen,
  MapPin,
  Download,
  Eye,
  Search,
  Filter,
  BarChart3,
  AlertCircle,
  CheckCircle,
  Trophy,
  Target,
  TrendingUp
} from "lucide-react";

export default function StudentExamManagement() {
  const [activeTab, setActiveTab] = useState("schedule");
  const [searchQuery, setSearchQuery] = useState("");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  // Student exam data
  const studentData = {
    name: "Rahul Sharma",
    rollNumber: "2024001",
    semester: "4th Semester",
    branch: "Computer Science & Engineering"
  };

  const upcomingExams = [
    {
      examCode: "EX2024-001",
      subject: "Data Structures & Algorithms",
      course: "CS301",
      date: "Dec 20, 2024",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      hall: "Examination Hall A",
      seat: "A-45",
      type: "Theory",
      status: "Scheduled",
      syllabus: "Complete syllabus",
      preparationStatus: 85
    },
    {
      examCode: "EX2024-002",
      subject: "Database Management Systems",
      course: "CS302",
      date: "Dec 22, 2024",
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      hall: "Computer Lab 1",
      seat: "L1-12",
      type: "Practical",
      status: "Scheduled",
      syllabus: "Chapters 1-8",
      preparationStatus: 70
    },
    {
      examCode: "EX2024-003",
      subject: "Operating Systems",
      course: "CS303",
      date: "Dec 25, 2024",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      hall: "Examination Hall B",
      seat: "B-78",
      type: "Theory",
      status: "Scheduled",
      syllabus: "All modules",
      preparationStatus: 60
    },
    {
      examCode: "EX2024-004",
      subject: "Computer Networks",
      course: "CS304",
      date: "Dec 28, 2024",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      hall: "Examination Hall A",
      seat: "A-45",
      type: "Theory",
      status: "Scheduled",
      syllabus: "Complete syllabus",
      preparationStatus: 90
    }
  ];

  const examResults = [
    {
      examCode: "EX2024-MID-001",
      subject: "Data Structures & Algorithms",
      course: "CS301",
      examType: "Mid-semester",
      date: "Oct 15, 2024",
      marks: 42,
      totalMarks: 50,
      grade: "A",
      status: "Published",
      rank: 5,
      classAverage: 35
    },
    {
      examCode: "EX2024-MID-002",
      subject: "Database Management Systems",
      course: "CS302",
      examType: "Mid-semester",
      date: "Oct 18, 2024",
      marks: 45,
      totalMarks: 50,
      grade: "A+",
      status: "Published",
      rank: 2,
      classAverage: 38
    },
    {
      examCode: "EX2024-MID-003",
      subject: "Operating Systems",
      course: "CS303",
      examType: "Mid-semester",
      date: "Oct 22, 2024",
      marks: 38,
      totalMarks: 50,
      grade: "B+",
      status: "Published",
      rank: 12,
      classAverage: 33
    }
  ];

  const examStats = {
    totalExams: 8,
    completed: 3,
    upcoming: 4,
    pending: 1,
    averageScore: 85.2,
    bestSubject: "Database Management Systems",
    currentGPA: 8.45
  };

  const preparationTips = [
    {
      subject: "Data Structures & Algorithms",
      tip: "Focus on tree traversal algorithms and dynamic programming concepts",
      priority: "high",
      timeLeft: "5 days"
    },
    {
      subject: "Database Management Systems",
      tip: "Review normalization rules and SQL query optimization",
      priority: "medium",
      timeLeft: "7 days"
    },
    {
      subject: "Operating Systems",
      tip: "Practice process scheduling algorithms and memory management",
      priority: "high",
      timeLeft: "10 days"
    }
  ];

  const handleExamClick = (exam: any) => {
    setSelectedExam(exam);
    setShowDetailModal(true);
  };

  const filteredExams = upcomingExams.filter(exam =>
    exam.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exam.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 p-3 lg:p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Examination Management</h1>
          <p className="text-gray-600">Track your exam schedule, results, and preparation progress</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Hall Ticket
          </Button>
          <Button>
            <BarChart3 className="h-4 w-4 mr-2" />
            View Results
          </Button>
        </div>
      </div>

      {/* Quick Stats Cards with Enhanced Analytics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleExamClick({ type: 'upcoming' })}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Upcoming Exams</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">{examStats.upcoming}</p>
                <Badge className="bg-blue-100 text-blue-800 text-xs mt-1">This Month</Badge>
              </div>
              <Calendar className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
            </div>
            
            {/* Upcoming Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Next Exam</span>
                <span className="text-blue-600 font-medium">5 days</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>CS301</span>
                <span>Dec 20</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-blue-600 h-1 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700">
              <Calendar className="h-3 w-3 mr-1" />
              View Schedule
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleExamClick({ type: 'average' })}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Average Score</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">{examStats.averageScore}%</p>
                <Badge className="bg-green-100 text-green-800 text-xs mt-1">Excellent</Badge>
              </div>
              <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
            </div>
            
            {/* Performance Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Best Subject</span>
                <span className="text-green-600 font-medium">DBMS</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Current GPA</span>
                <span>8.45</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-green-600 h-1 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 group-hover:bg-green-700">
              <BarChart3 className="h-3 w-3 mr-1" />
              Performance Stats
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleExamClick({ type: 'results' })}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Results Published</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">{examStats.completed}</p>
                <Badge className="bg-purple-100 text-purple-800 text-xs mt-1">Available</Badge>
              </div>
              <FileText className="h-6 w-6 lg:h-8 lg:w-8 text-purple-600" />
            </div>
            
            {/* Results Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Latest Result</span>
                <span className="text-purple-600 font-medium">A+ Grade</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Rank</span>
                <span>2nd Position</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-purple-600 h-1 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-700">
              <Trophy className="h-3 w-3 mr-1" />
              View Results
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleExamClick({ type: 'preparation' })}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Preparation</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">76%</p>
                <Badge className="bg-orange-100 text-orange-800 text-xs mt-1">On Track</Badge>
              </div>
              <Target className="h-6 w-6 lg:h-8 lg:w-8 text-orange-600" />
            </div>
            
            {/* Preparation Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Study Hours</span>
                <span className="text-orange-600 font-medium">45h</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Topics Covered</span>
                <span>82%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-orange-600 h-1 rounded-full" style={{width: '76%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700 group-hover:bg-orange-700">
              <BookOpen className="h-3 w-3 mr-1" />
              Study Plan
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Exam Management Tabs */}
      <Tabs defaultValue="schedule" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="schedule">Exam Schedule</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="preparation">Preparation</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Examinations</CardTitle>
                <p className="text-gray-600">Your examination schedule and hall details</p>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search exams..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {filteredExams.map((exam) => (
                  <Card key={exam.examCode} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleExamClick(exam)}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{exam.subject}</h3>
                              <p className="text-gray-600">{exam.course}</p>
                            </div>
                            <Badge className={exam.type === 'Theory' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}>
                              {exam.type}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                            <div>
                              <p className="text-sm text-gray-500">Date & Time</p>
                              <p className="font-medium text-gray-900">{exam.date}</p>
                              <p className="text-sm text-gray-600">{exam.time}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Venue</p>
                              <p className="font-medium text-gray-900">{exam.hall}</p>
                              <p className="text-sm text-gray-600">Seat: {exam.seat}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Duration</p>
                              <p className="font-medium text-gray-900">{exam.duration}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Preparation</p>
                              <div className="flex items-center space-x-2">
                                <Progress value={exam.preparationStatus} className="flex-1" />
                                <span className="text-sm font-medium">{exam.preparationStatus}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Hall Ticket
                          </Button>
                          <Button size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Examination Results</CardTitle>
              <p className="text-gray-600">Your published exam results and performance analysis</p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {examResults.map((result) => (
                  <Card key={result.examCode} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{result.subject}</h3>
                              <p className="text-gray-600">{result.course} • {result.examType}</p>
                            </div>
                            <Badge className={result.grade === 'A+' ? 'bg-green-100 text-green-800' : 
                                           result.grade === 'A' ? 'bg-blue-100 text-blue-800' : 
                                           'bg-yellow-100 text-yellow-800'}>
                              {result.grade}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                            <div>
                              <p className="text-sm text-gray-500">Your Score</p>
                              <p className="text-xl font-bold text-gray-900">{result.marks}/{result.totalMarks}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Percentage</p>
                              <p className="text-xl font-bold text-green-600">{((result.marks / result.totalMarks) * 100).toFixed(1)}%</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Class Rank</p>
                              <p className="text-xl font-bold text-blue-600">#{result.rank}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Class Average</p>
                              <p className="text-xl font-bold text-gray-600">{result.classAverage}</p>
                            </div>
                          </div>
                        </div>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preparation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Exam Preparation Tips</CardTitle>
              <p className="text-gray-600">Personalized study recommendations for upcoming exams</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {preparationTips.map((tip, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{tip.subject}</h3>
                          <p className="text-gray-600 mt-1">{tip.tip}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={tip.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}>
                            {tip.priority}
                          </Badge>
                          <p className="text-sm text-gray-500 mt-1">{tip.timeLeft}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-6">
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Improving Performance</h3>
                    <p className="text-gray-600">Your average score has increased by 8% over the last semester</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subject Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {examResults.map((result, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium">{result.course}</span>
                      <div className="flex items-center space-x-2 flex-1 ml-4">
                        <Progress value={(result.marks / result.totalMarks) * 100} className="flex-1" />
                        <span className="text-sm text-gray-600 w-12">{result.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Detail Modal */}
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedExam?.subject || "Exam Analytics"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {selectedExam && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">{selectedExam.date}</p>
                  <p className="text-sm text-gray-600">Exam Date</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">{selectedExam.time}</p>
                  <p className="text-sm text-gray-600">Time Slot</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">{selectedExam.hall}</p>
                  <p className="text-sm text-gray-600">Exam Hall</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">{selectedExam.seat}</p>
                  <p className="text-sm text-gray-600">Seat Number</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}