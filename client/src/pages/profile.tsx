import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { isUnauthorizedError } from '@/lib/authUtils';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  BookOpen, 
  GraduationCap,
  Edit,
  Save,
  X
} from 'lucide-react';

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    emergencyContact: '',
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, isLoading, toast]);

  const { data: studentData, isLoading: isLoadingStudent } = useQuery({
    queryKey: ['/api/student/profile'],
    retry: false,
  });

  const { data: academicData, isLoading: isLoadingAcademic } = useQuery({
    queryKey: ['/api/student/academic-summary'],
    retry: false,
  });

  // Initialize form data when student data loads
  useEffect(() => {
    if (studentData) {
      setFormData({
        phone: studentData.phone || '',
        address: studentData.address || '',
        emergencyContact: studentData.emergencyContact || '',
      });
    }
  }, [studentData]);

  const updateProfileMutation = useMutation({
    mutationFn: async (updateData: any) => {
      return await apiRequest('/api/student/profile', 'PUT', updateData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/student/profile'] });
      setIsEditing(false);
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully.",
      });
    },
    onError: (error: Error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Update Failed",
        description: error.message || "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSave = () => {
    updateProfileMutation.mutate(formData);
  };

  const handleCancel = () => {
    if (studentData) {
      setFormData({
        phone: studentData.phone || '',
        address: studentData.address || '',
        emergencyContact: studentData.emergencyContact || '',
      });
    }
    setIsEditing(false);
  };

  if (isLoading || isLoadingStudent || isLoadingAcademic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  const displayName = user?.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : 'Student';
  const userEmail = user?.email || '';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="flex items-center gap-2">
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button 
              onClick={handleSave}
              disabled={updateProfileMutation.isPending}
              className="flex items-center gap-2"
            >
              {updateProfileMutation.isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save
                </>
              )}
            </Button>
            <Button variant="outline" onClick={handleCancel} className="flex items-center gap-2">
              <X className="h-4 w-4" />
              Cancel
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={user?.profileImageUrl} alt={displayName} />
                <AvatarFallback className="text-2xl bg-coep-blue text-white">
                  {displayName.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{displayName}</CardTitle>
              <p className="text-gray-600">{userEmail}</p>
              <div className="flex justify-center mt-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <GraduationCap className="h-3 w-3" />
                  Student
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">{studentData?.program || 'Program'}</p>
                    <p className="text-xs text-gray-600">{studentData?.branch || 'Branch'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Semester {studentData?.currentSemester || 1}</p>
                    <p className="text-xs text-gray-600">Year {studentData?.admissionYear || '2024'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">{studentData?.rollNumber || 'Roll Number'}</p>
                    <p className="text-xs text-gray-600">Student ID: {studentData?.studentId || 'ID'}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>First Name</Label>
                  <Input value={user?.firstName || ''} disabled className="mt-1" />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input value={user?.lastName || ''} disabled className="mt-1" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input value={userEmail} disabled className="mt-1" />
                </div>
                <div>
                  <Label>Date of Birth</Label>
                  <Input 
                    value={studentData?.dateOfBirth ? new Date(studentData.dateOfBirth).toLocaleDateString() : ''}
                    disabled 
                    className="mt-1" 
                  />
                </div>
                <div>
                  <Label>Gender</Label>
                  <Input value={studentData?.gender || ''} disabled className="mt-1" />
                </div>
                <div>
                  <Label>Blood Group</Label>
                  <Input value={studentData?.bloodGroup || ''} disabled className="mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label>Phone Number</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    disabled={!isEditing}
                    className="mt-1"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <Label>Emergency Contact</Label>
                  <Input
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData(prev => ({ ...prev, emergencyContact: e.target.value }))}
                    disabled={!isEditing}
                    className="mt-1"
                    placeholder="Enter emergency contact"
                  />
                </div>
                <div>
                  <Label>Address</Label>
                  <Textarea
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    disabled={!isEditing}
                    className="mt-1"
                    placeholder="Enter address"
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Family Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Family Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Father's Name</Label>
                  <Input value={studentData?.fatherName || ''} disabled className="mt-1" />
                </div>
                <div>
                  <Label>Mother's Name</Label>
                  <Input value={studentData?.motherName || ''} disabled className="mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Academic Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-coep-blue">
                    {studentData?.cgpa || '0.00'}
                  </p>
                  <p className="text-sm text-gray-600">Current CGPA</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">
                    {academicData?.totalCredits || 0}
                  </p>
                  <p className="text-sm text-gray-600">Credits Earned</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    {academicData?.coursesCompleted || 0}
                  </p>
                  <p className="text-sm text-gray-600">Courses Completed</p>
                </div>
              </div>
              
              {academicData?.recentGrades && academicData.recentGrades.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Recent Grades</h4>
                  <div className="space-y-2">
                    {academicData.recentGrades.slice(0, 5).map((grade: any, index: number) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm">{grade.courseName}</span>
                        <Badge variant={grade.grade === 'A+' ? 'default' : 'secondary'}>
                          {grade.grade}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}