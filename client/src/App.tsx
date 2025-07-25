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
import ResearchManagement from "@/pages/research";
import GradeManagement from "@/pages/grading";
import ExamManagement from "@/pages/exam-management";
import HostelManagement from "@/pages/hostel-management";
import TransportManagement from "@/pages/transport-management";
import FacultyProfile from "@/pages/faculty-profile";
import AdminStudentRecords from "@/pages/admin-student-records";
import AdminAcademics from "@/pages/admin-academics";
import AlumniProfile from "@/pages/alumni-profile";

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
        <Route path="/research" component={ResearchManagement} />
        <Route path="/grading" component={GradeManagement} />
        <Route path="/exam-management" component={ExamManagement} />
        <Route path="/hostel-management" component={HostelManagement} />
        <Route path="/transport-management" component={TransportManagement} />
        <Route path="/profile" component={() => {
          const userRole = localStorage.getItem('userRole') || localStorage.getItem('selectedRole') || "student";
          console.log('Profile route - detected role:', userRole);
          
          switch (userRole?.toLowerCase()) {
            case 'faculty':
              return <FacultyProfile />;
            case 'alumni':
              return <AlumniProfile />;
            case 'admin':
            case 'administrator':
            case 'registrar':
            case 'vc':
            case 'parent':
              return <Profile />; // Can be customized later for these roles
            case 'student':
            default:
              return <Profile />;
          }
        }} />
        <Route path="/faculty-profile" component={FacultyProfile} />
        <Route path="/alumni-profile" component={AlumniProfile} />
        
        {/* Administrator/Registrar specific pages */}
        <Route path="/admin-student-records" component={AdminStudentRecords} />
        <Route path="/admin-academics" component={AdminAcademics} />
        <Route path="/admin-fees" component={Fees} />
        <Route path="/admin-reports" component={CustomizedReports} />
        <Route path="/admin-grievances" component={Grievances} />
        <Route path="/admin-placements" component={StudentPlacements} />
        <Route path="/admin-research" component={ResearchManagement} />
        <Route path="/admin-exam-management" component={ExamManagement} />
        <Route path="/admin-hostel-management" component={HostelManagement} />
        <Route path="/admin-transport-management" component={TransportManagement} />
        
        {/* VC/Board specific pages */}
        <Route path="/vc-reports" component={CustomizedReports} />
        <Route path="/vc-finances" component={Fees} />
        <Route path="/vc-academics" component={Academics} />
        <Route path="/vc-placements" component={StudentPlacements} />
        <Route path="/vc-research" component={ResearchManagement} />
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
