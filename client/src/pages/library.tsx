import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Book, 
  Search, 
  Calendar, 
  User, 
  Clock,
  BookOpen,
  Download,
  RefreshCw,
  Plus,
  Filter,
  Star
} from "lucide-react";

export default function Library() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock library data
  const libraryStats = {
    booksIssued: 3,
    maxBooks: 5,
    overdue: 1,
    fines: 15
  };

  const issuedBooks = [
    {
      id: "B001",
      title: "Database System Concepts",
      author: "Abraham Silberschatz",
      isbn: "978-0078022159",
      issueDate: "2025-03-01",
      dueDate: "2025-03-15",
      renewCount: 1,
      status: "overdue",
      fine: 15
    },
    {
      id: "B002",
      title: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      isbn: "978-0132126953",
      issueDate: "2025-03-10",
      dueDate: "2025-03-24",
      renewCount: 0,
      status: "active",
      fine: 0
    },
    {
      id: "B003",
      title: "Operating System Concepts", 
      author: "Abraham Silberschatz",
      isbn: "978-1118063330",
      issueDate: "2025-03-12",
      dueDate: "2025-03-26",
      renewCount: 0,
      status: "active",
      fine: 0
    }
  ];

  const availableBooks = [
    {
      id: "B101",
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      isbn: "978-0262033848",
      category: "Computer Science",
      copies: 3,
      available: 2,
      location: "CS Section - A2",
      rating: 4.8,
      description: "Comprehensive introduction to algorithms and data structures"
    },
    {
      id: "B102", 
      title: "Clean Code",
      author: "Robert C. Martin",
      isbn: "978-0132350884",
      category: "Software Engineering",
      copies: 5,
      available: 4,
      location: "CS Section - B1",
      rating: 4.6,
      description: "A handbook of agile software craftsmanship"
    },
    {
      id: "B103",
      title: "Design Patterns",
      author: "Erich Gamma",
      isbn: "978-0201633610",
      category: "Software Engineering", 
      copies: 2,
      available: 1,
      location: "CS Section - B2",
      rating: 4.7,
      description: "Elements of reusable object-oriented software"
    },
    {
      id: "B104",
      title: "Computer Architecture",
      author: "John L. Hennessy",
      isbn: "978-0123747501",
      category: "Computer Science",
      copies: 4,
      available: 3,
      location: "CS Section - C1",
      rating: 4.5,
      description: "A quantitative approach to computer architecture"
    }
  ];

  const categories = [
    { id: "all", name: "All Books" },
    { id: "computer-science", name: "Computer Science" },
    { id: "software-engineering", name: "Software Engineering" },
    { id: "mathematics", name: "Mathematics" },
    { id: "electronics", name: "Electronics" },
    { id: "mechanical", name: "Mechanical Engineering" }
  ];

  const issueHistory = [
    { title: "Data Structures and Algorithms", issueDate: "2025-02-15", returnDate: "2025-02-28", status: "returned" },
    { title: "Software Engineering", issueDate: "2025-01-20", returnDate: "2025-02-05", status: "returned" },
    { title: "Computer Graphics", issueDate: "2023-12-10", returnDate: "2023-12-24", status: "returned" }
  ];

  const handleRenewBook = (bookId: string) => {
    alert(`Renewing book ${bookId}...`);
  };

  const handleIssueBook = (bookId: string) => {
    alert(`Issuing book ${bookId}...`);
  };

  const filteredBooks = availableBooks.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-3 lg:p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Digital Library</h1>
          <p className="text-gray-600">Browse, issue, and manage your library books</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            E-Books
          </Button>
          <Button className="bg-coep-blue hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Request Book
          </Button>
        </div>
      </div>

      {/* Library Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <BookOpen className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-blue-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{libraryStats.booksIssued}/{libraryStats.maxBooks}</h3>
            <p className="text-sm text-gray-600">Books Issued</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <Clock className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-orange-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{libraryStats.overdue}</h3>
            <p className="text-sm text-gray-600">Overdue Books</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <Calendar className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-red-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">₹{libraryStats.fines}</h3>
            <p className="text-sm text-gray-600">Outstanding Fines</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 lg:p-6 text-center">
            <Book className="h-8 w-8 lg:h-12 lg:w-12 mx-auto text-green-600 mb-2 lg:mb-4" />
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">2,500+</h3>
            <p className="text-sm text-gray-600">Total Books</p>
          </CardContent>
        </Card>
      </div>

      {/* Overdue Alert */}
      {libraryStats.overdue > 0 && (
        <Card className="border-l-4 border-l-red-500 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-red-600" />
                <div>
                  <h3 className="font-semibold text-red-800">Overdue Book Alert</h3>
                  <p className="text-red-700">You have {libraryStats.overdue} overdue book with ₹{libraryStats.fines} fine</p>
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Pay Fine ₹{libraryStats.fines}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="issued" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="issued">My Books</TabsTrigger>
          <TabsTrigger value="search">Search Books</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="digital">Digital Library</TabsTrigger>
        </TabsList>

        <TabsContent value="issued" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Currently Issued Books</CardTitle>
              <p className="text-sm text-gray-600">
                You can issue up to {libraryStats.maxBooks} books. Currently using {libraryStats.booksIssued} slots.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {issuedBooks.map((book) => (
                <Card key={book.id} className={`border-l-4 ${
                  book.status === 'overdue' ? 'border-l-red-500 bg-red-50' : 'border-l-green-500 bg-green-50'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-2 lg:space-y-0">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{book.title}</h3>
                        <p className="text-gray-600 text-sm">by {book.author}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span>ISBN: {book.isbn}</span>
                          <span>Issued: {book.issueDate}</span>
                          <span>Due: {book.dueDate}</span>
                        </div>
                        {book.fine > 0 && (
                          <p className="text-red-600 text-sm font-medium mt-1">Fine: ₹{book.fine}</p>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={book.status === 'overdue' ? 'destructive' : 'default'}>
                          {book.status === 'overdue' ? 'Overdue' : 'Active'}
                        </Badge>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleRenewBook(book.id)}
                          disabled={book.renewCount >= 2}
                        >
                          <RefreshCw className="h-3 w-3 mr-1" />
                          Renew ({book.renewCount}/2)
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="search" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Search Library Catalog</CardTitle>
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                <Input 
                  placeholder="Search by title, author, or ISBN..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredBooks.map((book) => (
                <Card key={book.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-2 lg:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{book.title}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-600">{book.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">by {book.author}</p>
                        <p className="text-gray-600 text-sm">{book.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                          <span>ISBN: {book.isbn}</span>
                          <span>Location: {book.location}</span>
                          <Badge variant="outline">{book.category}</Badge>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <div>
                          <p className="text-sm text-gray-600">Available</p>
                          <p className="font-semibold text-green-600">{book.available}/{book.copies} copies</p>
                        </div>
                        <Button 
                          className="bg-coep-blue hover:bg-blue-700"
                          onClick={() => handleIssueBook(book.id)}
                          disabled={book.available === 0 || libraryStats.booksIssued >= libraryStats.maxBooks}
                        >
                          <BookOpen className="h-4 w-4 mr-2" />
                          Issue Book
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Issue History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {issueHistory.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Book className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium">{record.title}</p>
                        <p className="text-sm text-gray-600">
                          Issued: {record.issueDate} • Returned: {record.returnDate}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">
                      {record.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="digital" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Digital Library Resources</CardTitle>
              <p className="text-sm text-gray-600">
                Access e-books, research papers, and online databases
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="border-2 hover:border-coep-blue transition-colors cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <Download className="h-12 w-12 mx-auto text-coep-blue mb-3" />
                    <h3 className="font-semibold">E-Books Collection</h3>
                    <p className="text-sm text-gray-600">500+ technical e-books available for download</p>
                    <Button className="mt-3" variant="outline">Access E-Books</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-coep-blue transition-colors cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <Search className="h-12 w-12 mx-auto text-coep-blue mb-3" />
                    <h3 className="font-semibold">Research Papers</h3>
                    <p className="text-sm text-gray-600">Access IEEE, ACM, and other research databases</p>
                    <Button className="mt-3" variant="outline">Browse Papers</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-coep-blue transition-colors cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <Book className="h-12 w-12 mx-auto text-coep-blue mb-3" />
                    <h3 className="font-semibold">Online Journals</h3>
                    <p className="text-sm text-gray-600">Subscribe to latest engineering journals</p>
                    <Button className="mt-3" variant="outline">View Journals</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-coep-blue transition-colors cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <User className="h-12 w-12 mx-auto text-coep-blue mb-3" />
                    <h3 className="font-semibold">Course Materials</h3>
                    <p className="text-sm text-gray-600">Access course-specific study materials</p>
                    <Button className="mt-3" variant="outline">Browse Materials</Button>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="border-l-4 border-l-blue-500 bg-blue-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">COEP Digital Library Benefits</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 24/7 access to digital resources from anywhere</li>
                    <li>• No physical book limits for e-books</li>
                    <li>• Advanced search and bookmarking features</li>
                    <li>• Integration with course syllabi and assignments</li>
                    <li>• Mobile app for offline reading</li>
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}