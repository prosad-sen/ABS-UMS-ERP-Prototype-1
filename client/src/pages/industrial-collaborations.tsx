import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Handshake, 
  FileText, 
  TrendingUp,
  Calendar,
  Globe,
  Users,
  DollarSign,
  Award,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  CheckCircle,
  Clock,
  AlertTriangle,
  Building2
} from 'lucide-react';

export default function IndustrialCollaborations() {
  const [activeTab, setActiveTab] = useState('overview');

  const collaborationStats = {
    activeMoUs: 45,
    industryPartners: 32,
    activeProjects: 28,
    totalFunding: 15750000,
    studentInternships: 234,
    facultyExchanges: 18,
    researchCollaborations: 22,
    technologyTransfers: 8
  };

  const industryPartners = [
    {
      id: 'IP001',
      name: 'Tata Consultancy Services',
      type: 'IT Services',
      sector: 'Information Technology',
      partnership_since: '2018',
      mou_status: 'active',
      mou_expiry: '2025-12-31',
      projects: 8,
      internships: 45,
      funding: 2500000,
      contact_person: 'Rajesh Kumar',
      email: 'rajesh.kumar@tcs.com',
      phone: '+91-9876543210',
      location: 'Pune, Maharashtra'
    },
    {
      id: 'IP002',
      name: 'Mahindra & Mahindra',
      type: 'Automotive',
      sector: 'Manufacturing',
      partnership_since: '2019',
      mou_status: 'active',
      mou_expiry: '2025-06-30',
      projects: 5,
      internships: 28,
      funding: 1800000,
      contact_person: 'Priya Sharma',
      email: 'priya.sharma@mahindra.com',
      phone: '+91-9876543211',
      location: 'Mumbai, Maharashtra'
    },
    {
      id: 'IP003',
      name: 'L&T Technology Services',
      type: 'Engineering Services',
      sector: 'Engineering',
      partnership_since: '2020',
      mou_status: 'active',
      mou_expiry: '2024-12-31',
      projects: 6,
      internships: 32,
      funding: 2200000,
      contact_person: 'Anil Patel',
      email: 'anil.patel@ltts.com',
      phone: '+91-9876543212',
      location: 'Pune, Maharashtra'
    },
    {
      id: 'IP004',
      name: 'Bajaj Auto Limited',
      type: 'Automotive',
      sector: 'Automobile Manufacturing',
      partnership_since: '2017',
      mou_status: 'renewal_pending',
      mou_expiry: '2024-03-31',
      projects: 4,
      internships: 22,
      funding: 1500000,
      contact_person: 'Sneha Desai',
      email: 'sneha.desai@bajaj.com',
      phone: '+91-9876543213',
      location: 'Pune, Maharashtra'
    }
  ];

  const activeMoUs = [
    {
      id: 'MOU001',
      partner: 'Tata Consultancy Services',
      title: 'Academic-Industry Collaboration for Digital Innovation',
      type: 'Research & Development',
      start_date: '2023-01-15',
      end_date: '2025-12-31',
      status: 'active',
      funding: 2500000,
      objectives: ['Digital Transformation Research', 'Student Skill Development', 'Faculty Training'],
      deliverables: ['Research Publications', 'Industry Projects', 'Internship Programs'],
      key_contacts: 'Prof. Dr. Amit Joshi (COEP), Mr. Rajesh Kumar (TCS)',
      review_date: '2024-06-30'
    },
    {
      id: 'MOU002',
      partner: 'Mahindra & Mahindra',
      title: 'Sustainable Mobility and Electric Vehicle Research',
      type: 'Research Collaboration',
      start_date: '2023-07-01',
      end_date: '2025-06-30',
      status: 'active',
      funding: 1800000,
      objectives: ['EV Technology Development', 'Sustainable Manufacturing', 'Green Energy Solutions'],
      deliverables: ['Prototype Development', 'Technical Reports', 'Patent Applications'],
      key_contacts: 'Prof. Dr. Suresh Patil (COEP), Ms. Priya Sharma (M&M)',
      review_date: '2024-12-31'
    },
    {
      id: 'MOU003',
      partner: 'L&T Technology Services',
      title: 'Industry 4.0 and Smart Manufacturing Initiative',
      type: 'Technology Transfer',
      start_date: '2023-03-20',
      end_date: '2024-12-31',
      status: 'expiring_soon',
      funding: 2200000,
      objectives: ['IoT Implementation', 'Smart Factory Solutions', 'Automation Technologies'],
      deliverables: ['Working Prototypes', 'Technology Demonstrations', 'Student Training'],
      key_contacts: 'Prof. Dr. Meera Jain (COEP), Mr. Anil Patel (LTTS)',
      review_date: '2024-09-30'
    }
  ];

  const collaborationProjects = [
    {
      id: 'CP001',
      title: 'AI-Powered Quality Control System',
      partner: 'Tata Consultancy Services',
      department: 'Computer Engineering',
      faculty_lead: 'Prof. Dr. Amit Joshi',
      student_count: 8,
      start_date: '2024-01-15',
      end_date: '2024-12-31',
      budget: 850000,
      status: 'in_progress',
      progress: 65,
      deliverables: ['AI Model Development', 'System Integration', 'Performance Testing']
    },
    {
      id: 'CP002',
      title: 'Electric Vehicle Battery Management System',
      partner: 'Mahindra & Mahindra',
      department: 'Electrical Engineering',
      faculty_lead: 'Prof. Dr. Suresh Patil',
      student_count: 6,
      start_date: '2024-02-01',
      end_date: '2024-11-30',
      budget: 720000,
      status: 'in_progress',
      progress: 45,
      deliverables: ['Battery Monitoring System', 'Safety Protocols', 'Testing Framework']
    },
    {
      id: 'CP003',
      title: 'Smart Manufacturing Dashboard',
      partner: 'L&T Technology Services',
      department: 'Mechanical Engineering',
      faculty_lead: 'Prof. Dr. Meera Jain',
      student_count: 10,
      start_date: '2024-03-01',
      end_date: '2025-02-28',
      budget: 950000,
      status: 'planning',
      progress: 15,
      deliverables: ['Dashboard Development', 'Data Analytics', 'User Training']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'completed':
      case 'in_progress':
        return 'bg-green-100 text-green-800';
      case 'planning':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'renewal_pending':
      case 'expiring_soon':
        return 'bg-orange-100 text-orange-800';
      case 'expired':
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
          <h1 className="text-3xl font-bold text-gray-900">Industrial Collaborations & MoU Management</h1>
          <p className="text-gray-600">Comprehensive industry partnership and collaboration management for COEP</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Partnership
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
                <p className="text-sm font-medium text-gray-600">Active MoUs</p>
                <p className="text-2xl font-bold">{collaborationStats.activeMoUs}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Industry Partners</p>
                <p className="text-2xl font-bold">{collaborationStats.industryPartners}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Handshake className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold">{collaborationStats.activeProjects}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Funding</p>
                <p className="text-xl font-bold">{formatCurrency(collaborationStats.totalFunding)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Student Internships</p>
                <p className="text-2xl font-bold">{collaborationStats.studentInternships}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-teal-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Faculty Exchanges</p>
                <p className="text-2xl font-bold">{collaborationStats.facultyExchanges}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Research Collabs</p>
                <p className="text-2xl font-bold">{collaborationStats.researchCollaborations}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Tech Transfers</p>
                <p className="text-2xl font-bold">{collaborationStats.technologyTransfers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Partnership Overview</TabsTrigger>
          <TabsTrigger value="partners">Industry Partners</TabsTrigger>
          <TabsTrigger value="mous">MoU Management</TabsTrigger>
          <TabsTrigger value="projects">Collaborative Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Partnership Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Partnership Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Research & Development</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">18</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-green-600 mr-2" />
                      <span>Internship Programs</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">25</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-purple-600 mr-2" />
                      <span>Technology Transfer</span>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">8</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MoU Status Summary */}
            <Card>
              <CardHeader>
                <CardTitle>MoU Status Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Active MoUs</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">38</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-yellow-600 mr-2" />
                      <span>Expiring Soon</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">5</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
                      <span>Renewal Pending</span>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800">2</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="partners" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search industry partners..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
                <SelectItem value="automotive">Automotive</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Industry Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {industryPartners.map((partner) => (
                  <div key={partner.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{partner.name}</h3>
                          <Badge className={getStatusColor(partner.mou_status)}>
                            {partner.mou_status.replace('_', ' ').toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{partner.sector}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Partner ID:</span>
                            <br />
                            {partner.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Partnership Since:</span>
                            <br />
                            {partner.partnership_since}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">MoU Expiry:</span>
                            <br />
                            {partner.mou_expiry}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Total Funding:</span>
                            <br />
                            <span className="font-bold text-green-600">{formatCurrency(partner.funding)}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-3">
                          <div>
                            <span className="font-medium text-gray-600">Active Projects:</span> {partner.projects}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Student Internships:</span> {partner.internships}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Location:</span> {partner.location}
                          </div>
                        </div>

                        <div className="mt-3 text-sm">
                          <span className="font-medium text-gray-600">Contact:</span> {partner.contact_person} 
                          <span className="text-gray-500"> | {partner.email} | {partner.phone}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        {partner.mou_status === 'renewal_pending' && (
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                            Renew MoU
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mous" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Memorandums of Understanding (MoUs)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeMoUs.map((mou) => (
                  <div key={mou.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{mou.title}</h3>
                          <Badge className={getStatusColor(mou.status)}>
                            {mou.status.replace('_', ' ').toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{mou.type}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">MoU ID:</span>
                            <br />
                            {mou.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Partner:</span>
                            <br />
                            {mou.partner}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Duration:</span>
                            <br />
                            {mou.start_date} to {mou.end_date}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Funding:</span>
                            <br />
                            <span className="font-bold text-green-600">{formatCurrency(mou.funding)}</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="font-medium text-gray-600">Objectives:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {mou.objectives.map((objective, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {objective}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="font-medium text-gray-600">Key Deliverables:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {mou.deliverables.map((deliverable, index) => (
                              <Badge key={index} variant="outline" className="text-xs bg-blue-50">
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3 text-sm">
                          <span className="font-medium text-gray-600">Key Contacts:</span> {mou.key_contacts}
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-600">Next Review:</span> {mou.review_date}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          View Document
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit MoU
                        </Button>
                        {mou.status === 'expiring_soon' && (
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                            Renew MoU
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Collaborative Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {collaborationProjects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status.replace('_', ' ').toUpperCase()}
                          </Badge>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-2">Progress:</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium ml-2">{project.progress}%</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Project ID:</span>
                            <br />
                            {project.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Industry Partner:</span>
                            <br />
                            {project.partner}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Department:</span>
                            <br />
                            {project.department}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Budget:</span>
                            <br />
                            <span className="font-bold text-green-600">{formatCurrency(project.budget)}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-3">
                          <div>
                            <span className="font-medium text-gray-600">Faculty Lead:</span>
                            <br />
                            {project.faculty_lead}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Students Involved:</span>
                            <br />
                            {project.student_count} students
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Timeline:</span>
                            <br />
                            {project.start_date} to {project.end_date}
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="font-medium text-gray-600">Key Deliverables:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {project.deliverables.map((deliverable, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Update Project
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          Reports
                        </Button>
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