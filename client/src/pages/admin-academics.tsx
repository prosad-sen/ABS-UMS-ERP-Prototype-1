import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  FileText,
  GraduationCap,
  Award,
  TrendingUp,
  Plus,
  Edit,
  Eye,
  Download,
  Settings
} from "lucide-react";

export default function AdminAcademics() {
  const [activeTab, setActiveTab] = useState("curriculum");

  const academicStats = {
    totalCourses: 247,
    activeCourses: 198,
    departments: 8,
    programs: 23,
    faculty: 156,
    studentsEnrolled: 9876
  };

  const courses = [
    {
      code: "CSE101",
      name: "Programming Fundamentals",
      department: "Computer Engineering",
      credits: 4,
      semester: "1st Semester",
      enrolled: 245,
      capacity: 250,
      faculty: "Dr. Rajesh Kumar",
      status: "Active"
    },
    {
      code: "CSE301", 
      name: "Data Structures & Algorithms",
      department: "Computer Engineering",
      credits: 4,
      semester: "3rd Semester", 
      enrolled: 198,
      capacity: 220,
      faculty: "Dr. Priya Sharma",
      status: "Active"
    },
    {
      code: "ECE201",
      name: "Digital Electronics",
      department: "Electronics Engineering",
      credits: 3,
      semester: "2nd Semester",
      enrolled: 167,
      capacity: 180,
      faculty: "Dr. Amit Patel",
      status: "Active"
    }
  ];

  const programs = [
    {
      name: "Bachelor of Technology - Computer Engineering",
      code: "B.Tech CSE",
      duration: "4 years",
      totalCredits: 160,
      students: 2847,
      passRate: 94.7,
      status: "Active"
    },
    {
      name: "Bachelor of Technology - Electronics Engineering", 
      code: "B.Tech ECE",
      duration: "4 years",
      totalCredits: 160,
      students: 2156,
      passRate: 92.3,
      status: "Active"
    },
    {
      name: "Master of Technology - Data Science",
      code: "M.Tech DS",
      duration: "2 years", 
      totalCredits: 80,
      students: 145,
      passRate: 96.8,
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Academic Administration</h1>
              <p className="text-gray-600 mt-1">Manage Academic Programs & Curriculum</p>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Academic Settings
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
                <p className="text-blue-100 text-sm">Total Courses</p>
                <p className="text-2xl font-bold">{academicStats.totalCourses}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Active Courses</p>
                <p className="text-2xl font-bold">{academicStats.activeCourses}</p>
              </div>
              <FileText className="h-8 w-8 text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Departments</p>
                <p className="text-2xl font-bold">{academicStats.departments}</p>
              </div>
              <Award className="h-8 w-8 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Programs</p>
                <p className="text-2xl font-bold">{academicStats.programs}</p>
              </div>
              <GraduationCap className="h-8 w-8 text-orange-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-sm">Faculty</p>
                <p className="text-2xl font-bold">{academicStats.faculty}</p>
              </div>
              <Users className="h-8 w-8 text-teal-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm">Enrollment</p>
                <p className="text-2xl font-bold">{academicStats.studentsEnrolled.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-pink-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg">
          <TabsTrigger value="curriculum" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Curriculum Management
          </TabsTrigger>
          <TabsTrigger value="programs" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            Academic Programs
          </TabsTrigger>
          <TabsTrigger value="scheduling" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Course Scheduling
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Performance Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="curriculum" className="space-y-6">
          <div className="space-y-4">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{course.name}</CardTitle>
                      <p className="text-gray-600">{course.code} • {course.department}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {course.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Course Details</p>
                      <p className="font-semibold">{course.credits} Credits</p>
                      <p className="text-sm text-gray-600">{course.semester}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Enrollment</p>
                      <p className="font-semibold text-blue-600">{course.enrolled}/{course.capacity}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Faculty</p>
                      <p className="font-semibold">{course.faculty}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Actions</p>
                      <div className="flex space-x-2 mt-1">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="programs" className="space-y-6">
          <div className="space-y-4">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{program.name}</CardTitle>
                      <p className="text-gray-600">{program.code} • {program.duration}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {program.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-gray-600">Program Structure</p>
                      <p className="font-semibold">{program.totalCredits} Total Credits</p>
                      <p className="text-sm text-gray-600">{program.duration} duration</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Current Enrollment</p>
                      <p className="font-semibold text-blue-600">{program.students.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">students</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Success Rate</p>
                      <p className="font-semibold text-green-600">{program.passRate}%</p>
                      <p className="text-sm text-gray-600">pass rate</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Program Management</p>
                      <div className="flex space-x-2 mt-1">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Modify
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scheduling" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Calendar & Scheduling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Semester Schedule</h3>
                  <p className="text-sm text-gray-600 mb-4">Manage semester timelines and academic calendar</p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">View Schedule</Button>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Course Timetable</h3>
                  <p className="text-sm text-gray-600 mb-4">Create and manage course timetables</p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">Manage Timetable</Button>
                </div>
                
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Faculty Assignment</h3>
                  <p className="text-sm text-gray-600 mb-4">Assign faculty to courses and schedules</p>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Assign Faculty</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">High Performance (90%+)</span>
                    <span className="font-semibold text-green-600">34%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '34%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Good Performance (80-89%)</span>
                    <span className="font-semibold text-blue-600">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Average Performance (70-79%)</span>
                    <span className="font-semibold text-yellow-600">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Needs Improvement (less than 70%)</span>
                    <span className="font-semibold text-red-600">4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '4%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="font-medium">Computer Engineering</span>
                    <span className="font-bold text-blue-600">92.7%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-medium">Electronics Engineering</span>
                    <span className="font-bold text-green-600">89.4%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span className="font-medium">Mechanical Engineering</span>
                    <span className="font-bold text-purple-600">87.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span className="font-medium">Civil Engineering</span>
                    <span className="font-bold text-orange-600">85.9%</span>
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