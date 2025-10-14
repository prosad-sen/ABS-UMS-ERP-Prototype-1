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
          {/* ABC UMS ERP Logo */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <img src="/abc-logo-optimized.svg" alt="ABC UMS ERP" className="w-18 h-18 drop-shadow-lg" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">ABC UMS ERP</h1>
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
