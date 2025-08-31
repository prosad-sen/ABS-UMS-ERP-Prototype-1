import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'wouter';
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
  Briefcase,
  Home,
  UserPlus,
  Award,
  ShoppingCart,
  Package,
  Building,
  Handshake
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
        },
        {
          name: 'Faculty Resources',
          href: '/library',
          icon: Library,
          description: 'Research Resources'
        },
        {
          name: 'Placement Tracking',
          href: '/student-placements',
          icon: Briefcase,
          description: 'Student Career Progress'
        },
        {
          name: 'Academic Management',
          href: '/academic-management',
          icon: BookOpen,
          description: 'Academic Administration'
        },
        {
          name: 'Content Management',
          href: '/content-management',
          icon: FileText,
          description: 'Course Content & Materials'
        },
        {
          name: 'Admissions Management',
          href: '/admissions-management',
          icon: UserPlus,
          description: 'Student Admission Process'
        },
        {
          name: 'HR Management',
          href: '/hr-management',
          icon: Users,
          description: 'Human Resources & Faculty'
        },
        {
          name: 'Finance Management',
          href: '/finance-management',
          icon: DollarSign,
          description: 'Financial Operations'
        },
        {
          name: 'Accreditation',
          href: '/accreditation-management',
          icon: Award,
          description: 'Quality Assurance & Accreditation'
        },
        {
          name: 'Procurement',
          href: '/procurement-management',
          icon: ShoppingCart,
          description: 'Procurement & Vendor Management'
        },
        {
          name: 'Inventory Management',
          href: '/inventory-management',
          icon: Package,
          description: 'Inventory & Stock Management'
        },
        {
          name: 'Infrastructure',
          href: '/infrastructure-management',
          icon: Building,
          description: 'Infrastructure & Facility Management'
        },
        {
          name: 'Industrial Collaborations',
          href: '/industrial-collaborations',
          icon: Handshake,
          description: 'Industry Partnerships & MoU Management'
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
          name: 'Fee Administration',
          href: '/admin-fees',
          icon: DollarSign,
          description: 'Financial Records & Billing'
        },
        {
          name: 'System Reports',
          href: '/admin-reports',
          icon: FileText,
          description: 'Administrative Reports'
        },
        {
          name: 'Grievance Management',
          href: '/admin-grievances',
          icon: MessageSquare,
          description: 'Handle Student Issues'
        },
        {
          name: 'Placement Administration',
          href: '/admin-placements',
          icon: Briefcase,
          description: 'Placement Coordination'
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
        },
        {
          name: 'Hostel Administration',
          href: '/admin-hostel-management',
          icon: Users,
          description: 'Hostel Management & Operations'
        },
        {
          name: 'Transport Administration',
          href: '/admin-transport-management',
          icon: BarChart3,
          description: 'Campus Transportation Management'
        },
        {
          name: 'Management Analytics',
          href: '/management',
          icon: BarChart3,
          description: 'Strategic Analytics Dashboard'
        },
        {
          name: 'Academic Management',
          href: '/academic-management',
          icon: BookOpen,
          description: 'Academic Administration'
        },
        {
          name: 'Content Management',
          href: '/content-management',
          icon: FileText,
          description: 'Course Content & Materials'
        },
        {
          name: 'Admissions Management',
          href: '/admissions-management',
          icon: UserPlus,
          description: 'Student Admission Process'
        },
        {
          name: 'HR Management',
          href: '/hr-management',
          icon: Users,
          description: 'Human Resources & Faculty'
        },
        {
          name: 'Finance Management',
          href: '/finance-management',
          icon: DollarSign,
          description: 'Financial Operations'
        },
        {
          name: 'Accreditation',
          href: '/accreditation-management',
          icon: Award,
          description: 'Quality Assurance & Accreditation'
        },
        {
          name: 'Procurement',
          href: '/procurement-management',
          icon: ShoppingCart,
          description: 'Procurement & Vendor Management'
        },
        {
          name: 'Inventory Management',
          href: '/inventory-management',
          icon: Package,
          description: 'Inventory & Stock Management'
        },
        {
          name: 'Infrastructure',
          href: '/infrastructure-management',
          icon: Building,
          description: 'Infrastructure & Facility Management'
        },
        {
          name: 'Industrial Collaborations',
          href: '/industrial-collaborations',
          icon: Handshake,
          description: 'Industry Partnerships & MoU Management'
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
          name: 'Financial Oversight',
          href: '/vc-finances',
          icon: DollarSign,
          description: 'Budget & Revenue Analytics'
        },
        {
          name: 'Academic Excellence',
          href: '/vc-academics',
          icon: GraduationCap,
          description: 'Academic Performance Metrics'
        },
        {
          name: 'Placement Strategy',
          href: '/vc-placements',
          icon: Briefcase,
          description: 'Strategic Placement Analytics'
        },
        {
          name: 'Research Leadership',
          href: '/vc-research',
          icon: BookOpen,
          description: 'Research & Innovation Strategy'
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
        },
        {
          name: 'Attendance View',
          href: '/attendance',
          icon: QrCode,
          description: 'Attendance Records'
        },
        {
          name: 'Fee Payments',
          href: '/parent-fees',
          icon: DollarSign,
          description: 'Payment History'
        },
        {
          name: 'Placement Updates',
          href: '/student-placements',
          icon: Briefcase,
          description: 'Child Placement Status'
        },
        {
          name: 'Parent Communication',
          href: '/grievances',
          icon: MessageSquare,
          description: 'Faculty Messages'
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
          name: 'Career Network',
          href: '/alumni-career-network',
          icon: Users,
          description: 'Professional Network'
        },
        {
          name: 'Mentorship Program',
          href: '/alumni-mentorship',
          icon: GraduationCap,
          description: 'Guide Students'
        },
        {
          name: 'Placement Portal',
          href: '/student-placements',
          icon: Briefcase,
          description: 'Industry Opportunities'
        },
        {
          name: 'Alumni Contributions',
          href: '/alumni-contributions',
          icon: DollarSign,
          description: 'Support University'
        },
        {
          name: 'University Updates',
          href: '/alumni-news-events',
          icon: Library,
          description: 'News & Events'
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
          name: 'LMS',
          href: '/lms',
          icon: FileText,
          description: 'Learning Management'
        },
        {
          name: 'Library',
          href: '/library',
          icon: Library,
          description: 'Books & Resources'
        },
        {
          name: 'Student Clubs',
          href: '/student-clubs',
          icon: Users,
          description: 'Campus Organizations'
        }
      ];
  }
};

export default function Header() {
  const [, setLocation] = useLocation();
  
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

  // Get role-specific profile data
  const getRoleProfileData = () => {
    const role = localStorage.getItem('userRole') || localStorage.getItem('selectedRole') || 'student';
    
    const profileData = {
      student: {
        name: "Rahul Sharma",
        id: "2024001",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      faculty: {
        name: "Dr. Priya Patel",
        id: "FAC001",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      admin: {
        name: "Mr. Amit Kumar",
        id: "ADM001",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      administrator: {
        name: "Mr. Amit Kumar",
        id: "ADM001",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      vc: {
        name: "Dr. Rajesh Gupta",
        id: "VC001",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
      },
      parent: {
        name: "Mrs. Sunita Sharma",
        id: "PAR001",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      alumni: {
        name: "Mr. Vikash Singh",
        id: "ALU2018",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      }
    };
    
    return profileData[role as keyof typeof profileData] || profileData.student;
  };

  const [currentRole, setCurrentRole] = useState(getUserRole());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileData = getRoleProfileData();

  const handleBackToMain = () => {
    setLocation("/");
  };
  
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
    <header className="fixed top-0 right-0 left-0 lg:left-0 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-between px-3 lg:px-6 py-1 h-[40px]">
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

        <div className="flex-1 flex items-center justify-start">
          <div className="flex items-center gap-8">
            <div>
              <h1 className="text-lg lg:text-xl font-semibold text-gray-800">COEP UMS</h1>
              <p className="text-xs lg:text-sm text-gray-600 hidden sm:block">College of Engineering Pune</p>
            </div>
            <Button 
              onClick={handleBackToMain}
              variant="outline" 
              size="sm"
              className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900 hidden lg:flex items-center bg-white"
            >
              <Home className="h-4 w-4 mr-1" />
              Back to Main
            </Button>
          </div>
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
              <AvatarImage src={profileData.image} alt={profileData.name} />
              <AvatarFallback>{profileData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="hidden lg:block">
              <p className="text-sm font-medium text-gray-700">{profileData.name}</p>
              <p className="text-xs text-gray-500">ID: {profileData.id}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 max-h-80 overflow-y-auto">
          <div className="space-y-2">
            {/* Back to Main Button for Mobile */}
            <button
              onClick={() => {
                handleBackToMain();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors w-full text-left"
            >
              <Home className="h-4 w-4 mr-3 text-gray-500" />
              <div>
                <div className="font-medium">Back to Main</div>
                <div className="text-xs text-gray-500">Return to Landing Page</div>
              </div>
            </button>
            
            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>
            
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