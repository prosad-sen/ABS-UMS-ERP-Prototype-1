import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GraduationCap, 
  Calendar, 
  FileText, 
  Users, 
  BookOpen, 
  Clock,
  TrendingUp,
  Award,
  Plus,
  Edit,
  Eye
} from 'lucide-react';

export default function AcademicManagement() {
  const [activeTab, setActiveTab] = useState('curriculum');

  const curricula = [
    {
      id: 'COMP-2024',
      name: 'Computer Engineering 2024',
      department: 'Computer Engineering',
      year: '2024-25',
      totalCredits: 160,
      subjects: 42,
      status: 'active',
      students: 320
    },
    {
      id: 'MECH-2024', 
      name: 'Mechanical Engineering 2024',
      department: 'Mechanical Engineering',
      year: '2024-25',
      totalCredits: 165,
      subjects: 45,
      status: 'active',
      students: 285
    },
    {
      id: 'CIVIL-2024',
      name: 'Civil Engineering 2024', 
      department: 'Civil Engineering',
      year: '2024-25',
      totalCredits: 158,
      subjects: 41,
      status: 'under-review',
      students: 195
    }
  ];

  const courses = [
    {
      id: 'CS301',
      name: 'Data Structures and Algorithms',
      department: 'Computer Engineering',
      semester: 'III',
      credits: 4,
      faculty: 'Dr. Amit Kumar',
      enrolled: 75,
      capacity: 80,
      status: 'ongoing'
    },
    {
      id: 'ME201',
      name: 'Thermodynamics',
      department: 'Mechanical Engineering', 
      semester: 'IV',
      credits: 3,
      faculty: 'Prof. Priya Sharma',
      enrolled: 68,
      capacity: 70,
      status: 'ongoing'
    },
    {
      id: 'CV101',
      name: 'Engineering Drawing',
      department: 'Civil Engineering',
      semester: 'I',
      credits: 2,
      faculty: 'Dr. Rajesh Gupta',
      enrolled: 45,
      capacity: 50,
      status: 'completed'
    }
  ];

  const timetableData = [
    {
      time: '9:00-10:00',
      monday: 'CS301 - Room 201',
      tuesday: 'ME201 - Room 105',
      wednesday: 'CV101 - Room 301',
      thursday: 'CS301 - Room 201',
      friday: 'ME201 - Room 105'
    },
    {
      time: '10:00-11:00',
      monday: 'Break',
      tuesday: 'CS301 - Room 201',
      wednesday: 'Break',
      thursday: 'ME201 - Room 105',
      friday: 'CV101 - Room 301'
    },
    {
      time: '11:00-12:00',
      monday: 'ME201 - Room 105',
      tuesday: 'CV101 - Room 301',
      wednesday: 'CS301 - Room 201',
      thursday: 'Break',
      friday: 'ME201 - Room 105'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'under-review':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Academic Management System</h1>
          <p className="text-gray-600">Comprehensive curriculum and course management</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Course
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Programs</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Courses</p>
                <p className="text-2xl font-bold">248</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold">3,245</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Faculty Members</p>
                <p className="text-2xl font-bold">186</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="curriculum">Curriculum Management</TabsTrigger>
          <TabsTrigger value="courses">Course Management</TabsTrigger>
          <TabsTrigger value="timetable">Timetable Management</TabsTrigger>
          <TabsTrigger value="assessment">Assessment Management</TabsTrigger>
        </TabsList>

        <TabsContent value="curriculum" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Curriculum Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {curricula.map((curriculum) => (
                  <div key={curriculum.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{curriculum.name}</h3>
                          <Badge className={getStatusColor(curriculum.status)}>
                            {curriculum.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Department:</span>
                            <br />
                            {curriculum.department}
                          </div>
                          <div>
                            <span className="font-medium">Total Credits:</span>
                            <br />
                            {curriculum.totalCredits}
                          </div>
                          <div>
                            <span className="font-medium">Subjects:</span>
                            <br />
                            {curriculum.subjects}
                          </div>
                          <div>
                            <span className="font-medium">Students:</span>
                            <br />
                            {curriculum.students}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{course.id} - {course.name}</h3>
                          <Badge className={getStatusColor(course.status)}>
                            {course.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Faculty:</span>
                            <br />
                            {course.faculty}
                          </div>
                          <div>
                            <span className="font-medium">Credits:</span>
                            <br />
                            {course.credits}
                          </div>
                          <div>
                            <span className="font-medium">Semester:</span>
                            <br />
                            {course.semester}
                          </div>
                          <div>
                            <span className="font-medium">Enrollment:</span>
                            <br />
                            {course.enrolled}/{course.capacity}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Manage
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timetable" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Timetable Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border p-3 text-left font-medium">Time</th>
                      <th className="border p-3 text-left font-medium">Monday</th>
                      <th className="border p-3 text-left font-medium">Tuesday</th>
                      <th className="border p-3 text-left font-medium">Wednesday</th>
                      <th className="border p-3 text-left font-medium">Thursday</th>
                      <th className="border p-3 text-left font-medium">Friday</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetableData.map((slot, index) => (
                      <tr key={index}>
                        <td className="border p-3 font-medium">{slot.time}</td>
                        <td className="border p-3">{slot.monday}</td>
                        <td className="border p-3">{slot.tuesday}</td>
                        <td className="border p-3">{slot.wednesday}</td>
                        <td className="border p-3">{slot.thursday}</td>
                        <td className="border p-3">{slot.friday}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">Assignment Creation</h3>
                      <p className="text-sm text-gray-600 mb-3">Create and manage course assignments</p>
                      <Button className="w-full">Create Assignment</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">Quiz Management</h3>
                      <p className="text-sm text-gray-600 mb-3">Design and conduct online quizzes</p>
                      <Button className="w-full">Create Quiz</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">Grade Analytics</h3>
                      <p className="text-sm text-gray-600 mb-3">Analyze student performance</p>
                      <Button className="w-full">View Analytics</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}