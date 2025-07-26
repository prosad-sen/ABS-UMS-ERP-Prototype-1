import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingCart, 
  Package, 
  Truck,
  CreditCard,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calculator,
  Users,
  TrendingUp,
  Search,
  Download
} from 'lucide-react';

export default function ProcurementManagement() {
  const [activeTab, setActiveTab] = useState('requests');

  const procurementStats = {
    totalRequests: 156,
    pending: 23,
    approved: 98,
    rejected: 12,
    inProgress: 23,
    totalValue: 45680000,
    monthlyBudget: 5000000,
    budgetUtilized: 3840000
  };

  const procurementRequests = [
    {
      id: 'PR001',
      department: 'Computer Engineering',
      requestedBy: 'Dr. Amit Kumar',
      item: 'High-Performance Computing Servers',
      quantity: 5,
      estimatedCost: 2500000,
      requestDate: '2024-03-20',
      status: 'pending-approval',
      priority: 'high',
      category: 'Equipment',
      vendor: 'TBD',
      expectedDelivery: 'TBD'
    },
    {
      id: 'PR002',
      department: 'Mechanical Engineering',
      requestedBy: 'Prof. Priya Sharma',
      item: 'CNC Machine Tools',
      quantity: 3,
      estimatedCost: 1800000,
      requestDate: '2024-03-18',
      status: 'approved',
      priority: 'medium',
      category: 'Equipment',
      vendor: 'Ace Manufacturing',
      expectedDelivery: '2024-04-15'
    },
    {
      id: 'PR003',
      department: 'Civil Engineering',
      requestedBy: 'Dr. Rajesh Gupta',
      item: 'Laboratory Testing Equipment',
      quantity: 8,
      estimatedCost: 650000,
      requestDate: '2024-03-15',
      status: 'in-progress',
      priority: 'medium',
      category: 'Equipment',
      vendor: 'Scientific Instruments Ltd',
      expectedDelivery: '2024-03-30'
    },
    {
      id: 'PR004',
      department: 'Administration',
      requestedBy: 'Ms. Neha Agarwal',
      item: 'Office Furniture',
      quantity: 25,
      estimatedCost: 450000,
      requestDate: '2024-03-12',
      status: 'delivered',
      priority: 'low',
      category: 'Furniture',
      vendor: 'Modern Office Solutions',
      expectedDelivery: '2024-03-25'
    }
  ];

  const vendors = [
    {
      id: 'V001',
      name: 'Ace Manufacturing',
      category: 'Equipment',
      rating: 4.5,
      totalOrders: 15,
      totalValue: 8500000,
      status: 'active',
      contact: '+91 9876543210',
      email: 'contact@acemanufacturing.com'
    },
    {
      id: 'V002',
      name: 'Scientific Instruments Ltd',
      category: 'Laboratory Equipment',
      rating: 4.2,
      totalOrders: 12,
      totalValue: 6200000,
      status: 'active',
      contact: '+91 9876543211',
      email: 'sales@scientificinstruments.com'
    },
    {
      id: 'V003',
      name: 'Modern Office Solutions',
      category: 'Furniture & Supplies',
      rating: 4.0,
      totalOrders: 8,
      totalValue: 2800000,
      status: 'active',
      contact: '+91 9876543212',
      email: 'info@modernoffice.com'
    },
    {
      id: 'V004',
      name: 'Tech Solutions Inc',
      category: 'IT Equipment',
      rating: 4.3,
      totalOrders: 20,
      totalValue: 12500000,
      status: 'active',
      contact: '+91 9876543213',
      email: 'procurement@techsolutions.com'
    }
  ];

  const budgetAllocation = [
    { department: 'Computer Engineering', allocated: 12000000, utilized: 9600000, remaining: 2400000 },
    { department: 'Mechanical Engineering', allocated: 10000000, utilized: 8200000, remaining: 1800000 },
    { department: 'Civil Engineering', allocated: 8000000, utilized: 6400000, remaining: 1600000 },
    { department: 'Electronics Engineering', allocated: 9000000, utilized: 7200000, remaining: 1800000 },
    { department: 'Administration', allocated: 3000000, utilized: 2400000, remaining: 600000 },
    { department: 'Infrastructure', allocated: 15000000, utilized: 12000000, remaining: 3000000 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
      case 'delivered':
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending-approval':
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'on-hold':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Procurement Management System</h1>
          <p className="text-gray-600">Comprehensive procurement and vendor management for COEP</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <ShoppingCart className="h-4 w-4 mr-2" />
            New Request
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold">{procurementStats.totalRequests}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold">{procurementStats.pending}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold">{procurementStats.approved}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold">{procurementStats.rejected}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold">{procurementStats.inProgress}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-xl font-bold">{formatCurrency(procurementStats.totalValue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Monthly Budget</p>
                <p className="text-xl font-bold">{formatCurrency(procurementStats.monthlyBudget)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Budget Utilized</p>
                <p className="text-xl font-bold">{formatCurrency(procurementStats.budgetUtilized)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="requests">Procurement Requests</TabsTrigger>
          <TabsTrigger value="vendors">Vendor Management</TabsTrigger>
          <TabsTrigger value="budget">Budget Tracking</TabsTrigger>
          <TabsTrigger value="analytics">Procurement Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search procurement requests..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending-approval">Pending Approval</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
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
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Procurement Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {procurementRequests.map((request) => (
                  <div key={request.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{request.item}</h3>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status.replace('-', ' ').toUpperCase()}
                          </Badge>
                          <Badge className={getPriorityColor(request.priority)}>
                            {request.priority.toUpperCase()}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Request ID:</span>
                            <br />
                            {request.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Department:</span>
                            <br />
                            {request.department}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Requested By:</span>
                            <br />
                            {request.requestedBy}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Request Date:</span>
                            <br />
                            {request.requestDate}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mt-3">
                          <div>
                            <span className="font-medium text-gray-600">Quantity:</span>
                            <br />
                            {request.quantity} units
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Estimated Cost:</span>
                            <br />
                            <span className="font-bold text-blue-600">{formatCurrency(request.estimatedCost)}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Vendor:</span>
                            <br />
                            {request.vendor}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Expected Delivery:</span>
                            <br />
                            {request.expectedDelivery}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {request.status === 'pending-approval' && (
                          <>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Approve
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vendor Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendors.map((vendor) => (
                  <div key={vendor.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{vendor.name}</h3>
                          <Badge className={getStatusColor(vendor.status)}>
                            {vendor.status.toUpperCase()}
                          </Badge>
                          <div className="flex items-center">
                            <span className="text-yellow-500">★</span>
                            <span className="ml-1 text-sm font-medium">{vendor.rating}/5.0</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Vendor ID:</span>
                            <br />
                            {vendor.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Category:</span>
                            <br />
                            {vendor.category}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Total Orders:</span>
                            <br />
                            {vendor.totalOrders}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Total Value:</span>
                            <br />
                            <span className="font-bold text-green-600">{formatCurrency(vendor.totalValue)}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-3">
                          <div>
                            <span className="font-medium text-gray-600">Contact:</span>
                            <br />
                            {vendor.contact}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Email:</span>
                            <br />
                            {vendor.email}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          Contact Vendor
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Department Budget Allocation & Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {budgetAllocation.map((budget, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{budget.department}</h3>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">
                          Utilization: {((budget.utilized / budget.allocated) * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-600">Allocated:</span>
                        <br />
                        <span className="text-lg font-bold text-blue-600">{formatCurrency(budget.allocated)}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Utilized:</span>
                        <br />
                        <span className="text-lg font-bold text-orange-600">{formatCurrency(budget.utilized)}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Remaining:</span>
                        <br />
                        <span className="text-lg font-bold text-green-600">{formatCurrency(budget.remaining)}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full" 
                          style={{ width: `${(budget.utilized / budget.allocated) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Procurement Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-4">Monthly Procurement Trends</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>This Month:</span>
                        <span className="font-bold">{formatCurrency(3840000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Month:</span>
                        <span className="font-bold">{formatCurrency(4200000)}</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Change:</span>
                        <span className="font-bold">-8.6%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-4">Vendor Performance</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Active Vendors:</span>
                        <span className="font-bold">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average Rating:</span>
                        <span className="font-bold">4.2/5.0</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>On-time Delivery:</span>
                        <span className="font-bold">94.5%</span>
                      </div>
                    </div>
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