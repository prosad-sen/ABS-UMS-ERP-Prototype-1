import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import {
  Home,
  QrCode,
  BookOpen,
  IndianRupee,
  GraduationCap,
  Library,
  User,
  LogOut
} from "lucide-react";

const navigationItems = [
  { path: "/", label: "Dashboard", icon: Home },
  { path: "/attendance", label: "Attendance", icon: QrCode },
  { path: "/academics", label: "Academics", icon: BookOpen },
  { path: "/fees", label: "Fees", icon: IndianRupee },
  { path: "/lms", label: "Learning", icon: GraduationCap },
  { path: "/library", label: "Library", icon: Library },
  { path: "/profile", label: "Profile", icon: User },
];

export default function Sidebar() {
  const [location] = useLocation();

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  return (
    <aside className="w-64 bg-white shadow-sm h-screen sticky top-0 overflow-y-auto">
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;
          
          return (
            <Link key={item.path} href={item.path}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start space-x-3 p-3 h-auto",
                  isActive 
                    ? "text-coep-blue bg-blue-50 hover:bg-blue-50" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-4 left-4 right-4">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full justify-start space-x-2 p-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </Button>
      </div>
    </aside>
  );
}
