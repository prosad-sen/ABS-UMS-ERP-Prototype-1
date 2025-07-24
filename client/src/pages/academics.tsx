import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";

export default function Academics() {
  const { user } = useAuth();

  const { data: academicRecord, isLoading } = useQuery({
    queryKey: ["/api/students/academic-record"],
    enabled: !!user,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading academic records...</p>
        </div>
      </div>
    );
  }

  const currentSemesterCourses = academicRecord?.enrollments?.filter(
    (enrollment: any) => enrollment.status === 'enrolled'
  ) || [];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Academic Records</h2>
        <p className="text-gray-600">View your courses, grades, and academic progress</p>
      </div>

      {/* Current Semester */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-800">
              Current Semester - Fall 2024
            </CardTitle>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Current CGPA</p>
                <p className="text-xl font-bold text-coep-blue">
                  {academicRecord?.cgpa ? academicRecord.cgpa.toFixed(2) : 'N/A'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Credits</p>
                <p className="text-xl font-bold text-gray-800">
                  {academicRecord?.totalCredits || 0}/24
                </p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Course Code</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Course Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Credits</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Grade</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentSemesterCourses.length > 0 ? (
                  currentSemesterCourses.map((enrollment: any) => (
                    <tr key={enrollment.id} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">{enrollment.course.courseCode}</td>
                      <td className="py-3 px-4">{enrollment.course.courseName}</td>
                      <td className="py-3 px-4">{enrollment.course.credits}</td>
                      <td className="py-3 px-4">
                        {enrollment.grade ? (
                          <Badge 
                            variant="default"
                            className={
                              ['A+', 'A'].includes(enrollment.grade) 
                                ? 'bg-success-green' 
                                : ['B+', 'B'].includes(enrollment.grade)
                                ? 'bg-warning-amber'
                                : 'bg-gray-500'
                            }
                          >
                            {enrollment.grade}
                          </Badge>
                        ) : (
                          <span className="text-gray-500">Pending</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline">
                          {enrollment.status}
                        </Badge>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-gray-500">
                      No current enrollments found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Academic Progress Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">CGPA Progression</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Group enrollments by semester */}
              {Array.from({ length: 6 }, (_, i) => i + 1).map((semester) => {
                const semesterEnrollments = academicRecord?.enrollments?.filter(
                  (e: any) => e.semester === semester
                ) || [];
                
                const semesterCGPA = semesterEnrollments.length > 0
                  ? semesterEnrollments.reduce((sum: number, e: any) => 
                      sum + (e.gradePoints ? parseFloat(e.gradePoints) * e.course.credits : 0), 0
                    ) / semesterEnrollments.reduce((sum: number, e: any) => sum + e.course.credits, 0)
                  : null;

                return (
                  <div key={semester} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Semester {semester}</span>
                    <span className={`font-medium ${semester === 6 ? 'text-coep-blue' : ''}`}>
                      {semesterCGPA ? semesterCGPA.toFixed(2) : 'N/A'}
                    </span>
                  </div>
                );
              })}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">Overall CGPA</span>
                  <span className="text-xl font-bold text-coep-blue">
                    {academicRecord?.cgpa ? academicRecord.cgpa.toFixed(2) : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Credits Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Completed Credits</span>
                  <span className="font-medium">{academicRecord?.totalCredits || 0}/160</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-coep-blue h-3 rounded-full" 
                    style={{ width: `${((academicRecord?.totalCredits || 0) / 160) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Core Credits</p>
                  <p className="text-xl font-bold text-coep-blue">
                    {Math.floor((academicRecord?.totalCredits || 0) * 0.8)}
                  </p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600">Elective Credits</p>
                  <p className="text-xl font-bold text-academic-orange">
                    {Math.floor((academicRecord?.totalCredits || 0) * 0.2)}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
