import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Calendar, 
  Trophy, 
  Star,
  MapPin,
  Clock,
  UserPlus,
  Eye,
  Heart
} from 'lucide-react';

export default function StudentClubs() {
  const [activeTab, setActiveTab] = useState('all-clubs');

  const clubs = [
    {
      id: 'robotics-club',
      name: 'Robotics Club',
      category: 'Technical',
      members: 145,
      description: 'Build and program robots for competitions and innovation',
      image: '/api/placeholder/300/200',
      meetingTime: 'Fridays 4:00 PM',
      location: 'Tech Lab 3',
      president: 'Arjun Patel',
      achievements: ['National Robotics Championship 2024', 'Best Innovation Award'],
      upcomingEvents: ['Robot Building Workshop - March 30'],
      isJoined: true
    },
    {
      id: 'cultural-committee',
      name: 'Cultural Committee',
      category: 'Cultural',
      members: 230,
      description: 'Organize cultural events, festivals, and artistic performances',
      image: '/api/placeholder/300/200',
      meetingTime: 'Wednesdays 5:30 PM',
      location: 'Auditorium',
      president: 'Priya Sharma',
      achievements: ['Best Cultural Event 2024', 'Inter-College Dance Competition Winners'],
      upcomingEvents: ['Annual Cultural Fest - April 15-17'],
      isJoined: false
    },
    {
      id: 'nss',
      name: 'National Service Scheme (NSS)',
      category: 'Social Service',
      members: 180,
      description: 'Community service and social welfare activities',
      image: '/api/placeholder/300/200',
      meetingTime: 'Saturdays 10:00 AM',
      location: 'Community Center',
      president: 'Vikram Singh',
      achievements: ['Outstanding NSS Unit Award', '500+ Hours Community Service'],
      upcomingEvents: ['Tree Plantation Drive - March 28'],
      isJoined: true
    },
    {
      id: 'ieee-student-branch',
      name: 'IEEE Student Branch',
      category: 'Professional',
      members: 95,
      description: 'IEEE professional development and technical advancement',
      image: '/api/placeholder/300/200',
      meetingTime: 'Mondays 6:00 PM',
      location: 'Conference Room',
      president: 'Neha Agarwal',
      achievements: ['Best Student Branch Award', 'Technical Paper Publication'],
      upcomingEvents: ['IEEE Workshop on AI - April 5'],
      isJoined: false
    },
    {
      id: 'sports-club',
      name: 'Sports Club',
      category: 'Sports',
      members: 320,
      description: 'Promote sports activities and athletic excellence',
      image: '/api/placeholder/300/200',
      meetingTime: 'Daily 6:00 AM',
      location: 'Sports Complex',
      president: 'Rahul Kumar',
      achievements: ['Inter-University Cricket Champions', 'Best Sports Club Award'],
      upcomingEvents: ['Annual Sports Meet - April 20-22'],
      isJoined: true
    },
    {
      id: 'entrepreneurship-cell',
      name: 'Entrepreneurship Cell',
      category: 'Professional',
      members: 120,
      description: 'Foster entrepreneurial mindset and startup culture',
      image: '/api/placeholder/300/200',
      meetingTime: 'Thursdays 7:00 PM',
      location: 'Innovation Hub',
      president: 'Anita Desai',
      achievements: ['5 Successful Startups', 'Best E-Cell Award'],
      upcomingEvents: ['Startup Pitch Competition - April 10'],
      isJoined: false
    }
  ];

  const myClubs = clubs.filter(club => club.isJoined);
  const categories = ['All', 'Technical', 'Cultural', 'Social Service', 'Professional', 'Sports'];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technical': return 'bg-blue-100 text-blue-800';
      case 'Cultural': return 'bg-purple-100 text-purple-800';
      case 'Social Service': return 'bg-green-100 text-green-800';
      case 'Professional': return 'bg-orange-100 text-orange-800';
      case 'Sports': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Clubs & Organizations</h1>
          <p className="text-gray-600">Join clubs, participate in activities, and build your network</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <UserPlus className="h-4 w-4 mr-2" />
          Create Club
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Clubs</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <UserPlus className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">My Clubs</p>
                <p className="text-2xl font-bold">{myClubs.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Events This Month</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Achievements</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all-clubs">All Clubs</TabsTrigger>
          <TabsTrigger value="my-clubs">My Clubs</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        </TabsList>

        <TabsContent value="all-clubs" className="space-y-4">
          {/* Category Filter */}
          <div className="flex space-x-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club) => (
              <Card key={club.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{club.name}</CardTitle>
                      <Badge className={getCategoryColor(club.category)}>
                        {club.category}
                      </Badge>
                    </div>
                    {club.isJoined && (
                      <Badge className="bg-green-100 text-green-800">
                        <Heart className="h-3 w-3 mr-1" />
                        Joined
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{club.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {club.members} members
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {club.meetingTime}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {club.location}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">President: {club.president}</p>
                    
                    {club.achievements.length > 0 && (
                      <div>
                        <p className="text-sm font-medium">Recent Achievements:</p>
                        <ul className="text-xs text-gray-600 list-disc list-inside">
                          {club.achievements.slice(0, 2).map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    {club.isJoined ? (
                      <Button variant="outline" size="sm" className="bg-red-50 text-red-600 hover:bg-red-100">
                        Leave Club
                      </Button>
                    ) : (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Join Club
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-clubs" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myClubs.map((club) => (
              <Card key={club.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{club.name}</CardTitle>
                      <Badge className={getCategoryColor(club.category)}>
                        {club.category}
                      </Badge>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      <Star className="h-3 w-3 mr-1" />
                      Member
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{club.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Next Meeting: {club.meetingTime}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {club.location}
                    </div>
                  </div>

                  {club.upcomingEvents.length > 0 && (
                    <div>
                      <p className="text-sm font-medium">Upcoming Events:</p>
                      <ul className="text-xs text-gray-600 list-disc list-inside">
                        {club.upcomingEvents.map((event, index) => (
                          <li key={index}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      Club Dashboard
                    </Button>
                    <Button variant="outline" size="sm" className="bg-red-50 text-red-600 hover:bg-red-100">
                      Leave Club
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Robot Building Workshop</h3>
                      <p className="text-sm text-gray-600">Robotics Club</p>
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        March 30, 2024 - 2:00 PM
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        Tech Lab 3
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Register
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Tree Plantation Drive</h3>
                      <p className="text-sm text-gray-600">National Service Scheme (NSS)</p>
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        March 28, 2024 - 7:00 AM
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        Campus Ground
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Register
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">IEEE Workshop on AI</h3>
                      <p className="text-sm text-gray-600">IEEE Student Branch</p>
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        April 5, 2024 - 10:00 AM
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        Conference Room
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}