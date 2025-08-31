import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Search, 
  Clock,
  Calendar,
  User,
  Star,
  Download,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Video,
  FileText,
  Database,
  Wifi,
  QrCode,
  MapPin,
  Bookmark,
  Heart,
  Share2,
  Filter,
  BarChart3,
  TrendingUp,
  Award,
  Bell,
  Shield,
  Zap,
  Eye
} from "lucide-react";

export default function ComprehensiveLibrarySystem() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const libraryStats = {
    totalBooks: 125000,
    digitalResources: 45000,
    activeUsers: 2847,
    dailyVisitors: 456,
    booksIssued: 234,
    digitalDownloads: 1247,
    studySeats: 850,
    occupancyRate: 67.8,
    digitalAccessRate: 94.2
  };

  const digitalResources = [
    {
      category: "E-Books",
      count: 25000,
      usage: 89.3,
      popular: ["Engineering Mathematics", "Data Structures", "Digital Signal Processing"],
      providers: ["Springer", "IEEE Xplore", "McGraw Hill"],
      accessRate: 94.2
    },
    {
      category: "Research Journals",
      count: 15000,
      usage: 76.8,
      popular: ["Nature", "IEEE Transactions", "ACM Computing"],
      providers: ["Elsevier", "IEEE", "ACM Digital Library"],
      accessRate: 87.6
    },
    {
      category: "Video Lectures",
      count: 3500,
      usage: 82.1,
      popular: ["MIT OpenCourseWare", "Stanford Online", "NPTEL"],
      providers: ["Coursera", "edX", "NPTEL"],
      accessRate: 91.4
    },
    {
      category: "Reference Materials",
      count: 1500,
      usage: 65.4,
      popular: ["IEEE Standards", "Technical Handbooks", "Research Methods"],
      providers: ["IEEE", "ASTM", "ISO"],
      accessRate: 78.9
    }
  ];

  const smartFeatures = [
    {
      feature: "AI-Powered Book Recommendation",
      description: "Personalized book suggestions based on reading history and academic profile",
      usage: 89.2,
      icon: <Zap className="h-5 w-5" />,
      status: "active"
    },
    {
      feature: "QR Code Quick Access",
      description: "Instant book information and availability check via QR scanning",
      usage: 94.7,
      icon: <QrCode className="h-5 w-5" />,
      status: "active"
    },
    {
      feature: "Real-time Seat Booking",
      description: "Live study space availability and advance booking system",
      usage: 76.3,
      icon: <MapPin className="h-5 w-5" />,
      status: "active"
    },
    {
      feature: "Digital Note Taking",
      description: "Integrated note-taking system with cloud synchronization",
      usage: 82.8,
      icon: <FileText className="h-5 w-5" />,
      status: "active"
    },
    {
      feature: "Cross-Reference Linking",
      description: "Smart linking between related books, papers, and resources",
      usage: 67.9,
      icon: <Database className="h-5 w-5" />,
      status: "beta"
    },
    {
      feature: "Virtual Reality Tours",
      description: "VR-guided tours of special collections and archives",
      usage: 23.4,
      icon: <Eye className="h-5 w-5" />,
      status: "pilot"
    }
  ];

  const currentReadings = [
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      progress: 67,
      timeSpent: "45 hours",
      notes: 23,
      bookmarks: 8,
      type: "physical",
      dueDate: "2024-09-15",
      renewals: 1
    },
    {
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      progress: 89,
      timeSpent: "28 hours",
      notes: 15,
      bookmarks: 12,
      type: "digital",
      accessExpiry: "2024-12-31",
      downloads: 3
    },
    {
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma",
      progress: 34,
      timeSpent: "12 hours",
      notes: 7,
      bookmarks: 4,
      type: "digital",
      accessExpiry: "2024-10-20",
      downloads: 1
    }
  ];

  const discoveryHub = [
    {
      title: "AI & Machine Learning Collection",
      description: "Latest research papers and books on artificial intelligence",
      resources: 245,
      trending: true,
      category: "Research",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Sustainable Engineering Practices",
      description: "Resources on green technology and sustainable development",
      resources: 156,
      trending: false,
      category: "Environment",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Digital Transformation in Industry",
      description: "Case studies and frameworks for Industry 4.0",
      resources: 89,
      trending: true,
      category: "Technology",
      image: "/api/placeholder/300/200"
    }
  ];

  const libraryAnalytics = {
    topCategories: [
      { category: "Computer Science", usage: 89.3, growth: 12.4 },
      { category: "Electronics", usage: 76.8, growth: 8.7 },
      { category: "Mechanical Engineering", usage: 65.2, growth: 5.3 },
      { category: "Mathematics", usage: 58.9, growth: 3.1 }
    ],
    readingPatterns: {
      peakHours: "10:00 AM - 2:00 PM",
      averageSession: "2.5 hours",
      preferredFormat: "Digital (68%) | Physical (32%)",
      popularDevices: ["Mobile (45%)", "Laptop (38%)", "Desktop (17%)"]
    },
    userEngagement: {
      dailyActiveUsers: 456,
      averageBookmarks: 8.3,
      notesPerSession: 5.7,
      sharingRate: 23.4
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50';
      case 'beta': return 'text-blue-600 bg-blue-50';
      case 'pilot': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'digital' ? <Monitor className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />;
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6 rounded-lg">
        <div className="px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Comprehensive Digital Library</h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">Advanced Digital & Physical Resource Management System</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 rounded-lg">
                <Wifi className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">24/7 Digital Access</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Advanced Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Collection</p>
                <p className="text-2xl font-bold">{(libraryStats.totalBooks + libraryStats.digitalResources).toLocaleString()}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Active Users</p>
                <p className="text-2xl font-bold">{libraryStats.activeUsers}</p>
              </div>
              <User className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Daily Visitors</p>
                <p className="text-2xl font-bold">{libraryStats.dailyVisitors}</p>
              </div>
              <MapPin className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Occupancy</p>
                <p className="text-2xl font-bold">{libraryStats.occupancyRate}%</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-sm">Digital Access</p>
                <p className="text-2xl font-bold">{libraryStats.digitalAccessRate}%</p>
              </div>
              <Monitor className="h-8 w-8 text-teal-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Library Overview</TabsTrigger>
          <TabsTrigger value="digital">Digital Resources</TabsTrigger>
          <TabsTrigger value="smart">Smart Features</TabsTrigger>
          <TabsTrigger value="reading">My Reading</TabsTrigger>
          <TabsTrigger value="discovery">Discovery Hub</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                  Library Usage Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600">{libraryStats.booksIssued}</p>
                    <p className="text-sm text-gray-600">Books Issued Today</p>
                    <p className="text-xs text-green-600">+15% vs yesterday</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">{libraryStats.digitalDownloads}</p>
                    <p className="text-sm text-gray-600">Digital Downloads</p>
                    <p className="text-xs text-green-600">+23% vs last week</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-3xl font-bold text-purple-600">{libraryStats.studySeats}</p>
                    <p className="text-sm text-gray-600">Study Seats Available</p>
                    <p className="text-xs text-orange-600">{libraryStats.occupancyRate}% occupied</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Search className="h-4 w-4 mr-2 text-blue-600" />
                  Search Catalog
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <QrCode className="h-4 w-4 mr-2 text-green-600" />
                  Scan Book QR
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                  Book Study Seat
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Download className="h-4 w-4 mr-2 text-orange-600" />
                  Download Resources
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Bell className="h-4 w-4 mr-2 text-red-600" />
                  Due Date Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="digital" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-blue-600" />
                Digital Resource Collections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {digitalResources.map((resource, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Database className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{resource.category}</h3>
                          <p className="text-sm text-gray-600">{resource.count.toLocaleString()} resources available</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800">
                          {resource.usage}% Usage Rate
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">{resource.accessRate}% Access Rate</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Popular Resources</h4>
                        <div className="space-y-1">
                          {resource.popular.map((item, idx) => (
                            <p key={idx} className="text-sm text-gray-600">• {item}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Content Providers</h4>
                        <div className="flex flex-wrap gap-1">
                          {resource.providers.map((provider, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {provider}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Resource Utilization</span>
                        <span>{resource.usage}%</span>
                      </div>
                      <Progress value={resource.usage} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="smart" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                Smart Library Features & AI Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {smartFeatures.map((feature, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{feature.feature}</h3>
                          <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Adoption Rate</span>
                              <span>{feature.usage}%</span>
                            </div>
                            <Progress value={feature.usage} className="h-2" />
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(feature.status)}>
                        {feature.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reading" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                My Current Reading Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {currentReadings.map((book, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          {getTypeIcon(book.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Time spent: {book.timeSpent}</span>
                            <span>Notes: {book.notes}</span>
                            <span>Bookmarks: {book.bookmarks}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={book.type === 'digital' ? 'default' : 'secondary'}>
                        {book.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Reading Progress</span>
                          <span>{book.progress}%</span>
                        </div>
                        <Progress value={book.progress} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          {book.type === 'physical' ? (
                            <span>Due: {book.dueDate} • Renewals: {book.renewals}</span>
                          ) : (
                            <span>Access until: {book.accessExpiry} • Downloads: {book.downloads}</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4 mr-1" />
                            Notes
                          </Button>
                          <Button size="sm" variant="outline">
                            <Bookmark className="h-4 w-4 mr-1" />
                            Bookmarks
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="h-4 w-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discovery" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-600" />
                Discovery Hub - Curated Collections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {discoveryHub.map((collection, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={collection.trending ? 'default' : 'secondary'}>
                          {collection.category}
                        </Badge>
                        {collection.trending && (
                          <Badge className="bg-red-100 text-red-800">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-semibold mb-2">{collection.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{collection.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{collection.resources} resources</span>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            Explore
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                  Popular Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {libraryAnalytics.topCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{category.category}</span>
                        <div className="flex items-center space-x-2">
                          <span>{category.usage}%</span>
                          <Badge variant="secondary" className="text-xs">
                            +{category.growth}%
                          </Badge>
                        </div>
                      </div>
                      <Progress value={category.usage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-green-600" />
                  Usage Patterns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-lg font-bold text-blue-600">{libraryAnalytics.userEngagement.dailyActiveUsers}</p>
                      <p className="text-xs text-gray-600">Daily Active Users</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-lg font-bold text-green-600">{libraryAnalytics.readingPatterns.averageSession}</p>
                      <p className="text-xs text-gray-600">Avg Session Time</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className="text-lg font-bold text-purple-600">{libraryAnalytics.userEngagement.averageBookmarks}</p>
                      <p className="text-xs text-gray-600">Avg Bookmarks</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <p className="text-lg font-bold text-orange-600">{libraryAnalytics.userEngagement.sharingRate}%</p>
                      <p className="text-xs text-gray-600">Sharing Rate</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Peak Hours: {libraryAnalytics.readingPatterns.peakHours}</p>
                    <p className="text-sm">Format Preference: {libraryAnalytics.readingPatterns.preferredFormat}</p>
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