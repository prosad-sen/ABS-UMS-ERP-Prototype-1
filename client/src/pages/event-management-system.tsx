import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Star,
  Plus,
  Filter,
  Search,
  Ticket,
  Award,
  Music,
  BookOpen,
  Trophy
} from 'lucide-react';

export default function EventManagementSystem() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: "TechFest 2025 - Innovation Summit",
      description: "Annual technical festival featuring hackathons, workshops, and tech talks",
      date: "2025-03-15",
      time: "09:00 AM - 06:00 PM",
      venue: "Main Auditorium & Campus Grounds",
      category: "Technical",
      organizer: "Student Technical Committee",
      capacity: 1500,
      registered: 1247,
      status: "upcoming",
      featured: true,
      image: "/api/placeholder/400/200",
      tags: ["Hackathon", "Workshop", "Competition"],
      icon: Trophy,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Cultural Night - Euphoria",
      description: "An evening of music, dance, and cultural performances",
      date: "2025-03-20",
      time: "06:00 PM - 10:00 PM",
      venue: "Open Air Theatre",
      category: "Cultural",
      organizer: "Cultural Committee",
      capacity: 800,
      registered: 654,
      status: "upcoming",
      featured: false,
      image: "/api/placeholder/400/200",
      tags: ["Music", "Dance", "Performance"],
      icon: Music,
      gradient: "from-pink-500 to-orange-500"
    },
    {
      id: 3,
      title: "Career Guidance Workshop",
      description: "Industry experts share insights on career planning and skill development",
      date: "2025-03-08",
      time: "10:00 AM - 04:00 PM",
      venue: "Seminar Hall A",
      category: "Academic",
      organizer: "Training & Placement Cell",
      capacity: 300,
      registered: 289,
      status: "past",
      featured: false,
      image: "/api/placeholder/400/200",
      tags: ["Career", "Skills", "Industry"],
      icon: BookOpen,
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      title: "Annual Sports Meet",
      description: "Inter-department sports competition with various indoor and outdoor games",
      date: "2025-03-25",
      time: "08:00 AM - 05:00 PM",
      venue: "Sports Complex",
      category: "Sports",
      organizer: "Sports Committee",
      capacity: 1000,
      registered: 743,
      status: "upcoming",
      featured: true,
      image: "/api/placeholder/400/200",
      tags: ["Sports", "Competition", "Inter-dept"],
      icon: Award,
      gradient: "from-red-500 to-yellow-500"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Events', icon: Calendar },
    { value: 'Technical', label: 'Technical', icon: Trophy },
    { value: 'Cultural', label: 'Cultural', icon: Music },
    { value: 'Academic', label: 'Academic', icon: BookOpen },
    { value: 'Sports', label: 'Sports', icon: Award }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesTab = activeTab === 'all' || event.status === activeTab;
    
    return matchesSearch && matchesCategory && matchesTab;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6" style={{paddingTop: '0px', marginTop: '0px'}}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Event Management</h1>
            <p className="text-gray-600">Discover, register, and manage campus events</p>
          </div>
          <Button 
            onClick={() => setShowCreateEvent(true)}
            className="bg-gradient-to-r from-coep-blue to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>
      </div>

      {/* Filters & Search */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search events, organizers, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4" />
                        {category.label}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 mt-4 p-1 bg-gray-100 rounded-lg">
            {[
              { key: 'upcoming', label: 'Upcoming Events' },
              { key: 'past', label: 'Past Events' },
              { key: 'all', label: 'All Events' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-white text-coep-blue shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEvents.map((event) => {
          const IconComponent = event.icon;
          const registrationPercentage = (event.registered / event.capacity) * 100;
          
          return (
            <Card key={event.id} className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${event.featured ? 'ring-2 ring-yellow-400' : ''}`}>
              {/* Event Image/Header */}
              <div className={`h-32 bg-gradient-to-r ${event.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {event.featured && (
                    <Badge className="bg-yellow-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <IconComponent className="w-5 h-5" />
                    <h3 className="font-bold text-lg line-clamp-1">{event.title}</h3>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{event.venue}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{event.organizer}</span>
                  </div>
                </div>

                {/* Registration Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Registration Progress</span>
                    <span className="font-semibold">{event.registered}/{event.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        registrationPercentage >= 90 ? 'bg-red-500' :
                        registrationPercentage >= 70 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(registrationPercentage, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{Math.round(registrationPercentage)}% filled</span>
                    <span>{event.capacity - event.registered} spots left</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {event.status === 'upcoming' && event.registered < event.capacity ? (
                    <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                      <Ticket className="w-4 h-4 mr-2" />
                      Register Now
                    </Button>
                  ) : event.status === 'upcoming' ? (
                    <Button disabled className="flex-1">
                      <Users className="w-4 h-4 mr-2" />
                      Fully Booked
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  )}
                  
                  <Button variant="outline" size="sm">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredEvents.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Events Found</h3>
            <p className="text-gray-600 mb-4">
              No events match your current filters. Try adjusting your search criteria.
            </p>
            <Button onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setActiveTab('all');
            }}>
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Create Event Modal */}
      {showCreateEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Create New Event</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Event Title</label>
                  <Input placeholder="Enter event title" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.slice(1).map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea placeholder="Describe your event..." rows={3} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Start Time</label>
                  <Input type="time" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">End Time</label>
                  <Input type="time" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Venue</label>
                  <Input placeholder="Event location" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Capacity</label>
                  <Input type="number" placeholder="Maximum attendees" />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setShowCreateEvent(false)}>
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-coep-blue to-purple-600">
                  Create Event
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}