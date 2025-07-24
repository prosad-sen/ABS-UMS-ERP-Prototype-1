import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

export default function Header() {
  const { user } = useAuth();

  const userName = user?.firstName 
    ? `${user.firstName} ${user.lastName || ''}`.trim()
    : user?.email?.split('@')[0] || 'User';

  const userRole = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'User';

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-coep-blue rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">COEP Technological University</h1>
            <p className="text-sm text-gray-600">University Management System</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button variant="ghost" size="sm" className="p-2 text-gray-600 hover:text-gray-800 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-error-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{userName}</p>
              <p className="text-xs text-gray-600">{userRole}</p>
            </div>
            <Avatar className="w-10 h-10 border-2 border-gray-200">
              <AvatarImage src={user?.profileImageUrl || undefined} alt="Profile" />
              <AvatarFallback className="bg-coep-blue text-white">
                {userName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
