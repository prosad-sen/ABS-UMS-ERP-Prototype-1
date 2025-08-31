import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import AnimatedInfoSlider from "@/components/ui/animated-info-slider";
import AIQuickActions from "@/components/ai/ai-quick-actions";
import { 
  User, 
  GraduationCap, 
  Calendar, 
  DollarSign,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  Home
} from "lucide-react";

export default function ParentDashboard() {
  const [, setLocation] = useLocation();
  const [selectedChild, setSelectedChild] = useState("child1");

  const handleLogout = () => {
    setLocation("/");
  };

  // Parent Dashboard Slider Content
  const parentSliderItems = [
    {
      id: "academic-achievement", 
      title: "Outstanding Academic Progress",
      description: "Your child Aaryan has achieved a remarkable CGPA of 8.7 this semester! He's ranked 3rd in Computer Science Engineering and has been selected for the Dean's Honor List.",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      stats: { value: "8.7", label: "CGPA This Semester", trend: "up" as const },
      action: { label: "View Academic Report", onClick: () => {} }
    },
    {
      id: "attendance-excellence",
      title: "Perfect Attendance Record",
      description: "Aaryan has maintained 98% attendance throughout the semester. His dedication to attending classes regularly shows great commitment to his education.",
      icon: Clock,
      color: "text-green-600",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500", 
      stats: { value: "98%", label: "Attendance Rate", trend: "up" as const },
      action: { label: "View Attendance Details", onClick: () => {} }
    },
    {
      id: "extracurricular-success",
      title: "Leadership Recognition",
      description: "Aaryan was elected as Class Representative and led the department's technical fest organizing committee. His leadership skills are developing wonderfully!",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
      stats: { value: "5", label: "Leadership Roles", trend: "up" as const },
      action: { label: "View Activities", onClick: () => {} }
    },
    {
      id: "financial-update",
      title: "Fee Payment & Scholarship",
      description: "All semester fees have been paid on time. Aaryan has been awarded the Merit Scholarship of ₹25,000 for his academic excellence. Great achievement!",
      icon: DollarSign,
      color: "text-blue-600", 
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
      stats: { value: "₹25K", label: "Scholarship Awarded", trend: "up" as const },
      action: { label: "View Financial Details", onClick: () => {} }
    }
  ];

  const studentData = {
    name: "Aarti Sharma",
    rollNumber: "2024001",
    class: "Second Year",
    department: "Computer Science & Engineering",
    semester: "4th Semester",
    cgpa: 8.4,
    attendance: 89,
    rank: 12
  };

  const academicProgress = [
    { subject: "Data Structures", marks: 85, grade: "A", attendance: 92 },
    { subject: "Computer Networks", marks: 78, grade: "B+", attendance: 87 },
    { subject: "Database Systems", marks: 91, grade: "A+", attendance: 95 },
    { subject: "Software Engineering", marks: 82, grade: "A", attendance: 88 },
    { subject: "Mathematics", marks: 76, grade: "B+", attendance: 83 }
  ];

  const feeStatus = {
    semesterFee: { amount: 85000, paid: 85000, due: 0, status: "paid" },
    hostelFee: { amount: 25000, paid: 15000, due: 10000, status: "partial" },
    labFee: { amount: 5000, paid: 5000, due: 0, status: "paid" },
    libraryFee: { amount: 2000, paid: 2000, due: 0, status: "paid" }
  };

  const recentActivities = [
    { type: "academic", text: "Scored 85/100 in Data Structures Mid-term", date: "2024-03-20", icon: GraduationCap },
    { type: "attendance", text: "Present in all classes this week", date: "2024-03-19", icon: CheckCircle },
    { type: "fee", text: "Hostel fee payment reminder", date: "2024-03-18", icon: DollarSign },
    { type: "assignment", text: "Submitted Computer Networks assignment", date: "2024-03-17", icon: BookOpen }
  ];

  const upcomingEvents = [
    { date: "Mar 25", event: "Parent-Teacher Meeting", time: "10:00 AM", venue: "Conference Hall" },
    { date: "Mar 28", event: "Mid-semester Examinations", time: "09:00 AM", venue: "Examination Hall" },
    { date: "Apr 05", event: "Technical Fest Participation", time: "Full Day", venue: "Campus" },
    { date: "Apr 12", event: "Industrial Visit", time: "08:00 AM", venue: "Tata Motors, Pune" }
  ];

  const facultyContacts = [
    { name: "Dr. Priya Sharma", designation: "Class Coordinator", subject: "Data Structures", phone: "+91-9876543210", email: "priya.sharma@coep.ac.in" },
    { name: "Prof. Rajesh Kumar", designation: "HOD, CSE", subject: "Computer Networks", phone: "+91-9876543211", email: "rajesh.kumar@coep.ac.in" },
    { name: "Dr. Anjali Patil", designation: "Mentor", subject: "Database Systems", phone: "+91-9876543212", email: "anjali.patil@coep.ac.in" }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getFeeStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 px-3 lg:px-6 pb-6" style={{paddingTop: '0px'}}>
      {/* Header */}
      <div style={{position: 'relative', width: '100%', minHeight: '80px'}}>
        <div style={{position: 'absolute', left: '0', top: '0', width: 'calc(100% - 200px)'}}>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Parent Dashboard</h1>
          <p className="text-gray-600">Monitoring {studentData.name}'s academic progress</p>
        </div>
        <div style={{position: 'absolute', right: '0', top: '0'}} className="flex items-center space-x-6">
          <div className="flex space-x-2">
            <Badge variant="outline">{studentData.class}</Badge>
            <Badge className="bg-blue-100 text-blue-800">{studentData.department}</Badge>
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

      {/* Parent Achievement Slider */}
      <div className="mb-6">
        <AnimatedInfoSlider items={parentSliderItems} />
      </div>

      {/* Student Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <User className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <p className="font-semibold">{studentData.name}</p>
              <p className="text-sm text-gray-600">Roll: {studentData.rollNumber}</p>
            </div>
            <div className="text-center">
              <BarChart3 className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <p className="font-semibold">CGPA: {studentData.cgpa}</p>
              <p className="text-sm text-gray-600">Class Rank: {studentData.rank}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto text-purple-600 mb-2" />
              <p className="font-semibold">{studentData.attendance}% Attendance</p>
              <p className="text-sm text-gray-600">Above requirement</p>
            </div>
            <div className="text-center">
              <GraduationCap className="h-8 w-8 mx-auto text-orange-600 mb-2" />
              <p className="font-semibold">{studentData.semester}</p>
              <p className="text-sm text-gray-600">{studentData.class}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Academic Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <span>Academic Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {academicProgress.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{subject.subject}</span>
                    <div className="flex items-center space-x-2">
                      <Badge className={getGradeColor(subject.grade)}>{subject.grade}</Badge>
                      <span className="text-sm">{subject.marks}/100</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Attendance: {subject.attendance}%</span>
                    <span>Performance: {subject.marks >= 80 ? 'Excellent' : subject.marks >= 70 ? 'Good' : 'Needs Improvement'}</span>
                  </div>
                  <Progress value={subject.marks} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fee Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <span>Fee Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(feeStatus).map(([feeType, details]) => (
                <div key={feeType} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm capitalize">{feeType.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="text-xs text-gray-600">
                      Paid: ₹{details.paid.toLocaleString()} / ₹{details.amount.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge className={getFeeStatusColor(details.status)}>
                      {details.status === 'paid' ? 'Paid' : details.status === 'partial' ? 'Partial' : 'Pending'}
                    </Badge>
                    {details.due > 0 && (
                      <p className="text-xs text-red-600 mt-1">Due: ₹{details.due.toLocaleString()}</p>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Outstanding</span>
                  <span className="font-bold text-red-600">
                    ₹{Object.values(feeStatus).reduce((sum, fee) => sum + fee.due, 0).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities & Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-purple-600" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                  <activity.icon className={`h-5 w-5 mt-0.5 ${
                    activity.type === 'academic' ? 'text-blue-600' :
                    activity.type === 'attendance' ? 'text-green-600' :
                    activity.type === 'fee' ? 'text-orange-600' :
                    'text-purple-600'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm font-medium text-blue-600">{event.date}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{event.event}</p>
                    <p className="text-xs text-gray-600">{event.time} • {event.venue}</p>
                  </div>
                  <Button size="sm" variant="outline">Details</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Faculty Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            <span>Faculty Contacts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {facultyContacts.map((faculty, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="text-center mb-3">
                  <h3 className="font-semibold">{faculty.name}</h3>
                  <p className="text-sm text-gray-600">{faculty.designation}</p>
                  <Badge variant="outline" className="mt-1">{faculty.subject}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span>{faculty.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="truncate">{faculty.email}</span>
                  </div>
                </div>
                <div className="flex space-x-2 mt-3">
                  <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                </div>
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
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">Pay Fees</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-green-600 hover:bg-green-700">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">View Reports</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Schedule Meeting</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-orange-600 hover:bg-orange-700">
              <MessageSquare className="h-6 w-6" />
              <span className="text-sm">Contact Faculty</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Quick Actions for Parents */}
      <div className="mt-6">
        <AIQuickActions userRole="parent" userName="Parent" />
      </div>
    </div>
  );
}