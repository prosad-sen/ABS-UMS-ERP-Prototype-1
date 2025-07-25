import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { 
  Bell, 
  Menu,
  GraduationCap,
  X,
  BarChart3,
  BookOpen,
  Calendar,
  FileText,
  Library,
  DollarSign,
  Users,
  QrCode,
  Cloud,
  MessageSquare,
  User,
  Briefcase
} from 'lucide-react';

// Import the same navigation logic from sidebar
const getRoleNavigation = (role: string) => {
  const baseItems = [
    {
      name: 'Dashboard',
      href: `/${role}-dashboard`,
      icon: BarChart3,
      description: 'Overview & Analytics'
    }
  ];
  
  switch (role?.toLowerCase()) {
    case 'faculty':
      return [
        ...baseItems,
        {
          name: 'Faculty Profile',
          href: '/faculty-profile',
          icon: User,
          description: 'Faculty Profile & Research'
        },
        {
          name: 'Research Management',
          href: '/research',
          icon: BookOpen,
          description: 'Research Projects & Grants'
        },
        {
          name: 'Exam Management',
          href: '/exam-management',
          icon: Calendar,
          description: 'Examination System'
        },
        {
          name: 'Course Management',
          href: '/academics',
          icon: GraduationCap,
          description: 'Courses & Curriculum'
        },
        {
          name: 'Grade Management',
          href: '/grading',
          icon: FileText,
          description: 'Assignments & Grading'
        },
        {
          name: 'Hostel Management',
          href: '/hostel-management',
          icon: Users,
          description: 'Hostel Administration'
        },
        {
          name: 'Transport Management',
          href: '/transport-management',
          icon: BarChart3,
          description: 'Campus Transportation'
        }
      ];

    case 'admin':
    case 'administrator':
    case 'registrar':
      return [
        ...baseItems,
        {
          name: 'Student Records Management',
          href: '/admin-student-records',
          icon: User,
          description: 'Manage All Student Records'
        },
        {
          name: 'Academic Administration',
          href: '/admin-academics',
          icon: GraduationCap,
          description: 'Academic Programs & Curriculum'
        },
        {
          name: 'Research Administration',
          href: '/admin-research',
          icon: BookOpen,
          description: 'University Research Management'
        },
        {
          name: 'Exam Administration',
          href: '/admin-exam-management',
          icon: Calendar,
          description: 'Examination System Management'
        }
      ];

    case 'vc':
      return [
        ...baseItems,
        {
          name: 'Executive Reports',
          href: '/vc-reports',
          icon: FileText,
          description: 'Board & Governance Reports'
        },
        {
          name: 'Strategic Analytics',
          href: '/management',
          icon: BarChart3,
          description: 'Executive Intelligence Dashboard'
        }
      ];

    case 'parent':
      return [
        ...baseItems,
        {
          name: 'Child Profile',
          href: '/profile',
          icon: User,
          description: 'Child Information'
        },
        {
          name: 'Academic Progress',
          href: '/academics',
          icon: GraduationCap,
          description: 'Grades & Performance'
        }
      ];

    case 'alumni':
      return [
        ...baseItems,
        {
          name: 'Alumni Profile',
          href: '/profile',
          icon: User,
          description: 'Professional Profile'
        },
        {
          name: 'Mentorship Program',
          href: '/academics',
          icon: GraduationCap,
          description: 'Guide Students'
        }
      ];
    
    default: // student
      return [
        ...baseItems,
        {
          name: 'Student Profile',
          href: '/profile',
          icon: User,
          description: 'Personal Information & Research'
        },
        {
          name: 'Research Projects',
          href: '/research',
          icon: BookOpen,
          description: 'Student Research Activities'
        },
        {
          name: 'Exam Management',
          href: '/exam-management',
          icon: Calendar,
          description: 'Examination Schedule & Results'
        },
        {
          name: 'Academics',
          href: '/academics',
          icon: GraduationCap,
          description: 'Courses & Grades'
        },
        {
          name: 'Placement Portal',
          href: '/student-placements',
          icon: Briefcase,
          description: 'Career Opportunities'
        },
        {
          name: 'Attendance',
          href: '/attendance',
          icon: QrCode,
          description: 'QR Code Scanner'
        },
        {
          name: 'Hostel Services',
          href: '/hostel-management',
          icon: Users,
          description: 'Hostel Applications & Services'
        },
        {
          name: 'Transport Services',
          href: '/transport-management',
          icon: BarChart3,
          description: 'Campus Transportation'
        },
        {
          name: 'Fees',
          href: '/fees',
          icon: DollarSign,
          description: 'Payments & Dues'
        },
        {
          name: 'AWS Labs',
          href: '/labs',
          icon: Cloud,
          description: 'Cloud Computing Labs'
        },
        {
          name: 'Grievances',
          href: '/grievances',
          icon: MessageSquare,
          description: 'Voice Concerns'
        },
        {
          name: 'Library',
          href: '/library',
          icon: Library,
          description: 'Books & Resources'
        }
      ];
  }
};

export default function Header() {
  // Get role from localStorage
  const getUserRole = () => {
    const storedRole = localStorage.getItem('userRole') || localStorage.getItem('selectedRole');
    if (storedRole) {
      const roleNames = {
        student: 'Student',
        faculty: 'Faculty',
        admin: 'Administrator/Registrar',
        administrator: 'Administrator/Registrar',
        vc: 'VC/Board',
        board: 'VC/Board',
        parent: 'Parent',
        alumni: 'Alumni'
      };
      return roleNames[storedRole as keyof typeof roleNames] || 'Student';
    }
    return 'Student';
  };

  const [currentRole, setCurrentRole] = useState(getUserRole());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Get current role for navigation
  const getCurrentRole = () => {
    return localStorage.getItem('userRole') || localStorage.getItem('selectedRole') || 'student';
  };
  
  const navigationItems = getRoleNavigation(getCurrentRole());

  // Update role when localStorage changes - use useEffect properly
  React.useEffect(() => {
    const updateRole = () => {
      setCurrentRole(getUserRole());
    };
    
    updateRole(); // Initial update
    
    // Listen for storage changes
    window.addEventListener('storage', updateRole);
    
    // Also listen for a custom event when role changes within the same tab
    window.addEventListener('roleChanged', updateRole);
    
    // Periodic check to ensure sync (fallback)
    const interval = setInterval(updateRole, 1000);
    
    return () => {
      window.removeEventListener('storage', updateRole);
      window.removeEventListener('roleChanged', updateRole);
      clearInterval(interval);
    };
  }, []);

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
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 max-h-80 overflow-y-auto">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-4 w-4 mr-3 text-gray-500" />
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}