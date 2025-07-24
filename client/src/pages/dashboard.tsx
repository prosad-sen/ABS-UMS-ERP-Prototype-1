import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();
  
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["/api/dashboard/stats"],
    enabled: !!user,
  });

  const { data: announcements, isLoading: announcementsLoading } = useQuery({
    queryKey: ["/api/announcements"],
    enabled: !!user,
  });

  if (statsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const userName = user?.firstName 
    ? `${user.firstName} ${user.lastName || ''}`.trim()
    : user?.email?.split('@')[0] || 'User';

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome back, {userName}!</h2>
        <p className="text-gray-600">Here's what's happening with your academics today.</p>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Attendance</p>
                <p className="text-2xl font-bold text-gray-800">
                  {stats?.attendance ? `${stats.attendance.toFixed(1)}%` : '0%'}
                </p>
              </div>
              <div className="w-12 h-12 bg-success-green bg-opacity-10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-success-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs text-success-green">
                {stats?.attendance && stats.attendance > 75 ? 'Good attendance' : 'Needs improvement'}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">CGPA</p>
                <p className="text-2xl font-bold text-gray-800">
                  {stats?.cgpa ? stats.cgpa.toFixed(2) : 'N/A'}
                </p>
              </div>
              <div className="w-12 h-12 bg-coep-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-coep-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs text-success-green">
                {stats?.cgpa && stats.cgpa >= 8.0 ? 'Excellent performance' : 'Keep up the good work'}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Fees</p>
                <p className="text-2xl font-bold text-gray-800">
                  ₹{stats?.pendingFees ? stats.pendingFees.toLocaleString() : '0'}
                </p>
              </div>
              <div className="w-12 h-12 bg-warning-amber bg-opacity-10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-warning-amber" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs text-warning-amber">
                {stats?.pendingFees && stats.pendingFees > 0 ? 'Payment due soon' : 'All payments up to date'}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Assignments</p>
                <p className="text-2xl font-bold text-gray-800">
                  {stats?.pendingAssignments || 0}
                </p>
              </div>
              <div className="w-12 h-12 bg-error-red bg-opacity-10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-error-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs text-error-red">
                {stats?.pendingAssignments ? `${stats.pendingAssignments} pending` : 'All caught up!'}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule & Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-coep-blue rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2V4c0-1.1-.9-2-2-2s-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM7.5 14c-.83 0-1.5-.67-1.5-1.5S6.67 11 7.5 11s1.5.67 1.5 1.5S8.33 14 7.5 14zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Data Structures</p>
                  <p className="text-sm text-gray-600">Room: CS-101 • 9:00 AM - 10:30 AM</p>
                  <p className="text-xs text-coep-blue">Dr. Priya Mehta</p>
                </div>
                <Button size="sm" className="bg-coep-blue hover:bg-coep-light-blue">
                  Join
                </Button>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Engineering Mathematics</p>
                  <p className="text-sm text-gray-600">Room: MATH-201 • 11:00 AM - 12:30 PM</p>
                  <p className="text-xs text-gray-500">Prof. Rajesh Kumar</p>
                </div>
                <span className="text-xs text-gray-500">Upcoming</span>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zM12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Computer Networks Lab</p>
                  <p className="text-sm text-gray-600">Lab: CN-Lab • 2:00 PM - 5:00 PM</p>
                  <p className="text-xs text-gray-500">Dr. Amit Joshi</p>
                </div>
                <span className="text-xs text-gray-500">Upcoming</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Recent Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            {announcementsLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : announcements && announcements.length > 0 ? (
              <div className="space-y-4">
                {announcements.slice(0, 3).map((announcement: any) => (
                  <div key={announcement.id} className="border-l-4 border-coep-blue pl-4">
                    <p className="font-medium text-gray-800">{announcement.title}</p>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{announcement.content}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-gray-500">
                        {new Date(announcement.createdAt).toLocaleDateString()} • {announcement.author?.firstName || 'System'}
                      </p>
                      {announcement.priority === 'high' && (
                        <Badge variant="destructive" className="text-xs">
                          Important
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7" />
                </svg>
                <p className="text-gray-500">No announcements available</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
