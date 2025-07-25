import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Home, 
  Users, 
  Bed,
  MapPin,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  Settings,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Wrench
} from "lucide-react";

export default function HostelManagement() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  const hostelStats = {
    totalHostels: 8,
    totalRooms: 2847,
    occupiedRooms: 2456,
    availableRooms: 391,
    totalStudents: 4912,
    occupancyRate: 86.3,
    pendingMaintenance: 23
  };

  const hostels = [
    {
      id: "H001",
      name: "Ashoka Hostel",
      type: "Boys",
      floors: 4,
      totalRooms: 480,
      occupiedRooms: 445,
      capacity: 960,
      currentOccupancy: 890,
      warden: "Dr. Rajesh Kumar",
      contact: "+91 9876543210",
      facilities: ["WiFi", "Mess", "Gym", "Laundry", "Library"],
      feeStructure: {
        singleRoom: 25000,
        doubleRoom: 18000,
        tripleRoom: 12000
      },
      maintenanceIssues: 5
    },
    {
      id: "H002", 
      name: "Saraswati Hostel",
      type: "Girls",
      floors: 3,
      totalRooms: 360,
      occupiedRooms: 342,
      capacity: 720,
      currentOccupancy: 684,
      warden: "Dr. Priya Sharma",
      contact: "+91 9876543211",
      facilities: ["WiFi", "Mess", "Medical", "Laundry", "Common Room"],
      feeStructure: {
        singleRoom: 25000,
        doubleRoom: 18000,
        tripleRoom: 12000
      },
      maintenanceIssues: 3
    },
    {
      id: "H003",
      name: "Chandragupta Hostel", 
      type: "Boys",
      floors: 5,
      totalRooms: 600,
      occupiedRooms: 567,
      capacity: 1200,
      currentOccupancy: 1134,
      warden: "Dr. Amit Patel",
      contact: "+91 9876543212",
      facilities: ["WiFi", "Mess", "Sports", "Laundry", "Study Hall"],
      feeStructure: {
        singleRoom: 25000,
        doubleRoom: 18000,
        tripleRoom: 12000
      },
      maintenanceIssues: 8
    }
  ];

  const recentApplications = [
    {
      applicationId: "HA2024-001",
      studentName: "Rahul Sharma",
      studentId: "BE21CS001",
      course: "Computer Engineering",
      year: "3rd Year",
      preferredHostel: "Ashoka Hostel",
      roomType: "Double Sharing",
      applicationDate: "Dec 15, 2024",
      status: "Pending",
      contactNumber: "+91 9876543213"
    },
    {
      applicationId: "HA2024-002",
      studentName: "Priya Patel",
      studentId: "BE22IT015",
      course: "Information Technology", 
      year: "2nd Year",
      preferredHostel: "Saraswati Hostel",
      roomType: "Triple Sharing",
      applicationDate: "Dec 14, 2024",
      status: "Approved",
      contactNumber: "+91 9876543214"
    },
    {
      applicationId: "HA2024-003",
      studentName: "Amit Kumar",
      studentId: "BE23ME025", 
      course: "Mechanical Engineering",
      year: "1st Year", 
      preferredHostel: "Chandragupta Hostel",
      roomType: "Triple Sharing",
      applicationDate: "Dec 13, 2024",
      status: "Waitlisted",
      contactNumber: "+91 9876543215"
    }
  ];

  const maintenanceRequests = [
    {
      requestId: "MR2024-001",
      hostel: "Ashoka Hostel",
      roomNumber: "A-204",
      issue: "AC not working",
      priority: "High",
      reportedBy: "Student",
      reportedDate: "Dec 16, 2024",
      assignedTo: "Maintenance Team A",
      status: "In Progress",
      estimatedCompletion: "Dec 18, 2024"
    },
    {
      requestId: "MR2024-002",
      hostel: "Saraswati Hostel", 
      roomNumber: "S-105",
      issue: "WiFi connectivity issues",
      priority: "Medium",
      reportedBy: "Warden",
      reportedDate: "Dec 15, 2024", 
      assignedTo: "IT Support",
      status: "Pending",
      estimatedCompletion: "Dec 19, 2024"
    },
    {
      requestId: "MR2024-003",
      hostel: "Chandragupta Hostel",
      roomNumber: "C-312",
      issue: "Plumbing problem",
      priority: "High",
      reportedBy: "Student",
      reportedDate: "Dec 14, 2024",
      assignedTo: "Maintenance Team B", 
      status: "Completed",
      estimatedCompletion: "Dec 16, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Hostel Management</h1>
              <p className="text-gray-600 mt-1">Comprehensive Hostel Administration System</p>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New Application
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Hostels</p>
                <p className="text-2xl font-bold">{hostelStats.totalHostels}</p>
              </div>
              <Home className="h-8 w-8 text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Total Rooms</p>
                <p className="text-2xl font-bold">{hostelStats.totalRooms}</p>
              </div>
              <Bed className="h-8 w-8 text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Occupied</p>
                <p className="text-2xl font-bold">{hostelStats.occupiedRooms}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-orange-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Available</p>
                <p className="text-2xl font-bold">{hostelStats.availableRooms}</p>
              </div>
              <Home className="h-8 w-8 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-sm">Students</p>
                <p className="text-2xl font-bold">{hostelStats.totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-teal-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm">Occupancy</p>
                <p className="text-2xl font-bold">{hostelStats.occupancyRate}%</p>
              </div>
              <MapPin className="h-8 w-8 text-pink-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-500 to-red-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm">Maintenance</p>
                <p className="text-2xl font-bold">{hostelStats.pendingMaintenance}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Hostel Dashboard */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg">
          <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Hostel Overview
          </TabsTrigger>
          <TabsTrigger value="applications" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            Applications
          </TabsTrigger>
          <TabsTrigger value="maintenance" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Maintenance
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {hostels.map((hostel, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{hostel.name}</CardTitle>
                    <Badge className={`${
                      hostel.type === 'Boys' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'
                    }`}>
                      {hostel.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Total Rooms</p>
                        <p className="font-semibold">{hostel.totalRooms}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Capacity</p>
                        <p className="font-semibold">{hostel.capacity}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Occupied</p>
                        <p className="font-semibold text-green-600">{hostel.occupiedRooms}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Students</p>
                        <p className="font-semibold text-blue-600">{hostel.currentOccupancy}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Occupancy Rate</span>
                        <span className="text-sm text-gray-600">
                          {Math.round((hostel.occupiedRooms / hostel.totalRooms) * 100)}%
                        </span>
                      </div>
                      <Progress value={(hostel.occupiedRooms / hostel.totalRooms) * 100} className="h-2" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">Facilities</p>
                      <div className="flex flex-wrap gap-1">
                        {hostel.facilities.map((facility, facilityIndex) => (
                          <Badge key={facilityIndex} variant="outline" className="text-xs">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Warden</span>
                        <span className="text-sm">{hostel.warden}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Contact</span>
                        <span className="text-sm">{hostel.contact}</span>
                      </div>
                      {hostel.maintenanceIssues > 0 && (
                        <div className="flex items-center text-red-600 text-sm">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          <span>{hostel.maintenanceIssues} maintenance issues</span>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Edit className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="space-y-4">
            {recentApplications.map((application, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{application.studentName}</CardTitle>
                      <p className="text-gray-600">{application.course} • {application.year}</p>
                    </div>
                    <Badge className={`${
                      application.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      application.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {application.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-gray-600">Student ID</p>
                      <p className="font-semibold">{application.studentId}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Preferred Hostel</p>
                      <p className="font-semibold">{application.preferredHostel}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Room Type</p>
                      <p className="font-semibold">{application.roomType}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Application Date</p>
                      <p className="font-semibold">{application.applicationDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-1" />
                        <span>{application.contactNumber}</span>
                      </div>
                      <span>•</span>
                      <span>ID: {application.applicationId}</span>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      {application.status === 'Pending' && (
                        <>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Approve
                          </Button>
                          <Button variant="outline" size="sm">
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-6">
          <div className="space-y-4">
            {maintenanceRequests.map((request, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{request.issue}</CardTitle>
                      <p className="text-gray-600">{request.hostel} • Room {request.roomNumber}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className={`${
                        request.priority === 'High' ? 'bg-red-100 text-red-800' :
                        request.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {request.priority}
                      </Badge>
                      <Badge className={`${
                        request.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        request.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {request.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-gray-600">Reported By</p>
                      <p className="font-semibold">{request.reportedBy}</p>
                      <p className="text-sm text-gray-500">{request.reportedDate}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Assigned To</p>
                      <p className="font-semibold">{request.assignedTo}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Estimated Completion</p>
                      <p className="font-semibold">{request.estimatedCompletion}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Request ID</p>
                      <p className="font-semibold">{request.requestId}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      Priority: <span className="font-semibold">{request.priority}</span> • 
                      Status: <span className="font-semibold ml-1">{request.status}</span>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      {request.status !== 'Completed' && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Wrench className="h-4 w-4 mr-1" />
                          Update
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Home className="h-6 w-6 text-blue-600" />
                  <span>Occupancy Trends</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Overall Occupancy Rate</span>
                    <span className="font-bold text-blue-600">86.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Boys Hostels</span>
                    <span className="font-bold text-green-600">88.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Girls Hostels</span>
                    <span className="font-bold text-purple-600">84.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Stay Duration</span>
                    <span className="font-bold text-orange-600">2.3 years</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <span>Financial Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Monthly Revenue</span>
                    <span className="font-bold text-green-600">₹89.2L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Maintenance Cost</span>
                    <span className="font-bold text-red-600">₹12.5L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Collection Rate</span>
                    <span className="font-bold text-blue-600">94.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pending Dues</span>
                    <span className="font-bold text-orange-600">₹4.8L</span>
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