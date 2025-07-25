import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap,
  BookOpen,
  Trophy,
  Award,
  Edit3,
  Camera,
  Building,
  Users,
  Globe
} from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  // Mock student data - in real app this would come from API
  const studentData = {
    id: "20240001",
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul.sharma@student.coep.ac.in",
    phone: "+91 9876543210",
    profileImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rollNumber: "2024001",
    program: "B.Tech",
    branch: "Computer Science & Engineering",
    year: 2,
    semester: 4,
    admissionYear: 2022,
    currentCGPA: 8.45,
    address: "A-123, Student Hostel, COEP Campus, Pune - 411005",
    parentName: "Mr. Suresh Sharma",
    parentPhone: "+91 9876543211",
    bloodGroup: "B+",
    dateOfBirth: "2003-08-15",
    nationality: "Indian",
    state: "Maharashtra",
    category: "General",
    achievements: [
      { title: "Dean's List", semester: "Sem 3", year: "2023" },
      { title: "Coding Competition Winner", event: "TechFest 2023", position: "1st" },
      { title: "Best Project Award", subject: "Data Structures", year: "2023" }
    ],
    courses: [
      { code: "CS301", name: "Database Management Systems", credits: 4, grade: "A+", gpa: 10 },
      { code: "CS302", name: "Computer Networks", credits: 4, grade: "A", gpa: 9 },
      { code: "CS303", name: "Operating Systems", credits: 4, grade: "A+", gpa: 10 },
      { code: "CS304", name: "Software Engineering", credits: 3, grade: "A", gpa: 9 },
      { code: "MATH301", name: "Discrete Mathematics", credits: 4, grade: "B+", gpa: 8 }
    ],
    attendance: {
      overall: 87.5,
      subjects: [
        { subject: "Database Management Systems", percentage: 92, classes: "23/25" },
        { subject: "Computer Networks", percentage: 85, classes: "21/25" },
        { subject: "Operating Systems", percentage: 90, classes: "22/25" },
        { subject: "Software Engineering", percentage: 82, classes: "20/24" }
      ]
    }
  };

  return (
    <div className="space-y-6 p-3 lg:p-6">
      {/* Header Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="relative">
              <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
                <AvatarImage src={studentData.profileImageUrl} alt={`${studentData.firstName} ${studentData.lastName}`} />
                <AvatarFallback className="bg-coep-blue text-white text-2xl">
                  {studentData.firstName[0]}{studentData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <Button size="sm" className="absolute bottom-0 right-0 rounded-full p-2 h-8 w-8">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {studentData.firstName} {studentData.lastName}
                  </h2>
                  <p className="text-gray-600">Student ID: {studentData.id}</p>
                </div>
                <Button 
                  onClick={() => setIsEditing(!isEditing)}
                  variant="outline"
                  className="mt-2 lg:mt-0"
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-coep-blue text-white">
                  {studentData.program} - {studentData.branch}
                </Badge>
                <Badge variant="secondary">
                  Year {studentData.year}, Semester {studentData.semester}
                </Badge>
                <Badge variant="outline">
                  CGPA: {studentData.currentCGPA}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabbed Content */}
      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    value={studentData.firstName} 
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    value={studentData.lastName} 
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    value={studentData.email} 
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    value={studentData.phone} 
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input 
                    id="dob" 
                    type="date"
                    value={studentData.dateOfBirth} 
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bloodGroup">Blood Group</Label>
                  <Input 
                    id="bloodGroup" 
                    value={studentData.bloodGroup} 
                    disabled={!isEditing}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input 
                  id="address" 
                  value={studentData.address} 
                  disabled={!isEditing}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name</Label>
                  <Input 
                    id="parentName" 
                    value={studentData.parentName} 
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentPhone">Parent/Guardian Phone</Label>
                  <Input 
                    id="parentPhone" 
                    value={studentData.parentPhone} 
                    disabled={!isEditing}
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex space-x-2">
                  <Button>Save Changes</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 mx-auto text-coep-blue mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">{studentData.currentCGPA}</h3>
                <p className="text-gray-600">Current CGPA</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">{studentData.courses.length}</h3>
                <p className="text-gray-600">Courses This Semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto text-yellow-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">{studentData.semester}</h3>
                <p className="text-gray-600">Current Semester</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Current Semester Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Course Code</th>
                      <th className="text-left p-2">Course Name</th>
                      <th className="text-left p-2">Credits</th>
                      <th className="text-left p-2">Grade</th>
                      <th className="text-left p-2">GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.courses.map((course, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2 font-medium">{course.code}</td>
                        <td className="p-2">{course.name}</td>
                        <td className="p-2">{course.credits}</td>
                        <td className="p-2">
                          <Badge variant={course.grade.startsWith('A') ? 'default' : 'secondary'}>
                            {course.grade}
                          </Badge>
                        </td>
                        <td className="p-2 font-semibold">{course.gpa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Summary</CardTitle>
              <p className="text-sm text-gray-600">
                Overall Attendance: <span className="font-semibold text-coep-blue">{studentData.attendance.overall}%</span>
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentData.attendance.subjects.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{subject.subject}</h4>
                    <div className="text-right">
                      <span className="font-semibold text-lg">{subject.percentage}%</span>
                      <p className="text-sm text-gray-600">{subject.classes} classes attended</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        subject.percentage >= 85 ? 'bg-green-500' : 
                        subject.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${subject.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                <span>Academic Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Award className="h-8 w-8 text-yellow-600" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">
                      {achievement.event && `${achievement.event} - `}
                      {achievement.subject && `${achievement.subject} - `}
                      {achievement.year}
                      {achievement.position && ` (${achievement.position} Position)`}
                      {achievement.semester && ` - ${achievement.semester}`}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media & University Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://coep.ac.in" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 mr-2" />
                    COEP Official Website
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://www.linkedin.com/school/coep/" target="_blank" rel="noopener noreferrer">
                    <Building className="h-4 w-4 mr-2" />
                    COEP LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://www.facebook.com/COEPTech" target="_blank" rel="noopener noreferrer">
                    <Users className="h-4 w-4 mr-2" />
                    COEP Facebook
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://twitter.com/COEPtech" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 mr-2" />
                    COEP Twitter
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}