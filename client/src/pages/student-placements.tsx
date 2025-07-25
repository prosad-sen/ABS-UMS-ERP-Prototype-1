import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Briefcase, 
  TrendingUp, 
  Users,
  DollarSign,
  Calendar,
  MapPin,
  Building,
  GraduationCap,
  Star,
  Trophy,
  Target,
  Clock,
  Search,
  Filter,
  FileText,
  Link,
  Award,
  ChevronUp,
  ChevronDown,
  ExternalLink,
  BookOpen,
  BarChart3,
  PieChart,
  Globe,
  Zap,
  ArrowUp,
  ArrowDown,
  Minus,
  Download,
  Eye,
  CheckCircle
} from "lucide-react";

export default function StudentPlacements() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedDetailType, setSelectedDetailType] = useState<string>("");
  const [selectedDetailTitle, setSelectedDetailTitle] = useState<string>("");

  // COEP Placement Statistics (2024)
  const placementStats = {
    totalStudents: 1247,
    placedStudents: 1089,
    placementRate: 87.3,
    highestPackage: 55.2,
    averagePackage: 12.8,
    medianPackage: 9.5,
    totalOffers: 1423,
    dreamOffers: 234,
    superDreamOffers: 67
  };

  // Top Recruiting Companies
  const topCompanies = [
    {
      name: "Microsoft",
      logo: "🏢",
      studentsHired: 23,
      averagePackage: 42.5,
      roles: ["SDE", "PM", "Data Scientist"],
      tier: "Super Dream",
      visitDate: "Dec 15, 2023"
    },
    {
      name: "Google",
      logo: "🏢", 
      studentsHired: 18,
      averagePackage: 38.2,
      roles: ["SWE", "Product Manager"],
      tier: "Super Dream",
      visitDate: "Dec 20, 2023"
    },
    {
      name: "Amazon",
      logo: "🏢",
      studentsHired: 34,
      averagePackage: 28.5,
      roles: ["SDE", "DevOps Engineer"],
      tier: "Dream",
      visitDate: "Jan 10, 2024"
    },
    {
      name: "TCS",
      logo: "🏢",
      studentsHired: 89,
      averagePackage: 7.2,
      roles: ["Developer", "Analyst"],
      tier: "Core",
      visitDate: "Sep 15, 2023"
    },
    {
      name: "Infosys",
      logo: "🏢",
      studentsHired: 76,
      averagePackage: 6.8,
      roles: ["Systems Engineer", "Specialist"],
      tier: "Core",
      visitDate: "Sep 20, 2023"
    },
    {
      name: "Flipkart",
      logo: "🏢",
      studentsHired: 21,
      averagePackage: 24.5,
      roles: ["SDE", "Product Manager"],
      tier: "Dream",
      visitDate: "Nov 25, 2023"
    }
  ];

  // Department-wise Placement Data
  const departmentStats = [
    {
      department: "Computer Science & Engineering",
      students: 234,
      placed: 221,
      rate: 94.4,
      highest: 55.2,
      average: 18.7,
      dreamOffers: 89
    },
    {
      department: "Electronics & Telecommunication",
      students: 198,
      placed: 187,
      rate: 94.4,
      highest: 45.0,
      average: 14.2,
      dreamOffers: 67
    },
    {
      department: "Information Technology",
      students: 167,
      placed: 159,
      rate: 95.2,
      highest: 42.0,
      average: 16.8,
      dreamOffers: 54
    },
    {
      department: "Mechanical Engineering",
      students: 145,
      placed: 118,
      rate: 81.4,
      highest: 28.5,
      average: 9.2,
      dreamOffers: 18
    },
    {
      department: "Civil Engineering",
      students: 123,
      placed: 97,
      rate: 78.9,
      highest: 22.0,
      average: 7.8,
      dreamOffers: 12
    },
    {
      department: "Electrical Engineering",
      students: 134,
      placed: 108,
      rate: 80.6,
      highest: 32.5,
      average: 10.5,
      dreamOffers: 21
    }
  ];

  // Recent Placement Updates
  const recentPlacements = [
    {
      student: "Priya Sharma",
      department: "CSE",
      company: "Microsoft",
      package: 52.5,
      role: "Software Development Engineer",
      date: "Jan 25, 2024",
      type: "Super Dream"
    },
    {
      student: "Arjun Patel",
      department: "ENTC",
      company: "Google",
      package: 48.0,
      role: "Software Engineer",
      date: "Jan 24, 2024",
      type: "Super Dream"
    },
    {
      student: "Kavya Joshi",
      department: "IT",
      company: "Amazon",
      package: 31.2,
      role: "SDE II",
      date: "Jan 23, 2024",
      type: "Dream"
    },
    {
      student: "Rajesh Kumar",
      department: "ME",
      company: "Bajaj Auto",
      package: 18.5,
      role: "Design Engineer",
      date: "Jan 22, 2024",
      type: "Core"
    },
    {
      student: "Sneha Desai",
      department: "Civil",
      company: "L&T Construction",
      package: 12.8,
      role: "Project Engineer",
      date: "Jan 21, 2024",
      type: "Core"
    }
  ];

  // Placement Preparation Resources
  const preparationResources = [
    {
      title: "Coding Interview Bootcamp",
      description: "Comprehensive DSA and problem-solving preparation",
      participants: 456,
      rating: 4.8,
      duration: "3 months",
      instructor: "Prof. Rajesh Kulkarni"
    },
    {
      title: "Resume Building Workshop",
      description: "Create industry-standard technical resumes",
      participants: 789,
      rating: 4.7,
      duration: "1 week",
      instructor: "Career Services Team"
    },
    {
      title: "Mock Interview Sessions",
      description: "Practice technical and HR interviews",
      participants: 623,
      rating: 4.9,
      duration: "Ongoing",
      instructor: "Industry Mentors"
    },
    {
      title: "Aptitude Training Program",
      description: "Quantitative and logical reasoning preparation",
      participants: 567,
      rating: 4.6,
      duration: "2 months",
      instructor: "Prof. Sunita Agarwal"
    }
  ];

  // Upcoming Drive Schedule
  const upcomingDrives = [
    {
      company: "Netflix",
      visitDate: "Feb 15, 2024",
      eligibleDepts: ["CSE", "IT", "ENTC"],
      roles: ["SDE", "Data Engineer"],
      package: "45-60 LPA",
      registrationDeadline: "Feb 10, 2024",
      status: "Open"
    },
    {
      company: "Adobe",
      visitDate: "Feb 20, 2024",
      eligibleDepts: ["CSE", "IT"],
      roles: ["Software Engineer", "ML Engineer"],
      package: "35-50 LPA",
      registrationDeadline: "Feb 15, 2024",
      status: "Open"
    },
    {
      company: "Goldman Sachs",
      visitDate: "Feb 25, 2024",
      eligibleDepts: ["CSE", "IT", "ENTC"],
      roles: ["Technology Analyst"],
      package: "25-35 LPA",
      registrationDeadline: "Feb 20, 2024",
      status: "Upcoming"
    },
    {
      company: "Tata Motors",
      visitDate: "Mar 1, 2024",
      eligibleDepts: ["ME", "EE"],
      roles: ["Graduate Engineer Trainee"],
      package: "8-12 LPA",
      registrationDeadline: "Feb 25, 2024",
      status: "Upcoming"
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">COEP Student Placements</h1>
          <p className="text-gray-600 mt-2">Comprehensive placement statistics, opportunities, and career guidance</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Download Report
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <ExternalLink className="h-4 w-4 mr-2" />
            Apply for Drive
          </Button>
        </div>
      </div>

      {/* Key Placement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Placement Rate</p>
                <p className="text-3xl font-bold text-green-600">{placementStats.placementRate}%</p>
                <p className="text-xs text-gray-500">{placementStats.placedStudents}/{placementStats.totalStudents} students</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Highest Package</p>
                <p className="text-3xl font-bold text-blue-600">₹{placementStats.highestPackage}L</p>
                <p className="text-xs text-gray-500">Microsoft India</p>
              </div>
              <Trophy className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Package</p>
                <p className="text-3xl font-bold text-purple-600">₹{placementStats.averagePackage}L</p>
                <p className="text-xs text-gray-500">Median: ₹{placementStats.medianPackage}L</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Offers</p>
                <p className="text-3xl font-bold text-orange-600">{placementStats.totalOffers}</p>
                <p className="text-xs text-gray-500">{placementStats.superDreamOffers} Super Dream</p>
              </div>
              <Briefcase className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="companies">Top Companies</TabsTrigger>
          <TabsTrigger value="departments">By Department</TabsTrigger>
          <TabsTrigger value="preparation">Preparation</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Drives</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Interactive Analytics Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Placement Trends Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <span>5-Year Placement Trends</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { year: "2024", rate: 87.3, packages: "12.8L avg", trend: "up" },
                    { year: "2023", rate: 84.2, packages: "11.2L avg", trend: "up" },
                    { year: "2022", rate: 79.8, packages: "9.8L avg", trend: "up" },
                    { year: "2021", rate: 72.4, packages: "8.1L avg", trend: "down" },
                    { year: "2020", rate: 76.1, packages: "7.9L avg", trend: "up" }
                  ].map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold">{data.year}</span>
                        <div className="flex items-center space-x-1">
                          {data.trend === "up" ? (
                            <ArrowUp className="h-4 w-4 text-green-600" />
                          ) : data.trend === "down" ? (
                            <ArrowDown className="h-4 w-4 text-red-600" />
                          ) : (
                            <Minus className="h-4 w-4 text-gray-600" />
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">{data.rate}%</div>
                        <div className="text-sm text-gray-600">{data.packages}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Package Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-purple-600" />
                  <span>Package Distribution (2024)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { range: "Above 30L", count: 67, percentage: 6.2, color: "bg-red-500" },
                    { range: "20-30L", count: 142, percentage: 13.0, color: "bg-orange-500" },
                    { range: "15-20L", count: 198, percentage: 18.2, color: "bg-yellow-500" },
                    { range: "10-15L", count: 285, percentage: 26.2, color: "bg-green-500" },
                    { range: "5-10L", count: 312, percentage: 28.6, color: "bg-blue-500" },
                    { range: "Below 5L", count: 85, percentage: 7.8, color: "bg-gray-500" }
                  ].map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded ${data.color}`}></div>
                        <span className="font-medium">{data.range}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold">{data.count}</span>
                        <span className="text-gray-600 ml-2">({data.percentage}%)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Department-wise Detailed Analytics */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span>Department-wise Performance Analytics</span>
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentStats.map((dept, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{dept.department}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{dept.students} students</span>
                            <span>•</span>
                            <span>{dept.placed} placed</span>
                            <span>•</span>
                            <span className="text-green-600 font-semibold">{dept.rate}% rate</span>
                            <span>•</span>
                            <span className="text-blue-600 font-semibold">{dept.dreamOffers} dream offers</span>
                          </div>
                          <Progress value={dept.rate} className="mt-2 h-2" />
                        </div>
                        
                        <div className="text-right">
                          <div className="text-xl font-bold text-blue-600">₹{dept.highest}L</div>
                          <div className="text-sm text-gray-600">Highest Package</div>
                        </div>
                        
                        <div className="text-right ml-6">
                          <div className="text-xl font-bold text-green-600">₹{dept.average}L</div>
                          <div className="text-sm text-gray-600">Average Package</div>
                        </div>

                        <ChevronDown className="h-5 w-5 text-gray-400 ml-4" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{dept.department} - Detailed Analytics</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-6 mt-4">
                        <div className="space-y-4">
                          <h4 className="font-semibold">Placement Statistics</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Total Students:</span>
                              <span className="font-bold">{dept.students}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Successfully Placed:</span>
                              <span className="font-bold text-green-600">{dept.placed}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Placement Rate:</span>
                              <span className="font-bold">{dept.rate}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Dream Offers:</span>
                              <span className="font-bold text-blue-600">{dept.dreamOffers}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold">Package Distribution</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Highest Package:</span>
                              <span className="font-bold text-blue-600">₹{dept.highest}L</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Average Package:</span>
                              <span className="font-bold">₹{dept.average}L</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Median Package:</span>
                              <span className="font-bold">₹{Math.round(dept.average * 0.8)}L</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Top 10% Average:</span>
                              <span className="font-bold text-green-600">₹{Math.round(dept.highest * 0.7)}L</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Placements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>Recent Placements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentPlacements.map((placement, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{placement.student}</h4>
                        <p className="text-sm text-gray-600">{placement.department} • {placement.role}</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="font-semibold">{placement.company}</p>
                      <Badge className={`text-xs ${
                        placement.type === 'Super Dream' ? 'bg-purple-100 text-purple-800' :
                        placement.type === 'Dream' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {placement.type}
                      </Badge>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">₹{placement.package}L</p>
                      <p className="text-xs text-gray-500">{placement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="companies" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCompanies.map((company, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{company.logo}</div>
                      <div>
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        <Badge className={`text-xs ${
                          company.tier === 'Super Dream' ? 'bg-purple-100 text-purple-800' :
                          company.tier === 'Dream' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {company.tier}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Students Hired</p>
                        <p className="text-2xl font-bold text-blue-600">{company.studentsHired}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Avg Package</p>
                        <p className="text-2xl font-bold text-green-600">₹{company.averagePackage}L</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">Roles Offered:</p>
                      <div className="flex flex-wrap gap-1">
                        {company.roles.map((role, roleIndex) => (
                          <Badge key={roleIndex} variant="outline" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-gray-500">
                      Last Visit: {company.visitDate}
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
                      View Company Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <div className="space-y-6">
            {departmentStats.map((dept, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{dept.department}</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">
                      {dept.rate}% Placement Rate
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{dept.students}</div>
                      <div className="text-sm text-gray-600">Total Students</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{dept.placed}</div>
                      <div className="text-sm text-gray-600">Students Placed</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">₹{dept.highest}L</div>
                      <div className="text-sm text-gray-600">Highest Package</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">₹{dept.average}L</div>
                      <div className="text-sm text-gray-600">Average Package</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{dept.dreamOffers}</div>
                      <div className="text-sm text-gray-600">Dream Offers</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Placement Progress</span>
                      <span>{dept.rate}%</span>
                    </div>
                    <Progress value={dept.rate} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="preparation" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preparationResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>{resource.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">{resource.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Participants</p>
                        <p className="font-semibold">{resource.participants} students</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Duration</p>
                        <p className="font-semibold">{resource.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{resource.rating}</span>
                      <span className="text-sm text-gray-600">• {resource.instructor}</span>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="space-y-4">
            {upcomingDrives.map((drive, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Building className="h-6 w-6 text-blue-600" />
                      <div>
                        <CardTitle className="text-xl">{drive.company}</CardTitle>
                        <p className="text-sm text-gray-600">Campus Drive</p>
                      </div>
                    </div>
                    <Badge className={`${
                      drive.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {drive.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-gray-600">Visit Date</p>
                      <p className="font-semibold flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {drive.visitDate}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Package Range</p>
                      <p className="font-semibold text-green-600">{drive.package}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Eligible Departments</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {drive.eligibleDepts.map((dept, deptIndex) => (
                          <Badge key={deptIndex} variant="outline" className="text-xs">
                            {dept}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Roles</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {drive.roles.map((role, roleIndex) => (
                          <Badge key={roleIndex} variant="outline" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t">
                    <div className="text-sm">
                      <span className="text-gray-600">Registration Deadline: </span>
                      <span className="font-semibold text-red-600">{drive.registrationDeadline}</span>
                    </div>
                    
                    <Button 
                      className={`${
                        drive.status === 'Open' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                      }`}
                      disabled={drive.status !== 'Open'}
                    >
                      {drive.status === 'Open' ? 'Register Now' : 'Coming Soon'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Detailed Stats Modal */}
      <DetailedStatsModal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title={selectedDetailTitle}
        type={selectedDetailType as any}
        data={{}}
      />
    </div>
  );
}