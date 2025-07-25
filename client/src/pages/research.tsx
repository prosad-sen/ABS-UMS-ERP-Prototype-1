import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  DollarSign, 
  Users, 
  TrendingUp,
  Award,
  Globe,
  FileText,
  Calendar,
  Eye,
  Download,
  Target,
  BarChart3,
  Activity
} from "lucide-react";

export default function ResearchManagement() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("projects");
  
  // Get user role to customize content
  const userRole = localStorage.getItem('userRole') || localStorage.getItem('selectedRole') || "student";

  const researchMetrics = {
    activeProjects: 47,
    totalGrants: "₹12.5Cr",
    publications: 234,
    collaborations: 18,
    phDStudents: 156,
    researchCenters: 8
  };

  const activeProjects = [
    {
      id: "PRJ001",
      title: "AI-Driven Smart Manufacturing Systems",
      pi: "Dr. Rajesh Kumar",
      department: "Computer Engineering",
      funding: "₹2.8Cr",
      agency: "DST-SERB",
      startDate: "Jan 2024",
      endDate: "Dec 2026",
      progress: 35,
      status: "Active",
      publications: 8,
      students: 12
    },
    {
      id: "PRJ002", 
      title: "Sustainable Water Treatment Technologies",
      pi: "Dr. Priya Sharma",
      department: "Chemical Engineering",
      funding: "₹1.9Cr",
      agency: "Ministry of Jal Shakti",
      startDate: "Mar 2023",
      endDate: "Feb 2026",
      progress: 68,
      status: "Active",
      publications: 15,
      students: 8
    },
    {
      id: "PRJ003",
      title: "Quantum Computing Applications in Cryptography",
      pi: "Dr. Amit Patel",
      department: "Electronics & Telecom",
      funding: "₹3.2Cr",
      agency: "DRDO",
      startDate: "Jun 2024",
      endDate: "May 2027",
      progress: 22,
      status: "Active",
      publications: 4,
      students: 15
    }
  ];

  const researchCenters = [
    {
      name: "Center for Artificial Intelligence & Machine Learning",
      head: "Dr. Neha Agarwal",
      established: "2020",
      projects: 12,
      funding: "₹8.5Cr",
      faculty: 18,
      students: 45
    },
    {
      name: "Advanced Materials Research Center",
      head: "Dr. Vikram Singh",
      established: "2018",
      projects: 8,
      funding: "₹5.2Cr",
      faculty: 12,
      students: 28
    },
    {
      name: "Sustainable Technology Innovation Hub",
      head: "Dr. Kavita Joshi",
      established: "2021",
      projects: 15,
      funding: "₹6.8Cr",
      faculty: 22,
      students: 38
    }
  ];

  const recentPublications = [
    {
      title: "Machine Learning Approaches for Predictive Maintenance in Industry 4.0",
      authors: "Kumar, R., Sharma, P., Patel, A.",
      journal: "IEEE Transactions on Industrial Informatics",
      impact: "9.112",
      year: "2024",
      citations: 23
    },
    {
      title: "Novel Membrane Technologies for Water Purification",
      authors: "Sharma, P., Singh, V., Kumar, R.",
      journal: "Journal of Membrane Science",
      impact: "8.742",
      year: "2024",
      citations: 18
    },
    {
      title: "Quantum-Safe Cryptographic Protocols for IoT Networks",
      authors: "Patel, A., Agarwal, N., Joshi, K.",
      journal: "Nature Communications",
      impact: "17.694",
      year: "2024",
      citations: 31
    }
  ];

  const fundingOpportunities = [
    {
      agency: "Science and Engineering Research Board (SERB)",
      scheme: "Core Research Grant",
      deadline: "March 15, 2025",
      maxAmount: "₹50 Lakhs",
      duration: "3 years",
      eligibility: "Regular Faculty",
      status: "Open"
    },
    {
      agency: "Department of Science & Technology",
      scheme: "Technology Development Programme",
      deadline: "April 30, 2025",
      maxAmount: "₹2 Crores",
      duration: "5 years",
      eligibility: "Associate Professor & Above",
      status: "Open"
    },
    {
      agency: "Ministry of Electronics & IT",
      scheme: "Digital India Innovation Challenge",
      deadline: "February 28, 2025",
      maxAmount: "₹1.5 Crores",
      duration: "3 years",
      eligibility: "All Faculty",
      status: "Open"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Research Management</h1>
              <p className="text-gray-600 mt-1">COEP Research & Innovation Hub</p>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <FileText className="h-4 w-4 mr-2" />
                Submit Proposal
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Research Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Research Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Active Projects</p>
                  <p className="text-2xl font-bold">{researchMetrics.activeProjects}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-blue-300" />
                    <span className="text-blue-300 text-xs">+12%</span>
                  </div>
                </div>
                <Target className="h-8 w-8 text-blue-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Total Grants</p>
                  <p className="text-2xl font-bold">{researchMetrics.totalGrants}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-green-300" />
                    <span className="text-green-300 text-xs">+25%</span>
                  </div>
                </div>
                <DollarSign className="h-8 w-8 text-green-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Publications</p>
                  <p className="text-2xl font-bold">{researchMetrics.publications}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-purple-300" />
                    <span className="text-purple-300 text-xs">+18%</span>
                  </div>
                </div>
                <BookOpen className="h-8 w-8 text-purple-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Collaborations</p>
                  <p className="text-2xl font-bold">{researchMetrics.collaborations}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-orange-300" />
                    <span className="text-orange-300 text-xs">+30%</span>
                  </div>
                </div>
                <Globe className="h-8 w-8 text-orange-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-100 text-sm">PhD Students</p>
                  <p className="text-2xl font-bold">{researchMetrics.phDStudents}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-teal-300" />
                    <span className="text-teal-300 text-xs">+8%</span>
                  </div>
                </div>
                <Users className="h-8 w-8 text-teal-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500 to-pink-700 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-100 text-sm">Research Centers</p>
                  <p className="text-2xl font-bold">{researchMetrics.researchCenters}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Activity className="h-3 w-3 text-pink-300" />
                    <span className="text-pink-300 text-xs">Active</span>
                  </div>
                </div>
                <Award className="h-8 w-8 text-pink-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Research Dashboard */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-lg">
            <TabsTrigger value="projects" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Active Projects</TabsTrigger>
            <TabsTrigger value="centers" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">Research Centers</TabsTrigger>
            <TabsTrigger value="publications" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Publications</TabsTrigger>
            <TabsTrigger value="funding" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">Funding</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="space-y-4">
              {activeProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedProject(project.id)}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <p className="text-gray-600">PI: {project.pi} • {project.department}</p>
                      </div>
                      <Badge className={`${
                        project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Funding Agency</p>
                        <p className="font-semibold">{project.agency}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Grant Amount</p>
                        <p className="font-semibold text-green-600">{project.funding}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-semibold">{project.startDate} - {project.endDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Team Size</p>
                        <p className="font-semibold">{project.students} students</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Project Progress</span>
                        <span className="text-sm text-gray-600">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">{project.publications}</span> publications • 
                        <span className="font-semibold ml-1">{project.students}</span> students involved
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="centers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {researchCenters.map((center, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{center.name}</CardTitle>
                    <p className="text-gray-600">Head: {center.head}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Established</p>
                        <p className="font-semibold">{center.established}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Active Projects</p>
                        <p className="font-semibold">{center.projects}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Total Funding</p>
                        <p className="font-semibold text-green-600">{center.funding}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Faculty</p>
                        <p className="font-semibold">{center.faculty} members</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">{center.students}</span> research students enrolled
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="publications" className="space-y-6">
            <div className="space-y-4">
              {recentPublications.map((pub, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{pub.title}</h3>
                        <p className="text-gray-600 mb-2">{pub.authors}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="font-medium">{pub.journal}</span>
                          <Badge variant="outline">Impact: {pub.impact}</Badge>
                          <span className="text-gray-600">{pub.year}</span>
                          <span className="text-blue-600">{pub.citations} citations</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="funding" className="space-y-6">
            <div className="space-y-4">
              {fundingOpportunities.map((opportunity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{opportunity.scheme}</CardTitle>
                        <p className="text-gray-600">{opportunity.agency}</p>
                      </div>
                      <Badge className={`${
                        opportunity.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {opportunity.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Max Amount</p>
                        <p className="font-semibold text-green-600">{opportunity.maxAmount}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Duration</p>
                        <p className="font-semibold">{opportunity.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Deadline</p>
                        <p className="font-semibold text-red-600">{opportunity.deadline}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Eligibility</p>
                        <p className="font-semibold">{opportunity.eligibility}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">Apply before deadline</p>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Calendar className="h-4 w-4 mr-1" />
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                    <span>Research Performance Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Publications (2024)</span>
                      <span className="font-bold text-blue-600">+18%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Grant Success Rate</span>
                      <span className="font-bold text-green-600">73%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Industry Collaborations</span>
                      <span className="font-bold text-purple-600">+25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>International Publications</span>
                      <span className="font-bold text-orange-600">+30%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-6 w-6 text-green-600" />
                    <span>Research Goals 2024-25</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Publications Target</span>
                        <span className="text-sm">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Funding Target</span>
                        <span className="text-sm">72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">PhD Enrollment</span>
                        <span className="text-sm">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}