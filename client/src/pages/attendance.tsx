import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { QrCode, Calendar, Clock, TrendingUp, CheckCircle, XCircle, AlertCircle, Zap, Target } from "lucide-react";

export default function Attendance() {
  const [isScanning, setIsScanning] = useState(true); // Auto-open for demo
  const [scanningProgress, setScanningProgress] = useState(0);
  const [demoStep, setDemoStep] = useState(0);
  const [scannedData, setScannedData] = useState("");
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  // Auto-demo QR scanning process
  useEffect(() => {
    if (isScanning) {
      const timer = setInterval(() => {
        setScanningProgress(prev => {
          if (prev >= 100) {
            setDemoStep(1);
            setTimeout(() => {
              setScannedData("CS101-LECTURE-20240725-0900");
              setDemoStep(2);
              setTimeout(() => {
                setAttendanceMarked(true);
                setDemoStep(3);
                setTimeout(() => {
                  setIsScanning(false);
                  setScanningProgress(0);
                  setDemoStep(0);
                }, 2000);
              }, 1500);
            }, 1000);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isScanning]);

  // Mock attendance data
  const attendanceStats = {
    overall: 87.5,
    present: 98,
    absent: 14,
    total: 112,
    streak: 7
  };

  const todayLectures = [
    {
      subject: "Data Structures",
      code: "CS-101",
      time: "9:00 AM - 10:30 AM",
      instructor: "Dr. Priya Mehta",
      room: "CS-101",
      status: "open",
      attended: false
    },
    {
      subject: "Engineering Math",
      code: "MATH-201", 
      time: "11:00 AM - 12:30 PM",
      instructor: "Prof. Rajesh Kumar",
      room: "MATH-101",
      status: "attended",
      attended: true
    },
    {
      subject: "Database Systems",
      code: "CS-301",
      time: "2:00 PM - 3:30 PM", 
      instructor: "Dr. Sneha Patil",
      room: "CS-102",
      status: "upcoming",
      attended: false
    }
  ];

  const subjectAttendance = [
    {
      subject: "Data Structures",
      code: "CS-101",
      percentage: 92,
      present: 23,
      total: 25,
      status: "excellent"
    },
    {
      subject: "Engineering Math", 
      code: "MATH-201",
      percentage: 76,
      present: 19,
      total: 25,
      status: "warning"
    },
    {
      subject: "Database Systems",
      code: "CS-301", 
      percentage: 88,
      present: 22,
      total: 25,
      status: "good"
    },
    {
      subject: "Computer Networks",
      code: "CS-302",
      percentage: 84,
      present: 21,
      total: 25, 
      status: "good"
    }
  ];

  const attendanceHistory = [
    { date: "2024-03-15", subject: "Data Structures", status: "present", time: "9:00 AM" },
    { date: "2024-03-15", subject: "Math", status: "present", time: "11:00 AM" },
    { date: "2024-03-14", subject: "Database", status: "absent", time: "2:00 PM" },
    { date: "2024-03-14", subject: "Networks", status: "present", time: "3:30 PM" },
    { date: "2024-03-13", subject: "Data Structures", status: "present", time: "9:00 AM" }
  ];

  const handleQRScan = async () => {
    setIsScanning(true);
    
    try {
      // Simulate QR code scanning with mock data
      setTimeout(async () => {
        try {
          // Generate a mock QR code for demonstration
          const mockQRData = "COEP_ATTENDANCE_CS301_" + Date.now();
          
          const response = await fetch('/api/attendance/scan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              qrData: mockQRData,
              studentId: 'student_001'
            })
          });
          
          const result = await response.json();
          
          if (result.success) {
            alert(`✅ ${result.message}`);
            // Refresh attendance data in a real app
          } else {
            alert(`❌ ${result.message}`);
          }
        } catch (error) {
          alert('❌ Failed to process QR scan. Please try again.');
        } finally {
          setIsScanning(false);
        }
      }, 2000);
    } catch (error) {
      setIsScanning(false);
      alert('❌ QR scanner failed to initialize.');
    }
  };

  return (
    <div className="space-y-6 p-3 lg:p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Attendance</h1>
          <p className="text-gray-600">Track your class attendance and maintain academic requirements</p>
        </div>
        <Button onClick={handleQRScan} disabled={isScanning} className="bg-coep-blue hover:bg-blue-700">
          <QrCode className="h-4 w-4 mr-2" />
          {isScanning ? 'Scanning...' : 'Scan QR Code'}
        </Button>
      </div>

      {/* Current Lecture Alert */}
      <Card className="border-l-4 border-l-green-500 bg-green-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">Current Lecture</h3>
                <p className="text-green-700">Data Structures - CS-101 • 9:00 AM - 10:30 AM</p>
                <p className="text-sm text-green-600">Instructor: Dr. Priya Mehta • Room: CS-101</p>
              </div>
            </div>
            <div className="text-center">
              <Badge className="bg-green-600 text-white mb-2">Open (15 min left)</Badge>
              <p className="text-xs text-green-600">Attendance Window</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <TrendingUp className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-green-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{attendanceStats.overall}%</h3>
            <p className="text-sm text-gray-600">Overall Attendance</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <CheckCircle className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-blue-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{attendanceStats.present}</h3>
            <p className="text-sm text-gray-600">Classes Attended</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <XCircle className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-red-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{attendanceStats.absent}</h3>
            <p className="text-sm text-gray-600">Classes Missed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <Calendar className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-orange-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{attendanceStats.streak}</h3>
            <p className="text-sm text-gray-600">Day Streak</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="today" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="subjects">By Subject</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="qr">QR Scanner</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule - March 15, 2024</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayLectures.map((lecture, index) => (
                <Card key={index} className={`border-l-4 ${
                  lecture.status === 'attended' ? 'border-l-green-500 bg-green-50' :
                  lecture.status === 'open' ? 'border-l-blue-500 bg-blue-50' :
                  'border-l-gray-500 bg-gray-50'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-2 lg:space-y-0">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{lecture.subject} ({lecture.code})</h3>
                        <p className="text-gray-600 text-sm">Instructor: {lecture.instructor}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span><Clock className="h-4 w-4 inline mr-1" />{lecture.time}</span>
                          <span>Room: {lecture.room}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        {lecture.status === 'attended' && (
                          <Badge className="bg-green-600 text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Attended
                          </Badge>
                        )}
                        {lecture.status === 'open' && (
                          <Badge className="bg-blue-600 text-white">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Open (15 min left)
                          </Badge>
                        )}
                        {lecture.status === 'upcoming' && (
                          <Badge variant="secondary">
                            <Clock className="h-3 w-3 mr-1" />
                            Upcoming
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subject-wise Attendance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {subjectAttendance.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{subject.subject} ({subject.code})</h4>
                      <p className="text-sm text-gray-600">{subject.present}/{subject.total} classes attended</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-2xl font-bold ${
                        subject.status === 'excellent' ? 'text-green-600' :
                        subject.status === 'warning' ? 'text-orange-600' :
                        'text-blue-600'
                      }`}>
                        {subject.percentage}%
                      </span>
                      <Badge className={`ml-2 ${
                        subject.status === 'excellent' ? 'bg-green-100 text-green-800' :
                        subject.status === 'warning' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {subject.status === 'excellent' ? 'Excellent' :
                         subject.status === 'warning' ? 'Below 75%' : 'Good'}
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        subject.status === 'excellent' ? 'bg-green-500' :
                        subject.status === 'warning' ? 'bg-orange-500' :
                        'bg-blue-500'
                      }`}
                      style={{ width: `${subject.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Attendance History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {attendanceHistory.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {record.status === 'present' ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <div>
                        <p className="font-medium">{record.subject}</p>
                        <p className="text-sm text-gray-600">{record.date} • {record.time}</p>
                      </div>
                    </div>
                    <Badge variant={record.status === 'present' ? 'default' : 'destructive'}>
                      {record.status === 'present' ? 'Present' : 'Absent'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qr" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>QR Code Attendance Scanner</CardTitle>
              <p className="text-sm text-gray-600">
                Scan the QR code displayed by your instructor to mark attendance
              </p>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="w-64 h-64 mx-auto bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                {isScanning ? (
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Scanning QR Code...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Click scan to activate camera</p>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleQRScan} 
                  disabled={isScanning}
                  className="bg-coep-blue hover:bg-blue-700 px-8 py-3"
                >
                  <QrCode className="h-5 w-5 mr-2" />
                  {isScanning ? 'Scanning QR Code...' : 'Start QR Scan'}
                </Button>
                
                {!isScanning && (
                  <div className="space-y-2">
                    <Button 
                      variant="outline"
                      onClick={async () => {
                        try {
                          const response = await fetch('/api/attendance/generate-qr/CS301');
                          const data = await response.json();
                          alert(`📱 Mock QR Code Generated:\n${data.qrData}\n\nThis simulates the instructor's QR code display.`);
                        } catch (error) {
                          alert('Failed to generate QR code.');
                        }
                      }}
                      className="px-8 py-3 w-full"
                    >
                      Generate Test QR
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      In real use, scan the QR displayed by your instructor
                    </p>
                  </div>
                )}
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Instructions:</strong></p>
                  <ul className="text-left max-w-md mx-auto space-y-1">
                    <li>• Make sure you're in the classroom during lecture time</li>
                    <li>• Point your camera at the QR code on the instructor's screen</li>
                    <li>• Keep the QR code within the scanner frame</li>
                    <li>• Attendance will be marked automatically upon successful scan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Enhanced QR Scanner Modal with Demo */}
      <Dialog open={isScanning} onOpenChange={setIsScanning}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <QrCode className="h-5 w-5 text-blue-600" />
              <span>QR Code Scanner</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-4">
            {demoStep === 0 && (
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  <div className="w-32 h-32 border-4 border-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-12 w-12 text-blue-600 animate-pulse" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Progress value={scanningProgress} className="h-2" />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Scanning for QR code... Position the code within the frame
                </p>
              </div>
            )}

            {demoStep === 1 && (
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto bg-green-50 rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-green-600 rounded-lg flex items-center justify-center">
                    <Target className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-green-600 font-medium">
                  QR Code detected! Processing...
                </p>
              </div>
            )}

            {demoStep === 2 && (
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto bg-blue-50 rounded-lg flex items-center justify-center">
                  <div className="space-y-2 text-center">
                    <CheckCircle className="h-16 w-16 text-blue-600 mx-auto" />
                    <p className="text-sm font-mono text-gray-700">{scannedData}</p>
                  </div>
                </div>
                <p className="text-sm text-blue-600 font-medium">
                  Validating attendance code...
                </p>
              </div>
            )}

            {demoStep === 3 && attendanceMarked && (
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto bg-green-50 rounded-lg flex items-center justify-center">
                  <div className="space-y-3 text-center">
                    <CheckCircle className="h-20 w-20 text-green-600 mx-auto" />
                    <div>
                      <p className="text-lg font-semibold text-green-800">Attendance Marked!</p>
                      <p className="text-sm text-green-600">Data Structures - CS-101</p>
                      <p className="text-xs text-gray-500">Today at 9:00 AM</p>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">
                  +10 Attendance Points Added
                </Badge>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}