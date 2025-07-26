import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  UserPlus, 
  Users, 
  Calendar, 
  FileText, 
  CreditCard,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  Download
} from 'lucide-react';

export default function AdmissionsManagement() {
  const [activeTab, setActiveTab] = useState('applications');

  const applications = [
    {
      id: 'APP2024001',
      name: 'Arjun Patel',
      course: 'Computer Engineering',
      applicationDate: '2024-03-15',
      status: 'under-review',
      category: 'General',
      cutoffMark: 85,
      obtainedMark: 92,
      phone: '+91 9876543210',
      email: 'arjun.patel@email.com',
      address: 'Pune, Maharashtra',
      documentsSubmitted: true,
      feesPaid: true
    },
    {
      id: 'APP2024002',
      name: 'Priya Sharma',
      course: 'Mechanical Engineering',
      applicationDate: '2024-03-12',
      status: 'approved',
      category: 'OBC',
      cutoffMark: 80,
      obtainedMark: 88,
      phone: '+91 9876543211',
      email: 'priya.sharma@email.com',
      address: 'Mumbai, Maharashtra',
      documentsSubmitted: true,
      feesPaid: true
    },
    {
      id: 'APP2024003',
      name: 'Rahul Kumar',
      course: 'Civil Engineering',
      applicationDate: '2024-03-18',
      status: 'pending',
      category: 'SC',
      cutoffMark: 75,
      obtainedMark: 82,
      phone: '+91 9876543212',
      email: 'rahul.kumar@email.com',
      address: 'Nagpur, Maharashtra',
      documentsSubmitted: false,
      feesPaid: false
    },
    {
      id: 'APP2024004',
      name: 'Anita Desai',
      course: 'Electronics Engineering',
      applicationDate: '2024-03-20',
      status: 'rejected',
      category: 'General',
      cutoffMark: 85,
      obtainedMark: 78,
      phone: '+91 9876543213',
      email: 'anita.desai@email.com',
      address: 'Nashik, Maharashtra',
      documentsSubmitted: true,
      feesPaid: true
    }
  ];

  const admissionStats = {
    totalApplications: 2847,
    approved: 1245,
    pending: 892,
    rejected: 710,
    documentsVerified: 2156,
    feesCollected: 1876
  };

  const cutoffData = [
    { course: 'Computer Engineering', general: 85, obc: 80, sc: 75, st: 70 },
    { course: 'Mechanical Engineering', general: 82, obc: 77, sc: 72, st: 67 },
    { course: 'Civil Engineering', general: 78, obc: 73, sc: 68, st: 63 },
    { course: 'Electronics Engineering', general: 80, obc: 75, sc: 70, st: 65 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'under-review': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-blue-100 text-blue-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'under-review': return <Clock className="h-4 w-4" />;
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      case 'rejected': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admissions Management System</h1>
          <p className="text-gray-600">Comprehensive admission process management for COEP</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="h-4 w-4 mr-2" />
            New Application
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
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold">{admissionStats.totalApplications.toLocaleString()}</p>
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
                <p className="text-2xl font-bold">{admissionStats.approved.toLocaleString()}</p>
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
                <p className="text-2xl font-bold">{admissionStats.pending.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <AlertCircle className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold">{admissionStats.rejected.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Documents Verified</p>
                <p className="text-2xl font-bold">{admissionStats.documentsVerified.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Fees Collected</p>
                <p className="text-2xl font-bold">{admissionStats.feesCollected.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="cutoffs">Cutoff Management</TabsTrigger>
          <TabsTrigger value="verification">Document Verification</TabsTrigger>
          <TabsTrigger value="analytics">Admission Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search applications..."
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
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="under-review">Under Review</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="computer">Computer Engineering</SelectItem>
                <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                <SelectItem value="civil">Civil Engineering</SelectItem>
                <SelectItem value="electronics">Electronics Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Admission Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{app.name}</h3>
                          <Badge className={getStatusColor(app.status)}>
                            {getStatusIcon(app.status)}
                            <span className="ml-1 capitalize">{app.status.replace('-', ' ')}</span>
                          </Badge>
                          <Badge variant="outline">{app.category}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Application ID:</span>
                            <br />
                            {app.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Course:</span>
                            <br />
                            {app.course}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Marks:</span>
                            <br />
                            {app.obtainedMark}/{app.cutoffMark} (Cutoff)
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Application Date:</span>
                            <br />
                            {app.applicationDate}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-3">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-gray-500" />
                            {app.phone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-gray-500" />
                            {app.email}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                            {app.address}
                          </div>
                        </div>

                        <div className="flex space-x-4 mt-3">
                          <div className="flex items-center">
                            <Badge className={app.documentsSubmitted ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              Documents: {app.documentsSubmitted ? 'Submitted' : 'Pending'}
                            </Badge>
                          </div>
                          <div className="flex items-center">
                            <Badge className={app.feesPaid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              Fees: {app.feesPaid ? 'Paid' : 'Pending'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {app.status === 'pending' && (
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

        <TabsContent value="cutoffs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Admission Cutoff Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border p-3 text-left font-medium">Course</th>
                      <th className="border p-3 text-left font-medium">General</th>
                      <th className="border p-3 text-left font-medium">OBC</th>
                      <th className="border p-3 text-left font-medium">SC</th>
                      <th className="border p-3 text-left font-medium">ST</th>
                      <th className="border p-3 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cutoffData.map((cutoff, index) => (
                      <tr key={index}>
                        <td className="border p-3 font-medium">{cutoff.course}</td>
                        <td className="border p-3">{cutoff.general}%</td>
                        <td className="border p-3">{cutoff.obc}%</td>
                        <td className="border p-3">{cutoff.sc}%</td>
                        <td className="border p-3">{cutoff.st}%</td>
                        <td className="border p-3">
                          <Button variant="outline" size="sm">
                            Edit Cutoff
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Verification Center</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Pending Verification</h3>
                    <p className="text-2xl font-bold text-yellow-600">892</p>
                    <Button className="w-full mt-3">Review Documents</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Verified Today</h3>
                    <p className="text-2xl font-bold text-green-600">156</p>
                    <Button variant="outline" className="w-full mt-3">View Reports</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Rejected Documents</h3>
                    <p className="text-2xl font-bold text-red-600">23</p>
                    <Button variant="outline" className="w-full mt-3">Review Rejections</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Admission Analytics & Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-4">Application Trends</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>This Month:</span>
                        <span className="font-bold">2,847</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Month:</span>
                        <span className="font-bold">2,134</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Growth:</span>
                        <span className="font-bold">+33.4%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-4">Approval Rate</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Overall Rate:</span>
                        <span className="font-bold">43.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>This Year:</span>
                        <span className="font-bold">1,245 / 2,847</span>
                      </div>
                      <div className="flex justify-between text-blue-600">
                        <span>Target:</span>
                        <span className="font-bold">45%</span>
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