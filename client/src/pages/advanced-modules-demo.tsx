import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Camera, 
  Brain, 
  Award, 
  Database,
  BarChart3,
  Users,
  Building,
  Globe,
  Zap,
  Eye,
  Target,
  TrendingUp,
  Home,
  MapPin,
  Calendar,
  GraduationCap,
  BookOpen,
  Bus,
  Building2,
  Briefcase,
  FlaskConical,
  FileText,
  CreditCard,
  DollarSign
} from "lucide-react";

export default function AdvancedModulesDemo() {
  const modules = [
    {
      title: "AI-Powered Academic Analytics", 
      description: "Predictive insights and global benchmarking with comprehensive academic performance intelligence and AI-driven recommendations.",
      href: "/advanced-analytics",
      icon: Brain,
      features: [
        "Predictive academic analytics",
        "Global university benchmarking",
        "AI-powered student insights",
        "Department performance analysis",
        "Learning pattern detection"
      ],
      status: "Live",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Advanced CCTV-based Attendance System",
      description: "Biometric intelligence with real-time monitoring, face recognition, QR codes, and AI analytics for comprehensive attendance tracking.",
      href: "/advanced-attendance",
      icon: Camera,
      features: [
        "Real-time CCTV monitoring",
        "Face recognition & biometrics", 
        "QR code & GPS integration",
        "AI pattern analysis",
        "Live dashboard analytics"
      ],
      status: "Live",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Government Scholarship API Integration",
      description: "Automated scholarship management hub connecting with NSP, UGC, AICTE and other government scholarship programs.",
      href: "/scholarship-integration", 
      icon: Award,
      features: [
        "NSP & UGC API integration",
        "Automated application processing",
        "Real-time status tracking",
        "Student eligibility matching",
        "Disbursement monitoring"
      ],
      status: "Live",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Student Information System",
      description: "Complete student lifecycle management with academic records, personal information, enrollment tracking, and academic progression.",
      href: "/sis",
      icon: Users,
      color: "from-pink-500 to-pink-600",
      features: ["Academic Records", "Enrollment Tracking", "Personal Information", "Academic Progression"],
      status: "Live"
    },
    {
      title: "Advanced Learning Management System",
      description: "AI-powered LMS with adaptive learning paths, collaborative tools, real-time analytics, and personalized recommendations.",
      href: "/lms",
      icon: GraduationCap,
      color: "from-cyan-500 to-cyan-600",
      features: [
        "AI-powered learning analytics",
        "Adaptive learning paths", 
        "Real-time collaboration tools",
        "Personalized recommendations",
        "Interactive assessments"
      ],
      status: "Live"
    },
    {
      title: "Comprehensive Digital Library System",
      description: "Advanced digital resource management with AI recommendations, QR access, and smart learning analytics.",
      href: "/library",
      icon: Database,
      features: [
        "AI-powered book recommendations",
        "QR code quick access",
        "Digital resource management",
        "Real-time seat booking",
        "Cross-reference linking"
      ],
      status: "Live", 
      color: "from-teal-500 to-teal-700"
    },
    {
      title: "Placement Management Portal",
      description: "Comprehensive career services platform with company partnerships, job placements, interview scheduling, and career tracking.",
      href: "/student-placements",
      icon: Briefcase,
      color: "from-emerald-500 to-emerald-600",
      features: ["Company Partnerships", "Job Placements", "Interview Scheduling", "Career Tracking"],
      status: "Live"
    },
    {
      title: "Event Management System",
      description: "Comprehensive event planning and management platform with registration, scheduling, capacity management, and attendee tracking.",
      href: "/event-management-system",
      icon: Calendar,
      color: "from-indigo-500 to-indigo-600",
      features: ["Event Planning", "Registration System", "Capacity Management", "Attendee Tracking"],
      status: "Live"
    },
    {
      title: "Research Management System",
      description: "Research project coordination with grant management, publication tracking, collaboration tools, and intellectual property management.",
      href: "/research",
      icon: FlaskConical,
      color: "from-rose-500 to-rose-600",
      features: ["Grant Management", "Publication Tracking", "Collaboration Tools", "IP Management"],
      status: "Live"
    },
    {
      title: "Exam Management System",
      description: "Complete examination system with scheduling, seating arrangements, result processing, and academic evaluation management.",
      href: "/exam-management",
      icon: FileText,
      color: "from-sky-500 to-sky-600",
      features: ["Exam Scheduling", "Seating Arrangements", "Result Processing", "Academic Evaluation"],
      status: "Live"
    },
    {
      title: "Fee Management System",
      description: "Comprehensive fee collection system with online payments, scholarship integration, installment tracking, and financial reporting.",
      href: "/fees",
      icon: CreditCard,
      color: "from-yellow-500 to-yellow-600",
      features: ["Online Payments", "Scholarship Integration", "Installment Tracking", "Financial Reporting"],
      status: "Live"
    },
    {
      title: "Transport Management",
      description: "Campus transportation system with route tracking, schedule management, vehicle monitoring, and student transport coordination.",
      href: "/transport-management",
      icon: Bus,
      color: "from-lime-500 to-lime-600",
      features: ["Route Tracking", "Schedule Management", "Vehicle Monitoring", "Transport Coordination"],
      status: "Live"
    },
    {
      title: "Hostel Management",
      description: "Complete hostel administration with room allocation, student management, maintenance tracking, and facility oversight.",
      href: "/hostel-management",
      icon: Building2,
      color: "from-violet-500 to-violet-600",
      features: ["Room Allocation", "Student Management", "Maintenance Tracking", "Facility Oversight"],
      status: "Live"
    }
  ];

  return (
    <div className="w-full space-y-8">
      {/* Header - Mobile Responsive */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 sm:p-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Advanced ERP Modules Demo</h1>
          <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
            World-class university management features matching the best HEI ERP systems globally
          </p>
          <Badge className="mt-4 bg-white text-blue-600 font-semibold">
            <Zap className="h-4 w-4 mr-1" />
            All Modules Live & Operational
          </Badge>
        </div>
      </div>

      {/* Quick Stats - Mobile Responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Eye className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">98.7%</p>
            <p className="text-sm text-gray-600">System Uptime</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">2,847</p>
            <p className="text-sm text-gray-600">Active Users</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Target className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">13</p>
            <p className="text-sm text-gray-600">Core Modules</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <TrendingUp className="h-8 w-8 mx-auto text-orange-600 mb-2" />
            <p className="text-2xl font-bold">94.2%</p>
            <p className="text-sm text-gray-600">Accuracy Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Modules Grid - Mobile Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        {modules.map((module, index) => {
          const IconComponent = module.icon;
          return (
            <Card key={index} className="card-hover overflow-hidden animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center animate-bounce-gentle">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{module.title}</h2>
                      {module.status && (
                        <Badge className="mt-1 bg-white bg-opacity-20 text-white border-white badge-float">
                          {module.status}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-white text-opacity-90 text-sm">
                  {module.description}
                </p>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h3>
                    <ul className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700 animate-slide-up" style={{animationDelay: `${(idx + 1) * 50}ms`}}>
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse-soft"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Link href={module.href}>
                      <Button className="w-full btn-interactive bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Globe className="h-4 w-4 mr-2" />
                        Launch Module
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Direct Access Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building className="h-5 w-5 mr-2 text-blue-600" />
            Direct Access Links for Testing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/advanced-attendance">
              <Button variant="outline" className="w-full h-16 flex-col space-y-2">
                <Camera className="h-6 w-6 text-blue-600" />
                <span className="text-xs">CCTV Attendance</span>
              </Button>
            </Link>
            <Link href="/advanced-analytics">
              <Button variant="outline" className="w-full h-16 flex-col space-y-2">
                <Brain className="h-6 w-6 text-purple-600" />
                <span className="text-xs">AI Analytics</span>
              </Button>
            </Link>
            <Link href="/scholarship-integration">
              <Button variant="outline" className="w-full h-16 flex-col space-y-2">
                <Award className="h-6 w-6 text-green-600" />
                <span className="text-xs">Scholarship API</span>
              </Button>
            </Link>
            <Link href="/comprehensive-library">
              <Button variant="outline" className="w-full h-16 flex-col space-y-2">
                <Database className="h-6 w-6 text-teal-600" />
                <span className="text-xs">Digital Library</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Mobile Optimization Note */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile-First Design</h3>
              <p className="text-sm text-gray-700">
                All advanced modules are fully optimized for mobile devices with responsive layouts, 
                touch-friendly interfaces, and complete feature parity between desktop and mobile versions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}