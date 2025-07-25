import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Award,
  Target,
  BarChart3,
  BookOpen,
  Calendar,
  Star,
  Trophy,
  Activity
} from "lucide-react";

export default function VCAcademics() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("current-year");

  const academicKPIs = {
    overallGPA: 8.42,
    facultyExcellence: 89.2,
    studentSatisfaction: 91.5,
    graduationRate: 94.7,
    researchPublications: 267,
    industryProjects: 156,
    internationalExchange: 45,
    placementRate: 87.3
  };

  const departmentPerformance = [
    { 
      name: "Computer Science", 
      students: 1245, 
      avgGPA: 8.67, 
      placementRate: 92.4, 
      facultyRatio: "1:18",
      researchOutput: 89,
      industryTieups: 34
    },
    { 
      name: "Mechanical Engineering", 
      students: 1089, 
      avgGPA: 8.34, 
      placementRate: 85.7, 
      facultyRatio: "1:22",
      researchOutput: 67,
      industryTieups: 28
    },
    { 
      name: "Electronics & Telecom", 
      students: 987, 
      avgGPA: 8.51, 
      placementRate: 88.2, 
      facultyRatio: "1:20",
      researchOutput: 73,
      industryTieups: 31
    },
    { 
      name: "Information Technology", 
      students: 1156, 
      avgGPA: 8.78, 
      placementRate: 91.3, 
      facultyRatio: "1:19",
      researchOutput: 82,
      industryTieups: 37
    },
    { 
      name: "Civil Engineering", 
      students: 876, 
      avgGPA: 8.12, 
      placementRate: 78.9, 
      facultyRatio: "1:25",
      researchOutput: 45,
      industryTieups: 19
    }
  ];

  const academicInitiatives = [
    {
      title: "Digital Learning Transformation",
      progress: 87,
      description: "AI-powered personalized learning platforms",
      impact: "30% improvement in student engagement",
      budget: "₹2.3Cr",
      timeline: "Q2 2024"
    },
    {
      title: "Industry-Academia Integration",
      progress: 72,
      description: "Real-world project-based curriculum",
      impact: "45% increase in industry readiness",
      budget: "₹1.8Cr",
      timeline: "Q3 2024"
    },
    {
      title: "Research Excellence Program",
      progress: 65,
      description: "Faculty-student collaborative research",
      impact: "67% increase in publications",
      budget: "₹3.1Cr",
      timeline: "Q4 2024"
    }
  ];

  const globalBenchmarking = [
    { 
      metric: "Academic Standards", 
      coep: 89, 
      mitIndia: 95, 
      iitBombay: 96, 
      stanfordBenchmark: 98 
    },
    { 
      metric: "Faculty Excellence", 
      coep: 87, 
      mitIndia: 91, 
      iitBombay: 93, 
      stanfordBenchmark: 97 
    },
    { 
      metric: "Research Impact", 
      coep: 82, 
      mitIndia: 88, 
      iitBombay: 94, 
      stanfordBenchmark: 99 
    },
    { 
      metric: "Industry Integration", 
      coep: 92, 
      mitIndia: 85, 
      iitBombay: 87, 
      stanfordBenchmark: 94 
    }
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6 rounded-lg shadow-xl">
        <div className="flex items-center space-x-3">
          <GraduationCap className="h-8 w-8 text-yellow-400" />
          <div>
            <h1 className="text-3xl font-bold">Academic Excellence Dashboard</h1>
            <p className="text-blue-100">Strategic Academic Performance & Innovation Metrics</p>
          </div>
        </div>
      </div>

      {/* Executive Academic KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Overall GPA</p>
                <p className="text-3xl font-bold">{academicKPIs.overallGPA}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+0.23</span>
                </div>
              </div>
              <Trophy className="h-10 w-10 text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Faculty Excellence</p>
                <p className="text-3xl font-bold">{academicKPIs.facultyExcellence}%</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+4.2%</span>
                </div>
              </div>
              <Award className="h-10 w-10 text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Student Satisfaction</p>
                <p className="text-3xl font-bold">{academicKPIs.studentSatisfaction}%</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+2.1%</span>
                </div>
              </div>
              <Star className="h-10 w-10 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Placement Rate</p>
                <p className="text-3xl font-bold">{academicKPIs.placementRate}%</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-300" />
                  <span className="text-green-300 text-xs">+5.4%</span>
                </div>
              </div>
              <Target className="h-10 w-10 text-orange-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Department Performance</TabsTrigger>
          <TabsTrigger value="initiatives">Strategic Initiatives</TabsTrigger>
          <TabsTrigger value="benchmarking">Global Benchmarking</TabsTrigger>
          <TabsTrigger value="trends">Academic Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid gap-4">
            {departmentPerformance.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-2">
                      <h3 className="font-bold text-lg">{dept.name}</h3>
                      <p className="text-sm text-gray-600">{dept.students} students</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{dept.avgGPA}</p>
                      <p className="text-xs text-gray-500">Avg GPA</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{dept.placementRate}%</p>
                      <p className="text-xs text-gray-500">Placement</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{dept.facultyRatio}</p>
                      <p className="text-xs text-gray-500">Faculty Ratio</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">{dept.researchOutput}</p>
                      <p className="text-xs text-gray-500">Research Papers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-teal-600">{dept.industryTieups}</p>
                      <p className="text-xs text-gray-500">Industry Ties</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="initiatives" className="space-y-6">
          <div className="grid gap-6">
            {academicInitiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">{initiative.title}</h3>
                      <p className="text-gray-600 mb-3">{initiative.description}</p>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Impact</p>
                          <p className="font-semibold text-green-600">{initiative.impact}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Budget</p>
                          <p className="font-semibold text-blue-600">{initiative.budget}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Timeline</p>
                          <p className="font-semibold text-purple-600">{initiative.timeline}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-blue-600">{initiative.progress}%</p>
                      <p className="text-sm text-gray-500">Progress</p>
                    </div>
                  </div>
                  <Progress value={initiative.progress} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="benchmarking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Global Academic Benchmarking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {globalBenchmarking.map((benchmark, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">{benchmark.metric}</h4>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <p className="font-bold text-blue-600">{benchmark.coep}</p>
                          <p className="text-xs text-gray-500">COEP</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-green-600">{benchmark.mitIndia}</p>
                          <p className="text-xs text-gray-500">MIT India</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-purple-600">{benchmark.iitBombay}</p>
                          <p className="text-xs text-gray-500">IIT Bombay</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-orange-600">{benchmark.stanfordBenchmark}</p>
                          <p className="text-xs text-gray-500">Stanford</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <Progress value={benchmark.coep} className="h-2" />
                      <Progress value={benchmark.mitIndia} className="h-2" />
                      <Progress value={benchmark.iitBombay} className="h-2" />
                      <Progress value={benchmark.stanfordBenchmark} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>5-Year Academic Growth Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>Overall GPA Improvement</span>
                    <span className="font-bold text-green-600">+12.3%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>Faculty Publications</span>
                    <span className="font-bold text-blue-600">+45.7%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>Industry Collaborations</span>
                    <span className="font-bold text-purple-600">+67.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>International Recognition</span>
                    <span className="font-bold text-orange-600">+89.4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strategic Academic Goals 2024-25</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Top 50 Global Ranking</span>
                      <span className="font-bold">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>95% Placement Rate</span>
                      <span className="font-bold">91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>₹15Cr Research Funding</span>
                      <span className="font-bold">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>100 Industry Partners</span>
                      <span className="font-bold">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
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