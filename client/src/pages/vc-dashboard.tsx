import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedInfoSlider from "@/components/ui/animated-info-slider";
import VCStrategicDashboard from "@/components/analytics/vc-strategic-dashboard";
import DetailedStatsModal from "@/components/analytics/detailed-stats-modal";
import AIQuickActions from "@/components/ai/ai-quick-actions";
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  GraduationCap, 
  Building,
  DollarSign,
  Award,
  Target,
  Globe,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  FileText,
  Star,
  Crown,
  Shield,
  Zap,
  Home
} from "lucide-react";

export default function VCDashboard() {
  const [, setLocation] = useLocation();
  const [selectedTimeframe, setSelectedTimeframe] = useState("academic-year");
  const [selectedMetric, setSelectedMetric] = useState("overall");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedDetailType, setSelectedDetailType] = useState<string>("");
  const [selectedDetailTitle, setSelectedDetailTitle] = useState<string>("");

  const handleLogout = () => {
    setLocation("/");
  };

  // VC Dashboard Slider Content
  const vcSliderItems = [
    {
      id: "global-ranking",
      title: "Global University Ranking Achievement",
      description: "COEP has jumped 12 positions in QS World Rankings to #78 globally! Our research output and industry partnerships contributed significantly to this milestone achievement.",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      stats: { value: "#78", label: "Global Ranking", trend: "up" as const },
      action: { label: "View Ranking Report", onClick: () => {
        setSelectedDetailType("global-ranking");
        setSelectedDetailTitle("Global University Ranking Achievement");
        setShowDetailModal(true);
      }}
    },
    {
      id: "financial-performance",
      title: "Exceptional Financial Growth",
      description: "University revenue increased by 23% this fiscal year to ₹45.6Cr. Strategic partnerships and research grants contributed ₹12.3Cr, strengthening our financial foundation.",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      stats: { value: "₹45.6Cr", label: "Total Revenue", trend: "up" as const },
      action: { label: "Financial Dashboard", onClick: () => {
        setSelectedDetailType("financial-performance");
        setSelectedDetailTitle("Exceptional Financial Growth");
        setShowDetailModal(true);
      }}
    },
    {
      id: "research-excellence",
      title: "Research & Innovation Leadership",
      description: "67 patents published this year, placing COEP in top 5 Indian engineering institutions for innovation. Our research grants increased by 34% to ₹12.3Cr.",
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
      stats: { value: "67", label: "Patents Published", trend: "up" as const },
      action: { label: "Research Portfolio", onClick: () => {
        setSelectedDetailType("research-excellence");
        setSelectedDetailTitle("Research & Innovation Leadership");
        setShowDetailModal(true);
      }}
    },
    {
      id: "sustainability-leadership",
      title: "Sustainability & Green Campus Initiative",
      description: "COEP leads with 85% sustainability score. Solar power initiatives reduced energy costs by ₹1.2Cr annually. Carbon footprint reduced by 34% through green technology adoption.",
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-gradient-to-r from-green-600 to-teal-600",
      stats: { value: "85%", label: "Sustainability Score", trend: "up" as const },
      action: { label: "Green Campus Report", onClick: () => {
        setSelectedDetailType("sustainability-leadership");
        setSelectedDetailTitle("Sustainability & Green Campus Initiative");
        setShowDetailModal(true);
      }}
    },
    {
      id: "industry-partnerships",
      title: "Strategic Industry Alliances",
      description: "156 industry partnerships established, including collaborations with Google, Microsoft, and Amazon. Student placement rate reached 94.2% with average package of ₹15.2L.",
      icon: Building,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
      stats: { value: "156", label: "Industry Partners", trend: "up" as const },
      action: { label: "Partnership Details", onClick: () => {
        setSelectedDetailType("industry-partnerships");
        setSelectedDetailTitle("Strategic Industry Alliances");
        setShowDetailModal(true);
      }}
    }
  ];

  const executiveKPIs = {
    totalStudents: 8456,
    totalRevenue: 45.6, // in crores
    globalRanking: 78,
    industryPartnerships: 156,
    researchGrants: 12.3, // in crores
    placementRate: 94.2,
    facultyExcellence: 89,
    studentSatisfaction: 91.5,
    internationalCollaborations: 23,
    patentsPublished: 67
  };

  const strategicGoals = [
    { name: "Digital Transformation", progress: 78, target: 90, trend: "up" },
    { name: "Research Excellence", progress: 85, target: 95, trend: "up" },
    { name: "Industry Partnerships", progress: 72, target: 80, trend: "up" },
    { name: "Global Recognition", progress: 65, target: 75, trend: "stable" },
    { name: "Sustainability", progress: 82, target: 90, trend: "up" },
    { name: "Student Success", progress: 91, target: 95, trend: "up" }
  ];

  const departmentPerformance = [
    { name: "Computer Science", students: 1245, revenue: 8.9, ranking: 1, satisfaction: 94, research: 156 },
    { name: "Mechanical Engg", students: 1089, revenue: 7.2, ranking: 2, satisfaction: 89, research: 134 },
    { name: "Electronics & Telecom", students: 987, revenue: 6.8, ranking: 3, satisfaction: 91, research: 98 },
    { name: "Information Technology", students: 1156, revenue: 8.1, ranking: 4, satisfaction: 93, research: 142 },
    { name: "Civil Engineering", students: 876, revenue: 5.4, ranking: 5, satisfaction: 87, research: 78 }
  ];

  const financialMetrics = {
    totalRevenue: 45.6,
    operationalCosts: 32.4,
    profitMargin: 28.9,
    researchFunding: 12.3,
    infrastructureInvestment: 8.7,
    scholarshipDisbursement: 3.2,
    internationalPrograms: 2.1,
    digitalInfrastructure: 4.5
  };

  const competitiveAnalysis = [
    { metric: "Academic Excellence", coep: 89, iitBombay: 95, nit: 82, private: 78 },
    { metric: "Industry Connect", coep: 92, iitBombay: 94, nit: 78, private: 85 },
    { metric: "Research Output", coep: 85, iitBombay: 98, nit: 75, private: 72 },
    { metric: "Infrastructure", coep: 87, iitBombay: 92, nit: 80, private: 88 },
    { metric: "Student Satisfaction", coep: 91, iitBombay: 89, nit: 84, private: 86 }
  ];

  const boardAlerts = [
    { priority: "high", title: "QS World Rankings Opportunity", description: "Potential to move from 78th to 65th position with strategic research investments", impact: "Global Recognition" },
    { priority: "medium", title: "Industry Partnership Revenue Gap", description: "₹2.3 Cr potential revenue from pending MOU negotiations", impact: "Financial Growth" },
    { priority: "high", title: "Digital Infrastructure Modernization", description: "Critical upgrade needed to maintain competitive advantage", impact: "Operational Excellence" }
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Executive Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6 rounded-lg shadow-xl">
        <div style={{position: 'relative', width: '100%', minHeight: '80px'}}>
          <div style={{position: 'absolute', left: '0', top: '0', width: 'calc(100% - 200px)'}}>
            <div className="flex items-center space-x-3 mb-2">
              <Crown className="h-8 w-8 text-yellow-400" />
              <h1 className="text-3xl lg:text-4xl font-bold">Vice Chancellor's Dashboard</h1>
            </div>
            <p className="text-blue-100 text-lg">COEP Technological University • Strategic Command Center</p>
          </div>
          <div style={{position: 'absolute', right: '0', top: '0'}} className="flex items-center space-x-6">
            <Badge className="bg-yellow-500 text-black px-3 py-1">
              <Star className="h-4 w-4 mr-1" />
              Global Rank: #{executiveKPIs.globalRanking}
            </Badge>
            <Badge className="bg-green-500 text-white px-3 py-1">
              <Shield className="h-4 w-4 mr-1" />
              NAAC A+
            </Badge>
            <Button 
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm"
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Main
            </Button>
          </div>
        </div>
      </div>

      {/* VC Strategic Achievement Slider */}
      <div className="mb-6">
        <AnimatedInfoSlider items={vcSliderItems} />
      </div>

      {/* Executive KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Students</p>
                <p className="text-3xl font-bold">{executiveKPIs.totalStudents.toLocaleString()}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+12%</span>
                </div>
              </div>
              <Users className="h-10 w-10 text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Annual Revenue</p>
                <p className="text-3xl font-bold">₹{executiveKPIs.totalRevenue}Cr</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+18%</span>
                </div>
              </div>
              <DollarSign className="h-10 w-10 text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Placement Rate</p>
                <p className="text-3xl font-bold">87.3%</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+5%</span>
                </div>
              </div>
              <Award className="h-10 w-10 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Research Grants</p>
                <p className="text-3xl font-bold">₹{executiveKPIs.researchGrants}Cr</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+25%</span>
                </div>
              </div>
              <Target className="h-10 w-10 text-orange-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-sm">Global Partners</p>
                <p className="text-3xl font-bold">{executiveKPIs.internationalCollaborations}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+30%</span>
                </div>
              </div>
              <Globe className="h-10 w-10 text-teal-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Strategic Alerts */}
      {boardAlerts.length > 0 && (
        <Card className="border-2 border-yellow-300 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-orange-800">
              <Zap className="h-6 w-6 text-yellow-600" />
              <span>Strategic Opportunities & Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {boardAlerts.map((alert, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border-l-4 border-l-yellow-500 shadow">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={alert.priority === "high" ? "bg-red-600 text-white" : "bg-yellow-600 text-white"}>
                      {alert.priority.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">{alert.impact}</Badge>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{alert.title}</h3>
                  <p className="text-xs text-gray-700">{alert.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Executive Dashboard */}
      <Tabs defaultValue="strategic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-white shadow-lg">
          <TabsTrigger value="strategic" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Strategic Goals</TabsTrigger>
          <TabsTrigger value="financial" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">Financial</TabsTrigger>
          <TabsTrigger value="academic" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Academic Excellence</TabsTrigger>
          <TabsTrigger value="competitive" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">Competitive Analysis</TabsTrigger>
          <TabsTrigger value="governance" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">Governance</TabsTrigger>
        </TabsList>

        <TabsContent value="strategic" className="space-y-6">
          {/* Strategic Intelligence Dashboard */}
          <VCStrategicDashboard />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  <span>Strategic Goals Progress (2024-25)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {strategicGoals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{goal.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">{goal.progress}%/{goal.target}%</span>
                          {goal.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          ) : goal.trend === "down" ? (
                            <TrendingDown className="h-4 w-4 text-red-600" />
                          ) : (
                            <Activity className="h-4 w-4 text-gray-600" />
                          )}
                        </div>
                      </div>
                      <Progress value={goal.progress} className="h-3" />
                      <div className="text-xs text-gray-600">
                        Target: {goal.target}% | Gap: {goal.target - goal.progress}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                  <span>Department Revenue Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {departmentPerformance.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{dept.name}</p>
                        <p className="text-xs text-gray-600">{dept.students} students</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">₹{dept.revenue}Cr</p>
                        <p className="text-xs text-gray-600">Rank #{dept.ranking}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <span>Financial Overview (₹ Crores)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span>Total Revenue</span>
                    <span className="text-xl font-bold text-green-600">₹{financialMetrics.totalRevenue}Cr</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span>Operational Costs</span>
                    <span className="text-xl font-bold text-red-600">₹{financialMetrics.operationalCosts}Cr</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span>Profit Margin</span>
                    <span className="text-xl font-bold text-blue-600">{financialMetrics.profitMargin}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="text-center p-2 bg-purple-50 rounded">
                      <p className="text-sm text-purple-600">Research Funding</p>
                      <p className="font-bold">₹{financialMetrics.researchFunding}Cr</p>
                    </div>
                    <div className="text-center p-2 bg-orange-50 rounded">
                      <p className="text-sm text-orange-600">Infrastructure</p>
                      <p className="font-bold">₹{financialMetrics.infrastructureInvestment}Cr</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Investment Allocation Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Academic Programs (40%)</span>
                    <span className="font-bold">₹18.2Cr</span>
                  </div>
                  <Progress value={40} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Research & Innovation (27%)</span>
                    <span className="font-bold">₹12.3Cr</span>
                  </div>
                  <Progress value={27} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Infrastructure (19%)</span>
                    <span className="font-bold">₹8.7Cr</span>
                  </div>
                  <Progress value={19} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Digital Transformation (10%)</span>
                    <span className="font-bold">₹4.5Cr</span>
                  </div>
                  <Progress value={10} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Student Support (4%)</span>
                    <span className="font-bold">₹1.8Cr</span>
                  </div>
                  <Progress value={4} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="competitive" className="space-y-6">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-yellow-600" />
                <span>Competitive Benchmarking Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left p-3">Performance Metric</th>
                      <th className="text-center p-3 bg-blue-50">COEP</th>
                      <th className="text-center p-3">IIT Bombay</th>
                      <th className="text-center p-3">NIT Pune</th>
                      <th className="text-center p-3">Private Avg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitiveAnalysis.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{row.metric}</td>
                        <td className="p-3 text-center">
                          <Badge className="bg-blue-100 text-blue-800 font-bold">
                            {row.coep}%
                          </Badge>
                        </td>
                        <td className="p-3 text-center">{row.iitBombay}%</td>
                        <td className="p-3 text-center">{row.nit}%</td>
                        <td className="p-3 text-center">{row.private}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Strategic Insight:</strong> COEP leads in Industry Connect (92%) and Student Satisfaction (91%). 
                  Focus areas for improvement: Research Output gap of 13% with IIT Bombay, Infrastructure enhancement opportunity.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="governance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <span>Governance & Compliance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span>NAAC Accreditation</span>
                    <Badge className="bg-green-600 text-white">A+ Grade</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span>NBA Accreditation</span>
                    <Badge className="bg-blue-600 text-white">5/5 Programs</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span>ISO Certification</span>
                    <Badge className="bg-purple-600 text-white">ISO 9001:2015</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span>Regulatory Compliance</span>
                    <Badge className="bg-orange-600 text-white">100%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Board Meeting Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-l-green-500 bg-green-50">
                    <p className="font-medium text-sm">Digital Infrastructure Upgrade</p>
                    <p className="text-xs text-green-700">Approved: ₹4.5Cr budget allocation</p>
                  </div>
                  <div className="p-3 border-l-4 border-l-blue-500 bg-blue-50">
                    <p className="font-medium text-sm">International Partnership Expansion</p>
                    <p className="text-xs text-blue-700">In Progress: 5 new MOUs under review</p>
                  </div>
                  <div className="p-3 border-l-4 border-l-yellow-500 bg-yellow-50">
                    <p className="font-medium text-sm">Research Excellence Initiative</p>
                    <p className="text-xs text-yellow-700">Pending: Faculty hiring approval</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* AI Quick Actions for VC/Board */}
      <div className="mt-6">
        <AIQuickActions userRole="vc" userName="Vice Chancellor" />
      </div>

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