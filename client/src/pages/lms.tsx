import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, Video, Clock, Calendar, Download, Upload, 
  Play, BookOpen, Users, MessageSquare, Trophy, Brain,
  Star, ChevronRight, Search, Filter, BarChart3, Target,
  Lightbulb, CheckCircle, AlertCircle, XCircle, Send,
  Camera, Mic, Share2, PlusCircle, Eye, ThumbsUp
} from "lucide-react";

export default function LMS() {
  // Enhanced comprehensive data structure
  const courses = [
    {
      id: 1,
      code: "CS401",
      name: "Machine Learning",
      instructor: "Dr. Priya Sharma",
      progress: 75,
      totalModules: 12,
      completedModules: 9,
      nextClass: "2025-02-05 10:00 AM",
      students: 45,
      rating: 4.8,
      category: "AI & Data Science",
      difficulty: "Advanced",
      thumbnail: "/course-ml.jpg",
      description: "Comprehensive machine learning course covering supervised, unsupervised, and reinforcement learning with hands-on projects.",
      learningOutcomes: [
        "Build and deploy ML models",
        "Master feature engineering",
        "Understand deep learning basics",
        "Apply ML to real-world problems"
      ],
      currentModule: "Neural Networks & Deep Learning",
      estimatedTime: "2 weeks remaining",
      recentActivity: "Submitted Assignment 3",
      upcomingDeadlines: 2
    },
    {
      id: 2,
      code: "CS501", 
      name: "Artificial Intelligence",
      instructor: "Prof. Rajesh Kumar",
      progress: 60,
      totalModules: 10,
      completedModules: 6,
      nextClass: "2025-02-06 2:00 PM",
      students: 38,
      rating: 4.6,
      category: "AI & Data Science",
      difficulty: "Advanced",
      thumbnail: "/course-ai.jpg",
      description: "Advanced AI concepts including knowledge representation, reasoning, planning, and intelligent agents.",
      learningOutcomes: [
        "Design intelligent systems",
        "Implement search algorithms",
        "Build knowledge bases",
        "Create AI-powered applications"
      ],
      currentModule: "Natural Language Processing",
      estimatedTime: "3 weeks remaining",
      recentActivity: "Watched Lecture 8",
      upcomingDeadlines: 1
    },
    {
      id: 3,
      code: "CS302",
      name: "Data Structures & Algorithms",
      instructor: "Dr. Amit Singh",
      progress: 90,
      totalModules: 8,
      completedModules: 7,
      nextClass: "2025-02-07 11:00 AM",
      students: 52,
      rating: 4.9,
      category: "Core CS",
      difficulty: "Intermediate",
      thumbnail: "/course-dsa.jpg",
      description: "Fundamental data structures and algorithms with complexity analysis and practical implementations.",
      learningOutcomes: [
        "Master core data structures",
        "Analyze algorithm complexity",
        "Solve coding problems efficiently",
        "Optimize software performance"
      ],
      currentModule: "Advanced Graph Algorithms",
      estimatedTime: "1 week remaining",
      recentActivity: "Completed Quiz 6",
      upcomingDeadlines: 0
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "Neural Network Implementation",
      course: "Machine Learning",
      courseCode: "CS401",
      dueDate: "2025-02-15",
      status: "in-progress",
      priority: "high",
      maxMarks: 100,
      submissionType: "Code + Report",
      estimatedTime: "8-10 hours",
      description: "Implement a multi-layer perceptron from scratch and compare with TensorFlow implementation.",
      rubric: ["Code Quality (40%)", "Performance Analysis (30%)", "Documentation (20%)", "Innovation (10%)"],
      attachments: ["starter_code.py", "dataset.csv", "requirements.txt"],
      collaborators: ["Individual Assignment"],
      progress: 65
    },
    {
      id: 2,
      title: "AI Ethics Case Study",
      course: "Artificial Intelligence", 
      courseCode: "CS501",
      dueDate: "2025-02-10",
      status: "submitted",
      priority: "medium",
      maxMarks: 50,
      submissionType: "Essay",
      estimatedTime: "4-6 hours",
      description: "Analyze ethical implications of AI in healthcare decision-making systems.",
      rubric: ["Critical Analysis (50%)", "Research Quality (30%)", "Writing Quality (20%)"],
      attachments: ["case_study_template.docx"],
      collaborators: ["Group of 3"],
      submittedAt: "2025-02-08 3:45 PM",
      feedback: "Excellent analysis of bias in healthcare AI. Consider adding more recent case studies.",
      grade: 85
    },
    {
      id: 3,
      title: "Graph Algorithm Optimization",
      course: "Data Structures & Algorithms",
      courseCode: "CS302", 
      dueDate: "2025-02-12",
      status: "pending",
      priority: "medium",
      maxMarks: 75,
      submissionType: "Code",
      estimatedTime: "6-8 hours",
      description: "Optimize pathfinding algorithms for large-scale graph networks.",
      rubric: ["Correctness (40%)", "Efficiency (35%)", "Code Style (25%)"],
      attachments: ["graph_data.json", "test_cases.py"],
      collaborators: ["Individual Assignment"],
      progress: 0
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best practices for hyperparameter tuning?",
      course: "Machine Learning",
      author: "Rahul Patel",
      replies: 12,
      lastActivity: "2 hours ago",
      isResolved: false,
      tags: ["hyperparameters", "optimization"]
    },
    {
      id: 2,
      title: "Ethical considerations in autonomous vehicles",
      course: "Artificial Intelligence",
      author: "Sneha Gupta", 
      replies: 8,
      lastActivity: "5 hours ago",
      isResolved: true,
      tags: ["ethics", "autonomous-systems"]
    }
  ];

  const recentActivity = [
    {
      type: "assignment_graded",
      title: "Linear Regression Project graded",
      course: "Machine Learning",
      time: "2 hours ago",
      grade: "A-"
    },
    {
      type: "new_content",
      title: "New lecture: Advanced CNN Architectures",
      course: "Machine Learning", 
      time: "1 day ago"
    },
    {
      type: "discussion_reply",
      title: "Reply to your discussion post",
      course: "Artificial Intelligence",
      time: "2 days ago"
    }
  ];

  const upcomingEvents = [
    {
      type: "live_session",
      title: "Office Hours with Dr. Sharma",
      course: "Machine Learning",
      time: "Today 4:00 PM",
      duration: "1 hour"
    },
    {
      type: "deadline",
      title: "Neural Network Assignment Due",
      course: "Machine Learning",
      time: "Feb 15, 11:59 PM",
      priority: "high"
    },
    {
      type: "exam",
      title: "Midterm Examination",
      course: "Data Structures & Algorithms", 
      time: "Feb 20, 10:00 AM",
      duration: "2 hours"
    }
  ];

  const learningPath = [
    { module: "Linear Algebra", status: "completed", score: 95 },
    { module: "Probability & Statistics", status: "completed", score: 88 },
    { module: "Linear Regression", status: "completed", score: 92 },
    { module: "Logistic Regression", status: "completed", score: 89 },
    { module: "Decision Trees", status: "current", score: null },
    { module: "Neural Networks", status: "locked", score: null },
    { module: "Deep Learning", status: "locked", score: null }
  ];

  return (
    <div className="space-y-6">
      {/* Enhanced Header with Quick Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Learning Management System</h1>
            <p className="text-blue-100">World-class learning experience with AI-powered insights</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 lg:mt-0">
            <div className="text-center">
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs text-blue-100">Active Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">78%</div>
              <div className="text-xs text-blue-100">Avg Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-xs text-blue-100">Learning Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <Badge className="bg-green-100 text-green-800">Live</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.course} • {activity.time}</p>
                    {activity.grade && (
                      <Badge className="mt-1 text-xs bg-green-100 text-green-800">{activity.grade}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Upcoming Events</CardTitle>
            <Button size="sm" variant="outline">
              <Calendar className="h-4 w-4 mr-1" />
              View Calendar
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    event.priority === 'high' ? 'bg-red-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.course}</p>
                    <p className="text-xs text-blue-600 font-medium">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="courses" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Courses
          </TabsTrigger>
          <TabsTrigger value="assignments" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Assignments
          </TabsTrigger>
          <TabsTrigger value="discussions" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Discussions
          </TabsTrigger>
          <TabsTrigger value="progress" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">My Courses</h2>
              <p className="text-sm text-gray-600">Active learning paths and enrollments</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-1" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                        <Badge variant="outline" className="text-xs">{course.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {course.code} • {course.instructor}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.completedModules}/{course.totalModules} modules</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">{course.progress}% complete • {course.estimatedTime}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Current Module:</span>
                      <span className="font-medium">{course.currentModule}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Next Class:</span>
                      <span className="text-blue-600 font-medium">{course.nextClass}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Students:</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.students}
                      </span>
                    </div>
                  </div>

                  {course.upcomingDeadlines > 0 && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-600" />
                        <span className="text-sm text-orange-700">
                          {course.upcomingDeadlines} upcoming deadline{course.upcomingDeadlines > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-1" />
                      Continue Learning
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Assignments & Projects</h2>
              <p className="text-sm text-gray-600">Track your submissions and grades</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Filter by Status</Button>
              <Button size="sm">
                <PlusCircle className="h-4 w-4 mr-1" />
                Submit Work
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg">{assignment.title}</CardTitle>
                        <Badge variant={
                          assignment.status === 'submitted' ? 'default' : 
                          assignment.status === 'in-progress' ? 'secondary' : 'outline'
                        }>
                          {assignment.status === 'in-progress' ? 'In Progress' : 
                           assignment.status === 'submitted' ? 'Submitted' : 'Pending'}
                        </Badge>
                        <Badge variant={assignment.priority === 'high' ? 'destructive' : 'outline'} className="text-xs">
                          {assignment.priority} priority
                        </Badge>
                      </div>
                      <CardDescription>
                        {assignment.courseCode} • {assignment.course} • Due: {assignment.dueDate}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{assignment.maxMarks} marks</div>
                      {assignment.grade && (
                        <div className="text-lg font-bold text-green-600">{assignment.grade}/100</div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-700">{assignment.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Type:</span> {assignment.submissionType}
                    </div>
                    <div>
                      <span className="font-medium">Estimated Time:</span> {assignment.estimatedTime}
                    </div>
                    <div>
                      <span className="font-medium">Collaboration:</span> {assignment.collaborators[0]}
                    </div>
                    <div>
                      <span className="font-medium">Attachments:</span> {assignment.attachments.length} files
                    </div>
                  </div>

                  {assignment.status === 'in-progress' && assignment.progress && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{assignment.progress}%</span>
                      </div>
                      <Progress value={assignment.progress} className="h-2" />
                    </div>
                  )}

                  {assignment.feedback && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-blue-900">Instructor Feedback</p>
                          <p className="text-sm text-blue-700">{assignment.feedback}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {assignment.status === 'pending' && (
                      <Button size="sm">
                        <Upload className="h-4 w-4 mr-1" />
                        Start Assignment
                      </Button>
                    )}
                    {assignment.status === 'in-progress' && (
                      <Button size="sm">
                        <Send className="h-4 w-4 mr-1" />
                        Continue Work
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download Files
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View Rubric
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="discussions" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Course Discussions</h2>
              <p className="text-sm text-gray-600">Collaborate and learn with peers</p>
            </div>
            <Button size="sm">
              <PlusCircle className="h-4 w-4 mr-1" />
              New Discussion
            </Button>
          </div>
          
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{discussion.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>by {discussion.author}</span>
                        <span>•</span>
                        <span>{discussion.course}</span>
                        <span>•</span>
                        <span>{discussion.lastActivity}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {discussion.isResolved && (
                        <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                      )}
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MessageSquare className="h-4 w-4" />
                        {discussion.replies}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    {discussion.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View Discussion
                    </Button>
                    <Button size="sm" variant="outline">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Like
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Learning Analytics</h2>
            <p className="text-sm text-gray-600">AI-powered insights into your academic progress</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learning Path: Machine Learning</CardTitle>
                <CardDescription>Track your progression through core concepts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {learningPath.map((module, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        module.status === 'completed' ? 'bg-green-100 text-green-700' :
                        module.status === 'current' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {module.status === 'completed' ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : module.status === 'current' ? (
                          <Play className="h-4 w-4" />
                        ) : (
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{module.module}</p>
                        {module.score && (
                          <p className="text-sm text-gray-500">Score: {module.score}%</p>
                        )}
                      </div>
                      {module.status === 'completed' && (
                        <Badge className="bg-green-100 text-green-800">
                          <Trophy className="h-3 w-3 mr-1" />
                          {module.score}%
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Recommendations</CardTitle>
                <CardDescription>Personalized learning suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-900">Focus Area</p>
                        <p className="text-sm text-blue-700">
                          Consider reviewing linear algebra concepts before diving deeper into neural networks.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-900">Study Goal</p>
                        <p className="text-sm text-green-700">
                          You're 85% likely to achieve an A grade if you maintain current pace.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-purple-900">Learning Tip</p>
                        <p className="text-sm text-purple-700">
                          Join the study group for CS401 - students in groups score 15% higher on average.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Learning Resources</h2>
            <p className="text-sm text-gray-600">Access course materials, videos, and study aids</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Video className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Neural Networks Explained</h3>
                    <p className="text-sm text-gray-600">Video • 45 mins</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    Watch
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">ML Algorithms Cheat Sheet</h3>
                    <p className="text-sm text-gray-600">PDF • 2.5 MB</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Interactive Code Lab</h3>
                    <p className="text-sm text-gray-600">Jupyter Notebook</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    Launch
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}