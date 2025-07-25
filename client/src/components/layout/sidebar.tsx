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
  MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: BarChart3,
    description: 'Overview & Analytics'
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: User,
    description: 'Personal Information'
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

export default function Sidebar() {
  const [location] = useLocation();

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