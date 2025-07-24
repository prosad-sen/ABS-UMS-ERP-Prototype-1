import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { Edit, Save, X } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  const { data: studentProfile, isLoading } = useQuery({
    queryKey: ["/api/students/profile"],
    enabled: !!user,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  const userName = user?.firstName 
    ? `${user.firstName} ${user.lastName || ''}`.trim()
    : user?.email?.split('@')[0] || 'User';

  // Mock student data based on the profile structure
  const mockStudent = {
    studentId: "202111001",
    rollNumber: "11001",
    program: "B.Tech",
    branch: "Computer Engineering",
    currentSemester: 6,
    cgpa: 8.49,
    admissionYear: 2021,
    dateOfBirth: "2003-08-15",
    gender: "Male",
    bloodGroup: "O+",
    fatherName: "Rajesh Sharma",
    motherName: "Sunita Sharma",
    address: "Flat 203, Sunrise Apartments, Pune, Maharashtra - 411001",
    phone: "+91 9876543210",
    emergencyContact: "+91 9876543211"
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Student Profile</h2>
        <p className="text-gray-600">Manage your personal information and academic details</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-gray-200">
                  <AvatarImage src={user?.profileImageUrl || undefined} alt="Student Profile" />
                  <AvatarFallback className="bg-coep-blue text-white text-2xl">
                    {userName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-gray-800">{userName}</h3>
                <p className="text-gray-600">Student ID: {mockStudent.studentId}</p>
                <p className="text-sm text-gray-500">{mockStudent.program} {mockStudent.branch}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Current Semester</span>
                  <span className="font-medium">{mockStudent.currentSemester}th</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">CGPA</span>
                  <span className="font-medium text-coep-blue">{mockStudent.cgpa}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Attendance</span>
                  <span className="font-medium">87.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Admission Year</span>
                  <span className="font-medium">{mockStudent.admissionYear}</span>
                </div>
              </div>

              <Button 
                onClick={() => setIsEditing(!isEditing)}
                className="w-full mt-6 bg-coep-blue hover:bg-coep-light-blue"
              >
                {isEditing ? (
                  <>
                    <X className="w-4 h-4 mr-2" />
                    Cancel Edit
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                {/* Personal Information */}
                <TabsContent value="personal" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName"
                        value={userName}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input 
                        id="dateOfBirth"
                        value={new Date(mockStudent.dateOfBirth).toLocaleDateString()}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender</Label>
                      <Input 
                        id="gender"
                        value={mockStudent.gender}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Input 
                        id="bloodGroup"
                        value={mockStudent.bloodGroup}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="fatherName">Father's Name</Label>
                      <Input 
                        id="fatherName"
                        value={mockStudent.fatherName}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="motherName">Mother's Name</Label>
                      <Input 
                        id="motherName"
                        value={mockStudent.motherName}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea 
                        id="address"
                        rows={3}
                        value={mockStudent.address}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Academic Information */}
                <TabsContent value="academic" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input 
                        id="studentId"
                        value={mockStudent.studentId}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="rollNumber">Roll Number</Label>
                      <Input 
                        id="rollNumber"
                        value={mockStudent.rollNumber}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="program">Program</Label>
                      <Input 
                        id="program"
                        value={mockStudent.program}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="branch">Branch</Label>
                      <Input 
                        id="branch"
                        value={mockStudent.branch}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="semester">Current Semester</Label>
                      <Input 
                        id="semester"
                        value={`${mockStudent.currentSemester}th Semester`}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cgpa">CGPA</Label>
                      <Input 
                        id="cgpa"
                        value={mockStudent.cgpa}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="admissionYear">Admission Year</Label>
                      <Input 
                        id="admissionYear"
                        value={mockStudent.admissionYear}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Contact Information */}
                <TabsContent value="contact" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email"
                        value={user?.email || ""}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        value={mockStudent.phone}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact</Label>
                      <Input 
                        id="emergencyContact"
                        value={mockStudent.emergencyContact}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Documents */}
                <TabsContent value="documents" className="mt-6">
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">SSC Marksheet</p>
                          <p className="text-sm text-gray-600">Uploaded on: Jan 15, 2021</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">HSC Marksheet</p>
                          <p className="text-sm text-gray-600">Uploaded on: Jan 15, 2021</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">MHT-CET Scorecard</p>
                          <p className="text-sm text-gray-600">Uploaded on: Jan 15, 2021</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">Caste Certificate</p>
                          <p className="text-sm text-gray-600">Uploaded on: Jan 15, 2021</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {isEditing && (
                <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
                  <Button 
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={() => setIsEditing(false)}
                    className="bg-coep-blue hover:bg-coep-light-blue"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
