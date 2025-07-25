import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  Share2
} from "lucide-react";

export default function AlumniDashboard() {
  const [activeTab, setActiveTab] = useState("network");

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
    <div className="space-y-6 p-3 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Alumni Network</h1>
          <p className="text-gray-600">Welcome back, {alumniData.name} (Batch {alumniData.graduationYear})</p>
        </div>
        <div className="flex space-x-2">
          <Badge variant="outline">{alumniData.currentCompany}</Badge>
          <Badge className="bg-blue-100 text-blue-800">{alumniData.designation}</Badge>
        </div>
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
    </div>
  );
}