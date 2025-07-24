import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Smartphone, Building2 } from "lucide-react";

interface FeePaymentProps {
  feeType: string;
  amount: number;
  studentId: number;
  semester: number;
  academicYear: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function FeePayment({
  feeType,
  amount,
  studentId,
  semester,
  academicYear,
  onSuccess,
  onCancel
}: FeePaymentProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: ""
  });
  const [upiId, setUpiId] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const paymentMutation = useMutation({
    mutationFn: async (paymentData: any) => {
      const response = await apiRequest("POST", "/api/fees/pay", paymentData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Payment Successful",
        description: `Your ${feeType} payment of ₹${amount.toLocaleString()} has been processed successfully.`,
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/fees/dues"] });
      queryClient.invalidateQueries({ queryKey: ["/api/fees/payments"] });
      onSuccess();
    },
    onError: (error: Error) => {
      toast({
        title: "Payment Failed",
        description: error.message || "Payment processing failed. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      toast({
        title: "Payment Method Required",
        description: "Please select a payment method.",
        variant: "destructive",
      });
      return;
    }

    // Generate a mock transaction ID for demo purposes
    const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    const receiptNumber = `RCP${new Date().getFullYear()}${String(Date.now()).slice(-6)}`;

    const paymentData = {
      studentId,
      receiptNumber,
      amount: amount.toString(),
      feeType,
      paymentMethod,
      transactionId,
      paymentDate: new Date().toISOString(),
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
      status: "completed",
      semester,
      academicYear,
    };

    paymentMutation.mutate(paymentData);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Payment Details
        </CardTitle>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Amount to Pay:</span>
            <span className="text-lg font-bold text-coep-blue">₹{amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm text-gray-600">Fee Type:</span>
            <span className="text-sm font-medium">{feeType}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Payment Method Selection */}
          <div>
            <Label className="text-base font-medium">Select Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-3">
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="upi" id="upi" />
                <Smartphone className="w-5 h-5 text-gray-500" />
                <Label htmlFor="upi" className="flex-1 cursor-pointer">UPI Payment</Label>
              </div>
              
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="card" id="card" />
                <CreditCard className="w-5 h-5 text-gray-500" />
                <Label htmlFor="card" className="flex-1 cursor-pointer">Credit/Debit Card</Label>
              </div>
              
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="netbanking" id="netbanking" />
                <Building2 className="w-5 h-5 text-gray-500" />
                <Label htmlFor="netbanking" className="flex-1 cursor-pointer">Net Banking</Label>
              </div>
            </RadioGroup>
          </div>

          {/* UPI Details */}
          {paymentMethod === "upi" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="upiId">UPI ID</Label>
                <Input
                  id="upiId"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Card Details */}
          {paymentMethod === "card" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails(prev => ({ ...prev, number: e.target.value }))}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails(prev => ({ ...prev, expiry: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails(prev => ({ ...prev, cvv: e.target.value }))}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input
                  id="cardName"
                  placeholder="Name on card"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
            </div>
          )}

          {/* Net Banking */}
          {paymentMethod === "netbanking" && (
            <div>
              <Label htmlFor="bank">Select Bank</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sbi">State Bank of India</SelectItem>
                  <SelectItem value="hdfc">HDFC Bank</SelectItem>
                  <SelectItem value="icici">ICICI Bank</SelectItem>
                  <SelectItem value="axis">Axis Bank</SelectItem>
                  <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel}
              className="flex-1"
              disabled={paymentMutation.isPending}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-coep-blue hover:bg-coep-light-blue"
              disabled={paymentMutation.isPending}
            >
              {paymentMutation.isPending ? "Processing..." : `Pay ₹${amount.toLocaleString()}`}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
