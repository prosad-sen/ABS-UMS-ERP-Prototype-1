import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Bell, 
  Menu,
  GraduationCap,
  X
} from 'lucide-react';

export default function Header() {
  const [currentRole, setCurrentRole] = useState("Student");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-between px-3 lg:px-6 py-3 lg:py-4">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
          )}
        </button>

        <div className="flex-1 lg:flex-none">
          <h1 className="text-lg lg:text-xl font-semibold text-gray-800">COEP UMS</h1>
          <p className="text-xs lg:text-sm text-gray-600 hidden sm:block">College of Engineering Pune</p>
        </div>
        
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Role Badge */}
          <Badge className="bg-coep-blue text-white px-2 lg:px-3 py-1 text-xs lg:text-sm font-medium">
            {currentRole}
          </Badge>
          
          <div className="relative">
            <Button variant="ghost" size="sm" className="p-1 lg:p-2">
              <Bell className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 lg:h-4 lg:w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8 lg:h-10 lg:w-10">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="hidden lg:block">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs text-gray-500">Student ID: 2024001</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3">
          <div className="space-y-2">
            <a href="/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Dashboard</a>
            <a href="/academics" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Academics</a>
            <a href="/attendance" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Attendance</a>
            <a href="/fees" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Fees</a>
            <a href="/library" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Library</a>
            <a href="/lms" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">LMS</a>
            <a href="/profile" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Profile</a>
          </div>
        </div>
      )}
    </header>
  );
}