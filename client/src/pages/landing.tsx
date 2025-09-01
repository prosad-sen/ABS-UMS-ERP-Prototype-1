import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Landing() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleLogin = () => {
    if (!selectedRole) {
      alert("Please select your role");
      return;
    }
    
    // For demo: redirect directly to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          {/* JUNO Campus Logo */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">JUNO Campus UMS</h1>
            <p className="text-gray-600 mt-2">XYZ College of Engineering</p>
          </div>

          <div className="space-y-6">
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-2">Select Your Role</Label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your role..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="finance">Finance Officer</SelectItem>
                  <SelectItem value="hr">HR Manager</SelectItem>
                  <SelectItem value="librarian">Librarian</SelectItem>
                  <SelectItem value="alumni">Alumni</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-2">Login ID</Label>
              <Input type="text" placeholder="Demo Mode - Any ID" defaultValue="demo123" />
            </div>

            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-2">Password</Label>
              <Input type="password" placeholder="Demo Mode - Any Password" defaultValue="password" />
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Demo Mode:</strong> Select any role and click login to explore the system.
              </p>
            </div>

            <Button 
              onClick={handleLogin} 
              className="w-full bg-blue-600 hover:bg-blue-500"
            >
              Login to Portal
            </Button>

            <div className="text-center space-y-2">
              <a href="/dashboard" className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                🚀 Quick Access - Go to Dashboard
              </a>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
