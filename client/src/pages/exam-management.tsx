import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  FileText,
  Users,
  AlertCircle,
  CheckCircle,
  BookOpen,
  MapPin,
  Printer,
  Download,
  Eye,
  Edit,
  Plus,
  Search,
  Filter
} from "lucide-react";

export default function ExamManagement() {
  const [activeTab, setActiveTab] = useState("schedule");
  const [searchQuery, setSearchQuery] = useState("");

  const examSchedule = [
    {
      examCode: "EX2024-001",
      subject: "Data Structures & Algorithms",
      course: "Computer Engineering",
      semester: "4th Semester",
      date: "Dec 20, 2024",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      hall: "Examination Hall A",
      capacity: 120,
      enrolled: 89,
      invigilator: "Dr. Rajesh Kumar",
      type: "Theory",
      status: "Scheduled"
    },
    {
      examCode: "EX2024-002",
      subject: "Database Management Systems",
      course: "Computer Engineering", 
      semester: "6th Semester",
      date: "Dec 22, 2024",
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      hall: "Computer Lab 1",
      capacity: 60,
      enrolled: 45,
      invigilator: "Dr. Priya Sharma",
      type: "Practical",
      status: "Scheduled"
    },
    {
      examCode: "EX2024-003",
      subject: "Machine Learning",
      course: "Computer Engineering",
      semester: "8th Semester", 
      date: "Dec 18, 2024",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      hall: "Examination Hall B",
      capacity: 100,
      enrolled: 67,
      invigilator: "Dr. Amit Patel",
      type: "Theory",
      status: "Completed"
    }
  ];

  const examStats = {
    totalExams: 45,
    scheduledExams: 23,
    completedExams: 15,
    ongoingExams: 2,
    totalStudents: 1247,
    hallUtilization: 78
  };

  const examHalls = [
    {
      name: "Examination Hall A",
      capacity: 120,
      type: "Theory",
      facilities: ["CCTV", "AC", "UPS"],
      currentStatus: "Available",
      nextExam: "Dec 20, 9:00 AM"
    },
    {
      name: "Examination Hall B", 
      capacity: 100,
      type: "Theory",
      facilities: ["CCTV", "AC", "UPS"],
      currentStatus: "Occupied",
      nextExam: "Dec 18, 9:00 AM"
    },
    {
      name: "Computer Lab 1",
      capacity: 60,
      type: "Practical",
      facilities: ["60 Systems", "CCTV", "AC"],
      currentStatus: "Available",
      nextExam: "Dec 22, 2:00 PM"
    },
    {
      name: "Computer Lab 2",
      capacity: 45,
      type: "Practical", 
      facilities: ["45 Systems", "CCTV", "AC"],
      currentStatus: "Maintenance",
      nextExam: "Dec 25, 10:00 AM"
    }
  ];

  const recentResults = [
    {
      examCode: "EX2024-001",
      subject: "Software Engineering",
      course: "Computer Engineering",
      studentsAppeared: 78,
      studentsEvaluated: 78,
      averageMarks: 76.8,
      passPercentage: 94.9,
      publishedDate: "Dec 15, 2024",
      status: "Published"
    },
    {
      examCode: "EX2024-002", 
      subject: "Operating Systems",
      course: "Computer Engineering",
      studentsAppeared: 82,
      studentsEvaluated: 65,
      averageMarks: 0,
      passPercentage: 0,
      publishedDate: "",
      status: "Under Evaluation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Exam Management</h1>
              <p className="text-gray-600 mt-1">Comprehensive Examination System</p>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Exam
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Exams</p>
                <p className="text-2xl font-bold">{examStats.totalExams}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Scheduled</p>
                <p className="text-2xl font-bold">{examStats.scheduledExams}</p>
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
                <p className="text-2xl font-bold">{examStats.completedExams}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Ongoing</p>
                <p className="text-2xl font-bold">{examStats.ongoingExams}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-sm">Students</p>
                <p className="text-2xl font-bold">{examStats.totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-teal-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm">Hall Usage</p>
                <p className="text-2xl font-bold">{examStats.hallUtilization}%</p>
              </div>
              <MapPin className="h-8 w-8 text-pink-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Exam Dashboard */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg">
          <TabsTrigger value="schedule" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Exam Schedule
          </TabsTrigger>
          <TabsTrigger value="halls" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            Exam Halls
          </TabsTrigger>
          <TabsTrigger value="results" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Results
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search exams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="space-y-4">
            {examSchedule.map((exam, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{exam.subject}</CardTitle>
                      <p className="text-gray-600">{exam.course} • {exam.semester}</p>
                    </div>
                    <Badge className={`${
                      exam.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                      exam.status === 'Ongoing' ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {exam.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Date & Time</p>
                      <p className="font-semibold flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exam.date}
                      </p>
                      <p className="text-sm text-gray-600">{exam.time}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Venue</p>
                      <p className="font-semibold flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exam.hall}
                      </p>
                      <p className="text-sm text-gray-600">Capacity: {exam.capacity}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Enrollment</p>
                      <p className="font-semibold text-blue-600">{exam.enrolled} students</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(exam.enrolled / exam.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Invigilator</p>
                      <p className="font-semibold">{exam.invigilator}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {exam.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">Duration:</span> {exam.duration} • 
                      <span className="font-semibold ml-1">Code:</span> {exam.examCode}
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Printer className="h-4 w-4 mr-1" />
                        Admit Card
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="halls" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {examHalls.map((hall, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{hall.name}</CardTitle>
                    <Badge className={`${
                      hall.currentStatus === 'Available' ? 'bg-green-100 text-green-800' :
                      hall.currentStatus === 'Occupied' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {hall.currentStatus}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-600">Capacity</p>
                      <p className="font-semibold">{hall.capacity} seats</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Type</p>
                      <p className="font-semibold">{hall.type}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Facilities</p>
                    <div className="flex flex-wrap gap-1">
                      {hall.facilities.map((facility, facilityIndex) => (
                        <Badge key={facilityIndex} variant="outline" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">Next Exam</p>
                    <p className="font-semibold">{hall.nextExam}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          <div className="space-y-4">
            {recentResults.map((result, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{result.subject}</CardTitle>
                      <p className="text-gray-600">{result.course} • Code: {result.examCode}</p>
                    </div>
                    <Badge className={`${
                      result.status === 'Published' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {result.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-gray-600">Students Appeared</p>
                      <p className="text-2xl font-bold text-blue-600">{result.studentsAppeared}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Evaluated</p>
                      <p className="text-2xl font-bold text-green-600">{result.studentsEvaluated}</p>
                    </div>

                    {result.status === 'Published' && (
                      <>
                        <div>
                          <p className="text-sm text-gray-600">Average Marks</p>
                          <p className="text-2xl font-bold text-purple-600">{result.averageMarks}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600">Pass Rate</p>
                          <p className="text-2xl font-bold text-orange-600">{result.passPercentage}%</p>
                        </div>
                      </>
                    )}
                  </div>

                  {result.status === 'Published' && (
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                          Published on: <span className="font-semibold">{result.publishedDate}</span>
                        </p>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Download className="h-4 w-4 mr-1" />
                          Download Report
                        </Button>
                      </div>
                    </div>
                  )}
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
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Exam Performance Trends</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Overall Pass Rate</span>
                    <span className="font-bold text-green-600">92.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Attendance</span>
                    <span className="font-bold text-blue-600">94.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hall Utilization</span>
                    <span className="font-bold text-purple-600">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>On-time Completion</span>
                    <span className="font-bold text-orange-600">96%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-green-600" />
                  <span>Department Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Computer Engineering</span>
                      <span className="text-sm">94% pass rate</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Electronics & Telecom</span>
                      <span className="text-sm">91% pass rate</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Mechanical Engineering</span>
                      <span className="text-sm">89% pass rate</span>
                    </div>
                    <Progress value={89} className="h-2" />
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