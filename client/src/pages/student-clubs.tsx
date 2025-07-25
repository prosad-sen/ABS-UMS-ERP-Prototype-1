import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import DetailedStatsModal from "@/components/analytics/detailed-stats-modal";
import { 
  Users, 
  Calendar, 
  Trophy,
  Star,
  MapPin,
  Clock,
  Target,
  Award,
  Camera,
  Music,
  Code,
  Gamepad2,
  BookOpen,
  Heart,
  Globe,
  Zap,
  Lightbulb,
  Rocket,
  Palette,
  Search,
  Filter,
  Plus
} from "lucide-react";

export default function StudentClobs() {
  const [activeTab, setActiveTab] = useState("explore");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedDetailType, setSelectedDetailType] = useState<string>("");
  const [selectedDetailTitle, setSelectedDetailTitle] = useState<string>("");

  // COEP Student Clubs Data
  const clubsData = [
    {
      id: 1,
      name: "Robotics Club COEP",
      category: "Technical",
      description: "Building innovative robots and competing in national competitions",
      members: 127,
      established: 2018,
      president: "Arjun Sharma (TE ENTC)",
      rating: 4.8,
      nextEvent: "RoboWars 2024",
      eventDate: "Feb 15, 2024",
      achievements: ["Winner - National Robotics Championship 2023", "Best Innovation Award - COEP TechFest"],
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-blue-500",
      isJoined: true,
      activities: 23,
      budget: "₹2.5L"
    },
    {
      id: 2,
      name: "COEP Coding Club",
      category: "Technical",
      description: "Competitive programming and software development community",
      members: 234,
      established: 2015,
      president: "Sneha Patel (BE CSE)",
      rating: 4.9,
      nextEvent: "Code Sprint 2024",
      eventDate: "Feb 20, 2024",
      achievements: ["ACM ICPC Regional Winners", "Google Code-in Mentors"],
      icon: <Code className="h-6 w-6" />,
      color: "bg-green-500",
      isJoined: true,
      activities: 45,
      budget: "₹1.8L"
    },
    {
      id: 3,
      name: "Cultural Committee COEP",
      category: "Cultural",
      description: "Organizing cultural events and preserving traditional arts",
      members: 189,
      established: 2010,
      president: "Priya Joshi (TE ME)",
      rating: 4.7,
      nextEvent: "Annual Cultural Night",
      eventDate: "Mar 5, 2024",
      achievements: ["Best Cultural Performance - State Level", "UNESCO Cultural Heritage Project"],
      icon: <Music className="h-6 w-6" />,
      color: "bg-purple-500",
      isJoined: false,
      activities: 34,
      budget: "₹3.2L"
    },
    {
      id: 4,
      name: "Photography Club",
      category: "Creative",
      description: "Capturing moments and developing photography skills",
      members: 78,
      established: 2019,
      president: "Vikram Singh (BE IT)",
      rating: 4.6,
      nextEvent: "Campus Photo Walk",
      eventDate: "Feb 10, 2024",
      achievements: ["National Geographic Contest Finalist", "COEP Campus Calendar Project"],
      icon: <Camera className="h-6 w-6" />,
      color: "bg-yellow-500",
      isJoined: false,
      activities: 18,
      budget: "₹95K"
    },
    {
      id: 5,
      name: "E-Sports COEP",
      category: "Sports",
      description: "Competitive gaming and esports tournaments",
      members: 156,
      established: 2020,
      president: "Amit Kumar (TE CSE)",
      rating: 4.5,
      nextEvent: "COEP Gaming Championship",
      eventDate: "Feb 25, 2024",
      achievements: ["Maharashtra State E-Sports Champions", "Intel Gaming Tournament Winners"],
      icon: <Gamepad2 className="h-6 w-6" />,
      color: "bg-red-500",
      isJoined: true,
      activities: 29,
      budget: "₹1.2L"
    },
    {
      id: 6,
      name: "Literary Society",
      category: "Academic",
      description: "Promoting literature, writing, and public speaking",
      members: 89,
      established: 2012,
      president: "Kavya Sharma (TE Civil)",
      rating: 4.8,
      nextEvent: "Poetry Slam Night",
      eventDate: "Feb 18, 2024",
      achievements: ["Best College Magazine - University Level", "National Debate Championship"],
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-indigo-500",
      isJoined: false,
      activities: 26,
      budget: "₹75K"
    },
    {
      id: 7,
      name: "Social Service Club",
      category: "Service",
      description: "Community service and social welfare activities",
      members: 201,
      established: 2008,
      president: "Neha Agarwal (BE ME)",
      rating: 4.9,
      nextEvent: "Blood Donation Drive",
      eventDate: "Feb 12, 2024",
      achievements: ["Outstanding Social Service Award", "500+ Lives Impacted"],
      icon: <Heart className="h-6 w-6" />,
      color: "bg-pink-500",
      isJoined: true,
      activities: 52,
      budget: "₹1.5L"
    },
    {
      id: 8,
      name: "Innovation Hub",
      category: "Entrepreneurship",
      description: "Startup incubation and innovation projects",
      members: 67,
      established: 2021,
      president: "Rajesh Patel (BE EE)",
      rating: 4.7,
      nextEvent: "Startup Pitch Day",
      eventDate: "Mar 1, 2024",
      achievements: ["3 Successful Startups Launched", "₹50L Funding Raised"],
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-orange-500",
      isJoined: false,
      activities: 15,
      budget: "₹2.8L"
    }
  ];

  const myClubs = clubsData.filter(club => club.isJoined);
  
  const categories = ["all", "Technical", "Cultural", "Creative", "Sports", "Academic", "Service", "Entrepreneurship"];

  const filteredClubs = clubsData.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         club.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const upcomingEvents = [
    {
      club: "Robotics Club COEP",
      event: "RoboWars 2024",
      date: "Feb 15, 2024",
      time: "10:00 AM",
      venue: "Workshop Ground",
      type: "Competition"
    },
    {
      club: "COEP Coding Club", 
      event: "Code Sprint 2024",
      date: "Feb 20, 2024",
      time: "2:00 PM",
      venue: "Computer Lab 3",
      type: "Competition"
    },
    {
      club: "Photography Club",
      event: "Campus Photo Walk",
      date: "Feb 10, 2024", 
      time: "6:00 AM",
      venue: "Main Gate",
      type: "Activity"
    },
    {
      club: "Social Service Club",
      event: "Blood Donation Drive",
      date: "Feb 12, 2024",
      time: "9:00 AM", 
      venue: "Seminar Hall",
      type: "Service"
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">COEP Student Clubs</h1>
          <p className="text-gray-600 mt-2">Discover, join, and participate in campus clubs and organizations</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create New Club
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{myClubs.length}</div>
            <div className="text-sm text-gray-600">My Clubs</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">4</div>
            <div className="text-sm text-gray-600">Upcoming Events</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600">12</div>
            <div className="text-sm text-gray-600">Achievements</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">4.7</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="explore">Explore Clubs</TabsTrigger>
          <TabsTrigger value="my-clubs">My Clubs</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="explore" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search clubs, activities, or interests..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club) => (
              <Card key={club.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${club.color} text-white`}>
                        {club.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{club.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">{club.category}</Badge>
                      </div>
                    </div>
                    {club.isJoined && <Badge className="bg-green-100 text-green-800">Joined</Badge>}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">{club.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span>{club.members} members</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span>{club.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm">
                      <p className="text-gray-600">President: <span className="font-semibold">{club.president}</span></p>
                      <p className="text-gray-600">Est. {club.established} • {club.activities} activities</p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="font-semibold text-sm">Next Event:</span>
                      </div>
                      <p className="text-sm text-blue-800">{club.nextEvent}</p>
                      <p className="text-xs text-blue-600">{club.eventDate}</p>
                    </div>

                    <div className="flex space-x-2">
                      {club.isJoined ? (
                        <Button variant="outline" className="flex-1">View Details</Button>
                      ) : (
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Join Club</Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-clubs" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {myClubs.map((club) => (
              <Card key={club.id} className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${club.color} text-white`}>
                        {club.icon}
                      </div>
                      <div>
                        <CardTitle>{club.name}</CardTitle>
                        <Badge className="bg-green-100 text-green-800">Active Member</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{club.members}</div>
                        <div className="text-xs text-gray-600">Members</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">{club.activities}</div>
                        <div className="text-xs text-gray-600">Activities</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">{club.rating}</div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Recent Achievements:</h4>
                      <ul className="text-sm space-y-1">
                        {club.achievements.slice(0, 2).map((achievement, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Trophy className="h-3 w-3 text-yellow-600" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Club Dashboard</Button>
                      <Button variant="outline" className="flex-1">Settings</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{event.event}</CardTitle>
                    <Badge className={`${
                      event.type === 'Competition' ? 'bg-red-100 text-red-800' :
                      event.type === 'Activity' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{event.club}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">Register</Button>
                      <Button variant="outline" className="flex-1">Add to Calendar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Club Explorer",
                description: "Joined 3+ clubs",
                icon: <Users className="h-8 w-8" />,
                achieved: true,
                progress: 100,
                color: "bg-blue-500"
              },
              {
                title: "Event Enthusiast",
                description: "Participated in 10+ events",
                icon: <Calendar className="h-8 w-8" />,
                achieved: true,
                progress: 100,
                color: "bg-green-500"
              },
              {
                title: "Competition Champion",
                description: "Won 3+ competitions",
                icon: <Trophy className="h-8 w-8" />,
                achieved: true,
                progress: 100,
                color: "bg-yellow-500"
              },
              {
                title: "Leadership Star",
                description: "Hold executive position",
                icon: <Star className="h-8 w-8" />,
                achieved: false,
                progress: 60,
                color: "bg-purple-500"
              },
              {
                title: "Community Builder",
                description: "Recruit 10+ new members",
                icon: <Target className="h-8 w-8" />,
                achieved: false,
                progress: 40,
                color: "bg-red-500"
              },
              {
                title: "Innovation Catalyst",
                description: "Launch new initiative",
                icon: <Lightbulb className="h-8 w-8" />,
                achieved: false,
                progress: 25,
                color: "bg-orange-500"
              }
            ].map((achievement, index) => (
              <Card key={index} className={`text-center ${achievement.achieved ? 'border-2 border-green-200' : 'border-2 border-dashed border-gray-300'}`}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${achievement.color} ${achievement.achieved ? '' : 'opacity-40'} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {achievement.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
                  
                  {achievement.achieved ? (
                    <Badge className="bg-green-100 text-green-800">Achieved!</Badge>
                  ) : (
                    <div className="space-y-2">
                      <Progress value={achievement.progress} className="h-2" />
                      <div className="text-xs text-gray-500">{achievement.progress}% Complete</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Detailed Stats Modal */}
      <DetailedStatsModal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title={selectedDetailTitle}
        type={selectedDetailType as any}
        data={{}}
      />
    </div>
  );
}