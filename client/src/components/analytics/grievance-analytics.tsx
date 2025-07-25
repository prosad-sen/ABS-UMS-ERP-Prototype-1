import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Target,
  Lightbulb,
  Award,
  Activity,
  Filter,
  Download,
  RefreshCw
} from "lucide-react";

interface AnalyticsData {
  totalGrievances: number;
  resolvedCount: number;
  averageResolutionTime: number;
  satisfactionRate: number;
  categoryBreakdown: { category: string; count: number; percentage: number }[];
  departmentPerformance: { department: string; resolved: number; pending: number; avgTime: number; satisfaction: number }[];
  trendData: { month: string; submitted: number; resolved: number }[];
  priorityDistribution: { priority: string; count: number; avgResolutionTime: number }[];
  costAnalysis: { category: string; estimatedCost: number; actualCost: number; savings: number }[];
  solutionTypes: { type: string; count: number; successRate: number }[];
  stakeholderRecommendations: {
    category: string;
    issue: string;
    recommendedStakeholder: string;
    stakeholderType: 'internal' | 'external' | 'mixed';
    estimatedCost: number;
    timeframe: string;
    successProbability: number;
    detailedSteps: string[];
  }[];
}

interface GrievanceAnalyticsProps {
  isManagementView?: boolean;
}

export default function GrievanceAnalytics({ isManagementView = false }: GrievanceAnalyticsProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState("6months");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // Comprehensive analytics data
  const analyticsData: AnalyticsData = {
    totalGrievances: 456,
    resolvedCount: 324,
    averageResolutionTime: 8.5,
    satisfactionRate: 87,
    categoryBreakdown: [
      { category: "Infrastructure", count: 98, percentage: 21.5 },
      { category: "Academic Support", count: 76, percentage: 16.7 },
      { category: "Campus Facilities", count: 89, percentage: 19.5 },
      { category: "IT Services", count: 54, percentage: 11.8 },
      { category: "Health & Safety", count: 67, percentage: 14.7 },
      { category: "Administrative", count: 42, percentage: 9.2 },
      { category: "Library Services", count: 30, percentage: 6.6 }
    ],
    departmentPerformance: [
      { department: "IT Services", resolved: 89, pending: 12, avgTime: 5.2, satisfaction: 92 },
      { department: "Campus Infrastructure", resolved: 67, pending: 23, avgTime: 12.8, satisfaction: 78 },
      { department: "Academic Affairs", resolved: 78, pending: 8, avgTime: 6.1, satisfaction: 89 },
      { department: "Student Affairs", resolved: 45, pending: 15, avgTime: 9.3, satisfaction: 85 },
      { department: "Library Services", resolved: 30, pending: 3, avgTime: 4.5, satisfaction: 94 },
      { department: "Campus Services", resolved: 56, pending: 18, avgTime: 10.7, satisfaction: 82 }
    ],
    trendData: [
      { month: "Oct 2023", submitted: 45, resolved: 38 },
      { month: "Nov 2023", submitted: 52, resolved: 41 },
      { month: "Dec 2023", submitted: 38, resolved: 44 },
      { month: "Jan 2024", submitted: 61, resolved: 48 },
      { month: "Feb 2024", submitted: 49, resolved: 56 },
      { month: "Mar 2024", submitted: 67, resolved: 52 }
    ],
    priorityDistribution: [
      { priority: "Low", count: 156, avgResolutionTime: 12.3 },
      { priority: "Medium", count: 198, avgResolutionTime: 8.7 },
      { priority: "High", count: 78, avgResolutionTime: 5.2 },
      { priority: "Urgent", count: 24, avgResolutionTime: 2.1 }
    ],
    costAnalysis: [
      { category: "Infrastructure", estimatedCost: 2500000, actualCost: 2100000, savings: 400000 },
      { category: "IT Services", estimatedCost: 800000, actualCost: 720000, savings: 80000 },
      { category: "Campus Facilities", estimatedCost: 1800000, actualCost: 1650000, savings: 150000 },
      { category: "Academic Support", estimatedCost: 600000, actualCost: 580000, savings: 20000 }
    ],
    solutionTypes: [
      { type: "Student-Suggested", count: 123, successRate: 78 },
      { type: "AI-Generated", count: 89, successRate: 85 },
      { type: "Department-Proposed", count: 156, successRate: 72 },
      { type: "External-Consultant", count: 34, successRate: 91 }
    ],
    stakeholderRecommendations: [
      {
        category: "Infrastructure",
        issue: "Wi-Fi Connectivity Campus-wide",
        recommendedStakeholder: "Hybrid Team: Internal IT + External Network Specialists",
        stakeholderType: "mixed",
        estimatedCost: 3500000,
        timeframe: "3-4 months",
        successProbability: 92,
        detailedSteps: [
          "Conduct comprehensive network audit (Internal IT - 2 weeks)",
          "Design mesh network architecture (External specialists - 3 weeks)", 
          "Procurement of enterprise-grade equipment (Mixed team - 4 weeks)",
          "Phased installation across campus zones (Mixed team - 8 weeks)",
          "Testing, optimization and staff training (Internal IT - 2 weeks)"
        ]
      },
      {
        category: "Campus Facilities",
        issue: "Parking Space Optimization",
        recommendedStakeholder: "External Urban Planning Consultants + Internal Campus Services",
        stakeholderType: "mixed",
        estimatedCost: 12000000,
        timeframe: "6-8 months",
        successProbability: 88,
        detailedSteps: [
          "Traffic flow and usage pattern analysis (External consultants - 4 weeks)",
          "Multi-level parking structure design (External architects - 6 weeks)",
          "Environmental clearance and permits (Mixed team - 8 weeks)",
          "Construction with smart parking technology (External contractors - 16 weeks)",
          "Integration with campus management systems (Internal team - 3 weeks)"
        ]
      },
      {
        category: "Academic Support",
        issue: "Enhanced Learning Management System",
        recommendedStakeholder: "Internal IT Team + Faculty Advisory Committee",
        stakeholderType: "internal",
        estimatedCost: 850000,
        timeframe: "4-5 months",
        successProbability: 85,
        detailedSteps: [
          "Requirements gathering from faculty and students (Internal - 3 weeks)",
          "LMS platform evaluation and selection (Internal - 4 weeks)",
          "Customization and integration development (Internal - 8 weeks)",
          "Faculty training and onboarding programs (Internal - 4 weeks)",
          "Gradual rollout with feedback incorporation (Internal - 6 weeks)"
        ]
      },
      {
        category: "Health & Safety",
        issue: "Campus Safety and Emergency Response",
        recommendedStakeholder: "External Security Consultants + Internal Safety Committee",
        stakeholderType: "mixed",
        estimatedCost: 2200000,
        timeframe: "2-3 months",
        successProbability: 94,
        detailedSteps: [
          "Security audit and vulnerability assessment (External - 2 weeks)",
          "Emergency response protocol design (Mixed team - 3 weeks)",
          "Safety equipment procurement and installation (External - 4 weeks)",
          "Staff training and drill programs (Mixed team - 3 weeks)",
          "Monitoring system setup and integration (External - 2 weeks)"
        ]
      }
    ]
  };

  const getPerformanceColor = (value: number, type: 'satisfaction' | 'time') => {
    if (type === 'satisfaction') {
      if (value >= 90) return 'text-green-600';
      if (value >= 80) return 'text-yellow-600';
      return 'text-red-600';
    } else {
      if (value <= 5) return 'text-green-600';
      if (value <= 10) return 'text-yellow-600';
      return 'text-red-600';
    }
  };

  const getStakeholderTypeColor = (type: string) => {
    switch (type) {
      case 'internal': return 'bg-blue-100 text-blue-800';
      case 'external': return 'bg-orange-100 text-orange-800';
      case 'mixed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isManagementView) {
    // Student view - simplified analytics
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <span>Grievance Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{analyticsData.totalGrievances}</p>
                <p className="text-sm text-gray-600">Total Submitted</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{((analyticsData.resolvedCount / analyticsData.totalGrievances) * 100).toFixed(1)}%</p>
                <p className="text-sm text-gray-600">Resolution Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">{analyticsData.averageResolutionTime}</p>
                <p className="text-sm text-gray-600">Avg Days</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{analyticsData.satisfactionRate}%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Management view - comprehensive analytics dashboard
  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Grievance Analytics Dashboard</h2>
          <p className="text-gray-600">Comprehensive insights and recommendations for issue resolution</p>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">1 Month</SelectItem>
              <SelectItem value="3months">3 Months</SelectItem>
              <SelectItem value="6months">6 Months</SelectItem>
              <SelectItem value="1year">1 Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-1" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Grievances</p>
                <p className="text-2xl font-bold">{analyticsData.totalGrievances}</p>
                <p className="text-blue-100 text-sm">+12% from last period</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Resolution Rate</p>
                <p className="text-2xl font-bold">{((analyticsData.resolvedCount / analyticsData.totalGrievances) * 100).toFixed(1)}%</p>
                <p className="text-green-100 text-sm">+5% improvement</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Avg Resolution Time</p>
                <p className="text-2xl font-bold">{analyticsData.averageResolutionTime} days</p>
                <p className="text-orange-100 text-sm">-2.3 days improvement</p>
              </div>
              <Clock className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Satisfaction Rate</p>
                <p className="text-2xl font-bold">{analyticsData.satisfactionRate}%</p>
                <p className="text-purple-100 text-sm">+3% increase</p>
              </div>
              <Award className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Category Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Grievances by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analyticsData.categoryBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.category}</span>
                          <span>{item.count} ({item.percentage}%)</span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Priority Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Priority & Resolution Time Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.priorityDistribution.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{item.priority} Priority</p>
                        <p className="text-sm text-gray-600">{item.count} grievances</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{item.avgResolutionTime} days</p>
                        <p className="text-sm text-gray-600">avg resolution</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Department</th>
                      <th className="text-center p-3">Resolved</th>
                      <th className="text-center p-3">Pending</th>
                      <th className="text-center p-3">Avg Time (days)</th>
                      <th className="text-center p-3">Satisfaction (%)</th>
                      <th className="text-center p-3">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analyticsData.departmentPerformance.map((dept, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{dept.department}</td>
                        <td className="p-3 text-center">{dept.resolved}</td>
                        <td className="p-3 text-center">{dept.pending}</td>
                        <td className={`p-3 text-center font-medium ${getPerformanceColor(dept.avgTime, 'time')}`}>
                          {dept.avgTime}
                        </td>
                        <td className={`p-3 text-center font-medium ${getPerformanceColor(dept.satisfaction, 'satisfaction')}`}>
                          {dept.satisfaction}%
                        </td>
                        <td className="p-3 text-center">
                          <Badge className={
                            dept.satisfaction >= 90 && dept.avgTime <= 5 ? 'bg-green-100 text-green-800' :
                            dept.satisfaction >= 80 && dept.avgTime <= 10 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }>
                            {dept.satisfaction >= 90 && dept.avgTime <= 5 ? 'Excellent' :
                             dept.satisfaction >= 80 && dept.avgTime <= 10 ? 'Good' : 'Needs Improvement'}
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

        <TabsContent value="costs" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cost Analysis by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.costAnalysis.map((item, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{item.category}</h3>
                        <Badge className="bg-green-100 text-green-800">
                          ₹{(item.savings / 100000).toFixed(1)}L saved
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Estimated Cost</p>
                          <p className="font-medium">₹{(item.estimatedCost / 100000).toFixed(1)}L</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Actual Cost</p>
                          <p className="font-medium">₹{(item.actualCost / 100000).toFixed(1)}L</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Solution Type Effectiveness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.solutionTypes.map((solution, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{solution.type}</h3>
                        <Badge className={
                          solution.successRate >= 85 ? 'bg-green-100 text-green-800' :
                          solution.successRate >= 75 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }>
                          {solution.successRate}% success
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>{solution.count} solutions</span>
                        <span>{solution.successRate}% success rate</span>
                      </div>
                      <Progress value={solution.successRate} className="h-2 mt-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="solutions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Solution Analysis & Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                    <h3 className="font-medium">Student Solutions</h3>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">78%</p>
                  <p className="text-sm text-gray-600">Implementation success rate</p>
                  <p className="text-xs text-gray-500 mt-2">Student-suggested solutions often provide practical, ground-level insights</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="h-5 w-5 text-purple-600" />
                    <h3 className="font-medium">AI Solutions</h3>
                  </div>
                  <p className="text-2xl font-bold text-purple-600">85%</p>
                  <p className="text-sm text-gray-600">Implementation success rate</p>
                  <p className="text-xs text-gray-500 mt-2">AI analysis provides data-driven optimization recommendations</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="h-5 w-5 text-green-600" />
                    <h3 className="font-medium">Hybrid Approach</h3>
                  </div>
                  <p className="text-2xl font-bold text-green-600">91%</p>
                  <p className="text-sm text-gray-600">Best success rate achieved</p>
                  <p className="text-xs text-gray-500 mt-2">Combining student insights with AI analysis yields optimal results</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-purple-600" />
                  <span>AI-Powered Strategic Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced analysis of grievance patterns with recommended stakeholder assignments and implementation strategies
                </p>
              </CardContent>
            </Card>

            {analyticsData.stakeholderRecommendations.map((rec, index) => (
              <Card key={index} className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{rec.issue}</CardTitle>
                      <Badge className="mt-2" variant="outline">{rec.category}</Badge>
                    </div>
                    <div className="text-right">
                      <Badge className={getStakeholderTypeColor(rec.stakeholderType)}>
                        {rec.stakeholderType} stakeholders
                      </Badge>
                      <p className="text-sm text-gray-600 mt-1">{rec.successProbability}% success probability</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Recommended Stakeholder</p>
                      <p className="text-sm">{rec.recommendedStakeholder}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Estimated Investment</p>
                      <p className="text-sm font-bold text-green-600">₹{(rec.estimatedCost / 100000).toFixed(1)} Lakhs</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Implementation Timeline</p>
                      <p className="text-sm">{rec.timeframe}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Detailed Implementation Steps</p>
                    <div className="space-y-2">
                      {rec.detailedSteps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-3 p-2 bg-gray-50 rounded">
                          <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <p className="text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Target className="h-4 w-4 mr-1" />
                      Approve Recommendation
                    </Button>
                    <Button variant="outline" size="sm">
                      Request Detailed Proposal
                    </Button>
                    <Button variant="outline" size="sm">
                      Schedule Stakeholder Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}