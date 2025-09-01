import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Clock, Calendar, Download, Upload } from "lucide-react";

export default function LMS() {
  // Mock data
  const courses = [
    {
      id: 1,
      code: "CS401",
      name: "Machine Learning",
      instructor: "Dr. Priya Sharma",
      progress: 75
    },
    {
      id: 2,
      code: "CS501",
      name: "Artificial Intelligence",
      instructor: "Prof. Rajesh Kumar",
      progress: 60
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "ML Model Implementation",
      course: "Machine Learning",
      dueDate: "2025-02-15",
      status: "pending"
    },
    {
      id: 2,
      title: "AI Ethics Essay",
      course: "Artificial Intelligence",
      dueDate: "2025-02-10",
      status: "submitted"
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Introduction to Neural Networks",
      type: "video",
      duration: "45 mins",
      course: "Machine Learning"
    },
    {
      id: 2,
      title: "ML Algorithms Cheat Sheet",
      type: "document",
      size: "2.5 MB",
      course: "Machine Learning"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learning Management System</h1>
        <p className="text-muted-foreground">Access your courses, assignments, and study materials</p>
      </div>

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.name}</CardTitle>
                      <CardDescription>{course.code} • {course.instructor}</CardDescription>
                    </div>
                    <Badge>{course.progress}% Complete</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-coep-blue h-2.5 rounded-full" 
                      style={{width: `${course.progress}%`}}
                    ></div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm">View Course</Button>
                    <Button size="sm" variant="outline">Materials</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4">
          {assignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{assignment.title}</CardTitle>
                    <CardDescription>{assignment.course}</CardDescription>
                  </div>
                  <Badge variant={assignment.status === "submitted" ? "default" : "secondary"}>
                    {assignment.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Due: {assignment.dueDate}
                  </div>
                </div>
                <div className="mt-4">
                  {assignment.status === "pending" ? (
                    <Button size="sm" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Submit Assignment
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="gap-2">
                      <FileText className="h-4 w-4" />
                      View Submission
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          {resources.map((resource) => (
            <Card key={resource.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    {resource.type === "video" ? (
                      <Video className="h-5 w-5 text-muted-foreground mt-0.5" />
                    ) : (
                      <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    )}
                    <div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription>{resource.course}</CardDescription>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {resource.type === "video" ? (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {resource.duration}
                    </div>
                  ) : (
                    <div>Size: {resource.size}</div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}