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
  Users,
  UserPlus,
  Award,
  ShoppingCart,
  Package,
  Building,
  Handshake,
  Camera,
  Brain,
  Database
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
          name: 'Advanced Demo',
          href: '/advanced-modules-demo',
          icon: Brain,
          description: 'Advanced ERP Features'
        },
        {
          name: 'CCTV Attendance',
          href: '/advanced-attendance',
          icon: Camera,
          description: 'Biometric Attendance'
        },
        {
          name: 'AI Analytics',
          href: '/advanced-analytics',
          icon: BarChart3,
          description: 'Academic Intelligence'
        },
        {
          name: 'Scholarship API',
          href: '/scholarship-integration',
          icon: Award,
          description: 'Government Integration'
        },
        {
          name: 'Digital Library',
          href: '/comprehensive-library',
          icon: Database,
          description: 'Library System'
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
        },
        {
          name: 'Advanced Attendance System',
          href: '/advanced-attendance',
          icon: Camera,
          description: 'CCTV-based Biometric Attendance Intelligence'
        },
        {
          name: 'Academic Analytics AI',
          href: '/advanced-analytics',
          icon: Brain,
          description: 'AI-Powered Academic Performance Analytics'
        },
        {
          name: 'Scholarship API Hub',
          href: '/scholarship-integration',
          icon: Award,
          description: 'Government & Private Scholarship Integration'
        },
        {
          name: 'Digital Library System',
          href: '/comprehensive-library',
          icon: Database,
          description: 'Advanced Digital Resource Management'
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
        },
        {
          name: 'Finance Management',
          href: '/finance-management',
          icon: DollarSign,
          description: 'Comprehensive Financial Operations'
        },
        {
          name: 'HR Management',
          href: '/hr-management',
          icon: Users,
          description: 'Human Resources Strategy'
        },
        {
          name: 'Accreditation',
          href: '/accreditation-management',
          icon: Award,
          description: 'Quality Assurance & Standards'
        },
        {
          name: 'Industrial Collaborations',
          href: '/industrial-collaborations',
          icon: Handshake,
          description: 'Strategic Industry Partnerships'
        },
        {
          name: 'Infrastructure',
          href: '/infrastructure-management',
          icon: Building,
          description: 'Campus Infrastructure Strategy'
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
        },
        {
          name: 'Student Clubs',
          href: '/student-clubs',
          icon: Users,
          description: 'Campus Organizations'
        },
        {
          name: 'Academic Management',
          href: '/academic-management',
          icon: BookOpen,
          description: 'Academic Information'
        },
        {
          name: 'Content Management',
          href: '/content-management',
          icon: FileText,
          description: 'Course Materials'
        },
        {
          name: 'Advanced Demo',
          href: '/advanced-modules-demo',
          icon: Brain,
          description: 'Advanced ERP Features'
        },
        {
          name: 'CCTV Attendance',
          href: '/advanced-attendance',
          icon: Camera,
          description: 'Biometric Attendance'
        },
        {
          name: 'AI Analytics',
          href: '/advanced-analytics',
          icon: BarChart3,
          description: 'Academic Intelligence'
        },
        {
          name: 'Scholarship API',
          href: '/scholarship-integration',
          icon: Award,
          description: 'Government Integration'
        },
        {
          name: 'Digital Library',
          href: '/comprehensive-library',
          icon: Database,
          description: 'Library System'
        }
      ];
  }
};

export default function Sidebar() {
  const [location] = useLocation();
  
  // Get current role from multiple sources
  const getCurrentRole = () => {
    // Check localStorage first (most reliable)
    const storedRole = localStorage.getItem('userRole') || localStorage.getItem('selectedRole');
    if (storedRole) {
      console.log('Role from localStorage:', storedRole);
      return storedRole;
    }
    
    // Check URL path as backup
    const path = window.location.pathname;
    if (path.includes('admin-dashboard') || path.includes('admin')) return 'admin';
    if (path.includes('faculty-dashboard') || path.includes('faculty')) return 'faculty';
    if (path.includes('vc-dashboard') || path.includes('vc')) return 'vc';
    if (path.includes('parent-dashboard') || path.includes('parent')) return 'parent';
    if (path.includes('alumni-dashboard') || path.includes('alumni')) return 'alumni';
    
    // Check wouter location as last resort
    if (location.includes('faculty')) return 'faculty';
    if (location.includes('admin')) return 'admin';
    if (location.includes('vc')) return 'vc';
    if (location.includes('parent')) return 'parent';
    if (location.includes('alumni')) return 'alumni';
    
    console.log('Defaulting to student role');
    return 'student';
  };
  
  const currentRole = getCurrentRole();
  const navigationItems = getRoleNavigation(currentRole);
  
  // Debug logging
  console.log('Current role detected:', currentRole);
  console.log('Navigation items:', navigationItems.length);

  return (
    <aside className="fixed left-0 top-[56px] z-50 h-[calc(100vh-56px)] w-64 border-r border-gray-200 bg-white hidden lg:block sidebar-nav">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-1 sidebar-nav">
            {navigationItems.map((item) => {
            const isActive = location === item.href || (item.href !== '/' && location.startsWith(item.href));
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium nav-item navigation-link',
                  isActive
                    ? 'bg-coep-blue text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                <item.icon className={cn(
                  'h-4 w-4 flex-shrink-0',
                  isActive ? 'text-white' : 'text-gray-500'
                )} />
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-medium truncate">{item.name}</span>
                  <span className={cn(
                    'text-xs truncate',
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
        <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-center">
            <p className="text-xs font-medium text-gray-600">COEP Technological University</p>
            <p className="text-xs text-gray-500">University Management System</p>
          </div>
        </div>
      </div>
    </aside>
  );
}