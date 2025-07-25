import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { 
  Eye, 
  EyeOff, 
  Shield, 
  Lock, 
  User, 
  Mail,
  KeyRound,
  ArrowLeft,
  Building2
} from "lucide-react";

interface LoginProps {
  selectedRole: string;
}

export default function Login({ selectedRole }: LoginProps) {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const roleConfig = {
    student: {
      title: "Student Portal Login",
      subtitle: "Access your academic dashboard and course materials",
      icon: User,
      color: "text-blue-600",
      bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-100",
      sampleCredentials: { username: "2024001", password: "student123" }
    },
    faculty: {
      title: "Faculty Portal Login",
      subtitle: "Manage courses, grades, and student interactions",
      icon: User,
      color: "text-green-600",
      bgGradient: "bg-gradient-to-br from-green-50 to-emerald-100",
      sampleCredentials: { username: "faculty001", password: "faculty123" }
    },
    admin: {
      title: "Administrator/Registrar Login",
      subtitle: "Access administrative tools and university management",
      icon: Shield,
      color: "text-purple-600",
      bgGradient: "bg-gradient-to-br from-purple-50 to-violet-100",
      sampleCredentials: { username: "admin", password: "admin123" }
    },
    administrator: {
      title: "Administrator/Registrar Login",
      subtitle: "Access administrative tools and university management",
      icon: Shield,
      color: "text-purple-600",
      bgGradient: "bg-gradient-to-br from-purple-50 to-violet-100",
      sampleCredentials: { username: "admin", password: "admin123" }
    },
    vc: {
      title: "VC/Board Portal Login",
      subtitle: "Executive dashboard for strategic university oversight",
      icon: Building2,
      color: "text-red-600",
      bgGradient: "bg-gradient-to-br from-red-50 to-rose-100",
      sampleCredentials: { username: "vc001", password: "vc123" }
    },
    parent: {
      title: "Parent Portal Login",
      subtitle: "Monitor your child's academic progress and activities",
      icon: User,
      color: "text-orange-600",
      bgGradient: "bg-gradient-to-br from-orange-50 to-amber-100",
      sampleCredentials: { username: "parent001", password: "parent123" }
    },
    alumni: {
      title: "Alumni Network Login",
      subtitle: "Connect with fellow graduates and support current students",
      icon: User,
      color: "text-teal-600",
      bgGradient: "bg-gradient-to-br from-teal-50 to-cyan-100",
      sampleCredentials: { username: "alumni001", password: "alumni123" }
    }
  };

  const config = roleConfig[selectedRole as keyof typeof roleConfig] || roleConfig.student;
  const IconComponent = config.icon;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Store the role in localStorage using utility functions
    localStorage.setItem('userRole', selectedRole);
    localStorage.setItem('selectedRole', selectedRole);
    
    const dashboardRoutes = {
      student: "/student-dashboard",
      faculty: "/faculty-dashboard",
      admin: "/admin-dashboard",
      administrator: "/admin-dashboard", 
      vc: "/vc-dashboard",
      board: "/vc-dashboard",
      parent: "/parent-dashboard",
      alumni: "/alumni-dashboard"
    };

    // Force hard redirect to role-specific dashboard to ensure proper routing
    const targetRoute = dashboardRoutes[selectedRole as keyof typeof dashboardRoutes] || "/student-dashboard";
    console.log(`Redirecting ${selectedRole} to ${targetRoute}`);
    
    // Use window.location to force a full page refresh and proper routing
    setTimeout(() => {
      window.location.href = targetRoute;
    }, 100);
    setIsLoading(false);
  };

  const handleDemoLogin = () => {
    setCredentials({
      username: config.sampleCredentials.username,
      password: config.sampleCredentials.password,
      rememberMe: false
    });
  };

  const handleBackToSelection = () => {
    setLocation("/");
  };

  return (
    <div className={`min-h-screen ${config.bgGradient} flex items-center justify-center p-4`}>
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={handleBackToSelection}
          className="mb-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Role Selection
        </Button>

        {/* Login Card */}
        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className={`mx-auto mb-4 w-16 h-16 ${config.bgGradient} rounded-full flex items-center justify-center`}>
              <IconComponent className={`h-8 w-8 ${config.color}`} />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {config.title}
            </CardTitle>
            <p className="text-gray-600 text-sm mt-2">
              {config.subtitle}
            </p>
            <Badge variant="outline" className="mt-3 mx-auto">
              COEP Technological University
            </Badge>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Username Field */}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                  Username / Roll Number
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="pl-10 pr-10 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={credentials.rememberMe}
                  onCheckedChange={(checked) => 
                    setCredentials(prev => ({ ...prev, rememberMe: checked as boolean }))
                  }
                />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me for 30 days
                </Label>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className={`w-full h-12 ${config.color} bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium`}
                disabled={isLoading || !credentials.username || !credentials.password}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Authenticating...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <KeyRound className="h-4 w-4" />
                    <span>Sign In</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Demo Login */}
            <div className="border-t pt-4">
              <div className="text-center mb-3">
                <span className="text-xs text-gray-500 bg-white px-3">Demo Access</span>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={handleDemoLogin}
                className="w-full h-10"
              >
                Use Demo Credentials
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Username: {config.sampleCredentials.username} | Password: {config.sampleCredentials.password}
              </p>
            </div>

            {/* Additional Links */}
            <div className="text-center space-y-2">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot your password?
              </a>
              <p className="text-xs text-gray-500">
                Having trouble? Contact IT Support: support@coep.ac.in
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Shield className="h-4 w-4" />
            <span className="text-xs">Secured by COEP IT Services</span>
          </div>
        </div>
      </div>
    </div>
  );
}