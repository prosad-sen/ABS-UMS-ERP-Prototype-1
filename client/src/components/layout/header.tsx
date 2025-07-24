import { useAuth } from '@/hooks/useAuth';
import type { User } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { 
  Bell, 
  Settings, 
  LogOut, 
  User as UserIcon,
  GraduationCap
} from 'lucide-react';

export default function Header() {
  const { user, isAuthenticated } = useAuth();

  const userData = user as User | undefined;
  const displayName = userData?.firstName ? `${userData.firstName} ${userData.lastName || ''}`.trim() : 'Student';
  const userEmail = userData?.email || '';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 h-16">
      <div className="flex items-center justify-between h-full px-6">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-coep-blue rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">COEP UMS</h1>
              <p className="text-xs text-gray-600">University Management System</p>
            </div>
          </div>
        </div>

        {/* Right side - User menu */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
          </Button>

          {/* User Menu */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userData?.profileImageUrl} alt={displayName} />
                    <AvatarFallback className="bg-coep-blue text-white text-sm">
                      {displayName.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium">{displayName}</p>
                    <p className="text-xs text-gray-600">Student</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{displayName}</p>
                    <p className="text-xs text-gray-600">{userEmail}</p>
                    <Badge variant="secondary" className="text-xs">
                      Student
                    </Badge>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="flex items-center gap-2 text-red-600"
                  onClick={() => window.location.href = '/api/logout'}
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => window.location.href = '/api/login'}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}