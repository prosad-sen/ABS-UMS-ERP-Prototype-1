import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  CreditCard, 
  FileText, 
  Download,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Receipt,
  Banknote
} from "lucide-react";

export default function ParentFees() {
  const [selectedChild, setSelectedChild] = useState("child-1");

  // Parent's children fee information
  const childrenFees = [
    {
      id: "child-1",
      name: "Arjun Sharma",
      rollNo: "21CS045",
      class: "TE Computer",
      totalFees: 180000,
      paidAmount: 135000,
      pendingAmount: 45000,
      status: "partial"
    }
  ];

  // Fee structure breakdown
  const feeStructure = [
    { component: "Tuition Fee", amount: 120000, paid: 120000, status: "paid" },
    { component: "Development Fee", amount: 25000, paid: 15000, status: "partial" },
    { component: "Library Fee", amount: 8000, paid: 0, status: "pending" },
    { component: "Lab Fee", amount: 15000, paid: 0, status: "pending" },
    { component: "Sports Fee", amount: 5000, paid: 0, status: "pending" },
    { component: "Exam Fee", amount: 7000, paid: 0, status: "pending" }
  ];

  // Payment history
  const paymentHistory = [
    {
      id: "pay-1",
      date: "2024-07-15",
      amount: 60000,
      description: "First Semester Fee",
      method: "Online Transfer",
      status: "success",
      receiptNo: "RCP2024001"
    },
    {
      id: "pay-2", 
      date: "2024-06-10",
      amount: 45000,
      description: "Admission Fee + Development Fee (Partial)",
      method: "Credit Card",
      status: "success",
      receiptNo: "RCP2024002"
    },
    {
      id: "pay-3",
      date: "2024-05-20",
      amount: 30000,
      description: "Tuition Fee (Partial)",
      method: "UPI Payment",
      status: "success", 
      receiptNo: "RCP2024003"
    }
  ];

  // Scholarship information
  const scholarships = [
    {
      name: "Merit Scholarship",
      amount: 25000,
      status: "approved",
      description: "Based on JEE Main rank and 12th grade performance"
    },
    {
      name: "EBC Scholarship", 
      amount: 15000,
      status: "under-review",
      description: "Economically Backward Class financial assistance"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-800 border-green-200";
      case "partial": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "pending": return "bg-red-100 text-red-800 border-red-200";
      case "success": return "bg-green-100 text-green-800 border-green-200";
      case "approved": return "bg-green-100 text-green-800 border-green-200";
      case "under-review": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const selectedChildData = childrenFees.find(child => child.id === selectedChild)!;

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Fee Management</h1>
          <p className="text-gray-600 mt-1">Track and manage your child's fee payments</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download Receipts</span>
          </Button>
          <Button className="bg-coep-blue hover:bg-blue-700 flex items-center space-x-2">
            <CreditCard className="h-4 w-4" />
            <span>Pay Now</span>
          </Button>
        </div>
      </div>

      {/* Fee Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Fees</p>
                <p className="text-2xl font-bold text-blue-600">₹{selectedChildData.totalFees.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Amount Paid</p>
                <p className="text-2xl font-bold text-green-600">₹{selectedChildData.paidAmount.toLocaleString()}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Amount</p>
                <p className="text-2xl font-bold text-red-600">₹{selectedChildData.pendingAmount.toLocaleString()}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Payment Progress</p>
                <p className="text-2xl font-bold text-purple-600">
                  {Math.round((selectedChildData.paidAmount / selectedChildData.totalFees) * 100)}%
                </p>
              </div>
              <div className="w-8 h-8 relative">
                <Progress 
                  value={(selectedChildData.paidAmount / selectedChildData.totalFees) * 100} 
                  className="h-2 rotate-90 origin-center"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student Information */}
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">{selectedChildData.name.charAt(0)}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{selectedChildData.name}</h2>
                <p className="text-gray-600">Roll No: {selectedChildData.rollNo}</p>
                <p className="text-gray-600">Class: {selectedChildData.class}</p>
              </div>
            </div>
            <Badge className={getStatusColor(selectedChildData.status)}>
              {selectedChildData.status.toUpperCase()}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="structure" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="structure">Fee Structure</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
          <TabsTrigger value="receipts">Receipts & Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="structure" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>Fee Structure Breakdown</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feeStructure.map((fee, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{fee.component}</h3>
                      <Badge className={getStatusColor(fee.status)}>
                        {fee.status.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-600">Total Amount</p>
                        <p className="text-lg font-bold">₹{fee.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Paid Amount</p>
                        <p className="text-lg font-bold text-green-600">₹{fee.paid.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Pending</p>
                        <p className="text-lg font-bold text-red-600">₹{(fee.amount - fee.paid).toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <Progress value={(fee.paid / fee.amount) * 100} className="h-2 mb-3" />
                    
                    {fee.status === "pending" && (
                      <div className="flex items-center space-x-2">
                        <Button size="sm" className="bg-coep-blue hover:bg-blue-700">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Pay ₹{(fee.amount - fee.paid).toLocaleString()}
                        </Button>
                        <Button size="sm" variant="outline">
                          Pay Partial
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Payment History</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">₹{payment.amount.toLocaleString()}</h3>
                        <p className="text-gray-600">{payment.description}</p>
                      </div>
                      <Badge className={getStatusColor(payment.status)}>
                        {payment.status.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Date</p>
                        <p className="font-medium">{new Date(payment.date).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Payment Method</p>
                        <p className="font-medium">{payment.method}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Receipt No</p>
                        <p className="font-medium">{payment.receiptNo}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mt-3">
                      <Button size="sm" variant="outline">
                        <Receipt className="h-4 w-4 mr-2" />
                        View Receipt
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scholarships" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Banknote className="h-5 w-5 text-green-600" />
                <span>Scholarships & Financial Aid</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scholarships.map((scholarship, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{scholarship.name}</h3>
                        <p className="text-gray-600">{scholarship.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">₹{scholarship.amount.toLocaleString()}</div>
                        <Badge className={getStatusColor(scholarship.status)}>
                          {scholarship.status.replace('-', ' ').toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    
                    {scholarship.status === "approved" && (
                      <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <p className="text-sm text-green-800">
                          <CheckCircle className="h-4 w-4 inline mr-1" />
                          Scholarship approved and will be adjusted in next semester fees
                        </p>
                      </div>
                    )}
                    
                    {scholarship.status === "under-review" && (
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800">
                          <Clock className="h-4 w-4 inline mr-1" />
                          Application is under review. Expected decision in 7-10 working days
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                
                <Card className="border-dashed border-2 border-gray-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">Apply for Additional Scholarships</h3>
                    <p className="text-gray-600 mb-4">Check if you're eligible for more financial assistance programs</p>
                    <Button className="bg-coep-blue hover:bg-blue-700">
                      View Available Scholarships
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="receipts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Receipt className="h-5 w-5 text-blue-600" />
                <span>Receipts & Documents</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Payment Receipts</h3>
                  {paymentHistory.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{payment.receiptNo}</p>
                        <p className="text-sm text-gray-600">₹{payment.amount.toLocaleString()} - {payment.date}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold">Fee Documents</h3>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Fee Structure 2024-25</p>
                      <p className="text-sm text-gray-600">Complete fee breakdown</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Scholarship Certificate</p>
                      <p className="text-sm text-gray-600">Merit scholarship approval</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Fee Concession Form</p>
                      <p className="text-sm text-gray-600">Financial assistance application</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}