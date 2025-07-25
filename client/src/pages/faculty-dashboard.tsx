import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AnimatedInfoSlider from "@/components/ui/animated-info-slider";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  BarChart3,
  ClipboardCheck,
  MessageSquare,
  Award,
  Clock,
  TrendingUp,
  FileText,
  Video,
  Bell,
  Settings,
  Trophy,
  Building,
  Target,
  Star,
  Zap,
  Eye,
  PieChart,
  Activity
} from "lucide-react";

export default function FacultyDashboard() {
  const [selectedClass, setSelectedClass] = useState("CSE-3A");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedAnalytics, setSelectedAnalytics] = useState<any>(null);

  // Faculty Dashboard Slider Content
  const facultySliderItems = [
    {
      id: "student-progress",
      title: "Outstanding Student Performance",
      description: "Your CS301 class average improved by 12% this month! 89% of students are now above the department benchmark. Your teaching methods are making a real impact.",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      stats: { value: "89%", label: "Above Benchmark", trend: "up" as const },
      action: { label: "View Class Analytics", onClick: () => handleSliderAnalytics("class-analytics") }
    },
    {
      id: "research-opportunities",
      title: "Research Grant Approved",
      description: "Congratulations! Your AI in Education research proposal has been approved for ₹15L funding. 6 students have already expressed interest in joining your research team.",
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
      stats: { value: "₹15L", label: "Grant Amount", trend: "up" as const },
      action: { label: "Manage Research Team", onClick: () => handleSliderAnalytics("research-team") }
    },
    {
      id: "teaching-excellence",
      title: "Excellence in Teaching Recognition",
      description: "You've been nominated for the 'Best Faculty Award 2024' based on student feedback. Your innovative lab sessions scored 4.8/5.0 in the recent survey.",
      icon: Trophy,
      color: "text-yellow-600", 
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      stats: { value: "4.8/5", label: "Student Rating", trend: "up" as const },
      action: { label: "View Feedback Details", onClick: () => handleSliderAnalytics("teaching-feedback") }
    },
    {
      id: "collaboration",
      title: "Industry Partnership Success",
      description: "Microsoft has confirmed collaboration for your Software Engineering course. 20 students will get direct internship interviews and industry mentor sessions.",
      icon: Building,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500", 
      stats: { value: "20", label: "Interview Slots", trend: "up" as const },
      action: { label: "Coordinate Program", onClick: () => handleSliderAnalytics("industry-partnership") }
    }
  ];

  // Analytics handler functions
  const handleSliderAnalytics = (type: string) => {
    setSelectedAnalytics({ type, source: 'slider' });
    setShowDetailModal(true);
  };

  const handleQuickActionAnalytics = (type: string) => {
    setSelectedAnalytics({ type, source: 'quickAction' });
    setShowDetailModal(true);
  };

  const facultyData = {
    name: "Prof. Amit Kumar",
    department: "Computer Science & Engineering",
    designation: "Associate Professor",
    employeeId: "COEP-FAC-2019-045",
    coursesAssigned: 4,
    studentsTotal: 245,
    lecturesThisWeek: 12,
    assignmentsToGrade: 67
  };

  const courses = [
    { code: "CS301", name: "Data Structures & Algorithms", students: 65, completion: 78 },
    { code: "CS302", name: "Database Management Systems", students: 58, completion: 85 },
    { code: "CS401", name: "Software Engineering", students: 72, completion: 65 },
    { code: "CS402", name: "Computer Networks", students: 50, completion: 92 }
  ];

  const recentActivities = [
    { type: "assignment", text: "New assignment submission from Rahul Sharma (CS301)", time: "2 hours ago" },
    { type: "query", text: "Student query regarding DBMS lab session", time: "4 hours ago" },
    { type: "grade", text: "Graded 15 assignments for CS401", time: "1 day ago" },
    { type: "meeting", text: "Department meeting scheduled for tomorrow", time: "1 day ago" }
  ];

  const upcomingSchedule = [
    { time: "09:00 AM", subject: "Data Structures (CS301)", room: "Lab 301", type: "lab" },
    { time: "11:00 AM", subject: "Database Systems (CS302)", room: "Room 205", type: "lecture" },
    { time: "02:00 PM", subject: "Software Engineering (CS401)", room: "Room 301", type: "lecture" },
    { time: "04:00 PM", subject: "Faculty Meeting", room: "Conference Room", type: "meeting" }
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Faculty Dashboard</h1>
          <p className="text-gray-600">Welcome back, {facultyData.name}</p>
        </div>
        <div className="flex space-x-2">
          <Badge variant="outline">{facultyData.department}</Badge>
          <Badge className="bg-blue-100 text-blue-800">{facultyData.designation}</Badge>
        </div>
      </div>

      {/* Faculty Achievement Slider */}
      <div className="mb-6">
        <AnimatedInfoSlider items={facultySliderItems} />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleQuickActionAnalytics("courses")}>
          <CardContent className="p-4 text-center">
            <BookOpen className="h-8 w-8 mx-auto text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-2xl font-bold">{facultyData.coursesAssigned}</p>
            <p className="text-sm text-gray-600">Courses Assigned</p>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <BarChart3 className="h-3 w-3 mr-1" />
                View Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleQuickActionAnalytics("students")}>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-green-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-2xl font-bold">{facultyData.studentsTotal}</p>
            <p className="text-sm text-gray-600">Total Students</p>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Eye className="h-3 w-3 mr-1" />
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleQuickActionAnalytics("lectures")}>
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto text-orange-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-2xl font-bold">{facultyData.lecturesThisWeek}</p>
            <p className="text-sm text-gray-600">Lectures This Week</p>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                <Calendar className="h-3 w-3 mr-1" />
                View Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-all group" onClick={() => handleQuickActionAnalytics("grading")}>
          <CardContent className="p-4 text-center">
            <ClipboardCheck className="h-8 w-8 mx-auto text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-2xl font-bold">{facultyData.assignmentsToGrade}</p>
            <p className="text-sm text-gray-600">To Grade</p>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Target className="h-3 w-3 mr-1" />
                Start Grading
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <span>Course Progress Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{course.code} - {course.name}</p>
                      <p className="text-sm text-gray-600">{course.students} students</p>
                    </div>
                    <Badge variant="outline">{course.completion}%</Badge>
                  </div>
                  <Progress value={course.completion} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-green-600" />
              <span>Today's Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingSchedule.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-blue-600 w-20">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.subject}</p>
                    <p className="text-xs text-gray-600">{item.room}</p>
                  </div>
                  <Badge className={
                    item.type === 'lab' ? 'bg-orange-100 text-orange-800' :
                    item.type === 'lecture' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }>
                    {item.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="h-20 flex-col space-y-2 bg-blue-600 hover:bg-blue-700" onClick={() => handleQuickActionAnalytics("grade-assignments")}>
              <ClipboardCheck className="h-6 w-6" />
              <span className="text-sm">Grade Assignments</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-green-600 hover:bg-green-700" onClick={() => handleQuickActionAnalytics("take-attendance")}>
              <Users className="h-6 w-6" />
              <span className="text-sm">Take Attendance</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-orange-600 hover:bg-orange-700" onClick={() => handleQuickActionAnalytics("upload-material")}>
              <FileText className="h-6 w-6" />
              <span className="text-sm">Upload Material</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-purple-600 hover:bg-purple-700" onClick={() => handleQuickActionAnalytics("live-class")}>
              <Video className="h-6 w-6" />
              <span className="text-sm">Start Live Class</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-gray-600" />
            <span>Recent Activities</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'assignment' ? 'bg-blue-500' :
                  activity.type === 'query' ? 'bg-orange-500' :
                  activity.type === 'grade' ? 'bg-green-500' :
                  'bg-purple-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comprehensive Analytics Modal */}
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              {selectedAnalytics?.type === "class-analytics" && <><TrendingUp className="h-6 w-6 text-green-600" /><span>Class Performance Analytics</span></>}
              {selectedAnalytics?.type === "research-team" && <><Award className="h-6 w-6 text-purple-600" /><span>Research Team Management</span></>}
              {selectedAnalytics?.type === "teaching-feedback" && <><Star className="h-6 w-6 text-yellow-600" /><span>Teaching Feedback Analysis</span></>}
              {selectedAnalytics?.type === "industry-partnership" && <><Building className="h-6 w-6 text-blue-600" /><span>Industry Partnership Details</span></>}
              {selectedAnalytics?.type === "courses" && <><BookOpen className="h-6 w-6 text-blue-600" /><span>Course Analytics Dashboard</span></>}
              {selectedAnalytics?.type === "students" && <><Users className="h-6 w-6 text-green-600" /><span>Student Performance Overview</span></>}
              {selectedAnalytics?.type === "lectures" && <><Calendar className="h-6 w-6 text-orange-600" /><span>Lecture Schedule Analytics</span></>}
              {selectedAnalytics?.type === "grading" && <><ClipboardCheck className="h-6 w-6 text-purple-600" /><span>Grading Queue Management</span></>}
              {selectedAnalytics?.type === "grade-assignments" && <><Target className="h-6 w-6 text-blue-600" /><span>Assignment Grading Portal</span></>}
              {selectedAnalytics?.type === "take-attendance" && <><Activity className="h-6 w-6 text-green-600" /><span>Attendance Management System</span></>}
              {selectedAnalytics?.type === "upload-material" && <><FileText className="h-6 w-6 text-orange-600" /><span>Course Material Management</span></>}
              {selectedAnalytics?.type === "live-class" && <><Video className="h-6 w-6 text-purple-600" /><span>Live Class Management</span></>}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Class Analytics */}
            {selectedAnalytics?.type === "class-analytics" && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-green-600">89%</p>
                    <p className="text-sm text-gray-600">Students Above Benchmark</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-blue-600">+12%</p>
                    <p className="text-sm text-gray-600">Improvement This Month</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-purple-600">8.5</p>
                    <p className="text-sm text-gray-600">Average Class CGPA</p>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-orange-600">4.8/5</p>
                    <p className="text-sm text-gray-600">Teaching Rating</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Class Performance Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>CS301 - Data Structures</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={89} className="w-24" />
                            <span className="text-sm font-medium text-green-600">89%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>CS302 - Database Systems</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={92} className="w-24" />
                            <span className="text-sm font-medium text-green-600">92%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>CS401 - Software Engineering</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={76} className="w-24" />
                            <span className="text-sm font-medium text-orange-600">76%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Student Engagement Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <p className="text-2xl font-bold text-blue-600">94%</p>
                          <p className="text-sm text-gray-600">Average Attendance</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <p className="text-2xl font-bold text-green-600">87%</p>
                          <p className="text-sm text-gray-600">Assignment Submission Rate</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <p className="text-2xl font-bold text-purple-600">156</p>
                          <p className="text-sm text-gray-600">Total Questions Asked</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Research Team Management */}
            {selectedAnalytics?.type === "research-team" && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-purple-600">₹15L</p>
                    <p className="text-sm text-gray-600">Grant Amount Approved</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-blue-600">6</p>
                    <p className="text-sm text-gray-600">Interested Students</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-green-600">18</p>
                    <p className="text-sm text-gray-600">Months Duration</p>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-orange-600">3</p>
                    <p className="text-sm text-gray-600">Milestones Planned</p>
                  </div>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Research Project: AI in Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700">Your research proposal on "AI-Powered Personalized Learning Systems" has been approved for funding. The project aims to develop intelligent tutoring systems that adapt to individual student learning patterns.</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Interested Students</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <span>Rahul Sharma (CGPA: 9.2)</span>
                              <Badge className="bg-green-100 text-green-800">Approved</Badge>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <span>Priya Patel (CGPA: 8.9)</span>
                              <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <span>Arjun Singh (CGPA: 9.0)</span>
                              <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Project Timeline</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Phase 1: Literature Review</span>
                              <span className="text-sm text-gray-600">Months 1-3</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Phase 2: System Development</span>
                              <span className="text-sm text-gray-600">Months 4-12</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Phase 3: Testing & Validation</span>
                              <span className="text-sm text-gray-600">Months 13-18</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Teaching Feedback Analysis */}
            {selectedAnalytics?.type === "teaching-feedback" && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-yellow-50 rounded-lg">
                    <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-yellow-600">4.8/5</p>
                    <p className="text-sm text-gray-600">Overall Rating</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-green-600">1st</p>
                    <p className="text-sm text-gray-600">Department Ranking</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-blue-600">245</p>
                    <p className="text-sm text-gray-600">Students Surveyed</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-purple-600">+0.3</p>
                    <p className="text-sm text-gray-600">Rating Improvement</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Feedback Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Teaching Methods</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={96} className="w-24" />
                            <span className="text-sm font-medium text-green-600">4.8/5</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Course Content</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={94} className="w-24" />
                            <span className="text-sm font-medium text-green-600">4.7/5</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Student Interaction</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={98} className="w-24" />
                            <span className="text-sm font-medium text-green-600">4.9/5</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Lab Sessions</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={96} className="w-24" />
                            <span className="text-sm font-medium text-green-600">4.8/5</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Student Comments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="text-sm italic">"Prof. Kumar's innovative teaching methods make complex algorithms easy to understand."</p>
                          <p className="text-xs text-gray-600 mt-1">- Anonymous Student</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm italic">"The hands-on lab sessions are incredibly helpful for practical understanding."</p>
                          <p className="text-xs text-gray-600 mt-1">- Anonymous Student</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <p className="text-sm italic">"Always available for doubts and explains concepts with real-world examples."</p>
                          <p className="text-xs text-gray-600 mt-1">- Anonymous Student</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Quick Action Analytics */}
            {selectedAnalytics?.type === "courses" && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-blue-600">4</p>
                  <p className="text-sm text-gray-600">Active Courses</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-green-600">85%</p>
                  <p className="text-sm text-gray-600">Avg. Completion</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-purple-600">4.7/5</p>
                  <p className="text-sm text-gray-600">Course Rating</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-orange-600">245</p>
                  <p className="text-sm text-gray-600">Total Enrollment</p>
                </div>
              </div>
            )}

            {/* Continue for other analytics types... */}
            {selectedAnalytics?.type === "grade-assignments" && (
              <div className="text-center p-8">
                <ClipboardCheck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Assignment Grading Portal</h3>
                <p className="text-gray-600 mb-4">67 assignments pending across all your courses. CS401 has the most pending submissions (25).</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Target className="h-4 w-4 mr-2" />
                  Start Grading Queue
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}