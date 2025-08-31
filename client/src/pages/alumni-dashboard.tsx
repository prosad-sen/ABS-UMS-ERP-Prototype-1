import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedInfoSlider from "@/components/ui/animated-info-slider";
import DetailedStatsModal from "@/components/analytics/detailed-stats-modal";
import AIQuickActions from "@/components/ai/ai-quick-actions";
import { 
  Users, 
  Briefcase, 
  Calendar, 
  DollarSign,
  GraduationCap,
  Building,
  Award,
  Heart,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Share2,
  Target,
  Crown,
  Star,
  Trophy,
  Medal,
  Flame,
  Zap,
  Globe,
  ChevronUp,
  ChevronDown,
  Gift,
  Handshake,
  Home
} from "lucide-react";

export default function AlumniDashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("network");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedDetailType, setSelectedDetailType] = useState<string>("");
  const [selectedDetailTitle, setSelectedDetailTitle] = useState<string>("");

  const handleLogout = () => {
    setLocation("/");
  };

  // Alumni Dashboard Slider Content
  const alumniSliderItems = [
    {
      id: "career-success",
      title: "Outstanding Career Progression",
      description: "Congratulations on your promotion to Senior Software Engineer at Microsoft! Your journey from COEP graduate to tech leader inspires current students. 15 students have requested mentorship from you.",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      stats: { value: "15", label: "Mentorship Requests", trend: "up" as const },
      action: { label: "View Mentorship Dashboard", onClick: () => {
        setSelectedDetailType("mentorship");
        setSelectedDetailTitle("Outstanding Career Progression");
        setShowDetailModal(true);
      }}
    },
    {
      id: "network-growth",
      title: "Alumni Network Leadership",
      description: "You've successfully connected 50+ alumni this year through the COEP network! Your efforts in organizing tech meetups have strengthened our professional community significantly.",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
      stats: { value: "50+", label: "Alumni Connected", trend: "up" as const },
      action: { label: "Expand Network", onClick: () => {
        setSelectedDetailType("network");
        setSelectedDetailTitle("Alumni Network Leadership");
        setShowDetailModal(true);
      }}
    },
    {
      id: "contribution-impact",
      title: "University Contribution Recognition",
      description: "Your ₹2.5L donation towards the Computer Lab Modernization project has directly impacted 500+ students. The new lab infrastructure is now operational thanks to contributors like you!",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-gradient-to-r from-red-500 to-pink-500",
      stats: { value: "₹2.5L", label: "Total Contribution", trend: "up" as const },
      action: { label: "View Impact Report", onClick: () => {
        setSelectedDetailType("fundraising");
        setSelectedDetailTitle("University Contribution Recognition");
        setShowDetailModal(true);
      }}
    },
    {
      id: "job-referrals",
      title: "Successful Placement Support",
      description: "8 COEP students have been successfully placed through your referrals at top tech companies! Your commitment to helping juniors secure dream jobs is truly commendable.",
      icon: Briefcase,
      color: "text-green-600",
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      stats: { value: "8", label: "Successful Referrals", trend: "up" as const },
      action: { label: "Refer More Students", onClick: () => {
        setSelectedDetailType("placements");
        setSelectedDetailTitle("Successful Placement Support");
        setShowDetailModal(true);
      }}
    }
  ];

  const alumniData = {
    name: "Pradeep Kumar",
    graduationYear: 2018,
    department: "Computer Science & Engineering",
    currentCompany: "Microsoft India",
    designation: "Senior Software Engineer",
    location: "Bangalore, India",
    experience: 6,
    totalContributions: 250000,
    mentorships: 12,
    referrals: 8
  };

  const networkStats = {
    totalAlumni: 25000,
    activeMembers: 18500,
    companiesRepresented: 2500,
    avgSalary: "₹15.2 LPA",
    topRecruiters: ["TCS", "Infosys", "Microsoft", "Google", "Amazon"]
  };

  const recentJobs = [
    { company: "Amazon", role: "Software Development Engineer II", location: "Hyderabad", salary: "₹28 LPA", posted: "2 days ago", applicants: 45 },
    { company: "Google", role: "Product Manager", location: "Mumbai", salary: "₹35 LPA", posted: "1 week ago", applicants: 89 },
    { company: "Flipkart", role: "Senior Data Scientist", location: "Bangalore", salary: "₹32 LPA", posted: "3 days ago", applicants: 67 },
    { company: "Zomato", role: "Full Stack Developer", location: "Gurugram", salary: "₹22 LPA", posted: "5 days ago", applicants: 123 }
  ];

  const upcomingEvents = [
    { date: "Apr 15", title: "Annual Alumni Meet 2024", location: "COEP Campus", type: "reunion", attendees: 500 },
    { date: "Apr 20", title: "Tech Talk: AI in Industry", location: "Virtual", type: "webinar", attendees: 200 },
    { date: "May 05", title: "Career Guidance Session", location: "Mumbai Chapter", type: "mentorship", attendees: 50 },
    { date: "May 12", title: "Startup Pitch Competition", location: "Pune", type: "competition", attendees: 150 }
  ];

  const mentorshipRequests = [
    { name: "Aarti Sharma", year: "3rd Year", department: "CSE", query: "Career guidance for product management roles", urgency: "medium" },
    { name: "Vikram Patel", year: "Final Year", department: "IT", query: "Interview preparation for tech companies", urgency: "high" },
    { name: "Sneha Desai", year: "2nd Year", department: "CSE", query: "Guidance on choosing specialization", urgency: "low" }
  ];

  const donationOpportunities = [
    { title: "Computer Lab Modernization", target: 5000000, raised: 3200000, contributors: 245, deadline: "Jun 30, 2024" },
    { title: "Student Scholarship Fund", target: 2000000, raised: 1650000, contributors: 189, deadline: "Dec 31, 2024" },
    { title: "Innovation Center Setup", target: 8000000, raised: 4800000, contributors: 156, deadline: "Mar 31, 2025" }
  ];

  const alumniSpotlight = [
    { name: "Dr. Rajesh Patil", batch: "1995", achievement: "CEO, Tech Innovations Pvt Ltd", description: "Leading AI research in healthcare" },
    { name: "Priya Sharma", batch: "2010", achievement: "Senior Director, Google", description: "Pioneering quantum computing solutions" },
    { name: "Amit Deshmukh", batch: "2005", achievement: "Founder, EduTech Solutions", description: "Revolutionary e-learning platforms" }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 px-3 lg:px-6 py-6">
      {/* Header */}
      <div style={{position: 'relative', width: '100%', minHeight: '80px'}}>
        <div style={{position: 'absolute', left: '0', top: '0', width: 'calc(100% - 200px)'}}>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Alumni Network</h1>
          <p className="text-gray-600">Welcome back, {alumniData.name} (Batch {alumniData.graduationYear})</p>
        </div>
        <div style={{position: 'absolute', right: '0', top: '0'}} className="flex items-center space-x-6">
          <div className="flex space-x-2">
            <Badge variant="outline">{alumniData.currentCompany}</Badge>
            <Badge className="bg-blue-100 text-blue-800">{alumniData.designation}</Badge>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="text-gray-600 hover:text-gray-900"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Main
          </Button>
        </div>
      </div>

      {/* Alumni Achievement Slider */}
      <div className="mb-6">
        <AnimatedInfoSlider items={alumniSliderItems} />
      </div>

      {/* Alumni Profile Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="text-center">
              <GraduationCap className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <p className="font-semibold">{alumniData.department}</p>
              <p className="text-sm text-gray-600">Class of {alumniData.graduationYear}</p>
            </div>
            <div className="text-center">
              <Briefcase className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <p className="font-semibold">{alumniData.experience} Years</p>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 mx-auto text-red-600 mb-2" />
              <p className="font-semibold">₹{(alumniData.totalContributions / 1000).toFixed(0)}K</p>
              <p className="text-sm text-gray-600">Total Contributions</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto text-purple-600 mb-2" />
              <p className="font-semibold">{alumniData.mentorships}</p>
              <p className="text-sm text-gray-600">Students Mentored</p>
            </div>
            <div className="text-center">
              <Share2 className="h-8 w-8 mx-auto text-orange-600 mb-2" />
              <p className="font-semibold">{alumniData.referrals}</p>
              <p className="text-sm text-gray-600">Job Referrals</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Network Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">{networkStats.totalAlumni.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Alumni</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">{networkStats.activeMembers.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Active Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Building className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">{networkStats.companiesRepresented.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Companies</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="h-8 w-8 mx-auto text-orange-600 mb-2" />
            <p className="text-2xl font-bold">{networkStats.avgSalary}</p>
            <p className="text-sm text-gray-600">Avg. Salary</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 mx-auto text-yellow-600 mb-2" />
            <p className="text-2xl font-bold">Top 50</p>
            <p className="text-sm text-gray-600">Global Ranking</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Opportunities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Briefcase className="h-5 w-5 text-blue-600" />
              <span>Latest Job Opportunities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentJobs.map((job, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{job.role}</h3>
                      <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{job.salary}</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{job.posted} • {job.applicants} applicants</span>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline">Refer</Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Apply</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mentorship Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-purple-600" />
              <span>Mentorship Requests</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mentorshipRequests.map((request, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">{request.name}</p>
                      <p className="text-xs text-gray-600">{request.year} • {request.department}</p>
                    </div>
                    <Badge className={getUrgencyColor(request.urgency)}>
                      {request.urgency}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{request.query}</p>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">Accept</Button>
                    <Button size="sm" variant="outline" className="text-xs">View Profile</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Events & Donations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{event.title}</p>
                    <p className="text-xs text-gray-600">{event.location} • {event.attendees} attending</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-600">{event.date}</p>
                    <Badge variant="outline" className="text-xs">{event.type}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Donation Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-600" />
              <span>Support Your Alma Mater</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {donationOpportunities.map((donation, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-sm">{donation.title}</h3>
                    <span className="text-xs text-gray-600">{donation.contributors} contributors</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>₹{(donation.raised / 100000).toFixed(1)}L raised</span>
                    <span>₹{(donation.target / 100000).toFixed(1)}L target</span>
                  </div>
                  <Progress value={(donation.raised / donation.target) * 100} className="h-2" />
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Due: {donation.deadline}</span>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs">Donate</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alumni Spotlight */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-yellow-600" />
            <span>Alumni Spotlight</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {alumniSpotlight.map((alumni, index) => (
              <div key={index} className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold">{alumni.name}</h3>
                <p className="text-sm text-gray-600 mb-1">Batch {alumni.batch}</p>
                <Badge className="bg-yellow-100 text-yellow-800 mb-2">{alumni.achievement}</Badge>
                <p className="text-xs text-gray-700">{alumni.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="h-20 flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
              <Users className="h-6 w-6" />
              <span className="text-sm">Find Alumni</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-green-600 hover:bg-green-700">
              <Briefcase className="h-6 w-6" />
              <span className="text-sm">Post Job</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
              <GraduationCap className="h-6 w-6" />
              <span className="text-sm">Mentor Students</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-red-600 hover:bg-red-700">
              <Heart className="h-6 w-6" />
              <span className="text-sm">Make Donation</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* Enhanced Alumni Fundraising & Gamification Portal */}
      <Tabs defaultValue="fundraising" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="fundraising">Fundraising Campaigns</TabsTrigger>
          <TabsTrigger value="leaderboards">Chapter Leaderboards</TabsTrigger>
          <TabsTrigger value="achievements">Achievements & Rewards</TabsTrigger>
          <TabsTrigger value="chapters">Alumni Chapters</TabsTrigger>
          <TabsTrigger value="recognition">Recognition Wall</TabsTrigger>
        </TabsList>

        <TabsContent value="fundraising" className="space-y-6">
          {/* Active Fundraising Campaigns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    <span>New Engineering Block</span>
                  </CardTitle>
                  <Badge className="bg-green-100 text-green-800">92% Complete</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">₹4.6Cr</span>
                    <span className="text-gray-600">/ ₹5Cr Target</span>
                  </div>
                  <Progress value={92} className="h-3" />
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Contributors</p>
                      <p className="font-bold">847 Alumni</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Days Left</p>
                      <p className="font-bold text-red-600">23 Days</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-2">Recent Donations:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Rajesh Gupta ('95)</span>
                        <span className="font-semibold">₹50,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sneha Patel ('02)</span>
                        <span className="font-semibold">₹25,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amit Kumar ('08)</span>
                        <span className="font-semibold">₹1,00,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Contribute Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Campaign
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-4 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-green-600" />
                    <span>Scholarship Endowment</span>
                  </CardTitle>
                  <Badge className="bg-yellow-100 text-yellow-800">67% Complete</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">₹2.01Cr</span>
                    <span className="text-gray-600">/ ₹3Cr Target</span>
                  </div>
                  <Progress value={67} className="h-3" />
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Contributors</p>
                      <p className="font-bold">453 Alumni</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Students Helped</p>
                      <p className="font-bold text-green-600">127 Students</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-2">Impact Stories:</h4>
                    <p className="text-sm text-gray-700">"Thanks to the scholarship, I could focus on studies instead of financial worries. Now I'm placed at Google!" - Priya S. (TE CSE)</p>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      <Heart className="h-4 w-4 mr-2" />
                      Support Students
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Impact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Contribution Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                <span>My Contribution Dashboard</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">₹2.5L</div>
                  <div className="text-sm text-gray-600">Total Contributed</div>
                  <div className="flex items-center justify-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-green-600 ml-1">+₹50K this year</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5</div>
                  <div className="text-sm text-gray-600">Campaigns Supported</div>
                  <Badge className="mt-1 bg-green-100 text-green-800">Top Contributor</Badge>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">47</div>
                  <div className="text-sm text-gray-600">Impact Score</div>
                  <div className="flex items-center justify-center mt-1">
                    <Star className="h-4 w-4 text-yellow-600 fill-current" />
                    <span className="text-xs text-gray-600 ml-1">Gold Level</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">12</div>
                  <div className="text-sm text-gray-600">Referrals Made</div>
                  <Badge className="mt-1 bg-red-100 text-red-800">Ambassador</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaderboards" className="space-y-6">
          {/* Chapter Competition Leaderboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-yellow-600" />
                  <span>Top Contributing Chapters (2024)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { rank: 1, chapter: "Pune Chapter", contribution: "₹1.2Cr", members: 234, trend: "up" },
                    { rank: 2, chapter: "Mumbai Chapter", contribution: "₹98L", members: 189, trend: "up" },
                    { rank: 3, chapter: "Bangalore Chapter", contribution: "₹87L", members: 156, trend: "down" },
                    { rank: 4, chapter: "Delhi NCR Chapter", contribution: "₹76L", members: 143, trend: "up" },
                    { rank: 5, chapter: "Hyderabad Chapter", contribution: "₹65L", members: 98, trend: "up" }
                  ].map((chapter) => (
                    <div key={chapter.rank} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          chapter.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                          chapter.rank === 2 ? 'bg-gray-100 text-gray-800' :
                          chapter.rank === 3 ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          #{chapter.rank}
                        </div>
                        <div>
                          <div className="font-semibold">{chapter.chapter}</div>
                          <div className="text-sm text-gray-600">{chapter.members} active members</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">{chapter.contribution}</div>
                        <div className="flex items-center justify-end">
                          {chapter.trend === "up" ? (
                            <ChevronUp className="h-4 w-4 text-green-600" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-red-600" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Medal className="h-5 w-5 text-blue-600" />
                  <span>Individual Leaderboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { rank: 1, name: "Ravi Agarwal ('92)", amount: "₹15L", badge: "Diamond Patron" },
                    { rank: 2, name: "Priya Sharma ('89)", amount: "₹12L", badge: "Platinum Donor" },
                    { rank: 3, name: "Amit Desai ('94)", amount: "₹10L", badge: "Gold Supporter" },
                    { rank: 4, name: "Sunita Verma ('96)", amount: "₹8L", badge: "Silver Contributor" },
                    { rank: 5, name: "Rajesh Kumar ('01)", amount: "₹7L", badge: "Bronze Benefactor" }
                  ].map((donor) => (
                    <div key={donor.rank} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          donor.rank <= 3 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' : 'bg-blue-100 text-blue-800'
                        }`}>
                          #{donor.rank}
                        </div>
                        <div>
                          <div className="font-semibold">{donor.name}</div>
                          <Badge className="text-xs" variant="outline">{donor.badge}</Badge>
                        </div>
                      </div>
                      <div className="font-bold text-green-600">{donor.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Competition Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-purple-600" />
                <span>Chapter Competition Dashboard</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-600">1st</div>
                  <div className="text-sm text-gray-600">Pune Chapter Rank</div>
                  <div className="text-xs text-green-600 mt-1">↑ from 3rd last year</div>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">234</div>
                  <div className="text-sm text-gray-600">Active Contributors</div>
                  <div className="text-xs text-green-600 mt-1">↑ 23% vs last year</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Flame className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">89%</div>
                  <div className="text-sm text-gray-600">Member Engagement</div>
                  <div className="text-xs text-green-600 mt-1">Best in network!</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          {/* Achievement Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Diamond Patron</h3>
                <p className="text-sm text-gray-600 mb-4">Contributed ₹10L+ lifetime</p>
                <Badge className="bg-yellow-100 text-yellow-800">Achieved</Badge>
                <div className="mt-4 text-xs text-gray-500">
                  Unlocked: Jan 2024 • Only 12 alumni hold this badge
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Network Champion</h3>
                <p className="text-sm text-gray-600 mb-4">Connected 50+ alumni</p>
                <Badge className="bg-blue-100 text-blue-800">Achieved</Badge>
                <div className="mt-4 text-xs text-gray-500">
                  Unlocked: Mar 2024 • Top 5% in networking
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Mentor Master</h3>
                <p className="text-sm text-gray-600 mb-4">Mentored 20+ students</p>
                <Badge className="bg-green-100 text-green-800">Achieved</Badge>
                <div className="mt-4 text-xs text-gray-500">
                  Unlocked: Dec 2023 • Student impact: 4.9/5 rating
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-dashed border-gray-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-400">Placement Pro</h3>
                <p className="text-sm text-gray-600 mb-4">Help 15 students get placed</p>
                <Progress value={53} className="mb-2" />
                <div className="text-xs text-gray-500">8/15 students placed</div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-dashed border-gray-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-400">Global Ambassador</h3>
                <p className="text-sm text-gray-600 mb-4">Expand international network</p>
                <Progress value={20} className="mb-2" />
                <div className="text-xs text-gray-500">2/10 countries connected</div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-dashed border-gray-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-400">Legacy Builder</h3>
                <p className="text-sm text-gray-600 mb-4">Create lasting university impact</p>
                <Progress value={75} className="mb-2" />
                <div className="text-xs text-gray-500">Endowment fund established</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="chapters" className="space-y-6">
          {/* Chapter Directory */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: "Pune Chapter", 
                members: 234, 
                founded: 1995, 
                contribution: "₹1.2Cr", 
                president: "Dr. Rajesh Kulkarni ('89)",
                events: 12,
                active: true
              },
              { 
                name: "Mumbai Chapter", 
                members: 189, 
                founded: 1998, 
                contribution: "₹98L", 
                president: "Priya Deshpande ('92)",
                events: 8,
                active: true
              },
              { 
                name: "Bangalore Chapter", 
                members: 156, 
                founded: 2001, 
                contribution: "₹87L", 
                president: "Amit Sharma ('96)",
                events: 15,
                active: true
              },
              { 
                name: "Silicon Valley Chapter", 
                members: 78, 
                founded: 2005, 
                contribution: "₹45L", 
                president: "Neha Patel ('99)",
                events: 6,
                active: false
              },
              { 
                name: "London Chapter", 
                members: 45, 
                founded: 2008, 
                contribution: "₹23L", 
                president: "Vikram Singh ('03)",
                events: 4,
                active: false
              },
              { 
                name: "Dubai Chapter", 
                members: 67, 
                founded: 2010, 
                contribution: "₹34L", 
                president: "Sunita Agarwal ('01)",
                events: 7,
                active: false
              }
            ].map((chapter, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${chapter.active ? 'border-l-4 border-l-green-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{chapter.name}</CardTitle>
                    {chapter.active && <Badge className="bg-green-100 text-green-800">My Chapter</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Members</p>
                        <p className="font-semibold">{chapter.members}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Founded</p>
                        <p className="font-semibold">{chapter.founded}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Contribution</p>
                        <p className="font-semibold text-green-600">{chapter.contribution}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Events (2024)</p>
                        <p className="font-semibold">{chapter.events}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-sm">President</p>
                      <p className="font-semibold">{chapter.president}</p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Details
                      </Button>
                      {!chapter.active && (
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          Join Chapter
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recognition" className="space-y-6">
          {/* Recognition Wall */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-600" />
                <span>Outstanding Alumni Recognition Wall</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Dr. Rajesh Kumar ('89)",
                    achievement: "Distinguished Alumni Award 2024",
                    description: "Pioneered breakthrough research in AI/ML, leading global team at Google DeepMind",
                    contribution: "₹25L+ donated, 50+ students mentored",
                    image: "/api/placeholder/100/100"
                  },
                  {
                    name: "Priya Sharma ('92)",
                    achievement: "Social Impact Champion 2024",
                    description: "Founded EdTech startup reaching 10M+ students across rural India",
                    contribution: "Scholarship fund for 100+ students",
                    image: "/api/placeholder/100/100"
                  },
                  {
                    name: "Amit Patel ('94)",
                    achievement: "Innovation Excellence Award 2024",
                    description: "CTO at leading fintech, 15+ patents in blockchain technology",
                    contribution: "₹15L+ to innovation lab setup",
                    image: "/api/placeholder/100/100"
                  },
                  {
                    name: "Sunita Verma ('96)",
                    achievement: "Global Leadership Recognition 2024",  
                    description: "VP Engineering at Meta, champion of women in tech initiatives",
                    contribution: "Diversity scholarship program founder",
                    image: "/api/placeholder/100/100"
                  },
                  {
                    name: "Vikram Singh ('98)",
                    achievement: "Entrepreneurship Excellence 2024",
                    description: "Founded successful clean energy startup, $50M+ funding raised",
                    contribution: "Green technology research lab sponsor",
                    image: "/api/placeholder/100/100"
                  },
                  {
                    name: "Neha Agarwal ('00)",
                    achievement: "Humanitarian Service Award 2024",
                    description: "Leading disaster relief technology solutions globally",
                    contribution: "Emergency response training programs",
                    image: "/api/placeholder/100/100"
                  }
                ].map((alumnus, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-10 w-10 text-gray-500" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{alumnus.name}</h3>
                      <Badge className="mb-3 bg-yellow-100 text-yellow-800">{alumnus.achievement}</Badge>
                      <p className="text-sm text-gray-700 mb-3">{alumnus.description}</p>
                      <div className="text-xs text-green-600 font-semibold">{alumnus.contribution}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* AI Quick Actions for Alumni */}
      <div className="mt-6">
        <AIQuickActions userRole="alumni" userName="Alumni Member" />
      </div>

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