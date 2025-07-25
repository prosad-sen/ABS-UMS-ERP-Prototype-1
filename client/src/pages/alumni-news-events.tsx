import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  MapPin, 
  Clock,
  Users,
  Bell,
  Award,
  GraduationCap,
  Building,
  Briefcase,
  Trophy,
  Star,
  Search,
  Filter,
  Share2,
  Bookmark,
  ArrowRight
} from "lucide-react";

export default function AlumniNewsEvents() {
  const [activeTab, setActiveTab] = useState("news");
  const [searchTerm, setSearchTerm] = useState("");

  const universityNews = [
    {
      id: 1,
      title: "COEP Achieves Top 10 Ranking in Engineering Excellence Survey 2024",
      date: "2024-07-20",
      category: "Achievement",
      image: "/api/placeholder/400/200",
      summary: "COEP Technological University has been ranked among the top 10 engineering institutions in India by the National Engineering Excellence Survey 2024.",
      content: "This achievement reflects our commitment to academic excellence, research innovation, and industry partnerships.",
      author: "Communications Team",
      tags: ["ranking", "achievement", "excellence"],
      readTime: "3 min read",
      likes: 145,
      shares: 67
    },
    {
      id: 2,
      title: "New AI Research Center Inaugurated with ₹50 Crore Investment",
      date: "2024-07-15",
      category: "Infrastructure",
      image: "/api/placeholder/400/200",
      summary: "State-of-the-art AI Research Center equipped with advanced GPUs and quantum computing simulators has been inaugurated.",
      content: "The center will focus on cutting-edge research in artificial intelligence, machine learning, and quantum computing.",
      author: "Research Department",
      tags: ["AI", "research", "infrastructure"],
      readTime: "5 min read",
      likes: 203,
      shares: 89
    },
    {
      id: 3,
      title: "COEP Alumni Startup Raises $10M Series A Funding",
      date: "2024-07-10",
      category: "Alumni Success",
      image: "/api/placeholder/400/200",
      summary: "TechFlow Solutions, founded by 2018 batch alumni, secures major funding round for their IoT platform.",
      content: "The startup, founded by Pradeep Kumar and team, has developed innovative IoT solutions for smart cities.",
      author: "Alumni Relations",
      tags: ["alumni", "startup", "funding"],
      readTime: "4 min read",
      likes: 178,
      shares: 45
    },
    {
      id: 4,
      title: "International Collaboration Agreement with Stanford University",
      date: "2024-07-05",
      category: "Partnership",
      image: "/api/placeholder/400/200",
      summary: "COEP signs MoU with Stanford University for student exchange and joint research programs.",
      content: "This partnership will enable students to participate in exchange programs and collaborative research projects.",
      author: "International Relations",
      tags: ["partnership", "international", "collaboration"],
      readTime: "6 min read",
      likes: 234,
      shares: 123
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Homecoming 2024",
      date: "2024-08-15",
      time: "09:00 AM - 06:00 PM",
      location: "COEP Main Campus",
      type: "Alumni Event",
      description: "Join us for the biggest alumni gathering of the year with networking, cultural programs, and campus tours.",
      registrations: 456,
      capacity: 800,
      featured: true,
      organizer: "Alumni Association",
      agenda: [
        "Registration & Welcome Breakfast",
        "Campus Tour & New Facilities Showcase",
        "Alumni Achievement Awards Ceremony",
        "Networking Lunch",
        "Cultural Program by Current Students",
        "Farewell Dinner"
      ]
    },
    {
      id: 2,
      title: "Tech Summit 2024: AI and Future Technologies",
      date: "2024-08-22",
      time: "10:00 AM - 05:00 PM",
      location: "Virtual + COEP Auditorium",
      type: "Conference",
      description: "Industry leaders and alumni discuss latest trends in AI, blockchain, and emerging technologies.",
      registrations: 234,
      capacity: 500,
      featured: true,
      organizer: "Computer Science Department",
      speakers: [
        "Dr. Rajesh Kumar - AI Research Head, Google",
        "Priya Sharma - CTO, Microsoft India",
        "Ankit Agarwal - Founder, TechFlow Solutions"
      ]
    },
    {
      id: 3,
      title: "Career Guidance Workshop for Final Year Students",
      date: "2024-08-28",
      time: "02:00 PM - 05:00 PM",
      location: "COEP Seminar Hall",
      type: "Workshop",
      description: "Alumni mentors provide career guidance, interview tips, and industry insights to final year students.",
      registrations: 178,
      capacity: 200,
      featured: false,
      organizer: "Training & Placement Cell",
      topics: [
        "Resume Building & LinkedIn Optimization",
        "Interview Preparation Strategies",
        "Industry Trends & Career Opportunities",
        "Startup vs Corporate: Making the Right Choice"
      ]
    },
    {
      id: 4,
      title: "Innovation Challenge 2024 - Pitch Competition",
      date: "2024-09-05",
      time: "09:00 AM - 06:00 PM",
      location: "Innovation Lab, COEP",
      type: "Competition",
      description: "Students present innovative solutions to real-world problems, judged by industry experts and alumni.",
      registrations: 89,
      capacity: 150,
      featured: false,
      organizer: "Entrepreneurship Cell",
      prizes: [
        "Winner: ₹2,00,000 + Incubation Support",
        "Runner-up: ₹1,00,000 + Mentorship",
        "Third Place: ₹50,000 + Recognition"
      ]
    }
  ];

  const alumniAchievements = [
    {
      id: 1,
      name: "Dr. Anita Desai",
      batch: "1995",
      achievement: "Appointed as Chief Technology Officer at Infosys",
      date: "2024-07-18",
      department: "Computer Science",
      description: "Leading digital transformation initiatives across global operations."
    },
    {
      id: 2,
      name: "Rohit Sharma",
      batch: "2010",
      achievement: "Received IEEE Outstanding Engineer Award 2024",
      date: "2024-07-12",
      department: "Electronics & Telecommunication",
      description: "Recognized for contributions to 5G technology development."
    },
    {
      id: 3,
      name: "Priya Patel",
      batch: "2008",
      achievement: "Featured in Forbes 40 Under 40 List",
      date: "2024-07-08",
      department: "Information Technology",
      description: "Founder of successful EdTech startup serving 2M+ students."
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Alumni Directory Update Campaign",
      date: "2024-07-25",
      priority: "high",
      description: "Update your contact information in the alumni directory to stay connected with the COEP community.",
      action: "Update Profile",
      deadline: "2024-08-31"
    },
    {
      id: 2,
      title: "Call for Nominations: Distinguished Alumni Award 2024",
      date: "2024-07-20",
      priority: "medium",
      description: "Nominate exceptional alumni who have made significant contributions to their fields and society.",
      action: "Submit Nomination",
      deadline: "2024-09-15"
    },
    {
      id: 3,
      title: "Alumni Mentorship Program - Volunteer Registration",
      date: "2024-07-15",
      priority: "medium",
      description: "Guide the next generation of COEP engineers by joining our mentorship program as a volunteer mentor.",
      action: "Register as Mentor",
      deadline: "2024-08-15"
    }
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-green-900 text-white p-6 rounded-lg shadow-xl">
        <div className="flex items-center space-x-3">
          <Bell className="h-8 w-8 text-blue-300" />
          <div>
            <h1 className="text-3xl font-bold">University News & Events</h1>
            <p className="text-blue-100">Stay Connected with COEP Community Updates</p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search news, events, or announcements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Bookmark className="h-4 w-4 mr-2" />
            Saved
          </Button>
        </div>
      </div>

      <Tabs defaultValue="news" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="news">University News</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          <TabsTrigger value="achievements">Alumni Achievements</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="news" className="space-y-6">
          <div className="space-y-6">
            {universityNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <Building className="h-16 w-16 text-blue-500" />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-blue-500">{news.category}</Badge>
                        <span className="text-sm text-gray-500">{news.date}</span>
                        <span className="text-sm text-gray-500">• {news.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3">{news.title}</h2>
                      <p className="text-gray-700 mb-4">{news.summary}</p>
                      <p className="text-sm text-gray-600 mb-4">{news.content}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {news.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>By {news.author}</span>
                          <span>👍 {news.likes}</span>
                          <span>📤 {news.shares}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                          <Button size="sm">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className={`hover:shadow-lg transition-shadow ${
                event.featured ? 'border-blue-200 bg-blue-50' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={
                          event.type === 'Alumni Event' ? 'bg-blue-500' :
                          event.type === 'Conference' ? 'bg-purple-500' :
                          event.type === 'Workshop' ? 'bg-green-500' : 'bg-orange-500'
                        }>
                          {event.type}
                        </Badge>
                        {event.featured && (
                          <Badge className="bg-yellow-500">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <h2 className="text-xl font-bold mb-3">{event.title}</h2>
                      <p className="text-gray-700 mb-4">{event.description}</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-red-600" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">{event.registrations} registered</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Capacity: {event.capacity}
                        </span>
                        <span className="text-sm text-gray-500">
                          Organized by: {event.organizer}
                        </span>
                      </div>
                      
                      {event.agenda && (
                        <div className="mb-4">
                          <p className="text-sm font-semibold mb-2">Event Agenda:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {event.agenda.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {event.speakers && (
                        <div className="mb-4">
                          <p className="text-sm font-semibold mb-2">Featured Speakers:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {event.speakers.map((speaker, index) => (
                              <li key={index}>• {speaker}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {event.topics && (
                        <div className="mb-4">
                          <p className="text-sm font-semibold mb-2">Workshop Topics:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {event.topics.map((topic, index) => (
                              <li key={index}>• {topic}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {event.prizes && (
                        <div className="mb-4">
                          <p className="text-sm font-semibold mb-2">Prizes:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {event.prizes.map((prize, index) => (
                              <li key={index}>• {prize}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-6">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Register Now
                      </Button>
                      <Button variant="outline" size="sm">
                        Add to Calendar
                      </Button>
                      <Button variant="outline" size="sm">
                        Share Event
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="space-y-4">
            {alumniAchievements.map((achievement) => (
              <Card key={achievement.id} className="hover:shadow-lg transition-shadow border-yellow-200 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {achievement.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold text-lg">{achievement.name}</h3>
                        <Badge variant="outline">Batch {achievement.batch}</Badge>
                      </div>
                      <p className="text-gray-600 mb-1">{achievement.department}</p>
                      <h4 className="font-semibold text-yellow-800 mb-2">{achievement.achievement}</h4>
                      <p className="text-sm text-gray-700">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-2">{achievement.date}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Trophy className="h-6 w-6 text-yellow-600" />
                      <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-6">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className={`hover:shadow-lg transition-shadow ${
                announcement.priority === 'high' ? 'border-red-200 bg-red-50' : 'border-blue-200 bg-blue-50'
              }`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold text-lg">{announcement.title}</h3>
                        <Badge className={
                          announcement.priority === 'high' ? 'bg-red-500' : 'bg-blue-500'
                        }>
                          {announcement.priority.toUpperCase()} Priority
                        </Badge>
                      </div>
                      <p className="text-gray-700 mb-3">{announcement.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Posted: {announcement.date}</span>
                        <span>Deadline: {announcement.deadline}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <Button className={
                        announcement.priority === 'high' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                      }>
                        {announcement.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}