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

import MainLayout from "@/components/layout/main-layout";

function Router() {
  const { isAuthenticated, isLoading, user } = useAuth();

  // Development mode: bypass authentication to show full app
  const developmentMode = true;

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

  // Mock user role for development - in production this would come from authentication
  const mockUserRole = "student"; // Change this to test different roles: student, faculty, admin, vc, parent, alumni
  const DashboardComponent = mockUserRole ? getRoleDashboard(mockUserRole) : Dashboard;

  if (isLoading && !developmentMode) {
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
      {(!isAuthenticated && !developmentMode) ? (
        <Route path="/" component={Landing} />
      ) : (
        <>
          <Route path="/" component={RoleSelection} />
          <Route path="/landing" component={Landing} />
          <Route path="/login/:role">
            {(props: any) => <Login selectedRole={props.params?.role || 'student'} />}
          </Route>
          <MainLayout>
            <Route path="/dashboard" component={DashboardComponent} />
            <Route path="/student-dashboard" component={Dashboard} />
            <Route path="/faculty-dashboard" component={FacultyDashboard} />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/vc-dashboard" component={VCDashboard} />
            <Route path="/parent-dashboard" component={ParentDashboard} />
            <Route path="/alumni-dashboard" component={AlumniDashboard} />
            <Route path="/attendance" component={Attendance} />
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
        </>
      )}
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
