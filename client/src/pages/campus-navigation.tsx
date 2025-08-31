import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Building2, 
  Car, 
  Book, 
  Users,
  Search,
  Route,
  Timer
} from 'lucide-react';

interface Location {
  id: number;
  name: string;
  type: string;
  description: string;
  floor: string;
  coordinates: { x: number; y: number };
  facilities: string[];
  timings: string;
  icon: any;
}

interface RouteInfo {
  destination: string;
  distance: string;
  walkingTime: string;
  steps: string[];
}

export default function CampusNavigation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);

  const campusLocations = [
    {
      id: 1,
      name: "Main Academic Block",
      type: "Academic",
      description: "Classrooms, Faculty Offices, Administrative Offices",
      floor: "Ground to 4th Floor",
      coordinates: { x: 50, y: 30 },
      facilities: ["Classrooms", "Labs", "Faculty Rooms", "Admin Office"],
      timings: "6:00 AM - 10:00 PM",
      icon: Building2
    },
    {
      id: 2,
      name: "Central Library",
      type: "Academic",
      description: "Main library with digital resources and reading halls",
      floor: "Ground to 3rd Floor",
      coordinates: { x: 30, y: 45 },
      facilities: ["Books", "Digital Resources", "Reading Halls", "Group Study"],
      timings: "8:00 AM - 11:00 PM",
      icon: Book
    },
    {
      id: 3,
      name: "Student Center",
      type: "Recreation",
      description: "Cafeteria, Student Activities, Recreation Area",
      floor: "Ground to 2nd Floor",
      coordinates: { x: 60, y: 60 },
      facilities: ["Cafeteria", "Games Room", "Student Clubs", "Events Hall"],
      timings: "7:00 AM - 9:00 PM",
      icon: Users
    },
    {
      id: 4,
      name: "Engineering Labs Block",
      type: "Academic",
      description: "Specialized laboratories for all branches",
      floor: "Ground to 3rd Floor",
      coordinates: { x: 75, y: 25 },
      facilities: ["Computer Labs", "Mechanical Labs", "Electronics Labs", "Research Labs"],
      timings: "8:00 AM - 8:00 PM",
      icon: Building2
    },
    {
      id: 5,
      name: "Sports Complex",
      type: "Recreation",
      description: "Indoor and outdoor sports facilities",
      floor: "Ground Floor",
      coordinates: { x: 20, y: 75 },
      facilities: ["Gymnasium", "Basketball Court", "Tennis Court", "Swimming Pool"],
      timings: "5:00 AM - 10:00 PM",
      icon: Users
    },
    {
      id: 6,
      name: "Parking Area A",
      type: "Utility",
      description: "Main parking area for students and faculty",
      floor: "Ground Level",
      coordinates: { x: 15, y: 20 },
      facilities: ["2-Wheeler Parking", "4-Wheeler Parking", "EV Charging"],
      timings: "24/7",
      icon: Car
    }
  ];

  const filteredLocations = campusLocations.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const generateRoute = (destination: Location) => {
    // Simulate route generation
    setRouteInfo({
      destination: destination.name,
      distance: Math.floor(Math.random() * 500) + 100 + "m",
      walkingTime: Math.floor(Math.random() * 8) + 2 + " mins",
      steps: [
        "Exit current building",
        "Head towards the main pathway",
        "Turn right at the central fountain",
        `Walk straight to ${destination.name}`,
        "Arrive at destination"
      ]
    });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6" style={{paddingTop: '0px', marginTop: '0px'}}>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Campus Navigation</h1>
        <p className="text-gray-600">Find your way around COEP campus with interactive maps and directions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Search & Locations List */}
        <div className="lg:col-span-1 space-y-6">
          {/* Search */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Find Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search buildings, facilities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Quick Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSearchQuery('Academic')}
                  className="hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Academic
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSearchQuery('Recreation')}
                  className="hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Recreation
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSearchQuery('Parking')}
                  className="hover:bg-orange-50 hover:text-orange-700 transition-colors"
                >
                  <Car className="w-4 h-4 mr-2" />
                  Parking
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSearchQuery('')}
                  className="hover:bg-gray-50 transition-colors"
                >
                  All
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Locations List */}
          <Card className="max-h-96 overflow-y-auto">
            <CardHeader>
              <CardTitle>Campus Locations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {filteredLocations.map((location) => {
                const IconComponent = location.icon;
                return (
                  <div 
                    key={location.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 ${
                      selectedLocation?.id === location.id ? 'border-coep-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        location.type === 'Academic' ? 'bg-blue-100 text-blue-600' :
                        location.type === 'Recreation' ? 'bg-green-100 text-green-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm">{location.name}</h4>
                        <p className="text-xs text-gray-600 line-clamp-2">{location.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              location.type === 'Academic' ? 'border-blue-200 text-blue-700' :
                              location.type === 'Recreation' ? 'border-green-200 text-green-700' :
                              'border-orange-200 text-orange-700'
                            }`}
                          >
                            {location.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Map & Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Campus Map */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Interactive Campus Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-gradient-to-br from-green-100 via-blue-100 to-green-50 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
                {/* Campus Map SVG or Interactive Map would go here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Campus Map</p>
                    <p className="text-sm text-gray-500">Click on locations to explore</p>
                  </div>
                </div>

                {/* Location Markers */}
                {campusLocations.map((location) => (
                  <div
                    key={location.id}
                    className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer transform transition-all duration-200 hover:scale-125 ${
                      location.type === 'Academic' ? 'bg-blue-500' :
                      location.type === 'Recreation' ? 'bg-green-500' :
                      'bg-orange-500'
                    } ${selectedLocation?.id === location.id ? 'ring-4 ring-blue-300 scale-150' : ''}`}
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`
                    }}
                    onClick={() => setSelectedLocation(location)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Location Details */}
          {selectedLocation && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <selectedLocation.icon className="w-5 h-5" />
                  {selectedLocation.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-3">{selectedLocation.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Floor Information</h4>
                      <p className="text-sm text-gray-600">{selectedLocation.floor}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Operating Hours</h4>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <p className="text-sm text-gray-600">{selectedLocation.timings}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Available Facilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation.facilities.map((facility, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {facility}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    className="flex-1"
                    onClick={() => generateRoute(selectedLocation)}
                  >
                    <Route className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline">
                    <Navigation className="w-4 h-4 mr-2" />
                    Start Navigation
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Route Information */}
          {routeInfo && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Route className="w-5 h-5" />
                  Route to {routeInfo.destination}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{routeInfo.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{routeInfo.walkingTime} walk</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-3">Step-by-step directions:</h4>
                  <div className="space-y-2">
                    {routeInfo.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-coep-blue text-white text-xs flex items-center justify-center mt-0.5">
                          {idx + 1}
                        </div>
                        <p className="text-sm text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" onClick={() => setRouteInfo(null)} className="w-full">
                  Clear Route
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}