import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Attendance from "@/pages/attendance";
import Academics from "@/pages/academics";
import Fees from "@/pages/fees";
import LMS from "@/pages/lms";
import Library from "@/pages/library";
import Profile from "@/pages/profile";
import Labs from "@/pages/labs";
import Grievances from "@/pages/grievances";
import ManagementDashboard from "@/pages/management-dashboard";
import FacultyDashboard from "@/pages/faculty-dashboard";
import AdminDashboard from "@/pages/admin-dashboard";
import VCDashboard from "@/pages/vc-dashboard";
import ParentDashboard from "@/pages/parent-dashboard";
import AlumniDashboard from "@/pages/alumni-dashboard";
import RoleSelection from "@/pages/role-selection";
import CustomizedReports from "@/pages/customized-reports";
import FacultyAttendance from "@/pages/faculty-attendance";
import ParentFees from "@/pages/parent-fees";
import StudentClubs from "@/pages/student-clubs";
import StudentPlacements from "@/pages/student-placements";

import MainLayout from "@/components/layout/main-layout";

function Router() {
  const { isAuthenticated, isLoading, user } = useAuth();

  // Direct role-based access mode (no authentication required)
  const directAccessMode = true;

  // Role-based dashboard routing
  const getRoleDashboard = (userRole: string) => {
    switch (userRole?.toLowerCase()) {
      case 'faculty':
        return FacultyDashboard;
      case 'administrator':
      case 'admin':
        return AdminDashboard;
      case 'vc':
      case 'board':
      case 'board-member':
        return VCDashboard;
      case 'parent':
        return ParentDashboard;
      case 'alumni':
        return AlumniDashboard;
      case 'student':
      default:
        return Dashboard;
    }
  };

  // Get user role from localStorage (set during role selection)
  const storedUserRole = localStorage.getItem('userRole') || localStorage.getItem('selectedRole') || "student";
  const DashboardComponent = storedUserRole ? getRoleDashboard(storedUserRole) : Dashboard;

  if (isLoading && !directAccessMode) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Switch>
      {/* Role selection as main entry point */}
      <Route path="/" component={RoleSelection} />
      <Route path="/landing" component={Landing} />
      
      {/* Direct role-based dashboards - no login required */}
      <MainLayout>
        <Route path="/student-dashboard" component={Dashboard} />
        <Route path="/faculty-dashboard" component={FacultyDashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/vc-dashboard" component={VCDashboard} />
        <Route path="/parent-dashboard" component={ParentDashboard} />
        <Route path="/alumni-dashboard" component={AlumniDashboard} />
        
        {/* Role-specific pages */}
        <Route path="/attendance" component={Attendance} />
        <Route path="/faculty-attendance" component={FacultyAttendance} />
        <Route path="/parent-fees" component={ParentFees} />
        <Route path="/student-clubs" component={StudentClubs} />
        <Route path="/student-placements" component={StudentPlacements} />
        <Route path="/academics" component={Academics} />
        <Route path="/fees" component={Fees} />
        <Route path="/lms" component={LMS} />
        <Route path="/library" component={Library} />
        <Route path="/labs" component={Labs} />
        <Route path="/grievances" component={Grievances} />
        <Route path="/management" component={ManagementDashboard} />
        <Route path="/reports" component={CustomizedReports} />
        <Route path="/profile" component={Profile} />
      </MainLayout>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
