import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import QRScanner from "@/components/qr-scanner";

export default function Attendance() {
  const { user } = useAuth();
  const [showScanner, setShowScanner] = useState(false);

  const { data: attendance, isLoading } = useQuery({
    queryKey: ["/api/attendance"],
    enabled: !!user,
  });

  const { data: attendanceStats } = useQuery({
    queryKey: ["/api/attendance/stats"],
    enabled: !!user,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading attendance...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Attendance Management</h2>
        <p className="text-gray-600">Scan QR codes to mark your attendance or view attendance records</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* QR Scanner */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">QR Code Scanner</CardTitle>
          </CardHeader>
          <CardContent>
            {showScanner ? (
              <div className="space-y-4">
                <QRScanner 
                  onScan={(data) => {
                    console.log("QR scanned:", data);
                    setShowScanner(false);
                  }}
                  onError={(error) => {
                    console.error("QR scan error:", error);
                  }}
                />
                <Button 
                  variant="outline" 
                  onClick={() => setShowScanner(false)}
                  className="w-full"
                >
                  Cancel Scanner
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-64 h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4z"/>
                      <path d="M18 13h-2v2h2v-2zM20 15h-2v2h2v-2zM22 17h-2v2h2v-2zM16 15h-2v2h2v-2zM14 17h-2v2h2v-2z"/>
                    </svg>
                    <p className="text-gray-600 mb-4">Point camera at QR code</p>
                    <Button 
                      onClick={() => setShowScanner(true)}
                      className="bg-coep-blue hover:bg-coep-light-blue"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      Start Scanner
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Make sure the QR code displayed by your instructor is clearly visible</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Current Lecture Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Current Lecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-coep-blue rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2V4c0-1.1-.9-2-2-2s-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Data Structures</p>
                  <p className="text-sm text-gray-600">CS-101 • 9:00 AM - 10:30 AM</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-700">Instructor: Dr. Priya Mehta</p>
                  <p className="text-sm text-gray-700">Room: CS-101</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Attendance Window</p>
                  <p className="text-sm font-semibold text-success-green">Open (15 min left)</p>
                </div>
              </div>
            </div>

            {/* CCTV Photo Attendance */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Photo Verification</h4>
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-700">CCTV Photo captured</p>
                  <p className="text-xs text-success-green">✓ Verified at 9:05 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">Attendance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Subject-wise Attendance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-800">Data Structures</p>
                <span className="text-success-green font-semibold">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-success-green h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">23/25 classes attended</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-800">Engineering Math</p>
                <span className="text-warning-amber font-semibold">76%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-warning-amber h-2 rounded-full" style={{ width: '76%' }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">19/25 classes attended</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-800">Computer Networks</p>
                <span className="text-success-green font-semibold">88%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-success-green h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">22/25 classes attended</p>
            </div>
          </div>

          {/* Recent Attendance */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Time</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Method</th>
                </tr>
              </thead>
              <tbody>
                {attendance && attendance.length > 0 ? (
                  attendance.slice(0, 10).map((record: any) => (
                    <tr key={record.id} className="border-b border-gray-100">
                      <td className="py-3 px-4">{new Date(record.date).toLocaleDateString()}</td>
                      <td className="py-3 px-4">{record.course?.courseName || 'Unknown Course'}</td>
                      <td className="py-3 px-4">{record.time || '-'}</td>
                      <td className="py-3 px-4">
                        <Badge 
                          variant={record.status === 'present' ? 'default' : 'destructive'}
                          className={record.status === 'present' ? 'bg-success-green' : ''}
                        >
                          {record.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">{record.method === 'qr' ? 'QR + Photo' : record.method}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-gray-500">
                      No attendance records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
