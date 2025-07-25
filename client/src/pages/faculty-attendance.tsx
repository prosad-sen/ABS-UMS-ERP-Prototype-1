import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  QrCode, 
  Users, 
  Calendar, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Filter,
  Download,
  Eye,
  TrendingUp,
  TrendingDown
} from "lucide-react";

export default function FacultyAttendance() {
  const [selectedCourse, setSelectedCourse] = useState("cs-301");
  const [selectedSession, setSelectedSession] = useState("");
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  // Faculty's courses
  const facultyCourses = [
    { id: "cs-301", name: "Database Management Systems", students: 45, schedule: "Mon/Wed/Fri 10:00 AM" },
    { id: "cs-302", name: "Computer Networks", students: 52, schedule: "Tue/Thu 2:00 PM" },
    { id: "cs-401", name: "Software Engineering", students: 38, schedule: "Mon/Wed 11:00 AM" }
  ];

  // Today's attendance sessions
  const todaySessions = [
    {
      id: "session-1",
      course: "Database Management Systems", 
      time: "10:00 AM - 11:00 AM",
      status: "completed",
      present: 42,
      absent: 3,
      late: 0
    },
    {
      id: "session-2", 
      course: "Software Engineering",
      time: "11:00 AM - 12:00 PM", 
      status: "in-progress",
      present: 35,
      absent: 0,
      late: 2
    },
    {
      id: "session-3",
      course: "Computer Networks",
      time: "2:00 PM - 3:00 PM",
      status: "upcoming",
      present: 0,
      absent: 0, 
      late: 0
    }
  ];

  // Student attendance records for selected course
  const studentAttendance = [
    { id: "S001", name: "Rahul Sharma", rollNo: "21CS01", present: 28, total: 30, percentage: 93.3, trend: "up" },
    { id: "S002", name: "Priya Patel", rollNo: "21CS02", present: 30, total: 30, percentage: 100, trend: "stable" },
    { id: "S003", name: "Arjun Singh", rollNo: "21CS03", present: 25, total: 30, percentage: 83.3, trend: "down" },
    { id: "S004", name: "Sneha Joshi", rollNo: "21CS04", present: 29, total: 30, percentage: 96.7, trend: "up" },
    { id: "S005", name: "Vikram Kumar", rollNo: "21CS05", present: 22, total: 30, percentage: 73.3, trend: "down" }
  ];

  const handleMarkAttendance = () => {
    setAttendanceMarked(true);
    // In real app, would generate QR code and start attendance session
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      case "in-progress": return "bg-blue-100 text-blue-800 border-blue-200";
      case "upcoming": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Faculty Attendance Management</h1>
          <p className="text-gray-600 mt-1">Mark attendance and monitor student participation</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </Button>
          <Button className="bg-coep-blue hover:bg-blue-700 flex items-center space-x-2">
            <QrCode className="h-4 w-4" />
            <span>Start QR Session</span>
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today's Sessions</p>
                <p className="text-2xl font-bold text-blue-600">3</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-green-600">135</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Attendance</p>
                <p className="text-2xl font-bold text-yellow-600">89.2%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Low Attendance</p>
                <p className="text-2xl font-bold text-red-600">8</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="today" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="today">Today's Sessions</TabsTrigger>
          <TabsTrigger value="students">Student Records</TabsTrigger>
          <TabsTrigger value="analytics">Attendance Analytics</TabsTrigger>
          <TabsTrigger value="reports">Generate Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Today's Attendance Sessions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaySessions.map((session) => (
                  <div key={session.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{session.course}</h3>
                        <p className="text-gray-600 text-sm">{session.time}</p>
                      </div>
                      <Badge className={getStatusColor(session.status)}>
                        {session.status.replace('-', ' ').toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{session.present}</div>
                        <div className="text-sm text-gray-600">Present</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{session.absent}</div>
                        <div className="text-sm text-gray-600">Absent</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">{session.late}</div>
                        <div className="text-sm text-gray-600">Late</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {session.status === "upcoming" && (
                        <Button 
                          className="bg-coep-blue hover:bg-blue-700"
                          onClick={handleMarkAttendance}
                        >
                          <QrCode className="h-4 w-4 mr-2" />
                          Start Attendance
                        </Button>
                      )}
                      {session.status === "in-progress" && (
                        <Button variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Monitor Live
                        </Button>
                      )}
                      {session.status === "completed" && (
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download Report
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Student Attendance Records</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select Course" />
                    </SelectTrigger>
                    <SelectContent>
                      {facultyCourses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {studentAttendance.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-blue-600">{student.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{student.name}</p>
                        <p className="text-sm text-gray-600">Roll No: {student.rollNo}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Attendance</div>
                        <div className="font-semibold">{student.present}/{student.total}</div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Progress value={student.percentage} className="w-20 h-2" />
                        <span className={`font-semibold ${
                          student.percentage >= 90 ? 'text-green-600' : 
                          student.percentage >= 80 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {student.percentage.toFixed(1)}%
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        {student.trend === "up" && <TrendingUp className="h-4 w-4 text-green-600" />}
                        {student.trend === "down" && <TrendingDown className="h-4 w-4 text-red-600" />}
                      </div>
                      
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Course-wise Attendance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {facultyCourses.map((course) => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{course.name}</span>
                        <span className="text-sm font-semibold">
                          {Math.floor(Math.random() * 15) + 80}%
                        </span>
                      </div>
                      <Progress value={Math.floor(Math.random() * 15) + 80} className="h-2" />
                      <div className="text-xs text-gray-600 flex justify-between">
                        <span>{course.students} students</span>
                        <span>{course.schedule}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Attendance Pattern</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => {
                    const percentage = Math.floor(Math.random() * 20) + 75;
                    return (
                      <div key={day} className="flex items-center justify-between">
                        <span className="font-medium">{day}</span>
                        <div className="flex items-center space-x-3">
                          <Progress value={percentage} className="w-32 h-2" />
                          <span className="font-semibold w-12">{percentage}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generate Attendance Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Course</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Course" />
                      </SelectTrigger>
                      <SelectContent>
                        {facultyCourses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Report Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Report Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily Summary</SelectItem>
                        <SelectItem value="weekly">Weekly Report</SelectItem>
                        <SelectItem value="monthly">Monthly Analysis</SelectItem>
                        <SelectItem value="student-wise">Student-wise Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Date Range</label>
                    <div className="flex space-x-2">
                      <Input type="date" />
                      <Input type="date" />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-coep-blue hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Generate & Download Report
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold">Quick Reports</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Today's Attendance Summary
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Low Attendance Students
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Weekly Performance Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Parent Notification List
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}