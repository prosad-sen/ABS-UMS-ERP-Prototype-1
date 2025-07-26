import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  CreditCard,
  Wallet,
  PieChart,
  BarChart3,
  Calculator,
  FileText,
  Download,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export default function FinanceManagement() {
  const [activeTab, setActiveTab] = useState('overview');

  const financialOverview = {
    totalRevenue: 45680000,
    totalExpenses: 38920000,
    netProfit: 6760000,
    pendingFees: 2340000,
    cashInHand: 8950000,
    investments: 15600000
  };

  const revenueStreams = [
    { source: 'Tuition Fees', amount: 28500000, percentage: 62.4 },
    { source: 'Research Grants', amount: 8900000, percentage: 19.5 },
    { source: 'Donations', amount: 4200000, percentage: 9.2 },
    { source: 'Consultancy', amount: 2580000, percentage: 5.6 },
    { source: 'Other Income', amount: 1500000, percentage: 3.3 }
  ];

  const expenseCategories = [
    { category: 'Faculty Salaries', amount: 18450000, percentage: 47.4 },
    { category: 'Infrastructure', amount: 8930000, percentage: 22.9 },
    { category: 'Research & Development', amount: 4820000, percentage: 12.4 },
    { category: 'Administration', amount: 3680000, percentage: 9.5 },
    { category: 'Utilities', amount: 2040000, percentage: 5.2 },
    { category: 'Other Expenses', amount: 1000000, percentage: 2.6 }
  ];

  const budgetAllocations = [
    { department: 'Computer Engineering', allocated: 5200000, spent: 4680000, remaining: 520000 },
    { department: 'Mechanical Engineering', allocated: 4800000, spent: 4320000, remaining: 480000 },
    { department: 'Civil Engineering', allocated: 3900000, spent: 3510000, remaining: 390000 },
    { department: 'Electronics Engineering', allocated: 4200000, spent: 3780000, remaining: 420000 },
    { department: 'Administration', allocated: 2500000, spent: 2250000, remaining: 250000 },
    { department: 'Research & Development', allocated: 6000000, spent: 5400000, remaining: 600000 }
  ];

  const transactions = [
    {
      id: 'TXN001',
      date: '2024-03-25',
      description: 'Faculty Salary - March 2024',
      type: 'expense',
      amount: 1845000,
      category: 'Salaries',
      status: 'completed'
    },
    {
      id: 'TXN002',
      date: '2024-03-24',
      description: 'Student Fee Collection - Batch 2024',
      type: 'income',
      amount: 2850000,
      category: 'Tuition Fees',
      status: 'completed'
    },
    {
      id: 'TXN003',
      date: '2024-03-23',
      description: 'Research Grant - DST Project',
      type: 'income',
      amount: 890000,
      category: 'Grants',
      status: 'pending'
    },
    {
      id: 'TXN004',
      date: '2024-03-22',
      description: 'Laboratory Equipment Purchase',
      type: 'expense',
      amount: 650000,
      category: 'Infrastructure',
      status: 'completed'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getTransactionColor = (type: string) => {
    return type === 'income' ? 'text-green-600' : 'text-red-600';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Management System</h1>
          <p className="text-gray-600">Comprehensive financial oversight and budget management for COEP</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Financial Reports
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Calculator className="h-4 w-4 mr-2" />
            New Transaction
          </Button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-xl font-bold">{formatCurrency(financialOverview.totalRevenue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <TrendingDown className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                <p className="text-xl font-bold">{formatCurrency(financialOverview.totalExpenses)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Net Profit</p>
                <p className="text-xl font-bold">{formatCurrency(financialOverview.netProfit)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <AlertCircle className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Fees</p>
                <p className="text-xl font-bold">{formatCurrency(financialOverview.pendingFees)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Cash in Hand</p>
                <p className="text-xl font-bold">{formatCurrency(financialOverview.cashInHand)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <PieChart className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Investments</p>
                <p className="text-xl font-bold">{formatCurrency(financialOverview.investments)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Financial Overview</TabsTrigger>
          <TabsTrigger value="budget">Budget Management</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="reports">Financial Reports</TabsTrigger>
          <TabsTrigger value="analytics">Financial Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Revenue Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Streams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueStreams.map((stream, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{stream.source}</span>
                          <span className="text-sm text-gray-600">{stream.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${stream.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <span className="text-sm font-bold">{formatCurrency(stream.amount)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expense Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Expense Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expenseCategories.map((expense, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{expense.category}</span>
                          <span className="text-sm text-gray-600">{expense.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-red-600 h-2 rounded-full" 
                            style={{ width: `${expense.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <span className="text-sm font-bold">{formatCurrency(expense.amount)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="budget" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Department Budget Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {budgetAllocations.map((budget, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{budget.department}</h3>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Utilization: {((budget.spent / budget.allocated) * 100).toFixed(1)}%</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-600">Allocated:</span>
                        <br />
                        <span className="text-lg font-bold text-blue-600">{formatCurrency(budget.allocated)}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Spent:</span>
                        <br />
                        <span className="text-lg font-bold text-red-600">{formatCurrency(budget.spent)}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Remaining:</span>
                        <br />
                        <span className="text-lg font-bold text-green-600">{formatCurrency(budget.remaining)}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full" 
                          style={{ width: `${(budget.spent / budget.allocated) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{transaction.description}</h3>
                          <Badge className={getStatusColor(transaction.status)}>
                            {transaction.status.toUpperCase()}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Transaction ID:</span>
                            <br />
                            {transaction.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Date:</span>
                            <br />
                            {transaction.date}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Category:</span>
                            <br />
                            {transaction.category}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Type:</span>
                            <br />
                            <span className={`capitalize ${getTransactionColor(transaction.type)}`}>
                              {transaction.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className={`text-xl font-bold ${getTransactionColor(transaction.type)}`}>
                          {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Monthly Financial Report</h3>
                    <p className="text-sm text-gray-600 mb-3">Comprehensive monthly financial summary</p>
                    <Button className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Budget Utilization Report</h3>
                    <p className="text-sm text-gray-600 mb-3">Department-wise budget analysis</p>
                    <Button className="w-full">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Audit Trail Report</h3>
                    <p className="text-sm text-gray-600 mb-3">Complete transaction history and audit trail</p>
                    <Button className="w-full">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-4">Revenue Trends</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>This Quarter:</span>
                        <span className="font-bold">{formatCurrency(45680000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Quarter:</span>
                        <span className="font-bold">{formatCurrency(42300000)}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Growth:</span>
                        <span className="font-bold">+8.0%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-4">Expense Analysis</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Current Month:</span>
                        <span className="font-bold">{formatCurrency(3241667)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Previous Month:</span>
                        <span className="font-bold">{formatCurrency(3186750)}</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Increase:</span>
                        <span className="font-bold">+1.7%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}