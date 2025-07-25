import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  DollarSign, 
  Building,
  Users,
  Calendar,
  TrendingUp,
  Award,
  Target,
  Gift,
  HandHeart,
  BookOpen,
  Laptop,
  Trophy,
  Star,
  CheckCircle
} from "lucide-react";

export default function AlumniContributions() {
  const [activeTab, setActiveTab] = useState("overview");

  const contributionStats = {
    totalContribution: 250000,
    thisYear: 75000,
    projectsFunded: 5,
    studentsImpacted: 500,
    donationRank: 3,
    recognitionLevel: "Patron"
  };

  const contributionHistory = [
    {
      id: 1,
      project: "Computer Lab Modernization",
      amount: 150000,
      date: "2024-03-15",
      status: "Completed",
      impact: "Upgraded 50 workstations with latest hardware",
      studentsImpacted: 500,
      category: "Infrastructure",
      recognitionReceived: "Excellence in Infrastructure Development"
    },
    {
      id: 2,
      project: "Student Scholarship Fund",
      amount: 50000,
      date: "2024-01-20",
      status: "Ongoing",
      impact: "Supporting 10 meritorious students",
      studentsImpacted: 10,
      category: "Scholarships",
      recognitionReceived: "Student Support Champion"
    },
    {
      id: 3,
      project: "Digital Library Enhancement",
      amount: 25000,
      date: "2023-11-10",
      status: "Completed",
      impact: "Added 500+ e-books and research journals",
      studentsImpacted: 800,
      category: "Academic Resources",
      recognitionReceived: "Academic Excellence Supporter"
    },
    {
      id: 4,
      project: "Innovation Lab Setup",
      amount: 20000,
      date: "2023-08-05",
      status: "Completed",
      impact: "Established maker space for student projects",
      studentsImpacted: 200,
      category: "Innovation",
      recognitionReceived: "Innovation Catalyst"
    },
    {
      id: 5,
      project: "Emergency Student Relief Fund",
      amount: 5000,
      date: "2023-05-12",
      status: "Completed",
      impact: "Helped 15 students during COVID-19",
      studentsImpacted: 15,
      category: "Emergency Relief",
      recognitionReceived: "Humanitarian Award"
    }
  ];

  const upcomingProjects = [
    {
      id: 1,
      title: "AI Research Lab Development",
      description: "Setting up advanced AI/ML research infrastructure with GPUs and specialized software",
      targetAmount: 500000,
      currentAmount: 125000,
      deadline: "2024-12-31",
      category: "Infrastructure",
      expectedImpact: "300+ students in AI/ML programs",
      priority: "high"
    },
    {
      id: 2,
      title: "Rural Student Scholarship Program",
      description: "Supporting students from rural areas with full tuition and living expenses",
      targetAmount: 200000,
      currentAmount: 45000,
      deadline: "2024-10-15",
      category: "Scholarships",
      expectedImpact: "25 rural students per year",
      priority: "medium"
    },
    {
      id: 3,
      title: "Sustainable Campus Initiative",
      description: "Installing solar panels and implementing waste management systems",
      targetAmount: 300000,
      currentAmount: 80000,
      deadline: "2025-03-31",
      category: "Sustainability",
      expectedImpact: "Entire campus community",
      priority: "medium"
    }
  ];

  const impactMetrics = {
    totalStudentsImpacted: 1525,
    totalProjectsCompleted: 12,
    averageProjectImpact: 127,
    sustainabilityRating: 4.8,
    alumniInspired: 23,
    recognitionAwards: 8
  };

  const recognitionAwards = [
    {
      title: "Distinguished Alumni Contributor 2024",
      date: "2024-06-15",
      description: "Recognized for outstanding contributions to university development",
      category: "Lifetime Achievement"
    },
    {
      title: "Infrastructure Development Excellence",
      date: "2024-03-20",
      description: "For modernizing computer lab facilities",
      category: "Infrastructure"
    },
    {
      title: "Student Support Champion",
      date: "2024-02-10",
      description: "For establishing and funding scholarship programs",
      category: "Student Welfare"
    },
    {
      title: "Innovation Catalyst Award",
      date: "2023-12-05",
      description: "For supporting student innovation through maker spaces",
      category: "Innovation"
    }
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-blue-900 text-white p-6 rounded-lg shadow-xl">
        <div className="flex items-center space-x-3">
          <Heart className="h-8 w-8 text-green-300" />
          <div>
            <h1 className="text-3xl font-bold">Alumni Contributions & Impact</h1>
            <p className="text-green-100">Supporting University Growth Through Generous Giving</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-4 text-center">
            <DollarSign className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <div className="text-2xl font-bold text-green-800">₹{(contributionStats.totalContribution / 1000).toFixed(0)}K</div>
            <div className="text-sm text-green-600">Total Contribution</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <div className="text-2xl font-bold text-blue-800">₹{(contributionStats.thisYear / 1000).toFixed(0)}K</div>
            <div className="text-sm text-blue-600">This Year</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-4 text-center">
            <Building className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <div className="text-2xl font-bold text-purple-800">{contributionStats.projectsFunded}</div>
            <div className="text-sm text-purple-600">Projects Funded</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-orange-600 mb-2" />
            <div className="text-2xl font-bold text-orange-800">{contributionStats.studentsImpacted}+</div>
            <div className="text-sm text-orange-600">Students Impacted</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100">
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 mx-auto text-yellow-600 mb-2" />
            <div className="text-2xl font-bold text-yellow-800">#{contributionStats.donationRank}</div>
            <div className="text-sm text-yellow-600">Donor Ranking</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 mx-auto text-red-600 mb-2" />
            <div className="text-2xl font-bold text-red-800">{contributionStats.recognitionLevel}</div>
            <div className="text-sm text-red-600">Recognition Level</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="history" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="history">Contribution History</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Projects</TabsTrigger>
          <TabsTrigger value="impact">Impact Report</TabsTrigger>
          <TabsTrigger value="recognition">Recognition</TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-6">
          <div className="space-y-4">
            {contributionHistory.map((contribution) => (
              <Card key={contribution.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                          <Heart className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{contribution.project}</h3>
                          <p className="text-gray-600">{contribution.category}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Amount Contributed</p>
                          <p className="font-bold text-2xl text-green-600">₹{(contribution.amount / 1000).toFixed(0)}K</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Students Impacted</p>
                          <p className="font-bold text-xl text-blue-600">{contribution.studentsImpacted}+</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Date</p>
                          <p className="font-medium">{contribution.date}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-1">Project Impact</p>
                        <p className="text-sm bg-blue-50 p-3 rounded-lg">{contribution.impact}</p>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-1">Recognition Received</p>
                        <Badge className="bg-yellow-500">
                          <Award className="h-3 w-3 mr-1" />
                          {contribution.recognitionReceived}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2 ml-4">
                      <Badge className={
                        contribution.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
                      }>
                        {contribution.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="space-y-4">
            {upcomingProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white">
                          <Target className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{project.title}</h3>
                          <p className="text-gray-600">{project.category}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-700">{project.description}</p>
                      </div>

                      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Target Amount</p>
                          <p className="font-bold text-xl">₹{(project.targetAmount / 1000).toFixed(0)}K</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Expected Impact</p>
                          <p className="font-medium">{project.expectedImpact}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Deadline</p>
                          <p className="font-medium">{project.deadline}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm text-gray-500">Funding Progress</p>
                          <p className="text-sm font-medium">
                            ₹{(project.currentAmount / 1000).toFixed(0)}K / ₹{(project.targetAmount / 1000).toFixed(0)}K
                          </p>
                        </div>
                        <Progress value={(project.currentAmount / project.targetAmount) * 100} className="h-3" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2 ml-4">
                      <Badge className={
                        project.priority === 'high' ? 'bg-red-500' : 
                        project.priority === 'medium' ? 'bg-orange-500' : 'bg-green-500'
                      }>
                        {project.priority.toUpperCase()} Priority
                      </Badge>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Contribute Now
                      </Button>
                      <Button size="sm" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="impact" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Overall Impact Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Students Impacted</span>
                    <span className="font-bold text-2xl text-green-600">{impactMetrics.totalStudentsImpacted}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projects Completed</span>
                    <span className="font-bold text-xl text-blue-600">{impactMetrics.totalProjectsCompleted}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Impact per Project</span>
                    <span className="font-bold text-xl text-purple-600">{impactMetrics.averageProjectImpact} students</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Alumni Inspired to Contribute</span>
                    <span className="font-bold text-xl text-orange-600">{impactMetrics.alumniInspired}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Categories Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Infrastructure Development</span>
                      <span className="text-sm font-medium">700 students</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Student Scholarships</span>
                      <span className="text-sm font-medium">450 students</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Academic Resources</span>
                      <span className="text-sm font-medium">800 students</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Innovation Support</span>
                      <span className="text-sm font-medium">275 students</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Testimonials from Beneficiaries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm italic mb-2">"The computer lab modernization project has completely transformed our learning experience. The new workstations and software have enabled us to work on cutting-edge projects."</p>
                  <p className="text-xs text-gray-600">- Arjun Patel, Final Year CSE Student</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm italic mb-2">"The scholarship support has been life-changing for my family. It allowed me to focus on studies without financial stress and achieve my academic goals."</p>
                  <p className="text-xs text-gray-600">- Priya Sharma, Scholarship Recipient</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm italic mb-2">"The innovation lab setup has given us the space and tools to bring our ideas to life. Several successful startups have emerged from this facility."</p>
                  <p className="text-xs text-gray-600">- Dr. Rajesh Kumar, Faculty Innovation Coordinator</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recognition" className="space-y-6">
          <div className="space-y-4">
            {recognitionAwards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-yellow-200 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white">
                      <Trophy className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-yellow-800">{award.title}</h3>
                      <p className="text-yellow-700 mt-1">{award.description}</p>
                      <div className="flex items-center space-x-4 mt-3">
                        <Badge variant="outline" className="border-yellow-400 text-yellow-700">
                          {award.category}
                        </Badge>
                        <span className="text-sm text-yellow-600">{award.date}</span>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contribution Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Patron Status Achieved</p>
                    <p className="text-sm text-gray-600">Reached ₹2,50,000 total contribution milestone</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Top 3 Donor Ranking</p>
                    <p className="text-sm text-gray-600">Among the highest contributing alumni</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Multi-Category Impact</p>
                    <p className="text-sm text-gray-600">Contributed to 4+ different project categories</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Next Milestone: ₹5,00,000</p>
                    <p className="text-sm text-gray-600">Progress towards Distinguished Patron status</p>
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