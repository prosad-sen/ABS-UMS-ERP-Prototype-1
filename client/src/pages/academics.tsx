import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import CourseDetailModal from "@/components/academics/course-detail-modal";
import { 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  Clock,
  TrendingUp,
  Download,
  Search,
  Filter,
  Star,
  Award,
  Target,
  Eye
} from "lucide-react";

export default function Academics() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false);

  // COEP Course Data
  const currentSemester = {
    semester: "Fall 2024 - Semester 4",
    totalCredits: 19,
    registeredCourses: 6,
    currentCGPA: 8.45,
    courses: [
      {
        code: "CS301",
        name: "Database Management Systems",
        instructor: "Dr. Priya Mehta",
        credits: 4,
        schedule: "Mon, Wed, Fri - 9:00 AM",
        room: "CS-101",
        grade: "A+",
        attendance: 92,
        assignments: { completed: 8, total: 10 },
        midterm: 85,
        project: "Student Management System Database Design"
      },
      {
        code: "CS302", 
        name: "Computer Networks",
        instructor: "Prof. Rajesh Kumar",
        credits: 4,
        schedule: "Tue, Thu - 11:00 AM",
        room: "CS-102",
        grade: "A",
        attendance: 88,
        assignments: { completed: 7, total: 8 },
        midterm: 82,
        project: "Network Protocol Implementation"
      },
      {
        code: "CS303",
        name: "Operating Systems",
        instructor: "Dr. Sneha Patil",
        credits: 4,
        schedule: "Mon, Wed, Fri - 2:00 PM", 
        room: "CS-103",
        grade: "A+",
        attendance: 94,
        assignments: { completed: 9, total: 10 },
        midterm: 88,
        project: "Custom Shell Implementation"
      },
      {
        code: "CS304",
        name: "Software Engineering",
        instructor: "Prof. Amit Sharma",
        credits: 3,
        schedule: "Tue, Thu - 3:30 PM",
        room: "CS-104",
        grade: "A",
        attendance: 85,
        assignments: { completed: 6, total: 7 },
        midterm: 80,
        project: "Agile Project Management Tool"
      },
      {
        code: "MATH301",
        name: "Discrete Mathematics",
        instructor: "Dr. Kavita Joshi",
        credits: 4,
        schedule: "Mon, Wed, Fri - 10:00 AM",
        room: "MATH-201",
        grade: "B+",
        attendance: 79,
        assignments: { completed: 5, total: 6 },
        midterm: 75,
        project: "Graph Theory Applications"
      }
    ]
  };

  const academicHistory = [
    {
      semester: "Spring 2024 - Semester 3",
      sgpa: 8.2,
      credits: 18,
      courses: [
        { code: "CS201", name: "Data Structures & Algorithms", grade: "A+", credits: 4 },
        { code: "CS202", name: "Object Oriented Programming", grade: "A", credits: 4 },
        { code: "MATH201", name: "Linear Algebra", grade: "A", credits: 4 },
        { code: "PHY201", name: "Digital Electronics", grade: "B+", credits: 3 },
        { code: "ENG201", name: "Technical Communication", grade: "A", credits: 3 }
      ]
    },
    {
      semester: "Fall 2023 - Semester 2", 
      sgpa: 7.8,
      credits: 20,
      courses: [
        { code: "CS102", name: "Programming Fundamentals", grade: "A", credits: 4 },
        { code: "MATH102", name: "Calculus II", grade: "B+", credits: 4 },
        { code: "PHY102", name: "Physics II", grade: "A", credits: 4 },
        { code: "CHEM102", name: "Chemistry II", grade: "B", credits: 4 },
        { code: "ENG102", name: "English Communication", grade: "A", credits: 4 }
      ]
    },
    {
      semester: "Spring 2023 - Semester 1",
      sgpa: 7.5,
      credits: 22,
      courses: [
        { code: "CS101", name: "Introduction to Computing", grade: "A", credits: 4 },
        { code: "MATH101", name: "Calculus I", grade: "B+", credits: 4 },
        { code: "PHY101", name: "Physics I", grade: "A", credits: 4 },
        { code: "CHEM101", name: "Chemistry I", grade: "B+", credits: 4 },
        { code: "ENG101", name: "English Literature", grade: "A", credits: 3 },
        { code: "DRAW101", name: "Engineering Drawing", grade: "B", credits: 3 }
      ]
    }
  ];

  const upcomingExams = [
    {
      course: "Database Management Systems",
      code: "CS301",
      type: "End Semester Exam",
      date: "2024-05-15",
      time: "9:00 AM - 12:00 PM",
      venue: "Main Examination Hall",
      syllabus: ["Normalization", "Query Optimization", "Transaction Management", "Concurrency Control"]
    },
    {
      course: "Computer Networks", 
      code: "CS302",
      type: "End Semester Exam",
      date: "2024-05-18",
      time: "2:00 PM - 5:00 PM", 
      venue: "CSE Block - Hall A",
      syllabus: ["TCP/IP Protocol", "Network Security", "Routing Algorithms", "Network Management"]
    },
    {
      course: "Operating Systems",
      code: "CS303", 
      type: "End Semester Exam",
      date: "2024-05-20",
      time: "9:00 AM - 12:00 PM",
      venue: "Main Examination Hall",
      syllabus: ["Process Management", "Memory Management", "File Systems", "I/O Systems"]
    }
  ];

  const coepPrograms = [
    {
      name: "Computer Science & Engineering",
      duration: "4 years",
      intake: 120,
      specializations: ["Data Science", "Cyber Security", "AI/ML", "Software Engineering"]
    },
    {
      name: "Mechanical Engineering", 
      duration: "4 years",
      intake: 180,
      specializations: ["Automotive", "Manufacturing", "Thermal", "Design"]
    },
    {
      name: "Electrical Engineering",
      duration: "4 years", 
      intake: 120,
      specializations: ["Power Systems", "Control Systems", "Electronics", "Communications"]
    },
    {
      name: "Civil Engineering",
      duration: "4 years",
      intake: 120,
      specializations: ["Structural", "Transportation", "Environmental", "Geotechnical"]
    },
    {
      name: "Electronics & Telecommunication",
      duration: "4 years",
      intake: 120,
      specializations: ["VLSI", "Signal Processing", "Wireless Communications", "Embedded Systems"]
    },
    {
      name: "Chemical Engineering",
      duration: "4 years",
      intake: 60,
      specializations: ["Process Engineering", "Biochemical", "Environmental", "Materials"]
    },
    {
      name: "Instrumentation & Control",
      duration: "4 years",
      intake: 60,
      specializations: ["Industrial Automation", "Process Control", "Robotics", "Sensors"]
    },
    {
      name: "Production Engineering",
      duration: "4 years",
      intake: 60,
      specializations: ["Manufacturing Technology", "Industrial Engineering", "Quality Control"]
    },
    {
      name: "Metallurgy & Materials",
      duration: "4 years",
      intake: 30,
      specializations: ["Materials Science", "Nanotechnology", "Corrosion Engineering"]
    },
    {
      name: "Information Technology",
      duration: "4 years",
      intake: 60,
      specializations: ["Web Technologies", "Mobile Computing", "Cloud Computing", "IoT"]
    }
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Academic Records</h1>
          <p className="text-gray-600">Track your courses, grades, and academic performance</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Transcript
          </Button>
          <Button>
            <Award className="h-4 w-4 mr-2" />
            View Achievements
          </Button>
        </div>
      </div>

      {/* Academic Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <TrendingUp className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-green-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{currentSemester.currentCGPA}</h3>
            <p className="text-sm text-gray-600">Current CGPA</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <BookOpen className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-blue-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{currentSemester.registeredCourses}</h3>
            <p className="text-sm text-gray-600">Current Courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <GraduationCap className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-purple-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{currentSemester.totalCredits}</h3>
            <p className="text-sm text-gray-600">Total Credits</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <Target className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-orange-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">4/8</h3>
            <p className="text-sm text-gray-600">Semester Progress</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="current" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="exams">Exams</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{currentSemester.semester}</CardTitle>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentSemester.courses.map((course, index) => (
                <Card key={index} className="border-l-4 border-l-coep-blue">
                  <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-2 lg:space-y-0">
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center space-y-1 lg:space-y-0 lg:space-x-4">
                          <h3 className="font-semibold text-lg">{course.code} - {course.name}</h3>
                          <Badge className="bg-coep-blue text-white w-fit">{course.credits} Credits</Badge>
                        </div>
                        <p className="text-gray-600 text-sm">Instructor: {course.instructor}</p>
                        <p className="text-gray-600 text-sm">Schedule: {course.schedule} | Room: {course.room}</p>
                        <p className="text-gray-600 text-sm">Project: {course.project}</p>
                      </div>
                      <div className="space-y-2 text-right">
                        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-1 lg:space-y-0">
                          <div>
                            <p className="text-sm text-gray-600">Grade</p>
                            <Badge variant={course.grade.startsWith('A') ? 'default' : 'secondary'}>
                              {course.grade}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Attendance</p>
                            <p className="font-semibold text-coep-blue">{course.attendance}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Assignments</p>
                            <p className="font-semibold">{course.assignments.completed}/{course.assignments.total}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Midterm</p>
                            <p className="font-semibold">{course.midterm}%</p>
                          </div>
                        </div>
                        <div className="mt-3 flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setSelectedCourse({
                                code: course.code,
                                name: course.name,
                                professor: course.instructor,
                                credits: course.credits,
                                semester: currentSemester.semester,
                                department: "Computer Science"
                              } as any);
                              setShowCourseModal(true);
                            }}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Materials
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          {academicHistory.map((semester, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{semester.semester}</CardTitle>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">SGPA</p>
                    <p className="text-2xl font-bold text-coep-blue">{semester.sgpa}</p>
                  </div>
                </div>
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
                      </tr>
                    </thead>
                    <tbody>
                      {semester.courses.map((course, courseIndex) => (
                        <tr key={courseIndex} className="border-b">
                          <td className="p-2 font-medium">{course.code}</td>
                          <td className="p-2">{course.name}</td>
                          <td className="p-2">{course.credits}</td>
                          <td className="p-2">
                            <Badge variant={course.grade.startsWith('A') ? 'default' : 'secondary'}>
                              {course.grade}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="exams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Upcoming Examinations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingExams.map((exam, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500">
                  <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-2 lg:space-y-0">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{exam.course} ({exam.code})</h3>
                        <p className="text-gray-600">{exam.type}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                          <span><Calendar className="h-4 w-4 inline mr-1" />{exam.date}</span>
                          <span><Clock className="h-4 w-4 inline mr-1" />{exam.time}</span>
                          <span>Venue: {exam.venue}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Key Topics:</p>
                          <div className="flex flex-wrap gap-1">
                            {exam.syllabus.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="programs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>COEP Technological University - Academic Programs</CardTitle>
              <p className="text-sm text-gray-600">
                Explore all undergraduate programs offered at COEP
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {coepPrograms.map((program, index) => (
                  <Card key={index} className="border-2 hover:border-coep-blue transition-colors">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg">{program.name}</h3>
                        <Badge className="bg-coep-blue text-white">{program.duration}</Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Intake: {program.intake} students</p>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Specializations:</p>
                          <div className="flex flex-wrap gap-1">
                            {program.specializations.map((spec, specIndex) => (
                              <Badge key={specIndex} variant="outline" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal
          isOpen={showCourseModal}
          onClose={() => {
            setShowCourseModal(false);
            setSelectedCourse(null);
          }}
          course={selectedCourse}
        />
      )}
    </div>
  );
}