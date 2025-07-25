import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  DollarSign, 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  TrendingDown,
  FileText,
  Download,
  Search,
  Filter,
  Users,
  Calendar,
  Target,
  PieChart,
  BarChart3
} from 'lucide-react';

export default function AdminFees() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Financial overview metrics for admin/registrar
  const financialOverview = {
    totalCollected: 2850000,
    totalOutstanding: 725000,
    pendingCollection: 425000,
    scholarshipAmount: 180000,
    refundsProcessed: 85000,
    collectionRate: 79.7
  };

  // Critical priority fee issues requiring immediate attention
  const criticalIssues = [
    {
      id: 1,
      priority: 'critical',
      category: 'Payment Default',
      description: 'Final year students with unpaid fees before graduation',
      affectedStudents: 23,
      totalAmount: 485000,
      deadline: '2024-05-15',
      department: 'Computer Engineering'
    },
    {
      id: 2,
      priority: 'critical',
      category: 'Scholarship Processing',
      description: 'Government scholarship disbursement pending verification',
      affectedStudents: 45,
      totalAmount: 675000,
      deadline: '2024-05-10',
      department: 'All Departments'
    }
  ];

  // High importance issues
  const highPriorityIssues = [
    {
      id: 3,
      priority: 'high',
      category: 'Late Fee Collection',
      description: 'Second year students with overdue semester fees',
      affectedStudents: 67,
      totalAmount: 201000,
      deadline: '2024-05-25',
      department: 'Electronics & Telecom'
    },
    {
      id: 4,
      priority: 'high',
      category: 'Fee Structure Update',
      description: 'Lab fee adjustments pending approval and implementation',
      affectedStudents: 156,
      totalAmount: 124000,
      deadline: '2024-05-20',
      department: 'Mechanical Engineering'
    }
  ];

  // Medium importance issues
  const mediumPriorityIssues = [
    {
      id: 5,
      priority: 'medium',
      category: 'Installment Planning',
      description: 'Students requesting fee payment plan modifications',
      affectedStudents: 89,
      totalAmount: 267000,
      deadline: '2024-06-01',
      department: 'Civil Engineering'
    }
  ];

  // Minor priority issues
  const minorIssues = [
    {
      id: 6,
      priority: 'minor',
      category: 'Receipt Generation',
      description: 'Duplicate receipt requests and fee receipt corrections',
      affectedStudents: 34,
      totalAmount: 0,
      deadline: '2024-06-15',
      department: 'Various'
    }
  ];

  // Department-wise fee analytics
  const departmentAnalytics = [
    {
      department: 'Computer Engineering',
      totalStudents: 1245,
      collectedAmount: 1125000,
      pendingAmount: 187500,
      collectionRate: 85.7,
      trend: 'up'
    },
    {
      department: 'Electronics & Telecom',
      totalStudents: 980,
      collectedAmount: 882000,
      pendingAmount: 147000,
      collectionRate: 85.7,
      trend: 'up'
    },
    {
      department: 'Mechanical Engineering',
      totalStudents: 1120,
      collectedAmount: 896000,
      pendingAmount: 224000,
      collectionRate: 80.0,
      trend: 'down'
    },
    {
      department: 'Civil Engineering',
      totalStudents: 856,
      collectedAmount: 642000,
      pendingAmount: 171200,
      collectionRate: 78.9,
      trend: 'stable'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'minor': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <div className="h-4 w-4 bg-gray-400 rounded-full" />;
    }
  };

  const getAllIssues = () => {
    return [...criticalIssues, ...highPriorityIssues, ...mediumPriorityIssues, ...minorIssues];
  };

  const filteredIssues = getAllIssues().filter(issue => {
    const matchesDepartment = selectedDepartment === 'all' || issue.department.includes(selectedDepartment);
    const matchesPriority = selectedPriority === 'all' || issue.priority === selectedPriority;
    const matchesSearch = issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesPriority && matchesSearch;
  });

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Fee Administration</h1>
          <p className="text-gray-600 mt-1">Comprehensive financial management and analytics for COEP</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </Button>
          <Button className="bg-coep-blue hover:bg-blue-700 flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Financial Statement</span>
          </Button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Collected</p>
                <p className="text-xl font-bold text-green-600">₹{financialOverview.totalCollected.toLocaleString()}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Outstanding</p>
                <p className="text-xl font-bold text-orange-600">₹{financialOverview.totalOutstanding.toLocaleString()}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Collection</p>
                <p className="text-xl font-bold text-red-600">₹{financialOverview.pendingCollection.toLocaleString()}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Scholarships</p>
                <p className="text-xl font-bold text-purple-600">₹{financialOverview.scholarshipAmount.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-indigo-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Refunds Processed</p>
                <p className="text-xl font-bold text-indigo-600">₹{financialOverview.refundsProcessed.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-indigo-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Collection Rate</p>
                <p className="text-xl font-bold text-green-600">{financialOverview.collectionRate}%</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="priority-analysis" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="priority-analysis">Priority Analysis</TabsTrigger>
          <TabsTrigger value="department-analytics">Department Analytics</TabsTrigger>
          <TabsTrigger value="intelligent-insights">Smart Insights</TabsTrigger>
          <TabsTrigger value="financial-reports">Financial Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="priority-analysis" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-blue-600" />
                <span>Smart Filtering & Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="Computer Engineering">Computer Engineering</SelectItem>
                      <SelectItem value="Electronics & Telecom">Electronics & Telecom</SelectItem>
                      <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                      <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="priority">Priority Level</Label>
                  <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="minor">Minor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="search">Search Issues</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Search issues..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedPriority('all');
                    setSearchTerm('');
                  }}>
                    Clear Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Priority-based Issue Cards */}
          <div className="space-y-4">
            {filteredIssues.map((issue) => (
              <Card key={issue.id} className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className={getPriorityColor(issue.priority)}>
                          {issue.priority.toUpperCase()}
                        </Badge>
                        <Badge variant="outline">{issue.category}</Badge>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>Due: {issue.deadline}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.description}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Affected Students</p>
                          <p className="text-xl font-bold text-blue-600">{issue.affectedStudents}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Financial Impact</p>
                          <p className="text-xl font-bold text-green-600">₹{issue.totalAmount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Department</p>
                          <p className="text-lg font-medium text-gray-900">{issue.department}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" className="bg-coep-blue hover:bg-blue-700">
                        Take Action
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="department-analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <span>Department-wise Fee Collection Analytics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentAnalytics.map((dept, index) => (
                  <Card key={index} className="border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{dept.department}</h3>
                        <div className="flex items-center space-x-2">
                          {getTrendIcon(dept.trend)}
                          <Badge className={
                            dept.collectionRate >= 85 ? 'bg-green-100 text-green-800' : 
                            dept.collectionRate >= 80 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }>
                            {dept.collectionRate}% Collection Rate
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Total Students</p>
                          <p className="text-xl font-bold text-blue-600">{dept.totalStudents}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Collected Amount</p>
                          <p className="text-xl font-bold text-green-600">₹{dept.collectedAmount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Pending Amount</p>
                          <p className="text-xl font-bold text-red-600">₹{dept.pendingAmount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Target Achievement</p>
                          <p className="text-xl font-bold text-purple-600">{dept.collectionRate}%</p>
                        </div>
                      </div>
                      
                      <Progress value={dept.collectionRate} className="h-3" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="intelligent-insights" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-blue-600" />
                  <span>AI-Powered Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Collection Optimization</h4>
                    <p className="text-sm text-blue-700 mt-1">Implementing automated reminders could improve collection rate by 12%</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Payment Plan Success</h4>
                    <p className="text-sm text-green-700 mt-1">Students on installment plans show 94% completion rate</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Risk Assessment</h4>
                    <p className="text-sm text-orange-700 mt-1">67 students at high risk of payment default require immediate attention</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-green-600" />
                  <span>Performance Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Monthly Collection Target</span>
                    <span className="font-bold text-green-600">87.3%</span>
                  </div>
                  <Progress value={87.3} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Default Prevention Rate</span>
                    <span className="font-bold text-blue-600">92.8%</span>
                  </div>
                  <Progress value={92.8} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Scholarship Processing Efficiency</span>
                    <span className="font-bold text-purple-600">95.1%</span>
                  </div>
                  <Progress value={95.1} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial-reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>Comprehensive Financial Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Download className="h-5 w-5" />
                  <span className="text-sm">Monthly Collection Report</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Download className="h-5 w-5" />
                  <span className="text-sm">Outstanding Dues Report</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Download className="h-5 w-5" />
                  <span className="text-sm">Scholarship Disbursement</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Download className="h-5 w-5" />
                  <span className="text-sm">Department Comparison</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Download className="h-5 w-5" />
                  <span className="text-sm">Financial Audit Trail</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Download className="h-5 w-5" />
                  <span className="text-sm">Board Financial Summary</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}