import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
// import { DatePicker } from "@/components/ui/date-picker"; // Component not available
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Download, 
  Filter,
  Calendar,
  Users,
  GraduationCap,
  BarChart3,
  PieChart,
  TrendingUp,
  Building,
  DollarSign,
  Clock,
  Target,
  CheckCircle
} from "lucide-react";

export default function CustomizedReports() {
  const [selectedFilters, setSelectedFilters] = useState({
    reportType: "",
    dateRange: "semester",
    departments: [],
    academicYear: "2023-24",
    includeFinancial: false,
    includeGrievances: false
  });

  const [reportProgress, setReportProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const reportTypes = [
    {
      id: "academic-performance",
      title: "Academic Performance Report",
      description: "Comprehensive academic analytics across departments",
      icon: GraduationCap,
      metrics: ["Student Grades", "Pass Rates", "CGPA Distribution", "Course Completion"]
    },
    {
      id: "attendance-analytics",
      title: "Attendance Analytics Report",
      description: "Detailed attendance patterns and trends",
      icon: Clock,
      metrics: ["Attendance Rates", "Absenteeism Patterns", "Subject-wise Analysis", "Time-based Trends"]
    },
    {
      id: "financial-summary",
      title: "Financial Summary Report",
      description: "Revenue, expenses, and budget utilization analysis",
      icon: DollarSign,
      metrics: ["Fee Collection", "Scholarship Disbursement", "Budget Utilization", "Revenue Streams"]
    },
    {
      id: "grievance-analytics",
      title: "Grievance & Feedback Analysis",
      description: "Student feedback patterns and resolution metrics",
      icon: CheckCircle,
      metrics: ["Resolution Rates", "Response Times", "Category Analysis", "Satisfaction Scores"]
    },
    {
      id: "departmental-comparison",
      title: "Departmental Comparison Report",
      description: "Cross-departmental performance benchmarking",
      icon: Building,
      metrics: ["Performance Rankings", "Resource Utilization", "Faculty Efficiency", "Student Outcomes"]
    },
    {
      id: "strategic-dashboard",
      title: "Strategic Executive Summary",
      description: "High-level KPIs and strategic insights for leadership",
      icon: Target,
      metrics: ["Strategic Goals", "Competitive Analysis", "Growth Metrics", "Risk Assessment"]
    }
  ];

  const departments = [
    "Computer Science & Engineering",
    "Mechanical Engineering", 
    "Electronics & Telecommunication",
    "Information Technology",
    "Civil Engineering",
    "Instrumentation & Control",
    "Production Engineering",
    "Metallurgy & Materials Science"
  ];

  const recentReports = [
    {
      title: "Q1 Academic Performance Analysis",
      type: "Academic Performance",
      generated: "2024-03-20",
      status: "completed",
      downloadUrl: "#",
      insights: "85% students showing improved performance, CSE leading with 8.9 avg CGPA"
    },
    {
      title: "Monthly Attendance Report - March",
      type: "Attendance Analytics", 
      generated: "2024-03-15",
      status: "completed",
      downloadUrl: "#",
      insights: "Overall attendance at 89%, Friday showing lowest attendance rates"
    },
    {
      title: "Fee Collection Status - Semester 2",
      type: "Financial Summary",
      generated: "2024-03-10",
      status: "completed", 
      downloadUrl: "#",
      insights: "94% fee collection rate, ₹2.3Cr pending from hostel fees"
    },
    {
      title: "Grievance Resolution Analytics",
      type: "Grievance Analysis",
      generated: "2024-03-08",
      status: "completed",
      downloadUrl: "#",
      insights: "73% resolution rate, average response time reduced to 8.5 days"
    }
  ];

  const handleGenerateReport = () => {
    if (!selectedFilters.reportType) {
      alert("Please select a report type");
      return;
    }

    setIsGenerating(true);
    setReportProgress(0);

    // Simulate report generation progress
    const interval = setInterval(() => {
      setReportProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          alert("Report generated successfully! Download link will be available shortly.");
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 p-3 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Customized Reports</h1>
          <p className="text-gray-600">Generate comprehensive analytics and insights for university management</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Report
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Templates
          </Button>
        </div>
      </div>

      <Tabs defaultValue="generate" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="generate">Generate New Report</TabsTrigger>
          <TabsTrigger value="recent">Recent Reports</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Report Type Selection */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span>Select Report Type</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {reportTypes.map((report) => {
                      const IconComponent = report.icon;
                      return (
                        <div
                          key={report.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedFilters.reportType === report.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedFilters(prev => ({ ...prev, reportType: report.id }))}
                        >
                          <div className="flex items-start space-x-3">
                            <IconComponent className="h-6 w-6 text-blue-600 mt-1" />
                            <div>
                              <h3 className="font-semibold text-sm">{report.title}</h3>
                              <p className="text-xs text-gray-600 mb-2">{report.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {report.metrics.slice(0, 2).map((metric, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {metric}
                                  </Badge>
                                ))}
                                {report.metrics.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{report.metrics.length - 2} more
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-purple-600" />
                  <span>Report Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Academic Year</Label>
                  <Select value={selectedFilters.academicYear} onValueChange={(value) =>
                    setSelectedFilters(prev => ({ ...prev, academicYear: value }))
                  }>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023-24">2023-24</SelectItem>
                      <SelectItem value="2022-23">2022-23</SelectItem>
                      <SelectItem value="2021-22">2021-22</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium">Time Period</Label>
                  <Select value={selectedFilters.dateRange} onValueChange={(value) =>
                    setSelectedFilters(prev => ({ ...prev, dateRange: value }))
                  }>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semester">Current Semester</SelectItem>
                      <SelectItem value="quarter">Last Quarter</SelectItem>
                      <SelectItem value="month">Last Month</SelectItem>
                      <SelectItem value="year">Full Academic Year</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2 block">Departments (Optional)</Label>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {departments.slice(0, 4).map((dept, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={dept} className="text-xs" />
                        <Label htmlFor={dept} className="text-xs">{dept}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="financial"
                      checked={selectedFilters.includeFinancial}
                      onCheckedChange={(checked) =>
                        setSelectedFilters(prev => ({ ...prev, includeFinancial: !!checked }))
                      }
                    />
                    <Label htmlFor="financial" className="text-sm">Include Financial Data</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="grievances"
                      checked={selectedFilters.includeGrievances}
                      onCheckedChange={(checked) =>
                        setSelectedFilters(prev => ({ ...prev, includeGrievances: !!checked }))
                      }
                    />
                    <Label htmlFor="grievances" className="text-sm">Include Grievance Data</Label>
                  </div>
                </div>

                {/* Generate Report Button */}
                <div className="pt-4">
                  {isGenerating ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Generating Report...</span>
                        <span>{reportProgress}%</span>
                      </div>
                      <Progress value={reportProgress} className="h-2" />
                    </div>
                  ) : (
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={handleGenerateReport}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>Recent Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{report.title}</h3>
                        <p className="text-sm text-gray-600">{report.type} • Generated on {report.generated}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded text-sm">
                      <strong>Key Insight:</strong> {report.insights}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span>Scheduled Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Scheduled Reports</h3>
                <p className="text-gray-600 mb-4">Set up automated report generation for regular insights</p>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule New Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">247</p>
            <p className="text-sm text-gray-600">Reports Generated</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">45</p>
            <p className="text-sm text-gray-600">Active Users</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">98%</p>
            <p className="text-sm text-gray-600">Accuracy Rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto text-orange-600 mb-2" />
            <p className="text-2xl font-bold">2.3s</p>
            <p className="text-sm text-gray-600">Avg Generation Time</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}