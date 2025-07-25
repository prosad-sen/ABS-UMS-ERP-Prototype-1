import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GrievanceAnalytics from "@/components/analytics/grievance-analytics";
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Award,
  Building,
  GraduationCap,
  Activity,
  Target,
  MessageSquare,
  Lightbulb,
  Shield
} from "lucide-react";

export default function ManagementDashboard() {
  const [selectedMetric, setSelectedMetric] = useState("grievances");

  // Management KPIs
  const managementKPIs = {
    studentSatisfaction: 87,
    grievanceResolutionRate: 71,
    averageResolutionTime: 8.5,
    activeCases: 132,
    criticalIssues: 12,
    costSavings: 6.5,
    departmentEfficiency: 78,
    studentEngagement: 92
  };

  // Department Performance
  const departmentMetrics = [
    { name: "Academic Affairs", efficiency: 89, grievances: 45, satisfaction: 91, budget: 95 },
    { name: "IT Services", efficiency: 92, grievances: 23, satisfaction: 88, budget: 87 },
    { name: "Campus Infrastructure", efficiency: 65, grievances: 67, satisfaction: 72, budget: 78 },
    { name: "Student Affairs", efficiency: 83, grievances: 34, satisfaction: 86, budget: 91 },
    { name: "Library Services", efficiency: 94, grievances: 8, satisfaction: 95, budget: 89 },
    { name: "Campus Services", efficiency: 71, grievances: 52, satisfaction: 79, budget: 85 }
  ];

  // Critical Alerts
  const criticalAlerts = [
    {
      id: 1,
      type: "urgent",
      title: "Wi-Fi Infrastructure Failure",
      description: "Campus-wide connectivity issues affecting 2,000+ students",
      department: "IT Services",
      impact: "High",
      estimatedCost: 350000,
      timeline: "24-48 hours"
    },
    {
      id: 2,
      type: "high",
      title: "Parking Space Crisis",
      description: "Student protests due to insufficient parking, safety concerns",
      department: "Campus Infrastructure", 
      impact: "Medium",
      estimatedCost: 1200000,
      timeline: "2-3 months"
    },
    {
      id: 3,
      type: "medium",
      title: "Canteen Food Quality Complaints",
      description: "Rising health and hygiene concerns, 34 complaints this week",
      department: "Campus Services",
      impact: "Medium",
      estimatedCost: 150000,
      timeline: "2-3 weeks"
    }
  ];

  // AI Recommendations
  const aiRecommendations = [
    {
      priority: "Critical",
      recommendation: "Implement emergency Wi-Fi backup systems and upgrade infrastructure",
      impactArea: "Academic Continuity",
      costBenefit: "High ROI",
      implementationTime: "1-2 months",
      stakeholder: "External Network Specialists + Internal IT"
    },
    {
      priority: "High",
      recommendation: "Deploy smart parking management system with mobile app integration",
      impactArea: "Campus Experience",
      costBenefit: "Medium ROI",
      implementationTime: "3-4 months",
      stakeholder: "Mixed Team"
    },
    {
      priority: "Medium",
      recommendation: "Establish student feedback loops for proactive issue identification",
      impactArea: "Student Satisfaction",
      costBenefit: "Very High ROI",
      implementationTime: "2-3 weeks",
      stakeholder: "Internal Team"
    }
  ];

  const getPerformanceColor = (value: number) => {
    if (value >= 85) return "text-green-600 bg-green-50";
    if (value >= 70) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case "urgent": return "border-red-500 bg-red-50";
      case "high": return "border-orange-500 bg-orange-50";
      case "medium": return "border-yellow-500 bg-yellow-50";
      default: return "border-gray-300 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6 p-3 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Management Dashboard</h1>
          <p className="text-gray-600">Strategic insights and operational analytics for COEP University</p>
        </div>
        <div className="flex space-x-2">
          <Badge className="bg-green-100 text-green-800">
            System Health: Good
          </Badge>
          <Badge className="bg-orange-100 text-orange-800">
            {criticalAlerts.length} Active Alerts
          </Badge>
        </div>
      </div>

      {/* Critical Alerts Banner */}
      {criticalAlerts.length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-800">
              <AlertTriangle className="h-5 w-5" />
              <span>Critical Issues Requiring Immediate Attention</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {criticalAlerts.map((alert) => (
                <div key={alert.id} className={`p-4 rounded-lg border-2 ${getAlertColor(alert.type)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={
                      alert.type === "urgent" ? "bg-red-600 text-white" :
                      alert.type === "high" ? "bg-orange-600 text-white" :
                      "bg-yellow-600 text-white"
                    }>
                      {alert.type.toUpperCase()}
                    </Badge>
                    <span className="text-xs text-gray-600">{alert.timeline}</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{alert.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{alert.description}</p>
                  <div className="flex justify-between text-xs">
                    <span>{alert.department}</span>
                    <span className="font-medium">₹{(alert.estimatedCost / 100000).toFixed(1)}L</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Management KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedMetric("satisfaction")}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Student Satisfaction</p>
                <p className="text-2xl font-bold text-blue-600">{managementKPIs.studentSatisfaction}%</p>
                <p className="text-xs text-green-600">+3% from last month</p>
              </div>
              <Award className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedMetric("grievances")}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Resolution Rate</p>
                <p className="text-2xl font-bold text-green-600">{managementKPIs.grievanceResolutionRate}%</p>
                <p className="text-xs text-green-600">+5% improvement</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedMetric("efficiency")}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Resolution</p>
                <p className="text-2xl font-bold text-orange-600">{managementKPIs.averageResolutionTime}d</p>
                <p className="text-xs text-green-600">-2.3d improvement</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedMetric("savings")}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Cost Savings</p>
                <p className="text-2xl font-bold text-purple-600">₹{managementKPIs.costSavings}L</p>
                <p className="text-xs text-green-600">This quarter</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Dashboard */}
      <Tabs defaultValue="grievances" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="grievances">Grievance Analytics</TabsTrigger>
          <TabsTrigger value="departments">Department Performance</TabsTrigger>
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
          <TabsTrigger value="strategic">Strategic Planning</TabsTrigger>
        </TabsList>

        <TabsContent value="grievances">
          <GrievanceAnalytics isManagementView={true} />
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
                      <th className="text-center p-3">Efficiency Score</th>
                      <th className="text-center p-3">Active Grievances</th>
                      <th className="text-center p-3">Satisfaction Rate</th>
                      <th className="text-center p-3">Budget Utilization</th>
                      <th className="text-center p-3">Overall Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentMetrics.map((dept, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{dept.name}</td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-1 rounded-full text-sm font-medium ${getPerformanceColor(dept.efficiency)}`}>
                            {dept.efficiency}%
                          </span>
                        </td>
                        <td className="p-3 text-center">{dept.grievances}</td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-1 rounded-full text-sm font-medium ${getPerformanceColor(dept.satisfaction)}`}>
                            {dept.satisfaction}%
                          </span>
                        </td>
                        <td className="p-3 text-center">{dept.budget}%</td>
                        <td className="p-3 text-center">
                          <Badge className={
                            (dept.efficiency + dept.satisfaction) / 2 >= 85 ? 'bg-green-100 text-green-800' :
                            (dept.efficiency + dept.satisfaction) / 2 >= 75 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }>
                            {(dept.efficiency + dept.satisfaction) / 2 >= 85 ? 'Excellent' :
                             (dept.efficiency + dept.satisfaction) / 2 >= 75 ? 'Good' : 'Needs Focus'}
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

        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <span>AI-Powered Strategic Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiRecommendations.map((rec, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-2">
                        <Badge className={
                          rec.priority === "Critical" ? "bg-red-600 text-white" :
                          rec.priority === "High" ? "bg-orange-600 text-white" :
                          "bg-blue-600 text-white"
                        }>
                          {rec.priority}
                        </Badge>
                        <span className="font-medium">{rec.impactArea}</span>
                      </div>
                      <Badge variant="outline">{rec.costBenefit}</Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-3">{rec.recommendation}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Implementation Timeline</p>
                        <p className="font-medium">{rec.implementationTime}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Recommended Stakeholder</p>
                        <p className="font-medium">{rec.stakeholder}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Target className="h-4 w-4 mr-1" />
                        Implement
                      </Button>
                      <Button variant="outline" size="sm">
                        Get Detailed Plan
                      </Button>
                      <Button variant="outline" size="sm">
                        Schedule Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Strategic Priorities FY 2024-25</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-blue-800">1. Digital Infrastructure Modernization</h3>
                    <p className="text-sm text-blue-600">Budget: ₹2.5 Cr | Timeline: 8 months</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h3 className="font-medium text-green-800">2. Student Experience Enhancement</h3>
                    <p className="text-sm text-green-600">Budget: ₹1.8 Cr | Timeline: 6 months</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h3 className="font-medium text-purple-800">3. Sustainability Initiatives</h3>
                    <p className="text-sm text-purple-600">Budget: ₹1.2 Cr | Timeline: 12 months</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Allocation Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Infrastructure (40%)</span>
                    <span className="font-medium">₹4.2 Cr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Academic Programs (35%)</span>
                    <span className="font-medium">₹3.7 Cr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Student Services (15%)</span>
                    <span className="font-medium">₹1.6 Cr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Research & Innovation (10%)</span>
                    <span className="font-medium">₹1.1 Cr</span>
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