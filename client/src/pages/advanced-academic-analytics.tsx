import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  BookOpen,
  Award,
  Target,
  Brain,
  Zap,
  Eye,
  Download,
  Filter,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  Star,
  Globe,
  Lightbulb,
  Cpu,
  Activity,
  PieChart
} from "lucide-react";

export default function AdvancedAcademicAnalytics() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPeriod, setSelectedPeriod] = useState("current-semester");

  const academicIntelligence = {
    overallPerformance: {
      averageCGPA: 8.47,
      passRate: 94.3,
      topPerformers: 156,
      atRiskStudents: 89,
      improvementRate: 12.4,
      satisfactionScore: 4.6
    },
    departmentAnalytics: [
      {
        department: "Computer Engineering",
        students: 847,
        avgCGPA: 8.62,
        passRate: 96.8,
        employabilityScore: 94.2,
        researchIndex: 8.9,
        industryReadiness: 92.5,
        trend: "up",
        improvement: 3.2
      },
      {
        department: "Electronics & Telecom",
        students: 623,
        avgCGPA: 8.34,
        passRate: 93.7,
        employabilityScore: 89.6,
        researchIndex: 7.8,
        industryReadiness: 87.3,
        trend: "up",
        improvement: 2.1
      },
      {
        department: "Mechanical Engineering",
        students: 598,
        avgCGPA: 8.28,
        passRate: 92.4,
        employabilityScore: 86.9,
        researchIndex: 7.2,
        industryReadiness: 84.7,
        trend: "up",
        improvement: 1.8
      },
      {
        department: "Civil Engineering",
        students: 456,
        avgCGPA: 8.19,
        passRate: 91.2,
        employabilityScore: 83.4,
        researchIndex: 6.9,
        industryReadiness: 82.1,
        trend: "stable",
        improvement: 0.5
      }
    ],
    aiInsights: [
      {
        category: "Learning Pattern Analysis",
        insight: "Students show 23% better performance in morning sessions (8-11 AM)",
        impact: "High",
        recommendation: "Schedule core subjects during morning hours",
        confidence: 94.2,
        dataPoints: 15000
      },
      {
        category: "Predictive Analytics",
        insight: "89 students predicted to need academic intervention this semester",
        impact: "Critical",
        recommendation: "Initiate early mentoring programs for identified students",
        confidence: 87.8,
        dataPoints: 8945
      },
      {
        category: "Course Optimization",
        insight: "Database Systems course shows 15% knowledge gap in practical applications",
        impact: "Medium",
        recommendation: "Increase hands-on lab sessions by 30%",
        confidence: 92.1,
        dataPoints: 1247
      },
      {
        category: "Assessment Intelligence",
        insight: "Continuous assessment shows 18% higher retention than semester exams",
        impact: "High",
        recommendation: "Implement more frequent low-stakes assessments",
        confidence: 96.3,
        dataPoints: 23567
      }
    ],
    globalBenchmarking: [
      {
        metric: "Academic Excellence Index",
        coepScore: 8.47,
        nationalAvg: 7.23,
        globalAvg: 6.89,
        topUniversity: 9.12,
        percentile: 89.2
      },
      {
        metric: "Research Output per Student",
        coepScore: 2.34,
        nationalAvg: 1.67,
        globalAvg: 1.45,
        topUniversity: 3.89,
        percentile: 82.7
      },
      {
        metric: "Industry Placement Rate",
        coepScore: 91.3,
        nationalAvg: 76.8,
        globalAvg: 72.4,
        topUniversity: 96.7,
        percentile: 91.8
      },
      {
        metric: "Innovation & Patents",
        coepScore: 156,
        nationalAvg: 89,
        globalAvg: 67,
        topUniversity: 234,
        percentile: 87.4
      }
    ],
    realTimeMetrics: {
      activeStudents: 2847,
      ongoingAssessments: 23,
      liveLabSessions: 15,
      currentAttendance: 89.3,
      libraryOccupancy: 67.8,
      onlineEngagement: 94.2
    },
    learningAnalytics: [
      {
        subject: "Data Structures & Algorithms",
        difficulty: "High",
        avgScore: 7.8,
        completionRate: 89.2,
        timeSpent: "145 hrs",
        strugglingTopics: ["Dynamic Programming", "Graph Algorithms"],
        strongTopics: ["Arrays", "Linked Lists"],
        recommendedActions: ["Additional practice sessions", "Peer programming"]
      },
      {
        subject: "Database Management Systems",
        difficulty: "Medium",
        avgScore: 8.2,
        completionRate: 94.1,
        timeSpent: "98 hrs",
        strugglingTopics: ["Query Optimization", "Transaction Management"],
        strongTopics: ["SQL Basics", "ER Modeling"],
        recommendedActions: ["Industry case studies", "Performance tuning labs"]
      },
      {
        subject: "Computer Networks",
        difficulty: "Medium",
        avgScore: 7.9,
        completionRate: 91.7,
        timeSpent: "112 hrs",
        strugglingTopics: ["Network Security", "Protocol Design"],
        strongTopics: ["OSI Model", "TCP/IP"],
        recommendedActions: ["Simulation tools", "Real network labs"]
      }
    ]
  };

  const getPerformanceTrend = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Advanced Academic Analytics</h1>
              <p className="text-gray-600 mt-1">AI-Powered Insights & Predictive Academic Intelligence</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 rounded-lg">
                <Brain className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">AI Analytics Active</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Academic Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Overall CGPA</p>
                <p className="text-2xl font-bold">{academicIntelligence.overallPerformance.averageCGPA}</p>
              </div>
              <Award className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Pass Rate</p>
                <p className="text-2xl font-bold">{academicIntelligence.overallPerformance.passRate}%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Active Students</p>
                <p className="text-2xl font-bold">{academicIntelligence.realTimeMetrics.activeStudents}</p>
              </div>
              <Users className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Live Sessions</p>
                <p className="text-2xl font-bold">{academicIntelligence.realTimeMetrics.liveLabSessions}</p>
              </div>
              <Eye className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-sm">Attendance</p>
                <p className="text-2xl font-bold">{academicIntelligence.realTimeMetrics.currentAttendance}%</p>
              </div>
              <Clock className="h-8 w-8 text-teal-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm">Engagement</p>
                <p className="text-2xl font-bold">{academicIntelligence.realTimeMetrics.onlineEngagement}%</p>
              </div>
              <Activity className="h-8 w-8 text-pink-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Intelligence Overview</TabsTrigger>
          <TabsTrigger value="departments">Department Analytics</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          <TabsTrigger value="benchmarking">Global Benchmarking</TabsTrigger>
          <TabsTrigger value="learning">Learning Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Performance Indicators */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                  Academic Performance Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600">{academicIntelligence.overallPerformance.topPerformers}</p>
                    <p className="text-sm text-gray-600">Top Performers (CGPA {">"}9.0)</p>
                    <p className="text-xs text-green-600">+{academicIntelligence.overallPerformance.improvementRate}% vs last sem</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-3xl font-bold text-orange-600">{academicIntelligence.overallPerformance.atRiskStudents}</p>
                    <p className="text-sm text-gray-600">Students Needing Support</p>
                    <p className="text-xs text-red-600">Early intervention required</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">{academicIntelligence.overallPerformance.satisfactionScore}</p>
                    <p className="text-sm text-gray-600">Student Satisfaction Score</p>
                    <p className="text-xs text-green-600">Out of 5.0 scale</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-3xl font-bold text-purple-600">{academicIntelligence.overallPerformance.improvementRate}%</p>
                    <p className="text-sm text-gray-600">Overall Improvement Rate</p>
                    <p className="text-xs text-purple-600">Semester-over-semester</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <AlertTriangle className="h-4 w-4 mr-2 text-red-600" />
                  View At-Risk Students
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Star className="h-4 w-4 mr-2 text-yellow-600" />
                  Top Performers Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Target className="h-4 w-4 mr-2 text-blue-600" />
                  Learning Outcomes Analysis
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <PieChart className="h-4 w-4 mr-2 text-green-600" />
                  Course Effectiveness
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Cpu className="h-4 w-4 mr-2 text-purple-600" />
                  AI Predictions Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Department-wise Performance Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {academicIntelligence.departmentAnalytics.map((dept, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{dept.department}</h3>
                          <p className="text-sm text-gray-600">{dept.students} students</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getPerformanceTrend(dept.trend)}
                        <Badge variant="secondary">+{dept.improvement}% improvement</Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded">
                        <p className="text-xl font-bold text-blue-600">{dept.avgCGPA}</p>
                        <p className="text-xs text-gray-600">Avg CGPA</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded">
                        <p className="text-xl font-bold text-green-600">{dept.passRate}%</p>
                        <p className="text-xs text-gray-600">Pass Rate</p>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded">
                        <p className="text-xl font-bold text-purple-600">{dept.employabilityScore}%</p>
                        <p className="text-xs text-gray-600">Employability</p>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded">
                        <p className="text-xl font-bold text-orange-600">{dept.researchIndex}</p>
                        <p className="text-xs text-gray-600">Research Index</p>
                      </div>
                      <div className="text-center p-3 bg-teal-50 rounded">
                        <p className="text-xl font-bold text-teal-600">{dept.industryReadiness}%</p>
                        <p className="text-xs text-gray-600">Industry Ready</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-insights" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2 text-purple-600" />
                AI-Powered Academic Insights & Predictions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {academicIntelligence.aiInsights.map((insight, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Lightbulb className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{insight.category}</h3>
                          <p className="text-gray-700 mb-3">{insight.insight}</p>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <p className="text-sm text-green-800">
                              <strong>Recommendation:</strong> {insight.recommendation}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getImpactColor(insight.impact)}>
                          {insight.impact} Impact
                        </Badge>
                        <p className="text-sm text-gray-600 mt-2">
                          {insight.confidence}% confidence
                        </p>
                        <p className="text-xs text-gray-500">
                          {insight.dataPoints.toLocaleString()} data points
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benchmarking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-green-600" />
                Global Academic Benchmarking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {academicIntelligence.globalBenchmarking.map((benchmark, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">{benchmark.metric}</h3>
                      <Badge className="bg-blue-100 text-blue-800">
                        {benchmark.percentile}th percentile globally
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">{benchmark.coepScore}</p>
                        <p className="text-sm text-gray-600">COEP Score</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-xl font-bold text-gray-600">{benchmark.nationalAvg}</p>
                        <p className="text-sm text-gray-600">National Average</p>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <p className="text-xl font-bold text-orange-600">{benchmark.globalAvg}</p>
                        <p className="text-sm text-gray-600">Global Average</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <p className="text-xl font-bold text-green-600">{benchmark.topUniversity}</p>
                        <p className="text-sm text-gray-600">Top University</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress to Top University</span>
                        <span>{((benchmark.coepScore / benchmark.topUniversity) * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={(benchmark.coepScore / benchmark.topUniversity) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-green-600" />
                Subject-wise Learning Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {academicIntelligence.learningAnalytics.map((subject, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">{subject.subject}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant={subject.difficulty === 'High' ? 'destructive' : subject.difficulty === 'Medium' ? 'default' : 'secondary'}>
                          {subject.difficulty} Difficulty
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">
                          {subject.avgScore}/10 Avg Score
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <p className="text-xl font-bold text-blue-600">{subject.completionRate}%</p>
                        <p className="text-sm text-gray-600">Completion Rate</p>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <p className="text-xl font-bold text-purple-600">{subject.timeSpent}</p>
                        <p className="text-sm text-gray-600">Avg Time Spent</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <p className="text-xl font-bold text-green-600">{subject.avgScore}</p>
                        <p className="text-sm text-gray-600">Average Score</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Struggling Topics</h4>
                        <div className="space-y-1">
                          {subject.strugglingTopics.map((topic, idx) => (
                            <Badge key={idx} variant="destructive" className="mr-1 mb-1">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">Strong Topics</h4>
                        <div className="space-y-1">
                          {subject.strongTopics.map((topic, idx) => (
                            <Badge key={idx} className="bg-green-100 text-green-800 mr-1 mb-1">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Recommended Actions</h4>
                        <div className="space-y-1">
                          {subject.recommendedActions.map((action, idx) => (
                            <p key={idx} className="text-sm text-gray-700 bg-blue-50 p-2 rounded">
                              • {action}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}