import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
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
  Globe,
  FileText,
  Beaker,
  Star,
  TrendingUp
} from "lucide-react";

export default function FacultyProfile() {
  const [isEditing, setIsEditing] = useState(false);

  // Faculty data - this would come from API based on authenticated faculty user
  const facultyData = {
    id: "COEP-FAC-2019-045",
    firstName: "Dr. Priya",
    lastName: "Sharma",
    email: "priya.sharma@coeptech.ac.in",
    phone: "+91 9876543210",
    profileImageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face",
    employeeId: "COEP-FAC-2019-045",
    designation: "Associate Professor",
    department: "Computer Science & Engineering",
    qualification: "Ph.D in Computer Science",
    experience: 12,
    specialization: "Artificial Intelligence, Machine Learning",
    joinDate: "2019-07-15",
    officeLocation: "CS Building, Room 305",
    researchInterests: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"],
    courses: [
      { code: "CS301", name: "Data Structures & Algorithms", students: 65, semester: "Fall 2024" },
      { code: "CS302", name: "Database Management Systems", students: 58, semester: "Fall 2024" },
      { code: "CS401", name: "Software Engineering", students: 72, semester: "Fall 2024" },
      { code: "CS402", name: "Computer Networks", students: 50, semester: "Fall 2024" }
    ],
    publications: [
      { title: "Advanced Machine Learning Techniques in Educational Systems", journal: "IEEE Transactions on Education", year: 2024, citations: 45 },
      { title: "Deep Learning Applications in Academic Performance Prediction", journal: "Computers & Education", year: 2023, citations: 78 },
      { title: "AI-Driven Personalized Learning Systems", conference: "ICML 2023", year: 2023, citations: 123 }
    ],
    researchProjects: [
      { title: "AI in Education Platform", funding: "₹15,00,000", agency: "DST", status: "Ongoing", startDate: "2024-01-01" },
      { title: "Automated Assessment System", funding: "₹8,50,000", agency: "UGC", status: "Completed", startDate: "2022-06-01" },
      { title: "Smart Campus Initiative", funding: "₹25,00,000", agency: "MHRD", status: "Ongoing", startDate: "2023-03-01" }
    ],
    achievements: [
      { title: "Best Faculty Award", organization: "COEP Technological University", year: "2023" },
      { title: "Excellence in Research", organization: "IEEE", year: "2022" },
      { title: "Outstanding Teaching Award", organization: "COEP", year: "2021" }
    ],
    stats: {
      totalStudents: 245,
      coursesThisSemester: 4,
      researchProjects: 3,
      publications: 15,
      hIndex: 12,
      citationCount: 567
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
                <AvatarImage src={facultyData.profileImageUrl} alt={`${facultyData.firstName} ${facultyData.lastName}`} />
                <AvatarFallback className="bg-coep-blue text-white text-2xl">
                  {facultyData.firstName.charAt(0)}{facultyData.lastName.charAt(0)}
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
                    {facultyData.firstName} {facultyData.lastName}
                  </h2>
                  <p className="text-gray-600">Employee ID: {facultyData.employeeId}</p>
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
                  {facultyData.designation}
                </Badge>
                <Badge variant="secondary">
                  {facultyData.department}
                </Badge>
                <Badge variant="outline">
                  {facultyData.experience} Years Experience
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Faculty Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">{facultyData.stats.totalStudents}</p>
            <p className="text-sm text-gray-600">Total Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">{facultyData.stats.coursesThisSemester}</p>
            <p className="text-sm text-gray-600">Courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Beaker className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">{facultyData.stats.researchProjects}</p>
            <p className="text-sm text-gray-600">Research Projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="h-8 w-8 mx-auto text-orange-600 mb-2" />
            <p className="text-2xl font-bold">{facultyData.stats.publications}</p>
            <p className="text-sm text-gray-600">Publications</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 mx-auto text-yellow-600 mb-2" />
            <p className="text-2xl font-bold">{facultyData.stats.hIndex}</p>
            <p className="text-sm text-gray-600">H-Index</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto text-red-600 mb-2" />
            <p className="text-2xl font-bold">{facultyData.stats.citationCount}</p>
            <p className="text-sm text-gray-600">Citations</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6 bg-white shadow-lg">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-6 w-6 text-blue-600" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" value={facultyData.firstName} readOnly={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" value={facultyData.lastName} readOnly={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={facultyData.email} readOnly={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={facultyData.phone} readOnly={!isEditing} />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <Input id="employeeId" value={facultyData.employeeId} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" value={facultyData.department} readOnly={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="designation">Designation</Label>
                    <Input id="designation" value={facultyData.designation} readOnly={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="officeLocation">Office Location</Label>
                    <Input id="officeLocation" value={facultyData.officeLocation} readOnly={!isEditing} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-green-600" />
                <span>Academic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Label>Qualification</Label>
                  <p className="text-lg font-semibold text-gray-900">{facultyData.qualification}</p>
                </div>
                <div>
                  <Label>Experience</Label>
                  <p className="text-lg font-semibold text-gray-900">{facultyData.experience} Years</p>
                </div>
                <div>
                  <Label>Specialization</Label>
                  <p className="text-lg font-semibold text-gray-900">{facultyData.specialization}</p>
                </div>
                <div>
                  <Label>Join Date</Label>
                  <p className="text-lg font-semibold text-gray-900">{new Date(facultyData.joinDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="mt-6">
                <Label>Research Interests</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {facultyData.researchInterests.map((interest, index) => (
                    <Badge key={index} variant="outline">{interest}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-purple-600" />
                <span>Current Courses</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {facultyData.courses.map((course, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{course.name}</h3>
                        <p className="text-gray-600">Course Code: {course.code}</p>
                        <p className="text-sm text-gray-500">{course.semester}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{course.students}</p>
                        <p className="text-sm text-gray-600">Students Enrolled</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Beaker className="h-6 w-6 text-indigo-600" />
                <span>Research Projects</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {facultyData.researchProjects.map((project, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <p className="text-gray-600">Funding Agency: {project.agency}</p>
                        <p className="text-sm text-gray-500">Start Date: {new Date(project.startDate).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">{project.funding}</p>
                        <Badge className={project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="publications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-orange-600" />
                <span>Publications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {facultyData.publications.map((publication, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-lg mb-2">{publication.title}</h3>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-600">
                          {publication.journal || publication.conference} • {publication.year}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Citations: {publication.citations}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-yellow-600" />
                <span>Achievements & Awards</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {facultyData.achievements.map((achievement, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <Award className="h-8 w-8 text-yellow-500" />
                      <div>
                        <h3 className="font-semibold text-lg">{achievement.title}</h3>
                        <p className="text-gray-600">{achievement.organization} • {achievement.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}