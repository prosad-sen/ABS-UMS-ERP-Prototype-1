import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Trophy,
  ChevronRight,
  UserCheck,
  Building,
  Crown,
  Heart,
  Briefcase,
  Calendar,
  Award,
  Star,
  Globe
} from "lucide-react";

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState("");

  const userRoles = [
    {
      id: "student",
      title: "Student Portal",
      description: "Access courses, assignments, grades, and campus services",
      icon: GraduationCap,
      color: "bg-blue-600 hover:bg-blue-700",
      features: ["Academic Records", "Attendance Tracking", "Fee Management", "AWS Labs", "Grievance System"]
    },
    {
      id: "faculty",
      title: "Faculty Dashboard",
      description: "Manage courses, grade assignments, and track student progress",
      icon: UserCheck,
      color: "bg-green-600 hover:bg-green-700",
      features: ["Course Management", "Grade Assignments", "Take Attendance", "Student Analytics", "Schedule Management"]
    },
    {
      id: "admin",
      title: "Administrator/Registrar Portal",
      description: "University-wide management and comprehensive analytics",
      icon: Building,
      color: "bg-purple-600 hover:bg-purple-700",
      features: ["System Management", "Department Analytics", "Placement Stats", "Budget Tracking", "Reports"]
    },
    {
      id: "vc",
      title: "VC/Board Portal",
      description: "Executive analytics and strategic decision support",
      icon: Crown,
      color: "bg-orange-600 hover:bg-orange-700",
      features: ["Strategic Analytics", "Financial Overview", "Performance KPIs", "Competitive Analysis", "Governance"]
    },
    {
      id: "parent",
      title: "Parent Dashboard",
      description: "Monitor your child's academic progress and activities",
      icon: Heart,
      color: "bg-red-600 hover:bg-red-700",
      features: ["Academic Progress", "Attendance Monitor", "Fee Status", "Faculty Contact", "Event Calendar"]
    },
    {
      id: "alumni",
      title: "Alumni Network",
      description: "Professional networking and university engagement",
      icon: Briefcase,
      color: "bg-teal-600 hover:bg-teal-700",
      features: ["Job Opportunities", "Mentorship", "Networking", "Donations", "Alumni Events"]
    }
  ];

  const handleRoleAccess = (roleId: string) => {
    console.log('Role selection:', roleId);
    
    // Store the selected role in localStorage for persistence across navigation
    localStorage.setItem('selectedRole', roleId);
    localStorage.setItem('userRole', roleId);
    
    // Trigger custom event to update header immediately
    window.dispatchEvent(new Event('roleChanged'));
    
    // Direct redirect to role-specific dashboard (no login required)
    const dashboardRoutes = {
      student: "/student-dashboard",
      faculty: "/faculty-dashboard", 
      admin: "/admin-dashboard",
      administrator: "/admin-dashboard",
      registrar: "/admin-dashboard",
      "administrator/registrar": "/admin-dashboard",
      vc: "/vc-dashboard",
      board: "/vc-dashboard",
      parent: "/parent-dashboard",
      alumni: "/alumni-dashboard"
    };
    
    const targetRoute = dashboardRoutes[roleId as keyof typeof dashboardRoutes] || "/student-dashboard";
    console.log('Navigating to:', targetRoute);
    
    // Use location change instead of href for better SPA behavior
    window.location.href = targetRoute;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img src="/juno-logo-optimized.png" alt="JUNO Campus" className="h-16 w-16 mr-4 drop-shadow-lg" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">JUNO Campus UMS</h1>
                <p className="text-lg text-gray-600">XYZ College of Engineering</p>
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              <Badge className="bg-green-100 text-green-800">AI-Powered ERP</Badge>
              <Badge className="bg-blue-100 text-blue-800">550+ Implementations</Badge>
              <Badge className="bg-purple-100 text-purple-800">JUNO Technology</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Portal</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enter your personalized dashboard with role-specific features and comprehensive analytics
          </p>
          
          {/* Advanced Features Link */}
          <div className="mt-6">
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-1">🚀 Advanced ERP Features Demo</h3>
                    <p className="text-blue-100 text-sm mb-2">Explore cutting-edge university management capabilities</p>
                  </div>
                  <Button 
                    className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
                    onClick={() => window.location.href = '/advanced-modules-demo'}
                  >
                    View Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {userRoles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card key={role.id} className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${role.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{role.title}</CardTitle>
                  <p className="text-gray-600">{role.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {role.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${role.color} text-white`}
                    onClick={() => handleRoleAccess(role.id)}
                  >
                    Enter {role.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* JUNO Campus Stats */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">JUNO Campus Excellence</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">550+</div>
              <div className="text-gray-600">Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2-3</div>
              <div className="text-gray-600">Months GO-LIVE</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">40+</div>
              <div className="text-gray-600">ERP Modules</div>
            </div>
          </div>
        </div>

        {/* System Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-6 w-6 text-yellow-600 mr-2" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm">AI-Powered Student Assistance</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm">AWS Cloud Labs Integration</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm">QR Code Attendance System</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm">Comprehensive Analytics Dashboard</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm">Student Grievance & Feedback System</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-6 w-6 text-blue-600 mr-2" />
                System Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-700">Last Updated</div>
                  <div className="text-sm text-gray-600">September 2025</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">System Status</div>
                  <Badge className="bg-green-100 text-green-800">All Systems Operational</Badge>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">Support</div>
                  <div className="text-sm text-gray-600">24/7 Technical Support</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">Platform</div>
                  <div className="text-sm text-gray-600">Multi-device Responsive</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2025 JUNO Campus UMS. All rights reserved. | Powered by JUNO Software Systems
          </p>
        </div>
      </div>
    </div>
  );
}