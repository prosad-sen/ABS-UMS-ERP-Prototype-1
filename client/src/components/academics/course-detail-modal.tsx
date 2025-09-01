import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Users, 
  FileText, 
  Download, 
  Video, 
  BookOpen,
  Calendar,
  Trophy,
  Target,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

interface CourseDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    code: string;
    name: string;
    credits: number;
    professor: string;
    semester: string;
    department: string;
  };
}

export default function CourseDetailModal({ isOpen, onClose, course }: CourseDetailModalProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const scheduleData = [
    { day: "Monday", time: "09:00 - 10:00", location: "Room 301", type: "Lecture" },
    { day: "Wednesday", time: "11:00 - 12:00", location: "Room 301", type: "Lecture" },
    { day: "Friday", time: "02:00 - 05:00", location: "Lab 205", type: "Practical" },
  ];

  const assignmentData = [
    { 
      id: 1, 
      title: "Data Structures Implementation", 
      dueDate: "2025-03-25", 
      status: "submitted", 
      score: 85,
      maxScore: 100,
      submittedDate: "2025-03-20"
    },
    { 
      id: 2, 
      title: "Algorithm Analysis Report", 
      dueDate: "2025-03-30", 
      status: "pending", 
      score: null,
      maxScore: 100,
      submittedDate: null
    },
    { 
      id: 3, 
      title: "Binary Tree Visualization", 
      dueDate: "2025-04-05", 
      status: "in-progress", 
      score: null,
      maxScore: 100,
      submittedDate: null
    },
  ];

  const lectureData = [
    { 
      week: 1, 
      topic: "Introduction to Data Structures", 
      date: "2025-03-01",
      materials: ["Slides", "Video", "Notes"],
      attended: true
    },
    { 
      week: 2, 
      topic: "Arrays and Linked Lists", 
      date: "2025-03-08",
      materials: ["Slides", "Video", "Practice Problems"],
      attended: true
    },
    { 
      week: 3, 
      topic: "Stacks and Queues", 
      date: "2025-03-15",
      materials: ["Slides", "Video", "Lab Exercises"],
      attended: false
    },
    { 
      week: 4, 
      topic: "Trees and Binary Search Trees", 
      date: "2025-03-22",
      materials: ["Slides", "Video", "Interactive Demo"],
      attended: true
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted": return "bg-green-100 text-green-800";
      case "pending": return "bg-red-100 text-red-800";
      case "in-progress": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted": return <CheckCircle className="h-4 w-4" />;
      case "pending": return <AlertTriangle className="h-4 w-4" />;
      case "in-progress": return <Clock className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-coep-blue rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{course.code}: {course.name}</h2>
              <p className="text-sm text-gray-600">{course.professor} • {course.credits} Credits • {course.semester}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
          </TabsList>

          <div className="mt-4 max-h-[60vh] overflow-y-auto">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                      <span>Performance</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Current Grade</span>
                        <span className="font-semibold">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Attendance</span>
                        <span className="font-semibold">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center p-2 bg-green-50 rounded">
                        <p className="text-2xl font-bold text-green-600">3</p>
                        <p className="text-xs text-gray-600">Assignments Completed</p>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <p className="text-2xl font-bold text-blue-600">12</p>
                        <p className="text-xs text-gray-600">Classes Attended</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      <span>Course Info</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Department:</span>
                        <span className="font-medium">{course.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Credits:</span>
                        <span className="font-medium">{course.credits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Semester:</span>
                        <span className="font-medium">{course.semester}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Class Strength:</span>
                        <span className="font-medium">45 students</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Next Class:</strong> Monday, 9:00 AM - Room 301
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Weekly Schedule</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {scheduleData.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-coep-blue rounded-lg flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {schedule.day.substring(0, 3).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold">{schedule.time}</p>
                            <p className="text-sm text-gray-600">{schedule.location}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{schedule.type}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignments" className="space-y-4">
              <div className="space-y-3">
                {assignmentData.map((assignment) => (
                  <Card key={assignment.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(assignment.status)}
                          <div>
                            <h4 className="font-semibold">{assignment.title}</h4>
                            <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                            {assignment.submittedDate && (
                              <p className="text-xs text-green-600">Submitted: {assignment.submittedDate}</p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(assignment.status)}>
                            {assignment.status.replace('-', ' ')}
                          </Badge>
                          {assignment.score !== null && (
                            <p className="text-sm font-semibold mt-1">
                              {assignment.score}/{assignment.maxScore}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="materials" className="space-y-4">
              <div className="space-y-3">
                {lectureData.map((lecture) => (
                  <Card key={lecture.week}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            lecture.attended ? 'bg-green-100' : 'bg-red-100'
                          }`}>
                            <span className={`font-semibold text-sm ${
                              lecture.attended ? 'text-green-600' : 'text-red-600'
                            }`}>
                              W{lecture.week}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold">{lecture.topic}</h4>
                            <p className="text-sm text-gray-600">{lecture.date}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {lecture.materials.map((material, index) => (
                            <Button key={index} variant="outline" size="sm">
                              {material === "Video" && <Video className="h-3 w-3 mr-1" />}
                              {material === "Slides" && <FileText className="h-3 w-3 mr-1" />}
                              {material === "Notes" && <BookOpen className="h-3 w-3 mr-1" />}
                              <Download className="h-3 w-3 mr-1" />
                              {material}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}