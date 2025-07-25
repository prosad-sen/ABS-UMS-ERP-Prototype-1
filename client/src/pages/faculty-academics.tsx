import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Clock,
  TrendingUp,
  Download,
  Search,
  Filter,
  Star,
  Award,
  Target,
  Eye,
  BarChart3,
  GraduationCap,
  FileText,
  Briefcase,
  ChevronRight
} from "lucide-react";

export default function FacultyAcademics() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedAnalytics, setSelectedAnalytics] = useState("");

  // Faculty Academic Data
  const facultyData = {
    name: "Prof. Amit Kumar",
    employeeId: "COEP-FAC-2019-045",
    department: "Computer Science & Engineering",
    designation: "Associate Professor",
    totalStudents: 245,
    coursesAssigned: 4,
    currentCGPA: 8.45, // Faculty rating from students
    totalPublications: 15,
    researchProjects: 3
  };

  const currentSemester = {
    semester: "Fall 2024",
    totalCourses: 4,
    totalStudents: 245,
    averageClassPerformance: 8.2,
    courses: [
      {
        code: "CS301",
        name: "Data Structures & Algorithms",
        students: 65,
        classAverage: 7.8,
        attendance: 92,
        assignments: { submitted: 58, total: 65 },
        lecturesCompleted: 28,
        totalLectures: 35,
        examSchedule: "Dec 20, 2024",
        topPerformer: "Rahul Sharma",
        room: "CS-101",
        schedule: "Mon, Wed, Fri - 9:00 AM"
      },
      {
        code: "CS302", 
        name: "Database Management Systems",
        students: 58,
        classAverage: 8.5,
        attendance: 88,
        assignments: { submitted: 51, total: 58 },
        lecturesCompleted: 32,
        totalLectures: 36,
        examSchedule: "Dec 22, 2024",
        topPerformer: "Priya Patel",
        room: "CS-102",
        schedule: "Tue, Thu - 11:00 AM"
      },
      {
        code: "CS401",
        name: "Software Engineering",
        students: 72,
        classAverage: 6.5,
        attendance: 85,
        assignments: { submitted: 68, total: 72 },
        lecturesCompleted: 25,
        totalLectures: 40,
        examSchedule: "Dec 25, 2024",
        topPerformer: "Arjun Singh",
        room: "CS-103",
        schedule: "Mon, Wed, Fri - 2:00 PM"
      },
      {
        code: "CS402",
        name: "Computer Networks",
        students: 50,
        classAverage: 9.2,
        attendance: 94,
        assignments: { submitted: 49, total: 50 },
        lecturesCompleted: 30,
        totalLectures: 32,
        examSchedule: "Dec 18, 2024",
        topPerformer: "Sneha Patil",
        room: "Network Lab",
        schedule: "Tue, Thu - 3:00 PM"
      }
    ]
  };

  const gradeDistribution = {
    "A+": 45,
    "A": 67,
    "B+": 89,
    "B": 32,
    "C": 12
  };

  const recentActivities = [
    { type: "grading", text: "Graded 15 assignments for CS401 - Software Engineering", time: "2 hours ago" },
    { type: "lecture", text: "Completed lecture on Database Normalization (CS302)", time: "4 hours ago" },
    { type: "meeting", text: "Student mentorship session with Rahul Sharma", time: "1 day ago" },
    { type: "research", text: "Published research paper in IEEE Education Journal", time: "2 days ago" }
  ];

  const upcomingSchedule = [
    { time: "09:00 AM", course: "CS301 - Data Structures", room: "CS-101", type: "lecture", students: 65 },
    { time: "11:00 AM", course: "CS302 - DBMS", room: "CS-102", type: "lab", students: 58 },
    { time: "02:00 PM", course: "CS401 - Software Engg", room: "CS-103", type: "lecture", students: 72 },
    { time: "04:00 PM", course: "Faculty Meeting", room: "Conference Hall", type: "meeting", students: 0 }
  ];

  const handleCourseClick = (course: any) => {
    setSelectedCourse(course);
    setShowDetailModal(true);
  };

  const handleAnalyticsClick = (type: string) => {
    setSelectedAnalytics(type);
    setShowDetailModal(true);
  };

  const filteredCourses = currentSemester.courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-3 lg:p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Faculty Academic Records</h1>
          <p className="text-gray-600">Track your courses, class analytics, and teaching performance</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => handleAnalyticsClick("transcript")}>
            <Download className="h-4 w-4 mr-2" />
            Download Class Reports
          </Button>
          <Button onClick={() => handleAnalyticsClick("achievements")}>
            <Award className="h-4 w-4 mr-2" />
            View Teaching Awards
          </Button>
        </div>
      </div>

      {/* Quick Stats Cards with Enhanced Analytics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleAnalyticsClick("cgpa")}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Teaching Rating</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">{facultyData.currentCGPA}</p>
                <Badge className="bg-blue-100 text-blue-800 text-xs mt-1">Excellent</Badge>
              </div>
              <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
            </div>
            
            {/* Teaching Performance Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Student Feedback</span>
                <span className="text-blue-600 font-medium">4.8/5</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Best: 9.2</span>
                <span>Improvement: +12%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-blue-600 h-1 rounded-full" style={{width: '84%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700">
              <BarChart3 className="h-3 w-3 mr-1" />
              View Class Analytics
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleAnalyticsClick("courses")}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Courses Assigned</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">{facultyData.coursesAssigned}</p>
                <Badge className="bg-green-100 text-green-800 text-xs mt-1">Active</Badge>
              </div>
              <BookOpen className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
            </div>
            
            {/* Course Analytics Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>This Semester</span>
                <span className="text-green-600 font-medium">4</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Avg Performance</span>
                <span>8.2 CGPA</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-green-600 h-1 rounded-full" style={{width: '82%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 group-hover:bg-green-700">
              <Eye className="h-3 w-3 mr-1" />
              Course Details
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleAnalyticsClick("students")}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">{facultyData.totalStudents}</p>
                <Badge className="bg-purple-100 text-purple-800 text-xs mt-1">4 Classes</Badge>
              </div>
              <Users className="h-6 w-6 lg:h-8 lg:w-8 text-purple-600" />
            </div>
            
            {/* Student Analytics Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Attendance Rate</span>
                <span className="text-purple-600 font-medium">89%</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Top Performers</span>
                <span>67 Students</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-purple-600 h-1 rounded-full" style={{width: '89%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-700">
              <Users className="h-3 w-3 mr-1" />
              Student Analytics
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleAnalyticsClick("grading")}>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">To Grade</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-800">67</p>
                <Badge className="bg-orange-100 text-orange-800 text-xs mt-1">Pending</Badge>
              </div>
              <FileText className="h-6 w-6 lg:h-8 lg:w-8 text-orange-600" />
            </div>
            
            {/* Grading Analytics Preview */}
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Due This Week</span>
                <span className="text-orange-600 font-medium">25</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Completed</span>
                <span>178</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-orange-600 h-1 rounded-full" style={{width: '73%'}}></div>
              </div>
            </div>
            
            <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700 group-hover:bg-orange-700">
              <GraduationCap className="h-3 w-3 mr-1" />
              Grading Queue
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Course Management Tabs */}
      <Tabs defaultValue="current" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="current">Current Courses</TabsTrigger>
          <TabsTrigger value="analytics">Class Analytics</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="grading">Grade Management</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{currentSemester.semester} - Teaching Load</CardTitle>
                <p className="text-gray-600">Manage your assigned courses and monitor class performance</p>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {filteredCourses.map((course) => (
                  <Card key={course.code} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleCourseClick(course)}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{course.code}</h3>
                              <p className="text-gray-600">{course.name}</p>
                            </div>
                            <Badge className="bg-blue-100 text-blue-800">{course.students} Students</Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                            <div>
                              <p className="text-sm text-gray-500">Class Average</p>
                              <p className="text-xl font-bold text-gray-900">{course.classAverage}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Attendance</p>
                              <p className="text-xl font-bold text-green-600">{course.attendance}%</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Assignments</p>
                              <p className="text-xl font-bold text-orange-600">{course.assignments.submitted}/{course.assignments.total}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Progress</p>
                              <div className="flex items-center space-x-2">
                                <Progress value={(course.lecturesCompleted / course.totalLectures) * 100} className="flex-1" />
                                <span className="text-sm font-medium">{Math.round((course.lecturesCompleted / course.totalLectures) * 100)}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="h-6 w-6 text-gray-400" />
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
                <CardTitle>Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(gradeDistribution).map(([grade, count]) => (
                    <div key={grade} className="flex items-center justify-between">
                      <span className="font-medium">{grade}</span>
                      <div className="flex items-center space-x-2 flex-1 ml-4">
                        <Progress value={(count / facultyData.totalStudents) * 100} className="flex-1" />
                        <span className="text-sm text-gray-600 w-12">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.text}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSchedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{item.time}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.course}</p>
                      <p className="text-sm text-gray-600">{item.room} {item.students > 0 && `• ${item.students} students`}</p>
                    </div>
                    <Badge className={item.type === 'lecture' ? 'bg-blue-100 text-blue-800' : 
                                   item.type === 'lab' ? 'bg-green-100 text-green-800' : 
                                   'bg-purple-100 text-purple-800'}>
                      {item.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grading" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Grading Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Assignments and exams pending evaluation</p>
              <div className="space-y-4">
                {currentSemester.courses.map((course) => (
                  <div key={course.code} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{course.code} - {course.name}</h3>
                        <p className="text-sm text-gray-600">
                          {course.assignments.total - course.assignments.submitted} assignments pending
                        </p>
                      </div>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <FileText className="h-4 w-4 mr-2" />
                        Start Grading
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Detail Modal for Analytics */}
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedCourse ? `${selectedCourse.code} - Analytics` : `${selectedAnalytics} Analytics`}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {selectedCourse && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">{(selectedCourse as any).classAverage}</p>
                  <p className="text-sm text-gray-600">Class Average</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">{(selectedCourse as any).attendance}%</p>
                  <p className="text-sm text-gray-600">Attendance Rate</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">{(selectedCourse as any).assignments.submitted}</p>
                  <p className="text-sm text-gray-600">Submitted Assignments</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">{(selectedCourse as any).topPerformer}</p>
                  <p className="text-sm text-gray-600">Top Performer</p>
                </div>
              </div>
            )}
            
            {selectedAnalytics === "cgpa" && (
              <div className="text-center p-8">
                <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teaching Performance Analytics</h3>
                <p className="text-gray-600">Your teaching rating has improved by 12% this semester. Student feedback shows excellent satisfaction with your teaching methods.</p>
              </div>
            )}
            
            {selectedAnalytics === "transcript" && (
              <div className="text-center p-8">
                <Download className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Class Reports Downloaded</h3>
                <p className="text-gray-600">Comprehensive reports for all your classes have been generated and are ready for download.</p>
              </div>
            )}
            
            {selectedAnalytics === "achievements" && (
              <div className="text-center p-8">
                <Award className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teaching Achievements</h3>
                <p className="text-gray-600">You have been recognized for excellence in teaching with multiple awards including Best Faculty 2024.</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}