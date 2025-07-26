import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Clock,
  TrendingUp,
  UserPlus,
  FileText,
  Award,
  AlertCircle,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Search,
  Download
} from 'lucide-react';

export default function HRManagement() {
  const [activeTab, setActiveTab] = useState('employees');

  const employees = [
    {
      id: 'EMP001',
      name: 'Dr. Amit Kumar',
      designation: 'Professor',
      department: 'Computer Engineering',
      joinDate: '2015-08-15',
      salary: 145000,
      status: 'active',
      phone: '+91 9876543210',
      email: 'amit.kumar@coep.ac.in',
      qualification: 'Ph.D. Computer Science',
      experience: '15 years',
      leaveBalance: 28,
      performance: 'excellent'
    },
    {
      id: 'EMP002',
      name: 'Prof. Priya Sharma',
      designation: 'Associate Professor',
      department: 'Mechanical Engineering',
      joinDate: '2018-07-20',
      salary: 125000,
      status: 'active',
      phone: '+91 9876543211',
      email: 'priya.sharma@coep.ac.in',
      qualification: 'Ph.D. Mechanical Engineering',
      experience: '12 years',
      leaveBalance: 22,
      performance: 'excellent'
    },
    {
      id: 'EMP003',
      name: 'Dr. Rajesh Gupta',
      designation: 'Assistant Professor',
      department: 'Civil Engineering',
      joinDate: '2020-01-10',
      salary: 95000,
      status: 'active',
      phone: '+91 9876543212',
      email: 'rajesh.gupta@coep.ac.in',
      qualification: 'Ph.D. Civil Engineering',
      experience: '8 years',
      leaveBalance: 25,
      performance: 'good'
    },
    {
      id: 'EMP004',
      name: 'Ms. Neha Agarwal',
      designation: 'Administrative Officer',
      department: 'Administration',
      joinDate: '2019-03-15',
      salary: 65000,
      status: 'active',
      phone: '+91 9876543213',
      email: 'neha.agarwal@coep.ac.in',
      qualification: 'MBA Administration',
      experience: '6 years',
      leaveBalance: 18,
      performance: 'good'
    },
    {
      id: 'EMP005',
      name: 'Mr. Vikram Singh',
      designation: 'Lab Technician',
      department: 'Electronics Engineering',
      joinDate: '2017-09-01',
      salary: 45000,
      status: 'on-leave',
      phone: '+91 9876543214',
      email: 'vikram.singh@coep.ac.in',
      qualification: 'Diploma Electronics',
      experience: '10 years',
      leaveBalance: 5,
      performance: 'satisfactory'
    }
  ];

  const hrStats = {
    totalEmployees: 186,
    faculty: 142,
    staff: 44,
    onLeave: 12,
    newHires: 8,
    pendingApprovals: 15
  };

  const leaveRequests = [
    {
      id: 'LR001',
      employeeName: 'Dr. Amit Kumar',
      leaveType: 'Casual Leave',
      fromDate: '2024-03-25',
      toDate: '2024-03-27',
      days: 3,
      reason: 'Personal work',
      status: 'pending',
      appliedDate: '2024-03-20'
    },
    {
      id: 'LR002',
      employeeName: 'Prof. Priya Sharma',
      leaveType: 'Medical Leave',
      fromDate: '2024-03-30',
      toDate: '2024-04-05',
      days: 7,
      reason: 'Medical treatment',
      status: 'approved',
      appliedDate: '2024-03-18'
    },
    {
      id: 'LR003',
      employeeName: 'Ms. Neha Agarwal',
      leaveType: 'Annual Leave',
      fromDate: '2024-04-10',
      toDate: '2024-04-15',
      days: 6,
      reason: 'Family vacation',
      status: 'pending',
      appliedDate: '2024-03-22'
    }
  ];

  const payrollData = [
    { month: 'March 2024', totalPayroll: 1845000, processed: true, employees: 186 },
    { month: 'February 2024', totalPayroll: 1845000, processed: true, employees: 184 },
    { month: 'January 2024', totalPayroll: 1798000, processed: true, employees: 182 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'on-leave': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'satisfactory': return 'bg-yellow-100 text-yellow-800';
      case 'needs-improvement': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Human Resources Management</h1>
          <p className="text-gray-600">Comprehensive HR management for COEP faculty and staff</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Employees</p>
                <p className="text-2xl font-bold">{hrStats.totalEmployees}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Faculty</p>
                <p className="text-2xl font-bold">{hrStats.faculty}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Staff</p>
                <p className="text-2xl font-bold">{hrStats.staff}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">On Leave</p>
                <p className="text-2xl font-bold">{hrStats.onLeave}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <UserPlus className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New Hires</p>
                <p className="text-2xl font-bold">{hrStats.newHires}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <AlertCircle className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                <p className="text-2xl font-bold">{hrStats.pendingApprovals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="employees">Employee Management</TabsTrigger>
          <TabsTrigger value="leave">Leave Management</TabsTrigger>
          <TabsTrigger value="payroll">Payroll Management</TabsTrigger>
          <TabsTrigger value="performance">Performance Review</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
        </TabsList>

        <TabsContent value="employees" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search employees..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="computer">Computer Engineering</SelectItem>
                <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                <SelectItem value="civil">Civil Engineering</SelectItem>
                <SelectItem value="electronics">Electronics Engineering</SelectItem>
                <SelectItem value="admin">Administration</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="on-leave">On Leave</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Employee Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {employees.map((emp) => (
                  <div key={emp.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{emp.name}</h3>
                          <Badge className={getStatusColor(emp.status)}>
                            {emp.status.replace('-', ' ').toUpperCase()}
                          </Badge>
                          <Badge className={getPerformanceColor(emp.performance)}>
                            {emp.performance.replace('-', ' ').toUpperCase()}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Employee ID:</span>
                            <br />
                            {emp.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Designation:</span>
                            <br />
                            {emp.designation}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Department:</span>
                            <br />
                            {emp.department}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Join Date:</span>
                            <br />
                            {emp.joinDate}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mt-3">
                          <div>
                            <span className="font-medium text-gray-600">Experience:</span>
                            <br />
                            {emp.experience}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Qualification:</span>
                            <br />
                            {emp.qualification}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Leave Balance:</span>
                            <br />
                            {emp.leaveBalance} days
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Salary:</span>
                            <br />
                            ₹{emp.salary.toLocaleString()}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-3">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-gray-500" />
                            {emp.phone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-gray-500" />
                            {emp.email}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leave" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Leave Management System</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaveRequests.map((leave) => (
                  <div key={leave.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{leave.employeeName}</h3>
                          <Badge className={getStatusColor(leave.status)}>
                            {leave.status.toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{leave.leaveType}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Leave ID:</span>
                            <br />
                            {leave.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Duration:</span>
                            <br />
                            {leave.fromDate} to {leave.toDate}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Days:</span>
                            <br />
                            {leave.days} days
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Applied Date:</span>
                            <br />
                            {leave.appliedDate}
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="font-medium text-gray-600">Reason:</span>
                          <br />
                          <span className="text-sm">{leave.reason}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        {leave.status === 'pending' && (
                          <>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payroll Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Monthly Payroll</h3>
                    <p className="text-2xl font-bold text-green-600">₹18,45,000</p>
                    <p className="text-sm text-gray-600">March 2024</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Average Salary</h3>
                    <p className="text-2xl font-bold text-blue-600">₹99,194</p>
                    <p className="text-sm text-gray-600">Per employee</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Pending Payments</h3>
                    <p className="text-2xl font-bold text-orange-600">0</p>
                    <p className="text-sm text-gray-600">All processed</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Payroll History</h3>
                {payrollData.map((payroll, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">{payroll.month}</h4>
                        <p className="text-sm text-gray-600">{payroll.employees} employees</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">₹{payroll.totalPayroll.toLocaleString()}</p>
                        <Badge className={payroll.processed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {payroll.processed ? 'Processed' : 'Pending'}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Review Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Excellent</h3>
                    <p className="text-2xl font-bold text-green-600">78</p>
                    <p className="text-sm text-gray-600">42% of faculty</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Good</h3>
                    <p className="text-2xl font-bold text-blue-600">64</p>
                    <p className="text-sm text-gray-600">34% of faculty</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Satisfactory</h3>
                    <p className="text-2xl font-bold text-yellow-600">32</p>
                    <p className="text-sm text-gray-600">17% of faculty</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Needs Improvement</h3>
                    <p className="text-2xl font-bold text-red-600">12</p>
                    <p className="text-sm text-gray-600">7% of faculty</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recruitment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recruitment Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Open Positions</h3>
                    <p className="text-2xl font-bold text-blue-600">8</p>
                    <Button className="w-full mt-3">Post New Job</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Applications Received</h3>
                    <p className="text-2xl font-bold text-green-600">156</p>
                    <Button variant="outline" className="w-full mt-3">Review Applications</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Interviews Scheduled</h3>
                    <p className="text-2xl font-bold text-orange-600">24</p>
                    <Button variant="outline" className="w-full mt-3">Schedule Interview</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}