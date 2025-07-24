import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Receipt, AlertCircle } from "lucide-react";

export default function Fees() {
  // Mock data for demonstration
  const feeDetails = {
    totalFee: 98500,
    paidAmount: 49250,
    pendingAmount: 49250,
    dueDate: "2024-01-31",
    status: "partial"
  };

  const feeHistory = [
    {
      id: 1,
      semester: "Semester 7",
      amount: 49250,
      paymentDate: "2023-08-15",
      transactionId: "TXN2023081500123",
      status: "paid"
    },
    {
      id: 2,
      semester: "Semester 8",
      amount: 49250,
      paymentDate: null,
      transactionId: null,
      status: "pending"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Fee Management</h1>
        <p className="text-muted-foreground">View and manage your fee payments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Fee</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{feeDetails.totalFee.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Academic Year 2023-24</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">₹{feeDetails.pendingAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Due by {feeDetails.dueDate}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid Amount</CardTitle>
            <CreditCard className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">₹{feeDetails.paidAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">50% paid</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Semester</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeHistory.map((fee) => (
                <TableRow key={fee.id}>
                  <TableCell>{fee.semester}</TableCell>
                  <TableCell>₹{fee.amount.toLocaleString()}</TableCell>
                  <TableCell>{fee.paymentDate || "-"}</TableCell>
                  <TableCell className="font-mono text-sm">{fee.transactionId || "-"}</TableCell>
                  <TableCell>
                    <Badge variant={fee.status === "paid" ? "default" : "secondary"}>
                      {fee.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {fee.status === "pending" ? (
                      <Button size="sm">Pay Now</Button>
                    ) : (
                      <Button size="sm" variant="outline">Download Receipt</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}