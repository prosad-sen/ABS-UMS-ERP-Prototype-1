import { Link, useLocation } from 'wouter';
import { 
  BarChart3, 
  BookOpen, 
  Calendar, 
  DollarSign, 
  FileText, 
  GraduationCap, 
  Library, 
  QrCode, 
  User,
  Cloud,
  MessageSquare,
  Briefcase,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Role-specific navigation items function
const getRoleNavigation = (role: string) => {
  const baseItems = [
    {
      name: 'Dashboard',
      href: `/${role}-dashboard`,
      icon: BarChart3,
      description: 'Overview & Analytics'
    }
  ];
  
  // Force correct role-specific navigation
  switch (role?.toLowerCase()) {
    case 'faculty':
      return [
        ...baseItems,
        {
          name: 'Research Management',
          href: '/research',
          icon: BookOpen,
          description: 'Research Projects & Grants'
        },
        {
          name: 'Course Management',
          href: '/academics',
          icon: GraduationCap,
          description: 'Courses & Curriculum'
        },
        {
          name: 'Student Analytics',
          href: '/profile',
          icon: User,
          description: 'Student Performance'
        },
        {
          name: 'Grade Management',
          href: '/grading',
          icon: FileText,
          description: 'Assignments & Grading'
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
        }
      ];
    
    case 'admin':
    case 'administrator':
    case 'registrar':
      return [
        ...baseItems,
        {
          name: 'Student Records',
          href: '/profile',
          icon: User,
          description: 'Manage Student Records'
        },
        {
          name: 'Academic Management',
          href: '/academics',
          icon: GraduationCap,
          description: 'Academic Programs'
        },
        {
          name: 'Fee Management',
          href: '/fees',
          icon: DollarSign,
          description: 'Financial Records'
        },
        {
          name: 'System Reports',
          href: '/reports',
          icon: FileText,
          description: 'Administrative Reports'
        },
        {
          name: 'Grievance Management',
          href: '/grievances',
          icon: MessageSquare,
          description: 'Handle Student Issues'
        },
        {
          name: 'Placement Analytics',
          href: '/student-placements',
          icon: Briefcase,
          description: 'University Placements'
        },
        {
          name: 'Research Analytics',
          href: '/research',
          icon: BookOpen,
          description: 'Research & Innovation'
        },
        {
          name: 'Management Dashboard',
          href: '/management',
          icon: BarChart3,
          description: 'Strategic Analytics'
        }
      ];
    
    case 'vc':
      return [
        ...baseItems,
        {
          name: 'Executive Reports',
          href: '/reports',
          icon: FileText,
          description: 'Board Reports'
        },
        {
          name: 'Financial Analytics',
          href: '/fees',
          icon: DollarSign,
          description: 'Budget & Revenue'
        },
        {
          name: 'Academic Excellence',
          href: '/academics',
          icon: GraduationCap,
          description: 'Academic Performance'
        },
        {
          name: 'Placement Excellence',
          href: '/student-placements',
          icon: Briefcase,
          description: 'Strategic Placement Analytics'
        },
        {
          name: 'Research Excellence',
          href: '/research',
          icon: BookOpen,
          description: 'Research & Innovation'
        },
        {
          name: 'Management Analytics',
          href: '/management',
          icon: BarChart3,
          description: 'Strategic Intelligence'
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
          href: '/student-clubs',
          icon: Users,
          description: 'Professional Network'
        },
        {
          name: 'Mentorship Program',
          href: '/academics',
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
          href: '/fees',
          icon: DollarSign,
          description: 'Support University'
        },
        {
          name: 'University Updates',
          href: '/library',
          icon: Library,
          description: 'News & Events'
        }
      ];
    
    default: // student
      return [
        ...baseItems,
        {
          name: 'Profile',
          href: '/profile',
          icon: User,
          description: 'Personal Information'
        },
        {
          name: 'Student Clubs',
          href: '/student-clubs',
          icon: Users,
          description: 'Campus Organizations'
        },
        {
          name: 'Placements',
          href: '/student-placements',
          icon: Briefcase,
          description: 'Career Opportunities'
        },
        {
          name: 'Academics',
          href: '/academics',
          icon: GraduationCap,
          description: 'Courses & Grades'
        },
        {
          name: 'Attendance',
          href: '/attendance',
          icon: QrCode,
          description: 'QR Code Scanner'
        },
        {
          name: 'Fees',
          href: '/fees',
          icon: DollarSign,
          description: 'Payments & Dues'
        },
        {
          name: 'LMS',
          href: '/lms',
          icon: FileText,
          description: 'Learning Management'
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

export default function Sidebar() {
  const [location] = useLocation();
  
  // Get current role from localStorage (set during role selection)
  const getCurrentRole = () => {
    // Check URL path first (most reliable for role-specific pages)
    const path = window.location.pathname;
    if (path.includes('admin-dashboard') || path.includes('admin')) return 'admin';
    if (path.includes('faculty-dashboard') || path.includes('faculty')) return 'faculty';
    if (path.includes('vc-dashboard') || path.includes('vc')) return 'vc';
    if (path.includes('parent-dashboard') || path.includes('parent')) return 'parent';
    if (path.includes('alumni-dashboard') || path.includes('alumni')) return 'alumni';
    
    // Check wouter location
    if (location.includes('faculty')) return 'faculty';
    if (location.includes('admin')) return 'admin';
    if (location.includes('vc')) return 'vc';
    if (location.includes('parent')) return 'parent';
    if (location.includes('alumni')) return 'alumni';
    
    // Check localStorage as fallback
    const storedRole = localStorage.getItem('userRole') || localStorage.getItem('selectedRole');
    if (storedRole) return storedRole;
    
    return 'student';
  };
  
  const currentRole = getCurrentRole();
  const navigationItems = getRoleNavigation(currentRole);

  return (
    <aside className="fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white overflow-y-auto hidden lg:block">
      <div className="p-6">
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location === item.href || (item.href !== '/' && location.startsWith(item.href));
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-coep-blue text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                <item.icon className={cn(
                  'h-5 w-5',
                  isActive ? 'text-white' : 'text-gray-500'
                )} />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className={cn(
                    'text-xs',
                    isActive ? 'text-blue-100' : 'text-gray-500'
                  )}>
                    {item.description}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-xs text-gray-500">COEP Technological University</p>
          <p className="text-xs text-gray-400">University Management System</p>
        </div>
      </div>
    </aside>
  );
}