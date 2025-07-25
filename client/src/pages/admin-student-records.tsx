import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Plus,
  GraduationCap,
  Calendar,
  MapPin,
  Phone,
  Mail,
  FileText,
  UserCheck,
  AlertCircle
} from "lucide-react";

export default function AdminStudentRecords() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const studentStats = {
    totalStudents: 10247,
    activeStudents: 9876,
    graduatedStudents: 4523,
    newAdmissions: 2156,
    averageGPA: 8.4,
    attendanceRate: 92.3
  };

  const recentStudents = [
    {
      id: "ST2024001",
      name: "Aarav Sharma",
      course: "Computer Engineering",
      semester: "6th Semester",
      cgpa: 8.7,
      attendance: 94,
      phone: "+91 9876543210",
      email: "aarav.sharma@coep.ac.in",
      status: "Active",
      admissionYear: 2022
    },
    {
      id: "ST2024002", 
      name: "Priya Patel",
      course: "Electronics Engineering",
      semester: "4th Semester",
      cgpa: 9.1,
      attendance: 96,
      phone: "+91 9876543211",
      email: "priya.patel@coep.ac.in",
      status: "Active",
      admissionYear: 2023
    },
    {
      id: "ST2024003",
      name: "Rohit Desai",
      course: "Mechanical Engineering", 
      semester: "8th Semester",
      cgpa: 8.3,
      attendance: 89,
      phone: "+91 9876543212",
      email: "rohit.desai@coep.ac.in",
      status: "Active",
      admissionYear: 2021
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Records Management</h1>
              <p className="text-gray-600 mt-1">Comprehensive Student Information System</p>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Student
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Records
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
                <p className="text-blue-100 text-sm">Total Students</p>
                <p className="text-2xl font-bold">{studentStats.totalStudents.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Active Students</p>
                <p className="text-2xl font-bold">{studentStats.activeStudents.toLocaleString()}</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Graduated</p>
                <p className="text-2xl font-bold">{studentStats.graduatedStudents.toLocaleString()}</p>
              </div>
              <GraduationCap className="h-8 w-8 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">New Admissions</p>
                <p className="text-2xl font-bold">{studentStats.newAdmissions.toLocaleString()}</p>
              </div>
              <Plus className="h-8 w-8 text-orange-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-sm">Average CGPA</p>
                <p className="text-2xl font-bold">{studentStats.averageGPA}</p>
              </div>
              <FileText className="h-8 w-8 text-teal-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm">Attendance Rate</p>
                <p className="text-2xl font-bold">{studentStats.attendanceRate}%</p>
              </div>
              <Calendar className="h-8 w-8 text-pink-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg">
          <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Student Overview
          </TabsTrigger>
          <TabsTrigger value="records" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            Academic Records
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search students by name, ID, or course..."
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
            {recentStudents.map((student, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{student.name}</CardTitle>
                      <p className="text-gray-600">{student.course} • {student.semester}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {student.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Student ID</p>
                      <p className="font-semibold">{student.id}</p>
                      <p className="text-sm text-gray-600">Admitted: {student.admissionYear}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Academic Performance</p>
                      <p className="font-semibold text-blue-600">CGPA: {student.cgpa}</p>
                      <p className="text-sm text-gray-600">Attendance: {student.attendance}%</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Contact Information</p>
                      <p className="font-semibold flex items-center text-sm">
                        <Phone className="h-3 w-3 mr-1" />
                        {student.phone}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Mail className="h-3 w-3 mr-1" />
                        {student.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Quick Actions</p>
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

        <TabsContent value="records" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Records Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Transcripts</h3>
                  <p className="text-sm text-gray-600 mb-4">Generate and manage student transcripts</p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Manage Transcripts</Button>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <GraduationCap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Degree Certificates</h3>
                  <p className="text-sm text-gray-600 mb-4">Issue and track degree certificates</p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">Manage Certificates</Button>
                </div>
                
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Academic Calendar</h3>
                  <p className="text-sm text-gray-600 mb-4">Manage academic schedules and deadlines</p>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">View Calendar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Excellent (9.0+)</span>
                    <span className="font-semibold">23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Good (8.0-8.9)</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Average (7.0-7.9)</span>
                    <span className="font-semibold">28%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Below Average (less than 7.0)</span>
                    <span className="font-semibold">4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '4%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Department Wise Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="font-medium">Computer Engineering</span>
                    <span className="font-bold text-blue-600">2,847</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-medium">Electronics Engineering</span>
                    <span className="font-bold text-green-600">2,156</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span className="font-medium">Mechanical Engineering</span>
                    <span className="font-bold text-purple-600">1,934</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span className="font-medium">Civil Engineering</span>
                    <span className="font-bold text-orange-600">1,678</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-teal-50 rounded">
                    <span className="font-medium">Other Departments</span>
                    <span className="font-bold text-teal-600">1,632</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generate Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Academic Reports</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Semester Performance Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Attendance Summary Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      CGPA Distribution Report
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Administrative Reports</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Enrollment Statistics
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Graduation Analytics
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Department Performance
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