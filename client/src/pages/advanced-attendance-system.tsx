import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Camera, 
  QrCode, 
  User, 
  Users,
  MapPin,
  Clock,
  Calendar,
  Activity,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Filter,
  Download,
  Settings,
  Wifi,
  Smartphone,
  Eye,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Bell
} from "lucide-react";

export default function AdvancedAttendanceSystem() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [realTimeData, setRealTimeData] = useState({
    currentlyPresent: 1247,
    todayAttendance: 89.3,
    liveClassrooms: 45,
    cctvActive: 98.7
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        currentlyPresent: prev.currentlyPresent + Math.floor(Math.random() * 10 - 5),
        todayAttendance: Math.min(100, prev.todayAttendance + (Math.random() - 0.5) * 0.1)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const attendanceStats = {
    totalStudents: 2847,
    presentToday: 2542,
    attendanceRate: 89.3,
    avgMonthlyAttendance: 91.7,
    cctvCoverage: 98.7,
    biometricAccuracy: 99.2,
    mobileAppUsers: 94.8,
    geofencingActive: 100
  };

  const cctvAnalytics = [
    {
      location: "Main Academic Block",
      cameras: 24,
      activeStatus: 100,
      studentsDetected: 456,
      attendanceVerified: 98.7,
      anomaliesDetected: 2,
      lastUpdated: "2 mins ago"
    },
    {
      location: "Computer Engineering Building",
      cameras: 18,
      activeStatus: 94.4,
      studentsDetected: 387,
      attendanceVerified: 97.2,
      anomaliesDetected: 1,
      lastUpdated: "1 min ago"
    },
    {
      location: "Mechanical Engineering Labs",
      cameras: 15,
      activeStatus: 100,
      studentsDetected: 298,
      attendanceVerified: 99.1,
      anomaliesDetected: 0,
      lastUpdated: "30 secs ago"
    },
    {
      location: "Central Library",
      cameras: 12,
      activeStatus: 91.7,
      studentsDetected: 234,
      attendanceVerified: 96.8,
      anomaliesDetected: 3,
      lastUpdated: "45 secs ago"
    }
  ];

  const biometricLogs = [
    {
      studentId: "CS2021045",
      name: "Aarav Sharma",
      method: "Face Recognition",
      location: "CS Lab 1",
      timestamp: "09:15:23",
      confidence: 98.7,
      status: "verified",
      backup: "RFID Card"
    },
    {
      studentId: "ME2020132",
      name: "Priya Patel",
      method: "Fingerprint",
      location: "ME Workshop",
      timestamp: "09:14:45",
      confidence: 99.2,
      status: "verified",
      backup: "Mobile App"
    },
    {
      studentId: "EC2022089",
      name: "Rohit Kumar",
      method: "QR Code + GPS",
      location: "Electronics Lab",
      timestamp: "09:13:12",
      confidence: 95.4,
      status: "verified",
      backup: "Geofencing"
    },
    {
      studentId: "CV2021067",
      name: "Sneha Desai",
      method: "Face Recognition",
      location: "Civil Drawing Hall",
      timestamp: "09:12:34",
      confidence: 97.8,
      status: "pending_review",
      backup: "Manual Override"
    }
  ];

  const aiInsights = {
    patterns: [
      {
        insight: "Peak attendance hours",
        data: "9:00-10:00 AM shows highest attendance rate (94.2%)",
        recommendation: "Schedule important lectures during this window"
      },
      {
        insight: "Weather correlation",
        data: "Attendance drops 12% during monsoon season",
        recommendation: "Implement hybrid teaching during rainy days"
      },
      {
        insight: "Department analysis",
        data: "Computer Engineering leads with 96.8% attendance",
        recommendation: "Study and replicate successful engagement strategies"
      },
      {
        insight: "Anomaly detection",
        data: "3 unusual patterns detected in Block C this week",
        recommendation: "Investigate potential security or technical issues"
      }
    ],
    predictions: [
      {
        metric: "Tomorrow's Attendance",
        prediction: "91.4%",
        confidence: 87.2,
        factors: ["Weather: Clear", "Day: Friday", "Events: None"]
      },
      {
        metric: "Weekly Average",
        prediction: "89.8%",
        confidence: 92.5,
        factors: ["Historical trends", "Upcoming exams", "Festival season"]
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'text-green-600 bg-green-50';
      case 'pending_review': return 'text-yellow-600 bg-yellow-50';
      case 'failed': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-6 rounded-lg">
        <div className="px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Advanced Attendance Intelligence</h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">CCTV-based Biometric Attendance with AI Analytics</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">Live Monitoring</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                <Settings className="h-4 w-4 mr-2" />
                System Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Currently Present</p>
                <p className="text-3xl font-bold">{realTimeData.currentlyPresent.toLocaleString()}</p>
                <p className="text-sm text-blue-200">Live Count</p>
              </div>
              <Users className="h-12 w-12 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Today's Attendance</p>
                <p className="text-3xl font-bold">{realTimeData.todayAttendance.toFixed(1)}%</p>
                <p className="text-sm text-green-200">+2.3% vs yesterday</p>
              </div>
              <Activity className="h-12 w-12 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Live Classrooms</p>
                <p className="text-3xl font-bold">{realTimeData.liveClassrooms}</p>
                <p className="text-sm text-purple-200">Active Sessions</p>
              </div>
              <Camera className="h-12 w-12 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">CCTV System</p>
                <p className="text-3xl font-bold">{realTimeData.cctvActive.toFixed(1)}%</p>
                <p className="text-sm text-orange-200">System Health</p>
              </div>
              <Eye className="h-12 w-12 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">System Overview</TabsTrigger>
          <TabsTrigger value="cctv">CCTV Analytics</TabsTrigger>
          <TabsTrigger value="biometric">Biometric Logs</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Technology Stack */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                  Technology Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Camera className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium">Face Recognition</p>
                      <p className="text-sm text-gray-600">{attendanceStats.biometricAccuracy}% accuracy</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <QrCode className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium">QR Code + GPS</p>
                      <p className="text-sm text-gray-600">Geofencing enabled</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="font-medium">Mobile App</p>
                      <p className="text-sm text-gray-600">{attendanceStats.mobileAppUsers}% adoption</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <Shield className="h-6 w-6 text-orange-600" />
                    <div>
                      <p className="font-medium">RFID Backup</p>
                      <p className="text-sm text-gray-600">Multi-factor auth</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-green-600" />
                  System Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CCTV Coverage</span>
                      <span>{attendanceStats.cctvCoverage}%</span>
                    </div>
                    <Progress value={attendanceStats.cctvCoverage} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Biometric Accuracy</span>
                      <span>{attendanceStats.biometricAccuracy}%</span>
                    </div>
                    <Progress value={attendanceStats.biometricAccuracy} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Mobile App Usage</span>
                      <span>{attendanceStats.mobileAppUsers}%</span>
                    </div>
                    <Progress value={attendanceStats.mobileAppUsers} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Geofencing Accuracy</span>
                      <span>{attendanceStats.geofencingActive}%</span>
                    </div>
                    <Progress value={attendanceStats.geofencingActive} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cctv" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-5 w-5 mr-2 text-blue-600" />
                CCTV Camera Network Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cctvAnalytics.map((location, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-gray-500" />
                        <div>
                          <h3 className="font-semibold">{location.location}</h3>
                          <p className="text-sm text-gray-600">{location.cameras} cameras active</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={location.activeStatus === 100 ? "default" : "secondary"}>
                          {location.activeStatus}% Active
                        </Badge>
                        <span className="text-xs text-gray-500">{location.lastUpdated}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <p className="font-medium text-blue-600">{location.studentsDetected}</p>
                        <p className="text-gray-600">Students Detected</p>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <p className="font-medium text-green-600">{location.attendanceVerified}%</p>
                        <p className="text-gray-600">Verified Attendance</p>
                      </div>
                      <div className="text-center p-2 bg-orange-50 rounded">
                        <p className="font-medium text-orange-600">{location.anomaliesDetected}</p>
                        <p className="text-gray-600">Anomalies</p>
                      </div>
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <Button size="sm" variant="outline" className="w-full">
                          <Eye className="h-4 w-4 mr-1" />
                          Live View
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="biometric" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-green-600" />
                Real-time Biometric Verification Logs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {biometricLogs.map((log, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{log.name}</p>
                        <p className="text-sm text-gray-600">{log.studentId} • {log.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-sm font-medium">{log.method}</p>
                        <p className="text-xs text-gray-600">{log.confidence}% confidence</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{log.timestamp}</p>
                        <p className="text-xs text-gray-600">Backup: {log.backup}</p>
                      </div>
                      <Badge className={getStatusColor(log.status)}>
                        {log.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  AI Pattern Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.patterns.map((pattern, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-blue-600 mb-2">{pattern.insight}</h4>
                      <p className="text-sm text-gray-700 mb-2">{pattern.data}</p>
                      <p className="text-xs text-green-600 bg-green-50 p-2 rounded">
                        💡 {pattern.recommendation}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-purple-600" />
                  Predictive Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.predictions.map((prediction, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">{prediction.metric}</h4>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-purple-600">{prediction.prediction}</p>
                          <p className="text-xs text-gray-600">{prediction.confidence}% confidence</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-700">Key Factors:</p>
                        {prediction.factors.map((factor, idx) => (
                          <p key={idx} className="text-xs text-gray-600">• {factor}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
                Advanced Reporting & Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-20 flex-col space-y-2">
                  <Download className="h-6 w-6" />
                  <span>Daily Reports</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Calendar className="h-6 w-6" />
                  <span>Monthly Analytics</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <TrendingUp className="h-6 w-6" />
                  <span>Trend Analysis</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Users className="h-6 w-6" />
                  <span>Department Wise</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Shield className="h-6 w-6" />
                  <span>Security Audit</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <Bell className="h-6 w-6" />
                  <span>Alert Summary</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}