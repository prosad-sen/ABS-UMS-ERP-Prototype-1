import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap,
  BookOpen,
  Trophy,
  Award,
  Edit3,
  Camera,
  Building,
  Users,
  Globe,
  Briefcase,
  LinkIcon,
  Heart
} from "lucide-react";

export default function AlumniProfile() {
  const [isEditing, setIsEditing] = useState(false);

  // Alumni-specific data
  const alumniData = {
    id: "ALM20180045",
    firstName: "Priya",
    lastName: "Patel",
    email: "priya.patel@alumni.coep.ac.in",
    phone: "+91 9876543210",
    profileImageUrl: "https://images.unsplash.com/photo-1494790108755-2616b25c7a98?w=150&h=150&fit=crop&crop=face",
    rollNumber: "2018045",
    program: "B.Tech",
    branch: "Computer Science & Engineering",
    graduationYear: 2022,
    currentPosition: "Senior Software Engineer",
    currentCompany: "Microsoft India",
    workLocation: "Bangalore, Karnataka",
    experience: "2.5 years",
    linkedinUrl: "https://linkedin.com/in/priya-patel-coep",
    githubUrl: "https://github.com/priyapatel",
    address: "Koramangala, Bangalore - 560034",
    bloodGroup: "O+",
    dateOfBirth: "1999-12-08",
    nationality: "Indian",
    state: "Gujarat",
    category: "General",
    graduationCGPA: 9.12,
    achievements: [
      { title: "University Gold Medal", year: "2022", description: "Highest CGPA in Computer Engineering" },
      { title: "Best Final Year Project", year: "2022", description: "AI-based Healthcare System" },
      { title: "Google Summer of Code", year: "2021", description: "Open Source Contributor" },
      { title: "Microsoft Imagine Cup", year: "2021", description: "National Finalist" }
    ],
    careerHistory: [
      { 
        company: "Microsoft India", 
        position: "Senior Software Engineer", 
        duration: "2023 - Present",
        location: "Bangalore",
        skills: ["Azure", "C#", ".NET", "React"]
      },
      { 
        company: "Amazon", 
        position: "Software Development Engineer", 
        duration: "2022 - 2023",
        location: "Bangalore",
        skills: ["AWS", "Java", "SpringBoot", "DynamoDB"]
      }
    ],
    mentorshipAreas: [
      "Software Development",
      "Career Guidance", 
      "Technical Interviews",
      "Product Management"
    ],
    contributions: {
      donations: "₹50,000",
      mentoringSessions: 15,
      campusVisits: 3,
      guestLectures: 8
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Alumni Header */}
        <Card className="overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar className="h-32 w-32 ring-4 ring-white/20">
                  <AvatarImage src={alumniData.profileImageUrl} alt={`${alumniData.firstName} ${alumniData.lastName}`} />
                  <AvatarFallback className="text-4xl bg-white/20 text-white">
                    {alumniData.firstName[0]}{alumniData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full bg-white text-purple-600 hover:bg-gray-100">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                  <h1 className="text-3xl font-bold">{alumniData.firstName} {alumniData.lastName}</h1>
                  {!isEditing && (
                    <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)} className="text-white hover:bg-white/20">
                      <Edit3 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="text-purple-100 mb-1">Alumni ID: {alumniData.id}</p>
                <div className="mb-4">
                  <Badge className="bg-white/20 text-white border-white/30 mr-2 mb-2">
                    {alumniData.program} - {alumniData.branch}
                  </Badge>
                  <Badge className="bg-yellow-500 text-white mr-2 mb-2">
                    Class of {alumniData.graduationYear}
                  </Badge>
                  <Badge className="bg-green-500 text-white mb-2">
                    CGPA: {alumniData.graduationCGPA}
                  </Badge>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{alumniData.currentPosition} at {alumniData.currentCompany}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{alumniData.workLocation}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{alumniData.experience} experience</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alumni Tabs */}
        <Tabs defaultValue="professional" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-lg">
            <TabsTrigger value="professional" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              Professional
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Achievements
            </TabsTrigger>
            <TabsTrigger value="mentorship" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Mentorship
            </TabsTrigger>
            <TabsTrigger value="contributions" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              Contributions
            </TabsTrigger>
            <TabsTrigger value="personal" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white">
              Personal
            </TabsTrigger>
          </TabsList>

          <TabsContent value="professional" className="space-y-6">
            {/* Current Position */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                  <span>Current Position</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Position</Label>
                      <p className="text-lg font-semibold">{alumniData.currentPosition}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Company</Label>
                      <p className="text-lg font-semibold flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span>{alumniData.currentCompany}</span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Location</Label>
                      <p className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{alumniData.workLocation}</span>
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Experience</Label>
                      <p className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4" />
                        <span>{alumniData.experience}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career History */}
            <Card>
              <CardHeader>
                <CardTitle>Career Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alumniData.careerHistory.map((job, index) => (
                    <div key={index} className="border-l-4 border-purple-600 pl-4 pb-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{job.position}</h3>
                          <p className="text-purple-600 font-medium">{job.company}</p>
                          <p className="text-sm text-gray-600 flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{job.duration}</span>
                            <MapPin className="h-3 w-3 ml-2" />
                            <span>{job.location}</span>
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {job.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {alumniData.achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-full">
                        <Award className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{achievement.title}</h3>
                        <p className="text-purple-600 font-medium">{achievement.year}</p>
                        <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span>Mentorship Areas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {alumniData.mentorshipAreas.map((area, index) => (
                      <Badge key={index} className="bg-green-100 text-green-800 justify-center py-2">
                        {area}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    <Heart className="h-4 w-4 mr-2" />
                    Offer Mentorship
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mentorship Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sessions Conducted</span>
                      <span className="font-semibold text-lg">{alumniData.contributions.mentoringSessions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Campus Visits</span>
                      <span className="font-semibold text-lg">{alumniData.contributions.campusVisits}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Guest Lectures</span>
                      <span className="font-semibold text-lg">{alumniData.contributions.guestLectures}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contributions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span>Contributions to COEP</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{alumniData.contributions.donations}</p>
                    <p className="text-sm text-gray-600">Total Donations</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{alumniData.contributions.mentoringSessions}</p>
                    <p className="text-sm text-gray-600">Mentoring Sessions</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">{alumniData.contributions.campusVisits}</p>
                    <p className="text-sm text-gray-600">Campus Visits</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">{alumniData.contributions.guestLectures}</p>
                    <p className="text-sm text-gray-600">Guest Lectures</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="personal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value={alumniData.firstName} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value={alumniData.lastName} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" value={alumniData.email} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" value={alumniData.phone} disabled={!isEditing} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input id="dateOfBirth" value={alumniData.dateOfBirth} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Input id="bloodGroup" value={alumniData.bloodGroup} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="nationality">Nationality</Label>
                      <Input id="nationality" value={alumniData.nationality} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" value={alumniData.state} disabled={!isEditing} />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" value={alumniData.address} disabled={!isEditing} className="mt-1" />
                </div>

                <div className="flex space-x-4 mt-6">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <LinkIcon className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span>GitHub</span>
                  </Button>
                </div>

                {isEditing && (
                  <div className="flex space-x-3 mt-6">
                    <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}