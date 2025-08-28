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
import AdminFees from "@/pages/admin-fees";
import AlumniProfile from "@/pages/alumni-profile";
import FacultyAcademics from "@/pages/faculty-academics";
import StudentExamManagement from "@/pages/student-exam-management";
import VCAcademics from "@/pages/vc-academics";
import VCFinances from "@/pages/vc-finances";
import AlumniCareerNetwork from "@/pages/alumni-career-network";
import AlumniMentorship from "@/pages/alumni-mentorship";
import AlumniContributions from "@/pages/alumni-contributions";
import AlumniNewsEvents from "@/pages/alumni-news-events";
import SimpleAdminTest from "@/pages/simple-admin-test";
import AcademicManagement from "@/pages/academic-management";
import ContentManagement from "@/pages/content-management";
import AdmissionsManagement from "@/pages/admissions-management";
import HRManagement from "@/pages/hr-management";
import FinanceManagement from "@/pages/finance-management";
import AccreditationManagement from "@/pages/accreditation-management";
import ProcurementManagement from "@/pages/procurement-management";
import InventoryManagement from "@/pages/inventory-management";
import InfrastructureManagement from "@/pages/infrastructure-management";
import IndustrialCollaborations from "@/pages/industrial-collaborations";
import AdvancedAttendanceSystem from "@/pages/advanced-attendance-system";
import AdvancedAcademicAnalytics from "@/pages/advanced-academic-analytics";
import ScholarshipAPIIntegration from "@/pages/scholarship-api-integration";
import ComprehensiveLibrarySystem from "@/pages/comprehensive-library-system";

import MainLayout from "@/components/layout/main-layout";

function Router() {
  const { isAuthenticated, isLoading, user } = useAuth();

  // Direct role-based access mode (no authentication required)
  const directAccessMode = true;

  // Role-based dashboard routing
  const getRoleDashboard = (userRole: string) => {
    console.log('Getting dashboard for role:', userRole);
    
    switch (userRole?.toLowerCase()) {
      case 'faculty':
        console.log('Returning FacultyDashboard');
        return FacultyDashboard;
      case 'administrator':
      case 'admin':
      case 'registrar':
        console.log('Returning AdminDashboard');
        return AdminDashboard;
      case 'vc':
      case 'board':
      case 'board-member':
        console.log('Returning VCDashboard');
        return VCDashboard;
      case 'parent':
        console.log('Returning ParentDashboard');
        return ParentDashboard;
      case 'alumni':
        console.log('Returning AlumniDashboard');
        return AlumniDashboard;
      case 'student':
      default:
        console.log('Returning default Dashboard');
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
        <Route path="/admin-dashboard" component={() => {
          console.log('Admin dashboard route accessed');
          const userRole = localStorage.getItem('userRole') || localStorage.getItem('selectedRole');
          console.log('User role in admin route:', userRole);
          return <AdminDashboard />;
        }} />
        <Route path="/administrator-dashboard" component={() => {
          console.log('Administrator dashboard route accessed');
          return <AdminDashboard />;
        }} />
        <Route path="/registrar-dashboard" component={() => {
          console.log('Registrar dashboard route accessed');
          return <AdminDashboard />;
        }} />
        <Route path="/admin-test" component={SimpleAdminTest} />
        <Route path="/vc-dashboard" component={VCDashboard} />
        <Route path="/parent-dashboard" component={ParentDashboard} />
        <Route path="/alumni-dashboard" component={AlumniDashboard} />
        
        {/* Role-specific pages */}
        <Route path="/attendance" component={Attendance} />
        <Route path="/faculty-attendance" component={FacultyAttendance} />
        <Route path="/parent-fees" component={ParentFees} />
        <Route path="/student-clubs" component={StudentClubs} />
        <Route path="/student-placements" component={StudentPlacements} />
        <Route path="/academics" component={() => {
          const userRole = localStorage.getItem('userRole') || localStorage.getItem('selectedRole') || "student";
          
          switch (userRole?.toLowerCase()) {
            case 'faculty':
              return <FacultyAcademics />; // Faculty version
            case 'student':
            default:
              return <Academics />; // Student version
          }
        }} />
        <Route path="/fees" component={Fees} />
        <Route path="/lms" component={LMS} />
        <Route path="/library" component={Library} />
        <Route path="/labs" component={Labs} />
        <Route path="/grievances" component={Grievances} />
        <Route path="/management" component={ManagementDashboard} />
        <Route path="/reports" component={CustomizedReports} />
        <Route path="/research" component={ResearchManagement} />
        <Route path="/grading" component={GradeManagement} />
        <Route path="/exam-management" component={() => {
          const userRole = localStorage.getItem('userRole') || localStorage.getItem('selectedRole') || "student";
          
          switch (userRole?.toLowerCase()) {
            case 'faculty':
              return <ExamManagement />; // Faculty version
            case 'admin':
            case 'administrator':
            case 'registrar':
              return <ExamManagement />; // Admin version
            case 'student':
            default:
              return <StudentExamManagement />; // Student version
          }
        }} />
        <Route path="/hostel-management" component={HostelManagement} />
        <Route path="/transport-management" component={TransportManagement} />
        
        {/* Academic Management */}
        <Route path="/academic-management" component={AcademicManagement} />
        <Route path="/content-management" component={ContentManagement} />
        
        {/* Comprehensive FRS Modules */}
        <Route path="/admissions-management" component={AdmissionsManagement} />
        <Route path="/hr-management" component={HRManagement} />
        <Route path="/finance-management" component={FinanceManagement} />
        <Route path="/accreditation-management" component={AccreditationManagement} />
        <Route path="/procurement-management" component={ProcurementManagement} />
        <Route path="/inventory-management" component={InventoryManagement} />
        <Route path="/infrastructure-management" component={InfrastructureManagement} />
        <Route path="/industrial-collaborations" component={IndustrialCollaborations} />
        
        {/* Advanced World-Class ERP Modules */}
        <Route path="/advanced-attendance" component={AdvancedAttendanceSystem} />
        <Route path="/advanced-analytics" component={AdvancedAcademicAnalytics} />
        <Route path="/scholarship-integration" component={ScholarshipAPIIntegration} />
        <Route path="/comprehensive-library" component={ComprehensiveLibrarySystem} />
        
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
        <Route path="/admin-fees" component={AdminFees} />
        <Route path="/admin-reports" component={CustomizedReports} />
        <Route path="/admin-grievances" component={Grievances} />
        <Route path="/admin-placements" component={StudentPlacements} />
        <Route path="/admin-research" component={ResearchManagement} />
        <Route path="/admin-exam-management" component={ExamManagement} />
        <Route path="/admin-hostel-management" component={HostelManagement} />
        <Route path="/admin-transport-management" component={TransportManagement} />
        
        {/* VC/Board specific pages */}
        <Route path="/vc-reports" component={CustomizedReports} />
        <Route path="/vc-finances" component={VCFinances} />
        <Route path="/vc-academics" component={VCAcademics} />
        <Route path="/vc-placements" component={StudentPlacements} />
        <Route path="/vc-research" component={ResearchManagement} />
        
        {/* Alumni specific pages */}
        <Route path="/alumni-career-network" component={AlumniCareerNetwork} />
        <Route path="/alumni-mentorship" component={AlumniMentorship} />
        <Route path="/alumni-contributions" component={AlumniContributions} />
        <Route path="/alumni-news-events" component={AlumniNewsEvents} />
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
