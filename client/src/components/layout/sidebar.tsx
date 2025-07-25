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
  
  switch (role) {
    case 'faculty':
      return [
        ...baseItems,
        {
          name: 'My Courses',
          href: '/faculty-courses',
          icon: BookOpen,
          description: 'Course Management'
        },
        {
          name: 'Student Progress',
          href: '/student-progress',
          icon: User,
          description: 'Track Students'
        },
        {
          name: 'Attendance',
          href: '/faculty-attendance',
          icon: QrCode,
          description: 'Mark Attendance'
        },
        {
          name: 'Grading',
          href: '/grading',
          icon: FileText,
          description: 'Grade Assignments'
        },
        {
          name: 'Schedule',
          href: '/faculty-schedule',
          icon: Calendar,
          description: 'Class Schedule'
        },
        {
          name: 'Student Placements',
          href: '/student-placements',
          icon: Briefcase,
          description: 'Track Student Career Progress'
        }
      ];
    
    case 'admin':
    case 'administrator':
    case 'registrar':
      return [
        ...baseItems,
        {
          name: 'User Management',
          href: '/user-management',
          icon: User,
          description: 'Manage Users'
        },
        {
          name: 'Placements',
          href: '/admin-placements',
          icon: GraduationCap,
          description: 'Placement Management'
        },
        {
          name: 'System Analytics',
          href: '/system-analytics',
          icon: BarChart3,
          description: 'System Metrics'
        },
        {
          name: 'Department Stats',
          href: '/department-stats',
          icon: GraduationCap,
          description: 'Department Data'
        },
        {
          name: 'Grievances',
          href: '/admin-grievances',
          icon: MessageSquare,
          description: 'Handle Issues'
        },
        {
          name: 'Reports',
          href: '/admin-reports',
          icon: FileText,
          description: 'Generate Reports'
        },
        {
          name: 'Placement Analytics',
          href: '/student-placements',
          icon: Briefcase,
          description: 'University Placements'
        }
      ];
    
    case 'vc':
      return [
        ...baseItems,
        {
          name: 'Strategic KPIs',
          href: '/strategic-kpis',
          icon: BarChart3,
          description: 'Key Metrics'
        },
        {
          name: 'Placement Excellence',
          href: '/student-placements',
          icon: Briefcase,
          description: 'Strategic Placement Analytics'
        },
        {
          name: 'Financial Overview',
          href: '/financial-overview',
          icon: DollarSign,
          description: 'Budget & Finance'
        },
        {
          name: 'University Rankings',
          href: '/university-rankings',
          icon: GraduationCap,
          description: 'Competitive Analysis'
        },
        {
          name: 'Board Reports',
          href: '/board-reports',
          icon: FileText,
          description: 'Executive Reports'
        }
      ];
    
    case 'parent':
      return [
        ...baseItems,
        {
          name: 'Child Progress',
          href: '/child-progress',
          icon: User,
          description: 'Academic Tracking'
        },
        {
          name: 'Attendance View',
          href: '/parent-attendance',
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
          name: 'Communication',
          href: '/parent-communication',
          icon: MessageSquare,
          description: 'Faculty Messages'
        }
      ];
    
    case 'alumni':
      return [
        ...baseItems,
        {
          name: 'Network',
          href: '/alumni-network',
          icon: User,
          description: 'Alumni Directory'
        },
        {
          name: 'Job Board',
          href: '/job-board',
          icon: FileText,
          description: 'Career Opportunities'
        },
        {
          name: 'Mentorship',
          href: '/mentorship',
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
          name: 'Donations',
          href: '/donations',
          icon: DollarSign,
          description: 'Support University'
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
    const storedRole = localStorage.getItem('userRole') || localStorage.getItem('selectedRole');
    if (storedRole) return storedRole;
    
    // Fallback: derive from URL for backward compatibility 
    if (location.includes('faculty')) return 'faculty';
    if (location.includes('admin')) return 'admin';
    if (location.includes('vc')) return 'vc';
    if (location.includes('parent')) return 'parent';
    if (location.includes('alumni')) return 'alumni';
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