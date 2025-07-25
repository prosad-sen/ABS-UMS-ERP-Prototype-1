import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  Settings
} from "lucide-react";

export default function FacultyDashboard() {
  const [selectedClass, setSelectedClass] = useState("CSE-3A");

  const facultyData = {
    name: "Dr. Priya Sharma",
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

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">{facultyData.coursesAssigned}</p>
            <p className="text-sm text-gray-600">Courses Assigned</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">{facultyData.studentsTotal}</p>
            <p className="text-sm text-gray-600">Total Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto text-orange-600 mb-2" />
            <p className="text-2xl font-bold">{facultyData.lecturesThisWeek}</p>
            <p className="text-sm text-gray-600">Lectures This Week</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <ClipboardCheck className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">{facultyData.assignmentsToGrade}</p>
            <p className="text-sm text-gray-600">To Grade</p>
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
            <Button className="h-20 flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
              <ClipboardCheck className="h-6 w-6" />
              <span className="text-sm">Grade Assignments</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-green-600 hover:bg-green-700">
              <Users className="h-6 w-6" />
              <span className="text-sm">Take Attendance</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-orange-600 hover:bg-orange-700">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Upload Material</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
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
    </div>
  );
}