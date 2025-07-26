import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Package, 
  BarChart3, 
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Download,
  Upload,
  Scan,
  MapPin
} from 'lucide-react';

export default function InventoryManagement() {
  const [activeTab, setActiveTab] = useState('overview');

  const inventoryStats = {
    totalItems: 1248,
    lowStock: 23,
    outOfStock: 5,
    totalValue: 28560000,
    reorderPoints: 45,
    categories: 12
  };

  const inventoryItems = [
    {
      id: 'INV001',
      name: 'Dell Laptops',
      category: 'IT Equipment',
      currentStock: 25,
      minStock: 10,
      maxStock: 50,
      unitPrice: 65000,
      totalValue: 1625000,
      location: 'IT Store Room A',
      supplier: 'Dell Technologies',
      lastUpdated: '2024-03-20',
      status: 'in-stock'
    },
    {
      id: 'INV002',
      name: 'Laboratory Chemicals',
      category: 'Lab Supplies',
      currentStock: 5,
      minStock: 15,
      maxStock: 100,
      unitPrice: 2500,
      totalValue: 12500,
      location: 'Chemistry Lab Store',
      supplier: 'Scientific Supplies Ltd',
      lastUpdated: '2024-03-19',
      status: 'low-stock'
    },
    {
      id: 'INV003',
      name: 'Projectors',
      category: 'AV Equipment',
      currentStock: 0,
      minStock: 5,
      maxStock: 20,
      unitPrice: 85000,
      totalValue: 0,
      location: 'AV Equipment Room',
      supplier: 'Epson India',
      lastUpdated: '2024-03-18',
      status: 'out-of-stock'
    },
    {
      id: 'INV004',
      name: 'Office Chairs',
      category: 'Furniture',
      currentStock: 120,
      minStock: 20,
      maxStock: 200,
      unitPrice: 8500,
      totalValue: 1020000,
      location: 'Furniture Warehouse',
      supplier: 'Modern Furniture Co',
      lastUpdated: '2024-03-20',
      status: 'in-stock'
    }
  ];

  const categories = [
    { name: 'IT Equipment', items: 156, value: 8950000, lowStock: 5 },
    { name: 'Lab Supplies', items: 234, value: 3200000, lowStock: 8 },
    { name: 'Furniture', items: 189, value: 4500000, lowStock: 3 },
    { name: 'AV Equipment', items: 67, value: 2850000, lowStock: 2 },
    { name: 'Stationery', items: 345, value: 450000, lowStock: 4 },
    { name: 'Maintenance Supplies', items: 257, value: 1200000, lowStock: 1 }
  ];

  const recentTransactions = [
    {
      id: 'TXN001',
      type: 'stock-in',
      item: 'Dell Laptops',
      quantity: 10,
      date: '2024-03-20',
      reference: 'PO-2024-001',
      user: 'Store Manager'
    },
    {
      id: 'TXN002',
      type: 'stock-out',
      item: 'Laboratory Chemicals',
      quantity: 5,
      date: '2024-03-19',
      reference: 'REQ-CHE-001',
      user: 'Prof. Chemistry'
    },
    {
      id: 'TXN003',
      type: 'stock-out',
      item: 'Projectors',
      quantity: 2,
      date: '2024-03-18',
      reference: 'REQ-AV-002',
      user: 'IT Admin'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-stock': return 'bg-green-100 text-green-800';
      case 'low-stock': return 'bg-yellow-100 text-yellow-800';
      case 'out-of-stock': return 'bg-red-100 text-red-800';
      case 'reorder': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'stock-in': return 'text-green-600';
      case 'stock-out': return 'text-red-600';
      case 'adjustment': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management System</h1>
          <p className="text-gray-600">Comprehensive inventory tracking and management for COEP</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline">
            <Scan className="h-4 w-4 mr-2" />
            Scan Item
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Upload className="h-4 w-4 mr-2" />
            Add Stock
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Items</p>
                <p className="text-2xl font-bold">{inventoryStats.totalItems.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Low Stock</p>
                <p className="text-2xl font-bold">{inventoryStats.lowStock}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <TrendingDown className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Out of Stock</p>
                <p className="text-2xl font-bold">{inventoryStats.outOfStock}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-xl font-bold">{formatCurrency(inventoryStats.totalValue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Reorder Points</p>
                <p className="text-2xl font-bold">{inventoryStats.reorderPoints}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Filter className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Categories</p>
                <p className="text-2xl font-bold">{inventoryStats.categories}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Inventory Overview</TabsTrigger>
          <TabsTrigger value="items">Item Management</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="transactions">Transaction History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stock Status Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Stock Status Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>In Stock</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{inventoryStats.totalItems - inventoryStats.lowStock - inventoryStats.outOfStock}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                      <span>Low Stock</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">{inventoryStats.lowStock}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center">
                      <TrendingDown className="h-5 w-5 text-red-600 mr-2" />
                      <span>Out of Stock</span>
                    </div>
                    <Badge className="bg-red-100 text-red-800">{inventoryStats.outOfStock}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">{transaction.item}</p>
                        <p className="text-sm text-gray-600">{transaction.reference} by {transaction.user}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${getTransactionColor(transaction.type)}`}>
                          {transaction.type === 'stock-in' ? '+' : '-'}{transaction.quantity}
                        </p>
                        <p className="text-sm text-gray-600">{transaction.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="items" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search inventory items..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="it">IT Equipment</SelectItem>
                <SelectItem value="lab">Lab Supplies</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="av">AV Equipment</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="low-stock">Low Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inventoryItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status.replace('-', ' ').toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{item.category}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Item ID:</span>
                            <br />
                            {item.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Current Stock:</span>
                            <br />
                            <span className={`font-bold ${item.currentStock <= item.minStock ? 'text-red-600' : 'text-green-600'}`}>
                              {item.currentStock} units
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Min/Max Stock:</span>
                            <br />
                            {item.minStock} / {item.maxStock}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Unit Price:</span>
                            <br />
                            {formatCurrency(item.unitPrice)}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                            {item.location}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Supplier:</span>
                            <br />
                            {item.supplier}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Total Value:</span>
                            <br />
                            <span className="font-bold text-blue-600">{formatCurrency(item.totalValue)}</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="text-sm text-gray-600">Last Updated: {item.lastUpdated}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit Item
                        </Button>
                        <Button variant="outline" size="sm">
                          Stock History
                        </Button>
                        {item.status === 'low-stock' || item.status === 'out-of-stock' ? (
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                            Reorder
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold">{category.name}</h3>
                        {category.lowStock > 0 && (
                          <Badge className="bg-yellow-100 text-yellow-800">
                            {category.lowStock} Low Stock
                          </Badge>
                        )}
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Total Items:</span>
                          <span className="font-bold">{category.items}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Value:</span>
                          <span className="font-bold text-green-600">{formatCurrency(category.value)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Average Value:</span>
                          <span className="font-bold">{formatCurrency(category.value / category.items)}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full mt-3" size="sm">
                        View Category Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{transaction.item}</h3>
                          <Badge className={transaction.type === 'stock-in' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {transaction.type.replace('-', ' ').toUpperCase()}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Transaction ID:</span>
                            <br />
                            {transaction.id}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Quantity:</span>
                            <br />
                            <span className={`font-bold ${getTransactionColor(transaction.type)}`}>
                              {transaction.type === 'stock-in' ? '+' : '-'}{transaction.quantity}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Reference:</span>
                            <br />
                            {transaction.reference}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">User:</span>
                            <br />
                            {transaction.user}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Date:</p>
                        <p className="font-bold">{transaction.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}