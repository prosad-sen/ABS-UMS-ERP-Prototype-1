import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Bus, 
  MapPin, 
  Clock,
  Users,
  Route,
  Fuel,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Phone,
  Settings,
  Search,
  Filter,
  Plus,
  Eye,
  Edit
} from "lucide-react";

export default function TransportManagement() {
  const [activeTab, setActiveTab] = useState("fleet");

  const transportStats = {
    totalBuses: 25,
    activeBuses: 22,
    totalRoutes: 15,
    studentsUsingTransport: 2847,
    monthlyMaintenance: 8,
    fuelEfficiency: 12.5
  };

  const busFleet = [
    {
      busNumber: "COEP-001",
      routeNumber: "R001",
      routeName: "Pune Station - COEP",
      capacity: 45,
      currentOccupancy: 38,
      driver: "Ramesh Kumar",
      conductor: "Suresh Patil",
      lastMaintenance: "Dec 10, 2024",
      nextMaintenance: "Jan 10, 2025",
      fuelLevel: 75,
      status: "Active",
      gpsLocation: "Shivajinagar"
    },
    {
      busNumber: "COEP-002", 
      routeNumber: "R002",
      routeName: "Hadapsar - COEP",
      capacity: 50,
      currentOccupancy: 42,
      driver: "Mahesh Jadhav",
      conductor: "Prakash More",
      lastMaintenance: "Dec 8, 2024",
      nextMaintenance: "Jan 8, 2025",
      fuelLevel: 60,
      status: "Active",
      gpsLocation: "Hadapsar Chowk"
    },
    {
      busNumber: "COEP-003",
      routeNumber: "R003", 
      routeName: "Katraj - COEP",
      capacity: 45,
      currentOccupancy: 0,
      driver: "Ganesh Pawar",
      conductor: "Santosh Bhosale",
      lastMaintenance: "Dec 5, 2024",
      nextMaintenance: "Jan 5, 2025",
      fuelLevel: 90,
      status: "Maintenance",
      gpsLocation: "Depot"
    }
  ];

  const routes = [
    {
      routeNumber: "R001",
      routeName: "Pune Station - COEP",
      distance: "8.5 km",
      duration: "35 minutes",
      stops: ["Pune Station", "Shivajinagar", "JM Road", "Deccan", "FC Road", "COEP"],
      busesAssigned: 3,
      peakHourFrequency: "15 minutes",
      offPeakFrequency: "30 minutes",
      totalStudents: 185,
      monthlyPass: 850,
      semesterPass: 4500
    },
    {
      routeNumber: "R002",
      routeName: "Hadapsar - COEP", 
      distance: "12.2 km",
      duration: "45 minutes",
      stops: ["Hadapsar", "Mundhwa", "Koregaon Park", "Boat Club", "Bund Garden", "COEP"],
      busesAssigned: 2,
      peakHourFrequency: "20 minutes",
      offPeakFrequency: "40 minutes", 
      totalStudents: 142,
      monthlyPass: 950,
      semesterPass: 5000
    },
    {
      routeNumber: "R003",
      routeName: "Katraj - COEP",
      distance: "15.8 km", 
      duration: "55 minutes",
      stops: ["Katraj", "Bharti Vidyapeeth", "Dhankawadi", "Swargate", "Shaniwarwada", "COEP"],
      busesAssigned: 2,
      peakHourFrequency: "25 minutes",
      offPeakFrequency: "45 minutes",
      totalStudents: 128,
      monthlyPass: 1100,
      semesterPass: 5800
    }
  ];

  const transportApplications = [
    {
      applicationId: "TA2024-001",
      studentName: "Anita Sharma",
      studentId: "BE22CS045",
      course: "Computer Engineering",
      year: "2nd Year",
      preferredRoute: "Pune Station - COEP",
      passType: "Monthly",
      contactNumber: "+91 9876543216",
      applicationDate: "Dec 16, 2024",
      status: "Pending"
    },
    {
      applicationId: "TA2024-002",
      studentName: "Vikram Patel", 
      studentId: "BE21IT012",
      course: "Information Technology",
      year: "3rd Year",
      preferredRoute: "Hadapsar - COEP",
      passType: "Semester",
      contactNumber: "+91 9876543217",
      applicationDate: "Dec 15, 2024", 
      status: "Approved"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Transport Management</h1>
              <p className="text-gray-600 mt-1">Campus Transportation System</p>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Route
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
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Buses</p>
                <p className="text-2xl font-bold">{transportStats.totalBuses}</p>
              </div>
              <Bus className="h-8 w-8 text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Active Buses</p>
                <p className="text-2xl font-bold">{transportStats.activeBuses}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Routes</p>
                <p className="text-2xl font-bold">{transportStats.totalRoutes}</p>
              </div>
              <Route className="h-8 w-8 text-orange-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Students</p>
                <p className="text-2xl font-bold">{transportStats.studentsUsingTransport}</p>
              </div>
              <Users className="h-8 w-8 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-500 to-red-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm">Maintenance</p>
                <p className="text-2xl font-bold">{transportStats.monthlyMaintenance}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-sm">Fuel Efficiency</p>
                <p className="text-2xl font-bold">{transportStats.fuelEfficiency} km/l</p>
              </div>
              <Fuel className="h-8 w-8 text-teal-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Transport Dashboard */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg">
          <TabsTrigger value="fleet" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Bus Fleet
          </TabsTrigger>
          <TabsTrigger value="routes" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            Routes
          </TabsTrigger>
          <TabsTrigger value="applications" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Applications
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="fleet" className="space-y-6">
          <div className="space-y-4">
            {busFleet.map((bus, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{bus.busNumber}</CardTitle>
                      <p className="text-gray-600">{bus.routeName}</p>
                    </div>
                    <Badge className={`${
                      bus.status === 'Active' ? 'bg-green-100 text-green-800' :
                      bus.status === 'Maintenance' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {bus.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Current Location</p>
                      <p className="font-semibold flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {bus.gpsLocation}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Occupancy</p>
                      <p className="font-semibold">{bus.currentOccupancy}/{bus.capacity}</p>
                      <Progress value={(bus.currentOccupancy / bus.capacity) * 100} className="h-2 mt-1" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Fuel Level</p>
                      <p className="font-semibold">{bus.fuelLevel}%</p>
                      <Progress value={bus.fuelLevel} className="h-2 mt-1" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Next Maintenance</p>
                      <p className="font-semibold">{bus.nextMaintenance}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-600">Driver</p>
                      <p className="font-semibold">{bus.driver}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Conductor</p>
                      <p className="font-semibold">{bus.conductor}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      Route: <span className="font-semibold">{bus.routeNumber}</span> • 
                      Last Service: <span className="font-semibold ml-1">{bus.lastMaintenance}</span>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Track
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Edit className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="routes" className="space-y-6">
          <div className="space-y-4">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{route.routeName}</CardTitle>
                      <p className="text-gray-600">Route {route.routeNumber}</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {route.busesAssigned} buses
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Distance</p>
                      <p className="font-semibold">{route.distance}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {route.duration}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Students</p>
                      <p className="font-semibold text-blue-600">{route.totalStudents}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Frequency (Peak)</p>
                      <p className="font-semibold">{route.peakHourFrequency}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Bus Stops</p>
                    <div className="flex flex-wrap gap-2">
                      {route.stops.map((stop, stopIndex) => (
                        <Badge key={stopIndex} variant="outline" className="text-xs">
                          {stop}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-600">Monthly Pass</p>
                      <p className="font-semibold text-green-600">₹{route.monthlyPass}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Semester Pass</p>
                      <p className="font-semibold text-green-600">₹{route.semesterPass}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          <div className="space-y-4">
            {transportApplications.map((application, index) => (
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
                      'bg-red-100 text-red-800'
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
                      <p className="text-sm text-gray-600">Preferred Route</p>
                      <p className="font-semibold">{application.preferredRoute}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Pass Type</p>
                      <p className="font-semibold">{application.passType}</p>
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
                        View
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

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bus className="h-6 w-6 text-blue-600" />
                  <span>Fleet Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Fleet Utilization</span>
                    <span className="font-bold text-blue-600">88%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Fuel Efficiency</span>
                    <span className="font-bold text-green-600">12.5 km/l</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>On-time Performance</span>
                    <span className="font-bold text-purple-600">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Student Satisfaction</span>
                    <span className="font-bold text-orange-600">4.2/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Route className="h-6 w-6 text-green-600" />
                  <span>Route Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Pune Station Route</span>
                      <span className="text-sm">185 students</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Hadapsar Route</span>
                      <span className="text-sm">142 students</span>
                    </div>
                    <Progress value={71} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Katraj Route</span>
                      <span className="text-sm">128 students</span>
                    </div>
                    <Progress value={64} className="h-2" />
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