import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Briefcase, 
  Calendar, 
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Search,
  Plus,
  Filter,
  Building,
  GraduationCap
} from "lucide-react";

export default function AlumniCareerNetwork() {
  const [activeTab, setActiveTab] = useState("network");
  const [searchTerm, setSearchTerm] = useState("");

  const alumniNetwork = [
    {
      id: 1,
      name: "Pradeep Kumar",
      batch: "2018",
      company: "Microsoft India",
      position: "Senior Software Engineer",
      location: "Bangalore",
      department: "Computer Science",
      experience: "6 years",
      skills: ["React", "Node.js", "AWS", "System Design"],
      connections: 245,
      isOnline: true
    },
    {
      id: 2,
      name: "Neha Sharma",
      batch: "2016",
      company: "Google",
      position: "Product Manager",
      location: "Hyderabad",
      department: "Information Technology",
      experience: "8 years",
      skills: ["Product Strategy", "Analytics", "Leadership"],
      connections: 389,
      isOnline: false
    },
    {
      id: 3,
      name: "Rahul Agarwal",
      batch: "2019",
      company: "Amazon",
      position: "Software Development Engineer",
      location: "Chennai",
      department: "Computer Science",
      experience: "5 years",
      skills: ["Java", "Microservices", "Kubernetes"],
      connections: 156,
      isOnline: true
    },
    {
      id: 4,
      name: "Anita Desai",
      batch: "2015",
      company: "Flipkart",
      position: "Engineering Manager",
      location: "Bangalore",
      department: "Electronics & Telecom",
      experience: "9 years",
      skills: ["Team Leadership", "Architecture", "Mentoring"],
      connections: 432,
      isOnline: true
    }
  ];

  const jobOpportunities = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Microsoft",
      location: "Bangalore",
      experience: "4-7 years",
      package: "₹25-35L",
      skills: ["React", "Node.js", "Azure"],
      postedBy: "Pradeep Kumar",
      applications: 23,
      deadline: "2024-08-15"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Google",
      location: "Hyderabad",
      experience: "5-8 years",
      package: "₹40-55L",
      skills: ["Product Strategy", "Analytics", "Leadership"],
      postedBy: "Neha Sharma",
      applications: 15,
      deadline: "2024-08-20"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "Amazon",
      location: "Chennai",
      experience: "3-5 years",
      package: "₹20-28L",
      skills: ["AWS", "Docker", "Kubernetes"],
      postedBy: "Rahul Agarwal",
      applications: 18,
      deadline: "2024-08-10"
    }
  ];

  const mentorshipRequests = [
    {
      id: 1,
      name: "Arjun Patel",
      year: "Final Year",
      department: "Computer Science",
      goal: "Software Engineering at FAANG",
      skills: ["Python", "DSA", "System Design"],
      status: "pending"
    },
    {
      id: 2,
      name: "Priya Singh",
      year: "Third Year", 
      department: "Information Technology",
      goal: "Product Management Career",
      skills: ["Analytics", "Business Strategy"],
      status: "matched"
    },
    {
      id: 3,
      name: "Rohit Kumar",
      year: "Final Year",
      department: "Electronics & Telecom",
      goal: "Startup Entrepreneurship",
      skills: ["Leadership", "Innovation"],
      status: "pending"
    }
  ];

  return (
    <div className="space-y-6 p-3 lg:p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6 rounded-lg shadow-xl">
        <div className="flex items-center space-x-3">
          <Users className="h-8 w-8 text-blue-300" />
          <div>
            <h1 className="text-3xl font-bold">Alumni Career Network</h1>
            <p className="text-blue-100">Connect, Collaborate, and Create Opportunities</p>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search alumni by name, company, or skills..."
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
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Post Job
          </Button>
        </div>
      </div>

      <Tabs defaultValue="network" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="network">Alumni Network</TabsTrigger>
          <TabsTrigger value="jobs">Job Board</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
          <TabsTrigger value="events">Networking Events</TabsTrigger>
        </TabsList>

        <TabsContent value="network" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {alumniNetwork.map((alumni) => (
              <Card key={alumni.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {alumni.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {alumni.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg truncate">{alumni.name}</h3>
                      <p className="text-sm text-gray-600">{alumni.position}</p>
                      <p className="text-sm font-medium text-blue-600">{alumni.company}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span>{alumni.department} • Batch {alumni.batch}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{alumni.location} • {alumni.experience}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{alumni.connections} connections</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1">
                      {alumni.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {alumni.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{alumni.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Button size="sm" className="flex-1">Connect</Button>
                    <Button size="sm" variant="outline" className="flex-1">Message</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-6">
          <div className="space-y-4">
            {jobOpportunities.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                        <h3 className="font-bold text-xl">{job.title}</h3>
                      </div>
                      <p className="text-lg font-medium text-blue-600 mt-1">{job.company}</p>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium">{job.location}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Experience</p>
                          <p className="font-medium">{job.experience}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Package</p>
                          <p className="font-medium text-green-600">{job.package}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Applications</p>
                          <p className="font-medium">{job.applications}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-2">Required Skills</p>
                        <div className="flex flex-wrap gap-1">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} className="bg-blue-500">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm text-gray-600">Posted by: <span className="font-medium">{job.postedBy}</span></p>
                        <p className="text-sm text-gray-600">Deadline: {job.deadline}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                    <Button variant="outline">Save Job</Button>
                    <Button variant="outline">Share</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mentorship" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Become a Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Share your expertise and guide the next generation of COEP engineers.</p>
                <Button>Join Mentorship Program</Button>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Current Mentorship Requests</h3>
              {mentorshipRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{request.name}</h4>
                        <p className="text-gray-600">{request.year} • {request.department}</p>
                        <p className="mt-2 text-sm"><strong>Career Goal:</strong> {request.goal}</p>
                        <div className="mt-3">
                          <p className="text-sm text-gray-500 mb-1">Skills</p>
                          <div className="flex flex-wrap gap-1">
                            {request.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge className={
                          request.status === 'matched' ? 'bg-green-500' : 'bg-orange-500'
                        }>
                          {request.status === 'matched' ? 'Matched' : 'Pending'}
                        </Badge>
                        {request.status === 'pending' && (
                          <Button size="sm">Accept Mentee</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Alumni Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <Calendar className="h-8 w-8 text-blue-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">COEP Tech Summit 2024</h4>
                      <p className="text-sm text-gray-600">August 15, 2024 • Virtual Event</p>
                      <p className="text-sm">Annual technology conference featuring industry leaders and alumni speakers.</p>
                    </div>
                    <Button>Register</Button>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <Calendar className="h-8 w-8 text-green-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Alumni Networking Mixer</h4>
                      <p className="text-sm text-gray-600">August 22, 2024 • Mumbai</p>
                      <p className="text-sm">In-person networking event for Mumbai-based COEP alumni.</p>
                    </div>
                    <Button>Join</Button>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                    <Calendar className="h-8 w-8 text-purple-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Career Guidance Workshop</h4>
                      <p className="text-sm text-gray-600">September 5, 2024 • COEP Campus</p>
                      <p className="text-sm">Workshop for final year students by senior alumni mentors.</p>
                    </div>
                    <Button>Volunteer</Button>
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