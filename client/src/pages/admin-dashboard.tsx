import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import AnimatedInfoSlider from "@/components/ui/animated-info-slider";
import { 
  Users, 
  GraduationCap, 
  Building,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  BarChart3,
  Settings,
  FileText,
  Calendar,
  Target,
  Award,
  Activity,
  Briefcase
} from "lucide-react";

export default function AdminDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");

  // Admin Dashboard Slider Content
  const adminSliderItems = [
    {
      id: "system-performance",
      title: "Exceptional System Performance",
      description: "University-wide digital infrastructure achieved 99.8% uptime this month. Student satisfaction with online services increased by 23%, setting a new institutional record.",
      icon: Activity,
      color: "text-green-600",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
      stats: { value: "99.8%", label: "System Uptime", trend: "up" as const },
      action: { label: "View System Analytics", onClick: () => window.location.href = '/management' }
    },
    {
      id: "budget-optimization",
      title: "Budget Optimization Success",
      description: "Smart resource allocation saved ₹2.4Cr this quarter while improving service quality. Department efficiency scores increased across all metrics.",
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      stats: { value: "₹2.4Cr", label: "Cost Savings", trend: "up" as const },
      action: { label: "View Budget Details", onClick: () => {} }
    },
    {
      id: "grievance-resolution",
      title: "Outstanding Grievance Resolution",
      description: "Achieved 94% resolution rate with average response time of 2.1 days. Student trust in administration processes reached an all-time high of 91%.",
      icon: CheckCircle,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      stats: { value: "94%", label: "Resolution Rate", trend: "up" as const },
      action: { label: "Review Grievances", onClick: () => window.location.href = '/grievances' }
    },
    {
      id: "strategic-initiatives",
      title: "Strategic Goals Achievement",
      description: "Digital transformation initiative is 87% complete. International accreditation preparation is ahead of schedule with excellent preliminary assessment scores.",
      icon: Target,
      color: "text-orange-600",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-500",
      stats: { value: "87%", label: "Transformation Complete", trend: "up" as const },
      action: { label: "View Strategic Dashboard", onClick: () => {} }
    }
  ];

  const adminData = {
    totalStudents: 8456,
    totalFaculty: 234,
    totalStaff: 145,
    activeGrievances: 67,
    resolvedGrievances: 189,
    pendingAdmissions: 1234,
    budgetUtilization: 78,
    satisfactionScore: 87
  };

  const departmentMetrics = [
    { name: "Computer Science", students: 1245, faculty: 42, satisfaction: 89, budget: 85 },
    { name: "Mechanical Engineering", students: 1089, faculty: 38, satisfaction: 85, budget: 78 },
    { name: "Electronics & Telecom", students: 987, faculty: 35, satisfaction: 87, budget: 82 },
    { name: "Civil Engineering", students: 876, faculty: 32, satisfaction: 83, budget: 75 },
    { name: "Information Technology", students: 1156, faculty: 41, satisfaction: 91, budget: 88 }
  ];

  const criticalAlerts = [
    { type: "urgent", message: "Server maintenance required - affecting 2000+ users", department: "IT Services" },
    { type: "high", message: "Faculty shortage in Electronics department", department: "HR" },
    { type: "medium", message: "Library renovation phase 2 approval pending", department: "Infrastructure" }
  ];

  const recentReports = [
    { title: "Monthly Academic Performance Report", department: "Academic Affairs", date: "2024-03-20", status: "completed" },
    { title: "Infrastructure Utilization Analysis", department: "Campus Services", date: "2024-03-18", status: "pending" },
    { title: "Student Satisfaction Survey Results", department: "Student Affairs", date: "2024-03-15", status: "completed" },
    { title: "Financial Budget Review Q1", department: "Finance", date: "2024-03-12", status: "in-progress" }
  ];

  const keyMetrics = {
    studentRetention: 94,
    facultyRetention: 87,
    placementRate: 92,
    researchOutput: 156,
    industryPartnerships: 45,
    internationalStudents: 234
  };

  return (
    <div className="space-y-6 p-3 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Administrator Dashboard</h1>
          <p className="text-gray-600">Comprehensive university management and analytics</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => window.location.href = '/management'}>
            <BarChart3 className="h-4 w-4 mr-2" />
            Detailed Analytics
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/reports'}>
            <FileText className="h-4 w-4 mr-2" />
            Customized Reports
          </Button>
        </div>
      </div>

      {/* Admin Achievement Slider */}
      <div className="mb-6">
        <AnimatedInfoSlider items={adminSliderItems} />
      </div>

      {/* Critical Alerts */}
      {criticalAlerts.length > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-orange-800">
              <AlertTriangle className="h-5 w-5" />
              <span>System Alerts Requiring Attention</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {criticalAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                  <div className="flex items-center space-x-3">
                    <Badge className={
                      alert.type === "urgent" ? "bg-red-600 text-white" :
                      alert.type === "high" ? "bg-orange-600 text-white" :
                      "bg-yellow-600 text-white"
                    }>
                      {alert.type.toUpperCase()}
                    </Badge>
                    <span className="text-sm">{alert.message}</span>
                  </div>
                  <Badge variant="outline">{alert.department}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Students</p>
                <p className="text-2xl font-bold">{adminData.totalStudents.toLocaleString()}</p>
                <p className="text-blue-100 text-sm">+156 this semester</p>
              </div>
              <Users className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white cursor-pointer hover:shadow-xl transition-shadow" onClick={() => window.location.href = '/student-placements'}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Placement Rate</p>
                <p className="text-2xl font-bold">87.3%</p>
                <p className="text-green-100 text-sm">View Analytics →</p>
              </div>
              <Briefcase className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Satisfaction Score</p>
                <p className="text-2xl font-bold">{adminData.satisfactionScore}%</p>
                <p className="text-orange-100 text-sm">+3% from last term</p>
              </div>
              <Award className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Budget Utilization</p>
                <p className="text-2xl font-bold">{adminData.budgetUtilization}%</p>
                <p className="text-purple-100 text-sm">Optimal spending</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Grievance Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Grievance Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Active Grievances</span>
                    <Badge className="bg-orange-100 text-orange-800">{adminData.activeGrievances}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Resolved This Month</span>
                    <Badge className="bg-green-100 text-green-800">{adminData.resolvedGrievances}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Resolution Rate</span>
                    <span className="font-medium">73.8%</span>
                  </div>
                  <Progress value={73.8} className="h-2" />
                  <Button className="w-full" onClick={() => window.location.href = '/grievances'}>
                    View Detailed Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Administrative Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button className="h-16 flex-col space-y-1" variant="outline">
                    <Users className="h-5 w-5" />
                    <span className="text-sm">Manage Users</span>
                  </Button>
                  <Button className="h-16 flex-col space-y-1" variant="outline">
                    <Building className="h-5 w-5" />
                    <span className="text-sm">Facilities</span>
                  </Button>
                  <Button className="h-16 flex-col space-y-1" variant="outline">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm">Academic Calendar</span>
                  </Button>
                  <Button className="h-16 flex-col space-y-1" variant="outline">
                    <Settings className="h-5 w-5" />
                    <span className="text-sm">System Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Performance Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Department</th>
                      <th className="text-center p-3">Students</th>
                      <th className="text-center p-3">Faculty</th>
                      <th className="text-center p-3">Satisfaction</th>
                      <th className="text-center p-3">Budget Usage</th>
                      <th className="text-center p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentMetrics.map((dept, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{dept.name}</td>
                        <td className="p-3 text-center">{dept.students.toLocaleString()}</td>
                        <td className="p-3 text-center">{dept.faculty}</td>
                        <td className="p-3 text-center">{dept.satisfaction}%</td>
                        <td className="p-3 text-center">{dept.budget}%</td>
                        <td className="p-3 text-center">
                          <Badge className={
                            dept.satisfaction >= 85 && dept.budget <= 90 ? 'bg-green-100 text-green-800' :
                            dept.satisfaction >= 80 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }>
                            {dept.satisfaction >= 85 && dept.budget <= 90 ? 'Excellent' :
                             dept.satisfaction >= 80 ? 'Good' : 'Needs Review'}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports & Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div>
                      <h3 className="font-medium">{report.title}</h3>
                      <p className="text-sm text-gray-600">{report.department} • {report.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={
                        report.status === 'completed' ? 'bg-green-100 text-green-800' :
                        report.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
                        {report.status}
                      </Badge>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Student Retention Rate</span>
                    <span className="font-bold text-green-600">{keyMetrics.studentRetention}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Faculty Retention Rate</span>
                    <span className="font-bold text-blue-600">{keyMetrics.facultyRetention}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Placement Rate</span>
                    <span className="font-bold text-purple-600">{keyMetrics.placementRate}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Research Publications</span>
                    <span className="font-bold text-orange-600">{keyMetrics.researchOutput}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strategic Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Industry Partnerships</span>
                    <span className="font-bold text-green-600">{keyMetrics.industryPartnerships}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>International Students</span>
                    <span className="font-bold text-blue-600">{keyMetrics.internationalStudents}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Digital Transformation</span>
                    <span className="font-bold text-purple-600">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sustainability Score</span>
                    <span className="font-bold text-orange-600">85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}