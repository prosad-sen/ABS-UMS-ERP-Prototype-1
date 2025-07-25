import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Target, 
  Award,
  BarChart3,
  PieChart,
  Calendar,
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export default function VCFinances() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("fiscal-year");

  const financialKPIs = {
    totalRevenue: 45.6, // in crores
    operationalCosts: 32.4,
    profitMargin: 28.9,
    researchFunding: 12.3,
    tuitionRevenue: 28.4,
    consultancyRevenue: 8.7,
    grantRevenue: 8.5,
    cashFlow: 13.2
  };

  const departmentBudgets = [
    { 
      name: "Computer Science", 
      allocation: 8.2, 
      spent: 6.8, 
      utilization: 83,
      roi: 145,
      studentRevenue: 9.4
    },
    { 
      name: "Mechanical Engineering", 
      allocation: 7.1, 
      spent: 6.2, 
      utilization: 87,
      roi: 128,
      studentRevenue: 7.8
    },
    { 
      name: "Electronics & Telecom", 
      allocation: 6.8, 
      spent: 5.9, 
      utilization: 87,
      roi: 132,
      studentRevenue: 7.2
    },
    { 
      name: "Information Technology", 
      allocation: 7.8, 
      spent: 6.9, 
      utilization: 88,
      roi: 142,
      studentRevenue: 8.9
    },
    { 
      name: "Civil Engineering", 
      allocation: 5.4, 
      spent: 4.8, 
      utilization: 89,
      roi: 118,
      studentRevenue: 6.1
    }
  ];

  const revenueStreams = [
    {
      source: "Tuition Fees",
      amount: 28.4,
      growth: 12.3,
      percentage: 62.3,
      trend: "up"
    },
    {
      source: "Research Grants",
      amount: 12.3,
      growth: 34.7,
      percentage: 27.0,
      trend: "up"
    },
    {
      source: "Consultancy Services",
      amount: 3.2,
      growth: 18.9,
      percentage: 7.0,
      trend: "up"
    },
    {
      source: "Industry Partnerships",
      amount: 1.7,
      growth: 45.2,
      percentage: 3.7,
      trend: "up"
    }
  ];

  const financialGoals = [
    {
      goal: "₹50Cr Revenue Target",
      current: 45.6,
      target: 50.0,
      progress: 91.2,
      timeline: "FY 2024-25"
    },
    {
      goal: "Research Funding Growth",
      current: 12.3,
      target: 15.0,
      progress: 82.0,
      timeline: "Q3 2025"
    },
    {
      goal: "Cost Optimization",
      current: 32.4,
      target: 30.0,
      progress: 92.3,
      timeline: "Q2 2025"
    },
    {
      goal: "Endowment Fund",
      current: 8.7,
      target: 12.0,
      progress: 72.5,
      timeline: "FY 2025-26"
    }
  ];

  const investmentPriorities = [
    {
      area: "Digital Infrastructure",
      allocation: 4.5,
      spent: 3.2,
      impact: "Enhanced online learning capabilities",
      roi: "238%",
      status: "on-track"
    },
    {
      area: "Research Equipment",
      allocation: 3.8,
      spent: 2.9,
      impact: "Advanced lab facilities for innovation",
      roi: "187%",
      status: "on-track"
    },
    {
      area: "Faculty Development",
      allocation: 2.1,
      spent: 1.8,
      impact: "International collaborations & training",
      roi: "156%",
      status: "ahead"
    },
    {
      area: "Campus Infrastructure",
      allocation: 5.2,
      spent: 4.1,
      impact: "Modern facilities & sustainability",
      roi: "142%",
      status: "on-track"
    }
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-blue-900 text-white p-6 rounded-lg shadow-xl">
        <div className="flex items-center space-x-3">
          <DollarSign className="h-8 w-8 text-yellow-400" />
          <div>
            <h1 className="text-3xl font-bold">Financial Oversight Dashboard</h1>
            <p className="text-green-100">Strategic Financial Management & Investment Analytics</p>
          </div>
        </div>
      </div>

      {/* Executive Financial KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Total Revenue</p>
                <p className="text-3xl font-bold">₹{financialKPIs.totalRevenue}Cr</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+18.3%</span>
                </div>
              </div>
              <DollarSign className="h-10 w-10 text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Profit Margin</p>
                <p className="text-3xl font-bold">{financialKPIs.profitMargin}%</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+4.7%</span>
                </div>
              </div>
              <Target className="h-10 w-10 text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Research Funding</p>
                <p className="text-3xl font-bold">₹{financialKPIs.researchFunding}Cr</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+34.7%</span>
                </div>
              </div>
              <Award className="h-10 w-10 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Cash Flow</p>
                <p className="text-3xl font-bold">₹{financialKPIs.cashFlow}Cr</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+12.1%</span>
                </div>
              </div>
              <BarChart3 className="h-10 w-10 text-orange-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="revenue" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="revenue">Revenue Analysis</TabsTrigger>
          <TabsTrigger value="budgets">Department Budgets</TabsTrigger>
          <TabsTrigger value="investments">Strategic Investments</TabsTrigger>
          <TabsTrigger value="goals">Financial Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Streams Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueStreams.map((stream, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{stream.source}</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold">₹{stream.amount}Cr</span>
                          <Badge className={stream.trend === 'up' ? 'bg-green-500' : 'bg-red-500'}>
                            {stream.trend === 'up' ? (
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-3 w-3 mr-1" />
                            )}
                            {stream.growth}%
                          </Badge>
                        </div>
                      </div>
                      <Progress value={stream.percentage} className="h-2" />
                      <p className="text-xs text-gray-500">{stream.percentage}% of total revenue</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5-Year Financial Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded">
                      <p className="text-3xl font-bold text-green-600">156%</p>
                      <p className="text-sm text-gray-600">Revenue Growth</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded">
                      <p className="text-3xl font-bold text-blue-600">234%</p>
                      <p className="text-sm text-gray-600">Research Funding</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded">
                      <p className="text-3xl font-bold text-purple-600">89%</p>
                      <p className="text-sm text-gray-600">Cost Efficiency</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded">
                      <p className="text-3xl font-bold text-orange-600">167%</p>
                      <p className="text-sm text-gray-600">ROI Improvement</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="budgets" className="space-y-6">
          <div className="grid gap-4">
            {departmentBudgets.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                    <div className="lg:col-span-2">
                      <h3 className="font-bold text-lg">{dept.name}</h3>
                      <p className="text-sm text-gray-600">Budget allocation & performance</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">₹{dept.allocation}Cr</p>
                      <p className="text-xs text-gray-500">Allocated</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">₹{dept.spent}Cr</p>
                      <p className="text-xs text-gray-500">Spent</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{dept.utilization}%</p>
                      <p className="text-xs text-gray-500">Utilization</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">{dept.roi}%</p>
                      <p className="text-xs text-gray-500">ROI</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Progress value={dept.utilization} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="investments" className="space-y-6">
          <div className="grid gap-6">
            {investmentPriorities.map((investment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-bold text-xl">{investment.area}</h3>
                        <Badge className={
                          investment.status === 'ahead' ? 'bg-green-500' : 
                          investment.status === 'on-track' ? 'bg-blue-500' : 'bg-orange-500'
                        }>
                          {investment.status === 'ahead' ? 'Ahead of Schedule' : 
                           investment.status === 'on-track' ? 'On Track' : 'Needs Attention'}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{investment.impact}</p>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Allocated</p>
                          <p className="font-semibold text-blue-600">₹{investment.allocation}Cr</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Spent</p>
                          <p className="font-semibold text-green-600">₹{investment.spent}Cr</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">ROI</p>
                          <p className="font-semibold text-purple-600">{investment.roi}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Progress value={(investment.spent / investment.allocation) * 100} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {financialGoals.map((goal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{goal.goal}</h3>
                        <p className="text-sm text-gray-600">Target: {goal.timeline}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{goal.progress.toFixed(1)}%</p>
                        <p className="text-xs text-gray-500">Progress</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Current: ₹{goal.current}Cr</span>
                        <span>Target: ₹{goal.target}Cr</span>
                      </div>
                      <Progress value={goal.progress} className="h-3" />
                    </div>
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