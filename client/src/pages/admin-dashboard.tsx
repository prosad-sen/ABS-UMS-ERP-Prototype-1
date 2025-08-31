import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AnimatedInfoSlider from "@/components/ui/animated-info-slider";
import AIQuickActions from "@/components/ai/ai-quick-actions";
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
  Briefcase,
  Eye,
  PieChart,
  Zap,
  Clock,
  Shield,
  Monitor,
  Database,
  Star,
  Home,
  X
} from "lucide-react";

export default function AdminDashboard() {
  console.log('Admin Dashboard component loading...');
  
  const [, setLocation] = useLocation();
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedAnalytics, setSelectedAnalytics] = useState<any>(null);
  
  console.log('Admin Dashboard fully loaded');

  const handleLogout = () => {
    setLocation("/");
  };

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
      action: { label: "View System Analytics", onClick: () => handleSliderAnalytics("system-performance") }
    },
    {
      id: "budget-optimization",
      title: "Budget Optimization Success",
      description: "Smart resource allocation saved ₹2.4Cr this quarter while improving service quality. Department efficiency scores increased across all metrics.",
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      stats: { value: "₹2.4Cr", label: "Cost Savings", trend: "up" as const },
      action: { label: "View Budget Details", onClick: () => handleSliderAnalytics("budget-optimization") }
    },
    {
      id: "grievance-resolution",
      title: "Outstanding Grievance Resolution",
      description: "Achieved 94% resolution rate with average response time of 2.1 days. Student trust in administration processes reached an all-time high of 91%.",
      icon: CheckCircle,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      stats: { value: "94%", label: "Resolution Rate", trend: "up" as const },
      action: { label: "Review Grievances", onClick: () => handleSliderAnalytics("grievance-resolution") }
    },
    {
      id: "strategic-initiatives",
      title: "Strategic Goals Achievement",
      description: "Digital transformation initiative is 87% complete. International accreditation preparation is ahead of schedule with excellent preliminary assessment scores.",
      icon: Target,
      color: "text-orange-600",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-500",
      stats: { value: "87%", label: "Transformation Complete", trend: "up" as const },
      action: { label: "View Strategic Dashboard", onClick: () => handleSliderAnalytics("strategic-initiatives") }
    }
  ];

  // Analytics handler functions
  const handleSliderAnalytics = (type: string) => {
    setSelectedAnalytics({ type, source: 'slider' });
    setShowDetailModal(true);
  };

  const handleQuickActionAnalytics = (type: string) => {
    setSelectedAnalytics({ type, source: 'quickAction' });
    setShowDetailModal(true);
  };

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
    <div className="space-y-6 px-3 lg:px-6 pt-2 pb-6">
      {/* Header */}
      <div style={{position: 'relative', width: '100%', minHeight: '80px'}}>
        <div style={{position: 'absolute', left: '0', top: '0', width: 'calc(100% - 200px)'}}>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Administrator Dashboard</h1>
          <p className="text-gray-600">Comprehensive university management and analytics</p>
        </div>
        <div style={{position: 'absolute', right: '0', top: '0'}} className="flex items-center space-x-6">
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
          <Button 
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="text-gray-600 hover:text-gray-900"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Main
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
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white cursor-pointer hover:shadow-xl transition-all group" onClick={() => handleQuickActionAnalytics("students")}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Students</p>
                <p className="text-2xl font-bold">{adminData.totalStudents.toLocaleString()}</p>
                <p className="text-blue-100 text-sm group-hover:text-white transition-colors">+156 this semester • Click for details</p>
              </div>
              <Users className="h-8 w-8 text-blue-200 group-hover:scale-110 transition-transform" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white cursor-pointer hover:shadow-xl transition-all group" onClick={() => handleQuickActionAnalytics("placements")}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Placement Rate</p>
                <p className="text-2xl font-bold">87.3%</p>
                <p className="text-green-100 text-sm group-hover:text-white transition-colors">View Analytics →</p>
              </div>
              <Briefcase className="h-8 w-8 text-green-200 group-hover:scale-110 transition-transform" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white cursor-pointer hover:shadow-xl transition-all group" onClick={() => handleQuickActionAnalytics("satisfaction")}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Satisfaction Score</p>
                <p className="text-2xl font-bold">{adminData.satisfactionScore}%</p>
                <p className="text-orange-100 text-sm group-hover:text-white transition-colors">+3% from last term • Click for details</p>
              </div>
              <Award className="h-8 w-8 text-orange-200 group-hover:scale-110 transition-transform" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white cursor-pointer hover:shadow-xl transition-all group" onClick={() => handleQuickActionAnalytics("budget")}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Budget Utilization</p>
                <p className="text-2xl font-bold">{adminData.budgetUtilization}%</p>
                <p className="text-purple-100 text-sm group-hover:text-white transition-colors">Optimal spending • View breakdown</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-200 group-hover:scale-110 transition-transform" />
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
                  <Button className="h-16 flex-col space-y-1" variant="outline" onClick={() => handleQuickActionAnalytics("manage-users")}>
                    <Users className="h-5 w-5" />
                    <span className="text-sm">Manage Users</span>
                  </Button>
                  <Button className="h-16 flex-col space-y-1" variant="outline" onClick={() => handleQuickActionAnalytics("facilities")}>
                    <Building className="h-5 w-5" />
                    <span className="text-sm">Facilities</span>
                  </Button>
                  <Button className="h-16 flex-col space-y-1" variant="outline" onClick={() => handleQuickActionAnalytics("academic-calendar")}>
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm">Academic Calendar</span>
                  </Button>
                  <Button className="h-16 flex-col space-y-1" variant="outline" onClick={() => handleQuickActionAnalytics("system-settings")}>
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

      {/* AI Quick Actions for Administrators */}
      <div className="mt-6">
        <AIQuickActions userRole="admin" userName="Administrator" />
      </div>

      {/* Comprehensive Analytics Modal */}
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="w-[95vw] max-w-6xl h-[90vh] max-h-[90vh] overflow-y-auto p-2 sm:p-6">
          <DialogHeader className="pb-3">
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2 truncate pr-2">
                {selectedAnalytics?.type === "system-performance" && <><Activity className="h-6 w-6 text-green-600" /><span>System Performance Analytics</span></>}
                {selectedAnalytics?.type === "budget-optimization" && <><DollarSign className="h-6 w-6 text-blue-600" /><span className="hidden sm:inline">Budget Optimization Details</span><span className="sm:hidden">Budget Details</span></>}
                {selectedAnalytics?.type === "grievance-resolution" && <><CheckCircle className="h-6 w-6 text-purple-600" /><span className="hidden sm:inline">Grievance Resolution Analytics</span><span className="sm:hidden">Grievances</span></>}
                {selectedAnalytics?.type === "strategic-initiatives" && <><Target className="h-6 w-6 text-orange-600" /><span className="hidden sm:inline">Strategic Goals Dashboard</span><span className="sm:hidden">Strategic Goals</span></>}
                {selectedAnalytics?.type === "students" && <><Users className="h-6 w-6 text-blue-600" /><span className="hidden sm:inline">Student Analytics Overview</span><span className="sm:hidden">Students</span></>}
                {selectedAnalytics?.type === "placements" && <><Briefcase className="h-6 w-6 text-green-600" /><span className="hidden sm:inline">Placement Analytics Dashboard</span><span className="sm:hidden">Placements</span></>}
                {selectedAnalytics?.type === "satisfaction" && <><Award className="h-6 w-6 text-orange-600" /><span className="hidden sm:inline">Satisfaction Metrics Analysis</span><span className="sm:hidden">Satisfaction</span></>}
                {selectedAnalytics?.type === "budget" && <><DollarSign className="h-6 w-6 text-purple-600" /><span className="hidden sm:inline">Budget Utilization Breakdown</span><span className="sm:hidden">Budget</span></>}
                {selectedAnalytics?.type === "manage-users" && <><Users className="h-6 w-6 text-blue-600" /><span className="hidden sm:inline">User Management Dashboard</span><span className="sm:hidden">Users</span></>}
                {selectedAnalytics?.type === "facilities" && <><Building className="h-6 w-6 text-green-600" /><span className="hidden sm:inline">Facilities Management Portal</span><span className="sm:hidden">Facilities</span></>}
                {selectedAnalytics?.type === "academic-calendar" && <><Calendar className="h-6 w-6 text-orange-600" /><span className="hidden sm:inline">Academic Calendar Management</span><span className="sm:hidden">Calendar</span></>}
                {selectedAnalytics?.type === "system-settings" && <><Settings className="h-6 w-6 text-purple-600" /><span className="hidden sm:inline">System Settings Dashboard</span><span className="sm:hidden">Settings</span></>}
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowDetailModal(false)} className="flex-shrink-0">
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* System Performance Analytics */}
            {selectedAnalytics?.type === "system-performance" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-green-600">99.8%</p>
                    <p className="text-sm text-gray-600">System Uptime</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-blue-600">2000+</p>
                    <p className="text-sm text-gray-600">Active Users</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-purple-600">99.2%</p>
                    <p className="text-sm text-gray-600">Database Performance</p>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-orange-600">0</p>
                    <p className="text-sm text-gray-600">Security Incidents</p>
                  </div>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Infrastructure Health Report</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Excellent Performance Metrics</h4>
                        <p className="text-sm text-green-700">University-wide digital infrastructure achieved 99.8% uptime this month, serving over 2000+ concurrent users with minimal latency. Student satisfaction with online services increased by 23%.</p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Server Performance</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Academic Portal</span>
                              <span className="text-green-600 font-medium">99.9%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Student Management System</span>
                              <span className="text-green-600 font-medium">99.7%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Library System</span>
                              <span className="text-green-600 font-medium">99.8%</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Response Times</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Page Load Time</span>
                              <span className="text-blue-600 font-medium">1.2s</span>
                            </div>
                            <div className="flex justify-between">
                              <span>API Response</span>
                              <span className="text-blue-600 font-medium">145ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Database Query</span>
                              <span className="text-blue-600 font-medium">89ms</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Budget Optimization Analytics */}
            {selectedAnalytics?.type === "budget-optimization" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-blue-600">₹2.4Cr</p>
                    <p className="text-sm text-gray-600">Cost Savings</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-green-600">15%</p>
                    <p className="text-sm text-gray-600">Efficiency Improvement</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-purple-600">78%</p>
                    <p className="text-sm text-gray-600">Budget Utilization</p>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-orange-600">A+</p>
                    <p className="text-sm text-gray-600">Financial Rating</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Budget Allocation Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Academic Operations</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={65} className="w-16 sm:w-24" />
                            <span className="text-sm font-medium">65%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Infrastructure</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={20} className="w-24" />
                            <span className="text-sm font-medium">20%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Research & Development</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={10} className="w-24" />
                            <span className="text-sm font-medium">10%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Student Services</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={5} className="w-24" />
                            <span className="text-sm font-medium">5%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Cost Optimization Initiatives</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="font-medium text-green-800">Energy Efficiency</p>
                          <p className="text-sm text-green-700">Saved ₹89L through LED conversion and smart HVAC systems</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="font-medium text-blue-800">Digital Transformation</p>
                          <p className="text-sm text-blue-700">Reduced paperwork costs by ₹45L with online processes</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <p className="font-medium text-purple-800">Resource Sharing</p>
                          <p className="text-sm text-purple-700">Inter-department collaboration saved ₹1.06Cr</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Strategic Goals Dashboard */}
            {selectedAnalytics?.type === "strategic-initiatives" && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-orange-600">87%</p>
                    <p className="text-sm text-gray-600">Digital Transformation</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-green-600">A+</p>
                    <p className="text-sm text-gray-600">Accreditation Status</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-blue-600">23%</p>
                    <p className="text-sm text-gray-600">Satisfaction Increase</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-purple-600">12</p>
                    <p className="text-sm text-gray-600">Strategic Initiatives</p>
                  </div>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Strategic Goals Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Digital Transformation Initiative</h4>
                        <p className="text-sm text-orange-700 mb-3">87% complete - International accreditation preparation is ahead of schedule with excellent preliminary assessment scores.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-medium">Phase 1: Infrastructure</p>
                            <p className="text-green-600">✓ Completed</p>
                          </div>
                          <div>
                            <p className="font-medium">Phase 2: Training</p>
                            <p className="text-blue-600">→ In Progress (90%)</p>
                          </div>
                          <div>
                            <p className="font-medium">Phase 3: Assessment</p>
                            <p className="text-orange-600">→ Next Quarter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Quick Action Analytics */}
            {selectedAnalytics?.type === "students" && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-blue-600">8,456</p>
                  <p className="text-sm text-gray-600">Total Enrolled</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-green-600">94%</p>
                  <p className="text-sm text-gray-600">Retention Rate</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-purple-600">8.2</p>
                  <p className="text-sm text-gray-600">Average CGPA</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-orange-600">87%</p>
                  <p className="text-sm text-gray-600">Satisfaction Score</p>
                </div>
              </div>
            )}

            {selectedAnalytics?.type === "manage-users" && (
              <div className="text-center p-8">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">User Management Portal</h3>
                <p className="text-gray-600 mb-4">Manage 8,456 students, 234 faculty, and 145 staff members across all departments.</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Users className="h-4 w-4 mr-2" />
                  Access User Management
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}