import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/hooks/useAuth";
import { BookOpen, Clock, CheckCircle, AlertCircle, Download, Eye, Play } from "lucide-react";

export default function LMS() {
  const { user } = useAuth();

  const { data: assignments, isLoading: assignmentsLoading } = useQuery({
    queryKey: ["/api/assignments/student"],
    enabled: !!user,
  });

  const { data: courses, isLoading: coursesLoading } = useQuery({
    queryKey: ["/api/courses"],
    enabled: !!user,
  });

  if (assignmentsLoading || coursesLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading learning materials...</p>
        </div>
      </div>
    );
  }

  // Mock course data with progress
  const mockCourses = [
    {
      id: 1,
      courseCode: "CS301",
      courseName: "Data Structures",
      instructor: "Dr. Priya Mehta",
      progress: 78,
      assignments: 2,
      lectures: 15,
      color: "bg-blue-500"
    },
    {
      id: 2,
      courseCode: "MATH301", 
      courseName: "Engineering Mathematics",
      instructor: "Prof. Rajesh Kumar",
      progress: 65,
      assignments: 1,
      lectures: 12,
      color: "bg-purple-500"
    },
    {
      id: 3,
      courseCode: "CS302",
      courseName: "Computer Networks",
      instructor: "Dr. Amit Joshi", 
      progress: 82,
      assignments: 0,
      lectures: 18,
      color: "bg-green-500"
    }
  ];

  const recentAssignments = [
    {
      id: 1,
      title: "Binary Search Tree Implementation",
      course: "Data Structures",
      dueDate: "2024-12-12",
      status: "pending",
      priority: "high"
    },
    {
      id: 2,
      title: "Fourier Transform Problems",
      course: "Engineering Mathematics", 
      dueDate: "2024-12-15",
      status: "pending",
      priority: "medium"
    },
    {
      id: 3,
      title: "Network Protocol Analysis",
      course: "Computer Networks",
      dueDate: "2024-12-08",
      status: "submitted",
      priority: "low"
    }
  ];

  const recentMaterials = [
    {
      id: 1,
      title: "Lecture 15: AVL Trees",
      course: "Data Structures",
      type: "pdf",
      addedDate: "2024-12-09",
      icon: "pdf"
    },
    {
      id: 2,
      title: "Video: Laplace Transform",
      course: "Engineering Mathematics",
      type: "video", 
      addedDate: "2024-12-08",
      icon: "video"
    },
    {
      id: 3,
      title: "TCP/IP Implementation Lab",
      course: "Computer Networks",
      type: "code",
      addedDate: "2024-12-07", 
      icon: "code"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Learning Management System</h2>
        <p className="text-gray-600">Access course materials, assignments, and online learning resources</p>
      </div>

      {/* Current Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mockCourses.map((course) => (
          <Card key={course.id}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{course.courseName}</h3>
                  <p className="text-sm text-gray-600">{course.courseCode} • {course.instructor}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>{course.assignments > 0 ? `${course.assignments} assignments due` : 'All caught up!'}</span>
                <span>{course.lectures} lectures</span>
              </div>
              
              <Button className={`w-full ${course.color} hover:opacity-90`}>
                Enter Course
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Recent Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    assignment.status === 'pending' && assignment.priority === 'high' 
                      ? 'bg-error-red bg-opacity-10' 
                      : assignment.status === 'pending'
                      ? 'bg-warning-amber bg-opacity-10'
                      : 'bg-success-green bg-opacity-10'
                  }`}>
                    {assignment.status === 'pending' && assignment.priority === 'high' ? (
                      <AlertCircle className="w-5 h-5 text-error-red" />
                    ) : assignment.status === 'pending' ? (
                      <Clock className="w-5 h-5 text-warning-amber" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-success-green" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{assignment.title}</p>
                    <p className="text-sm text-gray-600">{assignment.course} • Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                  </div>
                  <Badge 
                    variant={
                      assignment.status === 'pending' && assignment.priority === 'high' 
                        ? 'destructive' 
                        : assignment.status === 'pending'
                        ? 'secondary'
                        : 'default'
                    }
                    className={
                      assignment.status === 'submitted' ? 'bg-success-green' : ''
                    }
                  >
                    {assignment.status === 'pending' ? (assignment.priority === 'high' ? 'Due Soon' : 'Pending') : 'Submitted'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Materials */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Recent Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMaterials.map((material) => (
                <div key={material.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    material.type === 'pdf' 
                      ? 'bg-red-100' 
                      : material.type === 'video'
                      ? 'bg-red-100'
                      : 'bg-green-100'
                  }`}>
                    {material.type === 'pdf' ? (
                      <Download className="w-5 h-5 text-red-600" />
                    ) : material.type === 'video' ? (
                      <Play className="w-5 h-5 text-red-600" />
                    ) : (
                      <Eye className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{material.title}</p>
                    <p className="text-sm text-gray-600">{material.course} • Added: {new Date(material.addedDate).toLocaleDateString()}</p>
                  </div>
                  <Button variant="link" className="text-coep-blue hover:underline text-sm">
                    {material.type === 'pdf' ? 'Download' : material.type === 'video' ? 'Watch' : 'View'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
