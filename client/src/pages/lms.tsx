import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { isUnauthorizedError } from '@/lib/authUtils';
import { 
  BookOpen, 
  FileText, 
  Upload, 
  Download, 
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  GraduationCap
} from 'lucide-react';

export default function LMS() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submissionText, setSubmissionText] = useState('');

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

  const { data: assignments = [], isLoading: isLoadingAssignments } = useQuery({
    queryKey: ['/api/student/assignments'],
    retry: false,
  });

  const { data: submissions = [], isLoading: isLoadingSubmissions } = useQuery({
    queryKey: ['/api/student/submissions'],
    retry: false,
  });

  const submitAssignmentMutation = useMutation({
    mutationFn: async (submissionData: any) => {
      const formData = new FormData();
      formData.append('assignmentId', submissionData.assignmentId);
      formData.append('submissionText', submissionData.submissionText);
      if (submissionData.file) {
        formData.append('file', submissionData.file);
      }
      return await apiRequest('/api/student/assignments/submit', 'POST', formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/student/submissions'] });
      toast({
        title: "Assignment Submitted",
        description: "Your assignment has been submitted successfully.",
      });
      setSelectedFile(null);
      setSubmissionText('');
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
        title: "Submission Failed",
        description: error.message || "Failed to submit assignment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmission = (assignmentId: number) => {
    if (!submissionText.trim() && !selectedFile) {
      toast({
        title: "Invalid Submission",
        description: "Please provide either text submission or attach a file.",
        variant: "destructive",
      });
      return;
    }

    submitAssignmentMutation.mutate({
      assignmentId,
      submissionText,
      file: selectedFile,
    });
  };

  if (isLoading || isLoadingAssignments) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course materials...</p>
        </div>
      </div>
    );
  }

  const pendingAssignments = assignments.filter((assignment: any) => 
    !submissions.some((submission: any) => submission.assignmentId === assignment.id)
  );

  const submittedAssignments = assignments.filter((assignment: any) => 
    submissions.some((submission: any) => submission.assignmentId === assignment.id)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Learning Management System</h1>
        <div className="flex gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            {assignments.length} Assignments
          </Badge>
          <Badge variant="destructive" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {pendingAssignments.length} Pending
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="assignments" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="assignments">All Assignments</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingAssignments.length})</TabsTrigger>
          <TabsTrigger value="submitted">Submitted ({submittedAssignments.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="assignments" className="space-y-6">
          {assignments.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No assignments available</h3>
                <p className="text-gray-600 text-center">
                  Check back later for new assignments from your courses.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {assignments.map((assignment: any) => {
                const submission = submissions.find((sub: any) => sub.assignmentId === assignment.id);
                const isSubmitted = !!submission;
                const dueDate = new Date(assignment.dueDate);
                const isOverdue = dueDate < new Date() && !isSubmitted;

                return (
                  <Card key={assignment.id} className={isOverdue ? 'border-red-200' : ''}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            {assignment.title}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <GraduationCap className="h-4 w-4" />
                              {assignment.course?.courseName}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {assignment.course?.instructor || 'Faculty'}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Due: {dueDate.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {isSubmitted ? (
                            <Badge variant="default" className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              Submitted
                            </Badge>
                          ) : isOverdue ? (
                            <Badge variant="destructive" className="flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              Overdue
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Pending
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{assignment.description}</p>
                      
                      {assignment.attachments && (
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Materials
                          </Button>
                        </div>
                      )}

                      {!isSubmitted && (
                        <div className="border-t pt-4 space-y-4">
                          <h4 className="font-medium">Submit Assignment</h4>
                          <Textarea
                            placeholder="Enter your submission text here..."
                            value={submissionText}
                            onChange={(e) => setSubmissionText(e.target.value)}
                            rows={4}
                          />
                          <div className="flex items-center gap-4">
                            <Input
                              type="file"
                              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                              className="flex-1"
                            />
                            <Button
                              onClick={() => handleSubmission(assignment.id)}
                              disabled={submitAssignmentMutation.isPending}
                              className="flex items-center gap-2"
                            >
                              {submitAssignmentMutation.isPending ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  <Upload className="h-4 w-4" />
                                  Submit
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      )}

                      {submission && (
                        <div className="border-t pt-4 space-y-2">
                          <h4 className="font-medium">Your Submission</h4>
                          <div className="bg-gray-50 p-3 rounded-md">
                            <p className="text-sm text-gray-700">{submission.submissionText}</p>
                            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                              <span>Submitted: {new Date(submission.submittedAt).toLocaleString()}</span>
                              {submission.marksObtained && (
                                <span className="font-medium">Marks: {submission.marksObtained}</span>
                              )}
                            </div>
                          </div>
                          {submission.feedback && (
                            <div className="bg-blue-50 p-3 rounded-md">
                              <p className="text-sm font-medium text-blue-900">Faculty Feedback:</p>
                              <p className="text-sm text-blue-800">{submission.feedback}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="pending" className="space-y-6">
          {pendingAssignments.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
                <p className="text-gray-600 text-center">
                  You have no pending assignments at the moment.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {pendingAssignments.map((assignment: any) => (
                <Card key={assignment.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      {assignment.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{assignment.description}</p>
                    <Button className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="submitted" className="space-y-6">
          {submittedAssignments.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions yet</h3>
                <p className="text-gray-600 text-center">
                  Your submitted assignments will appear here.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {submittedAssignments.map((assignment: any) => {
                const submission = submissions.find((sub: any) => sub.assignmentId === assignment.id);
                return (
                  <Card key={assignment.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        {assignment.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        Submitted: {new Date(submission?.submittedAt).toLocaleDateString()}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{assignment.description}</p>
                      {submission?.marksObtained && (
                        <div className="flex items-center gap-2">
                          <Badge variant="default">
                            Marks: {submission.marksObtained}
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}