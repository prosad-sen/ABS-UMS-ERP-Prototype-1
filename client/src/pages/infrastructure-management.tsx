import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building, 
  Wrench, 
  Zap,
  Droplets,
  Wifi,
  Car,
  Trees,
  Shield,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  MapPin,
  Phone,
  Download
} from 'lucide-react';

export default function InfrastructureManagement() {
  const [activeTab, setActiveTab] = useState('overview');

  const infrastructureStats = {
    totalBuildings: 15,
    totalRooms: 456,
    activeMaintenance: 23,
    pendingRequests: 8,
    totalArea: 125000, // sq ft
    energyConsumption: 2450, // kWh/day
    waterConsumption: 15000, // liters/day
    parkingSpaces: 350
  };

  const buildings = [
    {
      id: 'B001',
      name: 'Main Academic Block',
      type: 'Academic',
      floors: 4,
      rooms: 68,
      capacity: 3200,
      yearBuilt: 1985,
      lastRenovation: 2018,
      status: 'operational',
      maintenance: 'up-to-date',
      facilities: ['Wi-Fi', 'AC', 'Elevators', 'Labs', 'Auditorium']
    },
    {
      id: 'B002',
      name: 'Computer Engineering Block',
      type: 'Academic',
      floors: 3,
      rooms: 42,
      capacity: 1800,
      yearBuilt: 1995,
      lastRenovation: 2020,
      status: 'operational',
      maintenance: 'up-to-date',
      facilities: ['Wi-Fi', 'AC', 'Computer Labs', 'Server Room']
    },
    {
      id: 'B003',
      name: 'Mechanical Workshop',
      type: 'Workshop',
      floors: 2,
      rooms: 25,
      capacity: 800,
      yearBuilt: 1990,
      lastRenovation: 2019,
      status: 'operational',
      maintenance: 'due',
      facilities: ['Heavy Machinery', 'Safety Equipment', 'Tool Storage']
    },
    {
      id: 'B004',
      name: 'Administrative Block',
      type: 'Administrative',
      floors: 3,
      rooms: 35,
      capacity: 500,
      yearBuilt: 1988,
      lastRenovation: 2017,
      status: 'operational',
      maintenance: 'up-to-date',
      facilities: ['Wi-Fi', 'AC', 'Meeting Rooms', 'Server Room']
    },
    {
      id: 'B005',
      name: 'Student Hostel A',
      type: 'Residential',
      floors: 4,
      rooms: 120,
      capacity: 240,
      yearBuilt: 2005,
      lastRenovation: 2021,
      status: 'operational',
      maintenance: 'up-to-date',
      facilities: ['Wi-Fi', 'Common Rooms', 'Mess Hall', 'Gym']
    }
  ];

  const maintenanceRequests = [
    {
      id: 'MR001',
      building: 'Main Academic Block',
      room: 'Room 201',
      issue: 'Air Conditioning Not Working',
      priority: 'high',
      reportedBy: 'Faculty',
      reportedDate: '2024-03-20',
      assignedTo: 'HVAC Team',
      status: 'in-progress',
      estimatedCompletion: '2024-03-22'
    },
    {
      id: 'MR002',
      building: 'Computer Engineering Block',
      room: 'Lab 301',
      issue: 'Network Connectivity Issues',
      priority: 'medium',
      reportedBy: 'IT Admin',
      reportedDate: '2024-03-19',
      assignedTo: 'Network Team',
      status: 'pending',
      estimatedCompletion: '2024-03-25'
    },
    {
      id: 'MR003',
      building: 'Student Hostel A',
      room: 'Room 104',
      issue: 'Water Leakage in Bathroom',
      priority: 'high',
      reportedBy: 'Student',
      reportedDate: '2024-03-18',
      assignedTo: 'Plumbing Team',
      status: 'completed',
      estimatedCompletion: '2024-03-19'
    }
  ];

  const utilities = {
    electricity: {
      consumption: '2,450 kWh/day',
      cost: '₹18,375/day',
      efficiency: '92%',
      status: 'normal'
    },
    water: {
      consumption: '15,000 L/day',
      cost: '₹750/day',
      efficiency: '88%',
      status: 'normal'
    },
    internet: {
      bandwidth: '10 Gbps',
      cost: '₹45,000/month',
      uptime: '99.8%',
      status: 'excellent'
    },
    security: {
      cctvCameras: 156,
      accessPoints: 45,
      guards: 24,
      status: 'secure'
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
      case 'completed':
      case 'up-to-date':
      case 'secure':
      case 'excellent':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
      case 'pending':
      case 'normal':
        return 'bg-yellow-100 text-yellow-800';
      case 'due':
      case 'maintenance-required':
        return 'bg-orange-100 text-orange-800';
      case 'critical':
      case 'emergency':
        return 'bg-red-100 text-red-800';
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

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Infrastructure Management System</h1>
          <p className="text-gray-600">Comprehensive infrastructure and facility management for COEP</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Infrastructure Report
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Wrench className="h-4 w-4 mr-2" />
            New Maintenance Request
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Building className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Buildings</p>
                <p className="text-2xl font-bold">{infrastructureStats.totalBuildings}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Rooms</p>
                <p className="text-2xl font-bold">{infrastructureStats.totalRooms}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Maintenance</p>
                <p className="text-2xl font-bold">{infrastructureStats.activeMaintenance}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold">{infrastructureStats.pendingRequests}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Area</p>
                <p className="text-xl font-bold">{infrastructureStats.totalArea.toLocaleString()} sq ft</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Energy Usage</p>
                <p className="text-lg font-bold">{infrastructureStats.energyConsumption} kWh/day</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Droplets className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Water Usage</p>
                <p className="text-lg font-bold">{infrastructureStats.waterConsumption.toLocaleString()} L/day</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Parking Spaces</p>
                <p className="text-2xl font-bold">{infrastructureStats.parkingSpaces}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Infrastructure Overview</TabsTrigger>
          <TabsTrigger value="buildings">Building Management</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="utilities">Utilities & Services</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campus Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Campus Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Academic Buildings</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">8</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-green-600 mr-2" />
                      <span>Residential Buildings</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">4</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-purple-600 mr-2" />
                      <span>Administrative Buildings</span>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">3</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maintenance Status */}
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Up to Date</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">12</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-yellow-600 mr-2" />
                      <span>Maintenance Due</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">2</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                      <span>Critical Issues</span>
                    </div>
                    <Badge className="bg-red-100 text-red-800">1</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="buildings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Building Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {buildings.map((building) => (
                  <div key={building.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{building.name}</h3>
                          <Badge className={getStatusColor(building.status)}>
                            {building.status.toUpperCase()}
                          </Badge>
                          <Badge className={getStatusColor(building.maintenance)}>
                            {building.maintenance.replace('-', ' ').toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{building.type}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Building ID:</span>
                            <br />
                            {building.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Floors/Rooms:</span>
                            <br />
                            {building.floors} floors, {building.rooms} rooms
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Capacity:</span>
                            <br />
                            {building.capacity.toLocaleString()} people
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Built/Renovated:</span>
                            <br />
                            {building.yearBuilt} / {building.lastRenovation}
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="font-medium text-gray-600">Facilities:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {building.facilities.map((facility, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {facility}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Building Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Floor Plan
                        </Button>
                        {building.maintenance === 'due' && (
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                            Schedule Maintenance
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

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceRequests.map((request) => (
                  <div key={request.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{request.issue}</h3>
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
                            <span className="font-medium text-gray-600">Location:</span>
                            <br />
                            {request.building} - {request.room}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Reported By:</span>
                            <br />
                            {request.reportedBy}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Assigned To:</span>
                            <br />
                            {request.assignedTo}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-3">
                          <div>
                            <span className="font-medium text-gray-600">Reported Date:</span>
                            <br />
                            {request.reportedDate}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Expected Completion:</span>
                            <br />
                            {request.estimatedCompletion}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {request.status === 'pending' && (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Assign Team
                          </Button>
                        )}
                        {request.status === 'in-progress' && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Mark Complete
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

        <TabsContent value="utilities" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Electricity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                  Electricity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Daily Consumption:</span>
                    <span className="font-bold">{utilities.electricity.consumption}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Cost:</span>
                    <span className="font-bold">{utilities.electricity.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Efficiency:</span>
                    <span className="font-bold text-green-600">{utilities.electricity.efficiency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <Badge className={getStatusColor(utilities.electricity.status)}>
                      {utilities.electricity.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Water */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Droplets className="h-5 w-5 mr-2 text-blue-500" />
                  Water Supply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Daily Consumption:</span>
                    <span className="font-bold">{utilities.water.consumption}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Cost:</span>
                    <span className="font-bold">{utilities.water.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Efficiency:</span>
                    <span className="font-bold text-green-600">{utilities.water.efficiency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <Badge className={getStatusColor(utilities.water.status)}>
                      {utilities.water.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Internet */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wifi className="h-5 w-5 mr-2 text-purple-500" />
                  Internet & Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Bandwidth:</span>
                    <span className="font-bold">{utilities.internet.bandwidth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Cost:</span>
                    <span className="font-bold">{utilities.internet.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uptime:</span>
                    <span className="font-bold text-green-600">{utilities.internet.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <Badge className={getStatusColor(utilities.internet.status)}>
                      {utilities.internet.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-500" />
                  Security Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>CCTV Cameras:</span>
                    <span className="font-bold">{utilities.security.cctvCameras}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Access Points:</span>
                    <span className="font-bold">{utilities.security.accessPoints}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Guards:</span>
                    <span className="font-bold">{utilities.security.guards}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <Badge className={getStatusColor(utilities.security.status)}>
                      {utilities.security.status.toUpperCase()}
                    </Badge>
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