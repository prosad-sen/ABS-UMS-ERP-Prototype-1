import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  CreditCard, 
  Download, 
  Receipt, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Wallet,
  TrendingUp
} from "lucide-react";

export default function Fees() {
  const [selectedPayment, setSelectedPayment] = useState("");

  // Mock fee data
  const feeStructure = {
    semester: "Fall 2025 - Semester 4",
    totalFee: 98500,
    paidAmount: 73500,
    pendingAmount: 25000,
    dueDate: "2025-07-30",
    components: [
      { name: "Tuition Fee", amount: 75000, paid: true },
      { name: "Development Fee", amount: 15000, paid: false },
      { name: "Exam Fee", amount: 5000, paid: true },
      { name: "Library Fee", amount: 2000, paid: true },
      { name: "Sports Fee", amount: 1500, paid: false }
    ]
  };

  const paymentHistory = [
    { 
      id: "PAY001", 
      date: "2025-07-15", 
      amount: 73500, 
      description: "Semester 4 Partial Payment", 
      method: "UPI", 
      status: "completed",
      receipt: "REC-2025-001"
    },
    { 
      id: "PAY002", 
      date: "2025-01-20", 
      amount: 98500, 
      description: "Semester 3 Full Payment", 
      method: "Net Banking", 
      status: "completed",
      receipt: "REC-2025-002"
    },
    { 
      id: "PAY003", 
      date: "2023-07-25", 
      amount: 95000, 
      description: "Semester 2 Full Payment", 
      method: "Debit Card", 
      status: "completed",
      receipt: "REC-2023-003"
    }
  ];

  const scholarships = [
    {
      name: "Merit Scholarship",
      amount: 25000,
      status: "Active",
      validUntil: "2025-05-31",
      criteria: "CGPA > 8.5"
    },
    {
      name: "EWS Scholarship", 
      amount: 15000,
      status: "Applied",
      validUntil: "Pending",
      criteria: "Economic criteria"
    }
  ];

  const paymentMethods = [
    { id: "upi", name: "UPI Payment", icon: Wallet, desc: "Pay using UPI apps" },
    { id: "card", name: "Debit/Credit Card", icon: CreditCard, desc: "Visa, Mastercard, etc." },
    { id: "netbanking", name: "Net Banking", icon: DollarSign, desc: "All major banks" }
  ];

  const handlePayNow = () => {
    // Mock payment processing
    alert("Redirecting to payment gateway...");
  };

  return (
    <div className="space-y-6 p-3 lg:p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Fee Management</h1>
          <p className="text-gray-600">Manage your semester fees and payment history</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Receipt
          </Button>
          {feeStructure.pendingAmount > 0 && (
            <Button className="bg-coep-blue hover:bg-blue-700" onClick={handlePayNow}>
              <CreditCard className="h-4 w-4 mr-2" />
              Pay Now
            </Button>
          )}
        </div>
      </div>

      {/* Fee Alert */}
      {feeStructure.pendingAmount > 0 && (
        <Card className="border-l-4 border-l-orange-500 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <div>
                  <h3 className="font-semibold text-orange-800">Pending Payment</h3>
                  <p className="text-orange-700">₹{feeStructure.pendingAmount.toLocaleString()} due by {feeStructure.dueDate}</p>
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white" onClick={handlePayNow}>
                Pay ₹{feeStructure.pendingAmount.toLocaleString()}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Fee Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <DollarSign className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-blue-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">₹{feeStructure.totalFee.toLocaleString()}</h3>
            <p className="text-sm text-gray-600">Total Fee</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <CheckCircle className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-green-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">₹{feeStructure.paidAmount.toLocaleString()}</h3>
            <p className="text-sm text-gray-600">Amount Paid</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <Clock className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-orange-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">₹{feeStructure.pendingAmount.toLocaleString()}</h3>
            <p className="text-sm text-gray-600">Pending Amount</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <TrendingUp className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-purple-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">75%</h3>
            <p className="text-sm text-gray-600">Payment Progress</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="current" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="current">Current Fees</TabsTrigger>
          <TabsTrigger value="payment">Make Payment</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{feeStructure.semester} - Fee Breakdown</CardTitle>
              <p className="text-sm text-gray-600">Due Date: {feeStructure.dueDate}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feeStructure.components.map((component, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {component.paid ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <Clock className="h-5 w-5 text-orange-600" />
                      )}
                      <div>
                        <h4 className="font-medium">{component.name}</h4>
                        <p className="text-sm text-gray-600">₹{component.amount.toLocaleString()}</p>
                      </div>
                    </div>
                    <Badge variant={component.paid ? 'default' : 'secondary'}>
                      {component.paid ? 'Paid' : 'Pending'}
                    </Badge>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center p-4 bg-coep-blue bg-opacity-10 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-lg">Total Amount</h4>
                      <p className="text-sm text-gray-600">
                        Paid: ₹{feeStructure.paidAmount.toLocaleString()} | 
                        Pending: ₹{feeStructure.pendingAmount.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-coep-blue">₹{feeStructure.totalFee.toLocaleString()}</p>
                      <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(feeStructure.paidAmount / feeStructure.totalFee) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Make Payment</CardTitle>
              <p className="text-sm text-gray-600">
                Choose your preferred payment method to pay ₹{feeStructure.pendingAmount.toLocaleString()}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <Card 
                      key={method.id}
                      className={`cursor-pointer border-2 transition-colors ${
                        selectedPayment === method.id ? 'border-coep-blue bg-blue-50' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <Icon className="h-12 w-12 mx-auto mb-3 text-coep-blue" />
                        <h3 className="font-semibold">{method.name}</h3>
                        <p className="text-sm text-gray-600">{method.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="border-t pt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Payment Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Development Fee</span>
                      <span>₹15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sports Fee</span>
                      <span>₹1,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee</span>
                      <span>₹50</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Amount</span>
                      <span>₹16,550</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-coep-blue hover:bg-blue-700" 
                  onClick={handlePayNow}
                  disabled={!selectedPayment}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Proceed to Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentHistory.map((payment) => (
                  <Card key={payment.id} className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-2 lg:space-y-0">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold">{payment.description}</h4>
                            <Badge className="bg-green-100 text-green-800">{payment.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            Payment ID: {payment.id} • {payment.date} • {payment.method}
                          </p>
                        </div>
                        <div className="text-right space-y-2">
                          <p className="text-xl font-bold text-green-600">₹{payment.amount.toLocaleString()}</p>
                          <Button variant="outline" size="sm">
                            <Receipt className="h-3 w-3 mr-1" />
                            {payment.receipt}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scholarships" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scholarships & Financial Aid</CardTitle>
              <p className="text-sm text-gray-600">
                Your applied and active scholarships
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {scholarships.map((scholarship, index) => (
                <Card key={index} className={`border-l-4 ${
                  scholarship.status === 'Active' ? 'border-l-green-500 bg-green-50' :
                  scholarship.status === 'Applied' ? 'border-l-blue-500 bg-blue-50' :
                  'border-l-gray-500'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{scholarship.name}</h4>
                        <p className="text-sm text-gray-600">Criteria: {scholarship.criteria}</p>
                        <p className="text-sm text-gray-600">Valid Until: {scholarship.validUntil}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-green-600">₹{scholarship.amount.toLocaleString()}</p>
                        <Badge variant={scholarship.status === 'Active' ? 'default' : 'secondary'}>
                          {scholarship.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="border-2 border-dashed border-gray-300">
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h4 className="font-semibold text-gray-700 mb-2">Apply for More Scholarships</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Check if you're eligible for additional scholarships and financial aid programs
                  </p>
                  <Button variant="outline">
                    Browse Available Scholarships
                  </Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}