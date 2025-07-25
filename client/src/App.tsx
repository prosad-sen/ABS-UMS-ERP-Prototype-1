import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Dashboard from "@/pages/dashboard";
import Attendance from "@/pages/attendance";
import Academics from "@/pages/academics";
import Fees from "@/pages/fees";
import LMS from "@/pages/lms";
import Library from "@/pages/library";
import Profile from "@/pages/profile";
import Labs from "@/pages/labs";
import MainLayout from "@/components/layout/main-layout";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  // Development mode: bypass authentication to show full app
  const developmentMode = true;

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
          <Route path="/" component={Landing} />
          <MainLayout>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/academics" component={Academics} />
            <Route path="/fees" component={Fees} />
            <Route path="/lms" component={LMS} />
            <Route path="/library" component={Library} />
            <Route path="/labs" component={Labs} />
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
