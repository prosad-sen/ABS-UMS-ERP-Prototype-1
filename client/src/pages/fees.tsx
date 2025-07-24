import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import FeePayment from "@/components/fee-payment";
import { Download, IndianRupee, CheckCircle, AlertTriangle } from "lucide-react";

export default function Fees() {
  const { user } = useAuth();
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [selectedFee, setSelectedFee] = useState<any>(null);

  const { data: feeDues, isLoading: duesLoading } = useQuery({
    queryKey: ["/api/fees/dues"],
    enabled: !!user,
  });

  const { data: feePayments, isLoading: paymentsLoading } = useQuery({
    queryKey: ["/api/fees/payments"],
    enabled: !!user,
  });

  if (duesLoading || paymentsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading fee information...</p>
        </div>
      </div>
    );
  }

  const handlePayNow = (feeType: string, amount: number) => {
    if (!user?.roleData?.id) return;
    
    setSelectedFee({
      feeType,
      amount,
      studentId: user.roleData.id,
      semester: user.roleData.currentSemester || 1,
      academicYear: "2024-25"
    });
    setShowPaymentDialog(true);
  };

  const totalFee = feeDues?.structure?.totalFee ? Number(feeDues.structure.totalFee) : 105000;
  const totalPaid = feePayments?.reduce((sum: number, payment: any) => 
    sum + (payment.status === 'completed' ? Number(payment.amount) : 0), 0) || 90000;
  const pendingAmount = feeDues?.totalDue || 15000;

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Fee Management</h2>
        <p className="text-gray-600">View and manage your fee payments, due amounts, and payment history</p>
      </div>

      {/* Fee Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Fee (Annual)</p>
                <p className="text-2xl font-bold text-gray-800">₹{totalFee.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-coep-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-coep-blue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Amount Paid</p>
                <p className="text-2xl font-bold text-success-green">₹{totalPaid.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-success-green bg-opacity-10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-success-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Amount</p>
                <p className="text-2xl font-bold text-error-red">₹{pendingAmount.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-error-red bg-opacity-10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-error-red" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Dues */}
      {pendingAmount > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-800">Current Dues</CardTitle>
              <Button 
                onClick={() => handlePayNow("Semester Fee", pendingAmount)}
                className="bg-coep-blue hover:bg-coep-light-blue"
              >
                Pay Now
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-error-red" />
                <div>
                  <p className="font-medium text-error-red">Payment Due</p>
                  <p className="text-sm text-gray-600">Your semester fee payment is due on December 15, 2024</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Fee Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Due Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Tuition Fee (Sem 6)</td>
                    <td className="py-3 px-4 font-medium">₹12,000</td>
                    <td className="py-3 px-4">Dec 15, 2024</td>
                    <td className="py-3 px-4">
                      <Badge variant="destructive">Pending</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-coep-blue"
                        onClick={() => handlePayNow("Tuition Fee", 12000)}
                      >
                        Pay
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Lab Fee</td>
                    <td className="py-3 px-4 font-medium">₹3,000</td>
                    <td className="py-3 px-4">Dec 15, 2024</td>
                    <td className="py-3 px-4">
                      <Badge variant="destructive">Pending</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-coep-blue"
                        onClick={() => handlePayNow("Lab Fee", 3000)}
                      >
                        Pay
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Receipt No</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Description</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Mode</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {feePayments && feePayments.length > 0 ? (
                  feePayments.map((payment: any) => (
                    <tr key={payment.id} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">{payment.receiptNumber}</td>
                      <td className="py-3 px-4">{new Date(payment.paymentDate).toLocaleDateString()}</td>
                      <td className="py-3 px-4">{payment.feeType}</td>
                      <td className="py-3 px-4">₹{Number(payment.amount).toLocaleString()}</td>
                      <td className="py-3 px-4 capitalize">{payment.paymentMethod}</td>
                      <td className="py-3 px-4">
                        <Badge 
                          variant={payment.status === 'completed' ? 'default' : 'secondary'}
                          className={payment.status === 'completed' ? 'bg-success-green' : ''}
                        >
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="link" className="p-0 h-auto text-coep-blue">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-gray-500">
                      No payment history available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Payment Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Fee Payment</DialogTitle>
          </DialogHeader>
          {selectedFee && (
            <FeePayment
              {...selectedFee}
              onSuccess={() => {
                setShowPaymentDialog(false);
                setSelectedFee(null);
              }}
              onCancel={() => {
                setShowPaymentDialog(false);
                setSelectedFee(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
