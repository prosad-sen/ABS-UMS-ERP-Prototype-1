// Utility functions for role management
export const getUserRole = (): string => {
  return localStorage.getItem('userRole') || localStorage.getItem('selectedRole') || 'student';
};

export const setUserRole = (role: string): void => {
  localStorage.setItem('userRole', role);
  localStorage.setItem('selectedRole', role);
};

export const clearUserRole = (): void => {
  localStorage.removeItem('userRole');
  localStorage.removeItem('selectedRole');
};

export const getRoleDashboardPath = (role: string): string => {
  const dashboardRoutes = {
    student: "/student-dashboard",
    faculty: "/faculty-dashboard", 
    admin: "/admin-dashboard",
    administrator: "/admin-dashboard",
    vc: "/vc-dashboard",
    board: "/vc-dashboard", 
    parent: "/parent-dashboard",
    alumni: "/alumni-dashboard"
  };
  
  return dashboardRoutes[role as keyof typeof dashboardRoutes] || "/student-dashboard";
};

export const getRoleDisplayName = (role: string): string => {
  const roleNames = {
    student: 'Student',
    faculty: 'Faculty',
    admin: 'Administrator/Registrar',
    administrator: 'Administrator/Registrar',
    vc: 'VC/Board',
    board: 'VC/Board',
    parent: 'Parent',
    alumni: 'Alumni'
  };
  
  return roleNames[role as keyof typeof roleNames] || 'Student';
};