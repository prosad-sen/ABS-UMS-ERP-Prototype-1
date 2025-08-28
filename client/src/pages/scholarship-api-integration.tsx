import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  DollarSign, 
  Users,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Globe,
  Building,
  Award,
  TrendingUp,
  Filter,
  Download,
  RefreshCw,
  Bell,
  Target,
  CreditCard,
  Banknote,
  HandHeart,
  Zap,
  Link,
  Database,
  Shield
} from "lucide-react";

export default function ScholarshipAPIIntegration() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [refreshing, setRefreshing] = useState(false);

  const scholarshipStats = {
    totalScholarships: 247,
    activeApplications: 89,
    totalDisbursed: "₹2.34Cr",
    studentsSupported: 456,
    averageAmount: "₹51,240",
    successRate: 67.8,
    pendingVerifications: 23,
    apiConnections: 15
  };

  const apiIntegrations = [
    {
      provider: "National Scholarship Portal (NSP)",
      status: "connected",
      scholarships: 78,
      lastSync: "2 mins ago",
      students: 234,
      disbursed: "₹1.8Cr",
      apiHealth: 98.5,
      autoSync: true
    },
    {
      provider: "UGC Scholarship Schemes",
      status: "connected",
      scholarships: 45,
      lastSync: "15 mins ago",
      students: 123,
      disbursed: "₹45L",
      apiHealth: 94.2,
      autoSync: true
    },
    {
      provider: "State Government Scholarships",
      status: "connected",
      scholarships: 34,
      lastSync: "1 hour ago",
      students: 89,
      disbursed: "₹28L",
      apiHealth: 91.7,
      autoSync: true
    },
    {
      provider: "AICTE Scholarships",
      status: "connected",
      scholarships: 29,
      lastSync: "30 mins ago",
      students: 67,
      disbursed: "₹35L",
      apiHealth: 96.8,
      autoSync: true
    },
    {
      provider: "Industry Scholarships",
      status: "partial",
      scholarships: 18,
      lastSync: "2 hours ago",
      students: 45,
      disbursed: "₹22L",
      apiHealth: 87.3,
      autoSync: false
    },
    {
      provider: "International Scholarships",
      status: "pending",
      scholarships: 12,
      lastSync: "N/A",
      students: 0,
      disbursed: "₹0",
      apiHealth: 0,
      autoSync: false
    }
  ];

  const availableScholarships = [
    {
      id: "NSP001",
      name: "Post Matric Scholarship for SC Students",
      provider: "National Scholarship Portal",
      amount: "₹2,000 - ₹12,000/year",
      eligibility: "SC category, Family income < ₹2.5L",
      deadline: "2024-09-30",
      applicants: 45,
      status: "open",
      category: "government",
      requirements: ["Income Certificate", "Caste Certificate", "Academic Records"],
      autoMatch: true
    },
    {
      id: "UGC002",
      name: "Merit-cum-Means Scholarship",
      provider: "University Grants Commission",
      amount: "₹1,000 - ₹5,000/year",
      eligibility: "Merit-based, Family income < ₹6L",
      deadline: "2024-08-15",
      applicants: 78,
      status: "open",
      category: "merit",
      requirements: ["Income Certificate", "Academic Transcripts", "Bank Details"],
      autoMatch: true
    },
    {
      id: "AICTE003",
      name: "Pragati Scholarship for Girls",
      provider: "AICTE",
      amount: "₹30,000/year + ₹2,000 incidental",
      eligibility: "Female students, Technical courses",
      deadline: "2024-07-31",
      applicants: 23,
      status: "closing_soon",
      category: "gender",
      requirements: ["Gender Certificate", "Technical Course Enrollment", "Academic Performance"],
      autoMatch: true
    },
    {
      id: "STATE004",
      name: "Maharashtra State Scholarship",
      provider: "Maharashtra Government",
      amount: "₹25,000/year",
      eligibility: "Maharashtra domicile, Family income < ₹8L",
      deadline: "2024-09-15",
      applicants: 67,
      status: "open",
      category: "state",
      requirements: ["Domicile Certificate", "Income Certificate", "Academic Records"],
      autoMatch: true
    },
    {
      id: "IND005",
      name: "TCS Scholarship Program",
      provider: "Tata Consultancy Services",
      amount: "₹50,000/year + Internship",
      eligibility: "Engineering students, CGPA > 8.0",
      deadline: "2024-08-30",
      applicants: 34,
      status: "open",
      category: "industry",
      requirements: ["Academic Transcripts", "Project Portfolio", "Recommendation Letter"],
      autoMatch: false
    }
  ];

  const studentApplications = [
    {
      studentId: "CS2021045",
      name: "Aarav Sharma",
      scholarships: 3,
      totalAmount: "₹85,000",
      approved: 2,
      pending: 1,
      lastActivity: "2 days ago",
      status: "active",
      category: "SC",
      cgpa: 8.7
    },
    {
      studentId: "EC2022089",
      name: "Priya Patel",
      scholarships: 2,
      totalAmount: "₹60,000",
      approved: 1,
      pending: 1,
      lastActivity: "1 day ago",
      status: "processing",
      category: "General",
      cgpa: 9.1
    },
    {
      studentId: "ME2020132",
      name: "Sneha Desai",
      scholarships: 4,
      totalAmount: "₹1,20,000",
      approved: 3,
      pending: 1,
      lastActivity: "3 hours ago",
      status: "active",
      category: "OBC",
      cgpa: 8.9
    },
    {
      studentId: "CV2021067",
      name: "Rohit Kumar",
      scholarships: 1,
      totalAmount: "₹30,000",
      approved: 0,
      pending: 1,
      lastActivity: "1 week ago",
      status: "under_review",
      category: "ST",
      cgpa: 8.2
    }
  ];

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate API refresh
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-600 bg-green-50';
      case 'partial': return 'text-yellow-600 bg-yellow-50';
      case 'pending': return 'text-red-600 bg-red-50';
      case 'open': return 'text-blue-600 bg-blue-50';
      case 'closing_soon': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'government': return <Building className="h-4 w-4" />;
      case 'merit': return <Award className="h-4 w-4" />;
      case 'gender': return <Users className="h-4 w-4" />;
      case 'state': return <Globe className="h-4 w-4" />;
      case 'industry': return <Building className="h-4 w-4" />;
      default: return <GraduationCap className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Scholarship API Integration Hub</h1>
              <p className="text-gray-600 mt-1">Automated Government & Private Scholarship Management</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-lg">
                <Database className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">{scholarshipStats.apiConnections} APIs Connected</span>
              </div>
              <Button 
                onClick={handleRefresh}
                disabled={refreshing}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                Sync All APIs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Scholarships</p>
                <p className="text-3xl font-bold">{scholarshipStats.totalScholarships}</p>
                <p className="text-sm text-blue-200">Across all platforms</p>
              </div>
              <GraduationCap className="h-12 w-12 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Total Disbursed</p>
                <p className="text-3xl font-bold">{scholarshipStats.totalDisbursed}</p>
                <p className="text-sm text-green-200">This academic year</p>
              </div>
              <DollarSign className="h-12 w-12 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Students Supported</p>
                <p className="text-3xl font-bold">{scholarshipStats.studentsSupported}</p>
                <p className="text-sm text-purple-200">Active beneficiaries</p>
              </div>
              <Users className="h-12 w-12 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Success Rate</p>
                <p className="text-3xl font-bold">{scholarshipStats.successRate}%</p>
                <p className="text-sm text-orange-200">Application approval</p>
              </div>
              <TrendingUp className="h-12 w-12 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="dashboard">API Dashboard</TabsTrigger>
          <TabsTrigger value="scholarships">Available Scholarships</TabsTrigger>
          <TabsTrigger value="applications">Student Applications</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">API Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Link className="h-5 w-5 mr-2 text-blue-600" />
                Connected API Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiIntegrations.map((api, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Database className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{api.provider}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getStatusColor(api.status)}>
                              {api.status}
                            </Badge>
                            <span className="text-sm text-gray-600">Last sync: {api.lastSync}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <p className="text-sm text-gray-600">API Health</p>
                          <p className="text-lg font-bold text-green-600">{api.apiHealth}%</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <RefreshCw className="h-4 w-4 mr-1" />
                          Sync
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded">
                        <p className="text-xl font-bold text-blue-600">{api.scholarships}</p>
                        <p className="text-xs text-gray-600">Scholarships</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded">
                        <p className="text-xl font-bold text-green-600">{api.students}</p>
                        <p className="text-xs text-gray-600">Students</p>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded">
                        <p className="text-xl font-bold text-purple-600">{api.disbursed}</p>
                        <p className="text-xs text-gray-600">Disbursed</p>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded">
                        <div className="flex items-center justify-center space-x-1">
                          {api.autoSync ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-orange-600" />
                          )}
                          <span className="text-xs text-gray-600">Auto Sync</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>API Performance</span>
                        <span>{api.apiHealth}%</span>
                      </div>
                      <Progress value={api.apiHealth} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scholarships" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  Available Scholarships
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Filter className="h-4 w-4 mr-1" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <Bell className="h-4 w-4 mr-1" />
                    Set Alerts
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availableScholarships.map((scholarship, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                          {getCategoryIcon(scholarship.category)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{scholarship.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{scholarship.provider}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4 text-green-600" />
                              <span className="font-medium">{scholarship.amount}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4 text-blue-600" />
                              <span>Deadline: {scholarship.deadline}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4 text-purple-600" />
                              <span>{scholarship.applicants} applicants</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge className={getStatusColor(scholarship.status)}>
                          {scholarship.status.replace('_', ' ')}
                        </Badge>
                        {scholarship.autoMatch && (
                          <Badge variant="secondary" className="text-xs">
                            <Zap className="h-3 w-3 mr-1" />
                            Auto Match
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Eligibility:</strong> {scholarship.eligibility}
                      </p>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Required Documents:</p>
                        <div className="flex flex-wrap gap-1">
                          {scholarship.requirements.map((req, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <Users className="h-4 w-4 mr-1" />
                          Match Students
                        </Button>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Export
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                Student Scholarship Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentApplications.map((student, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{student.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{student.studentId}</span>
                            <span>CGPA: {student.cgpa}</span>
                            <span>Category: {student.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(student.status)}>
                          {student.status.replace('_', ' ')}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{student.lastActivity}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded">
                        <p className="text-xl font-bold text-blue-600">{student.scholarships}</p>
                        <p className="text-xs text-gray-600">Applications</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded">
                        <p className="text-xl font-bold text-green-600">{student.approved}</p>
                        <p className="text-xs text-gray-600">Approved</p>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded">
                        <p className="text-xl font-bold text-orange-600">{student.pending}</p>
                        <p className="text-xs text-gray-600">Pending</p>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded">
                        <p className="text-xl font-bold text-purple-600">{student.totalAmount}</p>
                        <p className="text-xs text-gray-600">Total Amount</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-1" />
                          View Applications
                        </Button>
                        <Button size="sm" variant="outline">
                          <Bell className="h-4 w-4 mr-1" />
                          Send Notification
                        </Button>
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <HandHeart className="h-4 w-4 mr-1" />
                        Find More Scholarships
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Scholarship Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Government Scholarships</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Merit-based Scholarships</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Industry Scholarships</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-green-600" />
                  Success Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">94.2%</p>
                    <p className="text-sm text-gray-600">Documentation Accuracy</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">72h</p>
                    <p className="text-sm text-gray-600">Avg Processing Time</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">89.7%</p>
                    <p className="text-sm text-gray-600">Auto-matching Success</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">₹51K</p>
                    <p className="text-sm text-gray-600">Avg Scholarship Amount</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                API Configuration & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Sync Settings</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span className="text-sm">Auto-sync enabled</span>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span className="text-sm">Sync frequency</span>
                        <span className="text-sm font-medium">Every 15 minutes</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span className="text-sm">Auto-notifications</span>
                        <Badge className="bg-blue-100 text-blue-800">Enabled</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Security & Access</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span className="text-sm">API encryption</span>
                        <Badge className="bg-green-100 text-green-800">TLS 1.3</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span className="text-sm">Authentication</span>
                        <Badge className="bg-blue-100 text-blue-800">OAuth 2.0</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span className="text-sm">Rate limiting</span>
                        <span className="text-sm font-medium">1000 req/hr</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Save Configuration
                  </Button>
                  <Button variant="outline">
                    Test API Connections
                  </Button>
                  <Button variant="outline">
                    View Logs
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}