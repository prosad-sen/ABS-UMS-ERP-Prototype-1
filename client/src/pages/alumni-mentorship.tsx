import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  GraduationCap, 
  Award,
  Calendar,
  Clock,
  Target,
  CheckCircle,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Star
} from "lucide-react";

export default function AlumniMentorship() {
  const [activeTab, setActiveTab] = useState("overview");

  const mentorshipStats = {
    activeMentees: 15,
    completedMentorships: 32,
    successfulPlacements: 28,
    averageRating: 4.8,
    totalHours: 245,
    upcomingSessions: 3
  };

  const currentMentees = [
    {
      id: 1,
      name: "Arjun Patel",
      year: "Final Year",
      department: "Computer Science & Engineering",
      goal: "Software Engineering at Google",
      skills: ["Python", "DSA", "System Design"],
      progress: 75,
      nextSession: "2024-07-28",
      sessionsCompleted: 8,
      status: "active"
    },
    {
      id: 2,
      name: "Priya Sharma",
      year: "Third Year",
      department: "Information Technology",
      goal: "Data Science Career at Microsoft",
      skills: ["Machine Learning", "Statistics", "Python"],
      progress: 60,
      nextSession: "2024-07-30",
      sessionsCompleted: 6,
      status: "active"
    },
    {
      id: 3,
      name: "Rohit Kumar",
      year: "Final Year",
      department: "Computer Science & Engineering",
      goal: "Product Management Role",
      skills: ["Business Strategy", "Analytics"],
      progress: 40,
      nextSession: "2024-08-02",
      sessionsCompleted: 4,
      status: "active"
    }
  ];

  const successStories = [
    {
      id: 1,
      name: "Ankur Singh",
      batch: "2023",
      department: "Computer Science",
      placement: "Microsoft - SDE-2",
      package: "₹28L",
      mentorshipDuration: "6 months",
      feedback: "The guidance I received was invaluable. From interview preparation to career strategy, every session was perfectly tailored to my goals.",
      rating: 5
    },
    {
      id: 2,
      name: "Neha Agarwal",
      batch: "2023",
      department: "Information Technology",
      placement: "Flipkart - Product Manager",
      package: "₹35L",
      mentorshipDuration: "8 months",
      feedback: "Exceptional mentoring that helped me transition from engineering to product management. The industry insights were game-changing.",
      rating: 5
    },
    {
      id: 3,
      name: "Karthik Reddy",
      batch: "2022",
      department: "Computer Science",
      placement: "Amazon - SDE-1",
      package: "₹22L",
      mentorshipDuration: "4 months",
      feedback: "Structured approach to interview prep and career planning. The mock interviews were incredibly helpful.",
      rating: 4
    }
  ];

  const upcomingRequests = [
    {
      id: 1,
      name: "Vishwas Patel",
      year: "Third Year",
      department: "Electronics & Telecommunication",
      goal: "Software Development Career",
      skills: ["C++", "Web Development"],
      requestDate: "2024-07-25",
      message: "Looking for guidance on transitioning from ECE to software development. Need help with skill development and career roadmap."
    },
    {
      id: 2,
      name: "Sneha Joshi",
      year: "Final Year",
      department: "Information Technology",
      goal: "Full Stack Development",
      skills: ["React", "Node.js"],
      requestDate: "2024-07-24",
      message: "Seeking mentorship for full-stack development career. Would appreciate guidance on building strong projects and interview preparation."
    }
  ];

  const resources = [
    {
      category: "Interview Preparation",
      items: [
        "System Design Templates",
        "Coding Interview Practice Sets",
        "Behavioral Question Bank",
        "Mock Interview Framework"
      ]
    },
    {
      category: "Career Development",
      items: [
        "Industry Trends Analysis",
        "Resume Review Templates",
        "Networking Strategies",
        "Salary Negotiation Guide"
      ]
    },
    {
      category: "Technical Skills",
      items: [
        "Technology Roadmaps",
        "Project Ideas Repository",
        "Learning Resources Library",
        "Certification Guides"
      ]
    }
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white p-6 rounded-lg shadow-xl">
        <div className="flex items-center space-x-3">
          <Users className="h-8 w-8 text-purple-300" />
          <div>
            <h1 className="text-3xl font-bold">Alumni Mentorship Program</h1>
            <p className="text-purple-100">Guide the Next Generation of COEP Engineers</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <div className="text-2xl font-bold text-blue-800">{mentorshipStats.activeMentees}</div>
            <div className="text-sm text-blue-600">Active Mentees</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <div className="text-2xl font-bold text-green-800">{mentorshipStats.successfulPlacements}</div>
            <div className="text-sm text-green-600">Successful Placements</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <div className="text-2xl font-bold text-purple-800">{mentorshipStats.totalHours}</div>
            <div className="text-sm text-purple-600">Total Hours</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100">
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 mx-auto text-yellow-600 mb-2" />
            <div className="text-2xl font-bold text-yellow-800">{mentorshipStats.averageRating}</div>
            <div className="text-sm text-yellow-600">Average Rating</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto text-red-600 mb-2" />
            <div className="text-2xl font-bold text-red-800">{mentorshipStats.upcomingSessions}</div>
            <div className="text-sm text-red-600">Upcoming Sessions</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100">
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
            <div className="text-2xl font-bold text-indigo-800">{mentorshipStats.completedMentorships}</div>
            <div className="text-sm text-indigo-600">Completed Mentorships</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="current" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="current">Current Mentees</TabsTrigger>
          <TabsTrigger value="requests">New Requests</TabsTrigger>
          <TabsTrigger value="success">Success Stories</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          <div className="space-y-4">
            {currentMentees.map((mentee) => (
              <Card key={mentee.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {mentee.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{mentee.name}</h3>
                          <p className="text-gray-600">{mentee.year} • {mentee.department}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Career Goal</p>
                          <p className="font-medium">{mentee.goal}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Next Session</p>
                          <p className="font-medium">{mentee.nextSession}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-2">Skills Focus</p>
                        <div className="flex flex-wrap gap-1">
                          {mentee.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm text-gray-500">Progress</p>
                          <p className="text-sm font-medium">{mentee.progress}%</p>
                        </div>
                        <Progress value={mentee.progress} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <Badge className="bg-green-500">
                        {mentee.sessionsCompleted} Sessions
                      </Badge>
                      <Button size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <div className="space-y-4">
            {upcomingRequests.map((request) => (
              <Card key={request.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                          {request.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{request.name}</h3>
                          <p className="text-gray-600">{request.year} • {request.department}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">Career Goal</p>
                        <p className="font-medium mb-3">{request.goal}</p>
                        <p className="text-sm text-gray-500">Current Skills</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {request.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">Message</p>
                        <p className="text-sm bg-gray-50 p-3 rounded-lg italic">"{request.message}"</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <Badge variant="outline">
                        {request.requestDate}
                      </Badge>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Accept Mentee
                      </Button>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="success" className="space-y-6">
          <div className="space-y-4">
            {successStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                          {story.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{story.name}</h3>
                          <p className="text-gray-600">Batch {story.batch} • {story.department}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Placement</p>
                          <p className="font-medium text-green-700">{story.placement}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Package</p>
                          <p className="font-bold text-green-800">{story.package}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Mentorship Duration</p>
                          <p className="font-medium">{story.mentorshipDuration}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-2">Feedback</p>
                        <p className="text-sm bg-white p-3 rounded-lg italic border border-green-200">"{story.feedback}"</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2 ml-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge className="bg-green-600">
                        Success Story
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>{resource.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    Access Resources
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Mentorship Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Practices</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Set clear goals and expectations</li>
                    <li>• Schedule regular 1-on-1 meetings</li>
                    <li>• Provide constructive feedback</li>
                    <li>• Share industry insights and trends</li>
                    <li>• Help with mock interviews</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Support Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Mentorship tracking dashboard</li>
                    <li>• Session scheduling system</li>
                    <li>• Progress monitoring tools</li>
                    <li>• Resource sharing platform</li>
                    <li>• Feedback collection system</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}