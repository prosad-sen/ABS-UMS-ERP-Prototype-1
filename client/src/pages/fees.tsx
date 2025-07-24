import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { isUnauthorizedError } from '@/lib/authUtils';
import { useEffect } from 'react';
import { 
  CreditCard, 
  IndianRupee, 
  Calendar, 
  Download, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Receipt
} from 'lucide-react';

export default function Fees() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('online');

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

  const { data: feeData = {}, isLoading: isLoadingFees } = useQuery({
    queryKey: ['/api/student/fees'],
    retry: false,
  });

  const { data: paymentHistory = [], isLoading: isLoadingPayments } = useQuery({
    queryKey: ['/api/student/fee-payments'],
    retry: false,
  });

  const payFeeMutation = useMutation({
    mutationFn: async (paymentData: any) => {
      return await apiRequest('/api/student/fees/pay', 'POST', paymentData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/student/fees'] });
      queryClient.invalidateQueries({ queryKey: ['/api/student/fee-payments'] });
      toast({
        title: "Payment Successful",
        description: "Your fee payment has been processed successfully.",
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
        title: "Payment Failed",
        description: error.message || "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handlePayment = async (amount: string) => {
    payFeeMutation.mutate({
      amount,
      method: selectedPaymentMethod,
      semester: feeData.structure?.semester || 1,
      academicYear: feeData.structure?.academicYear || '2024-25'
    });
  };

  if (isLoading || isLoadingFees) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading fees information...</p>
        </div>
      </div>
    );
  }

  const feeStructure = feeData.structure || {};
  const totalDue = feeData.totalDue || 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Fee Management</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Receipt
        </Button>
      </div>

      {/* Fee Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Due</CardTitle>
            <IndianRupee className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₹{totalDue}</div>
            <p className="text-xs text-muted-foreground">
              Current semester fees
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Semester</CardTitle>
            <Calendar className="h-4 w-4 text-coep-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{feeStructure.semester || 1}</div>
            <p className="text-xs text-muted-foreground">
              {feeStructure.academicYear || '2024-25'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <Badge variant={totalDue > 0 ? "destructive" : "default"}>
                {totalDue > 0 ? "Pending" : "Paid"}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Payment status
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Fee Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Fee Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span>Tuition Fee:</span>
                <span className="font-semibold">₹{feeStructure.tuitionFee || '0'}</span>
              </div>
              <div className="flex justify-between">
                <span>Development Fee:</span>
                <span className="font-semibold">₹{feeStructure.developmentFee || '0'}</span>
              </div>
              <div className="flex justify-between">
                <span>Lab Fee:</span>
                <span className="font-semibold">₹{feeStructure.labFee || '0'}</span>
              </div>
              <div className="flex justify-between">
                <span>Library Fee:</span>
                <span className="font-semibold">₹{feeStructure.libraryFee || '0'}</span>
              </div>
              <div className="flex justify-between">
                <span>Exam Fee:</span>
                <span className="font-semibold">₹{feeStructure.examFee || '0'}</span>
              </div>
              <div className="flex justify-between">
                <span>Other Fees:</span>
                <span className="font-semibold">₹{feeStructure.otherFees || '0'}</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>₹{feeStructure.totalFee || '0'}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Section */}
      {totalDue > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Make Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Payment Method</label>
                <Select value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online Payment</SelectItem>
                    <SelectItem value="card">Credit/Debit Card</SelectItem>
                    <SelectItem value="netbanking">Net Banking</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter amount"
                  value={totalDue}
                  disabled
                  className="flex-1"
                />
                <Button 
                  onClick={() => handlePayment(totalDue.toString())}
                  disabled={payFeeMutation.isPending}
                  className="flex items-center gap-2"
                >
                  {payFeeMutation.isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4" />
                      Pay Now
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Payment History
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoadingPayments ? (
            <div className="text-center py-8">
              <div className="w-6 h-6 border-2 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Loading payment history...</p>
            </div>
          ) : paymentHistory.length === 0 ? (
            <div className="text-center py-8">
              <Receipt className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">No payment history found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {paymentHistory.slice(0, 5).map((payment: any) => (
                <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">₹{payment.amount}</p>
                      <p className="text-sm text-gray-600">{payment.method}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{new Date(payment.createdAt).toLocaleDateString()}</p>
                    <Badge variant="default">Completed</Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}