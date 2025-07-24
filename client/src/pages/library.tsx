import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { Search, BookOpen, Download, ExternalLink } from "lucide-react";

export default function Library() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: borrowings, isLoading: borrowingsLoading } = useQuery({
    queryKey: ["/api/library/borrowings"],
    enabled: !!user,
  });

  const { data: searchResults, isLoading: searchLoading } = useQuery({
    queryKey: ["/api/library/books/search", searchQuery],
    enabled: !!user && searchQuery.length > 2,
  });

  if (borrowingsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading library information...</p>
        </div>
      </div>
    );
  }

  // Mock library stats
  const libraryStats = {
    booksBorrowed: 3,
    maxAllowed: 5,
    overdueBooks: 0,
    totalFine: 0
  };

  // Mock current borrowings
  const mockBorrowings = [
    {
      id: 1,
      book: {
        title: "Introduction to Algorithms",
        author: "Thomas Cormen",
        isbn: "9780262033848"
      },
      issueDate: "2024-11-25",
      dueDate: "2024-12-25",
      status: "issued"
    },
    {
      id: 2,
      book: {
        title: "Computer Networks",
        author: "Andrew Tanenbaum", 
        isbn: "9780132126953"
      },
      issueDate: "2024-11-20",
      dueDate: "2024-12-20",
      status: "issued"
    },
    {
      id: 3,
      book: {
        title: "Database System Concepts",
        author: "Abraham Silberschatz",
        isbn: "9780073523323"
      },
      issueDate: "2024-12-01",
      dueDate: "2024-12-31", 
      status: "issued"
    }
  ];

  const digitalResources = [
    {
      id: 1,
      name: "IEEE Xplore",
      type: "Research Database",
      description: "Access millions of technical papers and conference proceedings",
      color: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      id: 2,
      name: "SpringerLink",
      type: "E-Books & Journals",
      description: "Comprehensive collection of scientific literature and textbooks",
      color: "bg-blue-100", 
      textColor: "text-blue-600"
    },
    {
      id: 3,
      name: "NPTEL",
      type: "Online Courses",
      description: "Free online courses from premier Indian institutions",
      color: "bg-green-100",
      textColor: "text-green-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Library Management</h2>
        <p className="text-gray-600">Search books, manage your borrowings, and access digital resources</p>
      </div>

      {/* Search and Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Search Library Catalog</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-3">
                <Input
                  placeholder="Search books, authors, or ISBN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button className="bg-coep-blue hover:bg-coep-light-blue">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Computer Science", "Mathematics", "Engineering", "Research Papers"].map((tag) => (
                  <Badge 
                    key={tag}
                    variant="secondary" 
                    className="cursor-pointer hover:bg-gray-200"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">My Library Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Books Borrowed</span>
                <span className="font-semibold text-coep-blue">{libraryStats.booksBorrowed}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Max Allowed</span>
                <span className="font-medium">{libraryStats.maxAllowed}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Overdue Books</span>
                <span className="font-medium text-error-red">{libraryStats.overdueBooks}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Fine</span>
                <span className="font-medium">₹{libraryStats.totalFine}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Borrowings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">Current Borrowings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Book</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Author</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Issue Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Due Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockBorrowings.map((borrowing) => (
                  <tr key={borrowing.id} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-800">{borrowing.book.title}</p>
                        <p className="text-xs text-gray-600">ISBN: {borrowing.book.isbn}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">{borrowing.book.author}</td>
                    <td className="py-3 px-4">{new Date(borrowing.issueDate).toLocaleDateString()}</td>
                    <td className="py-3 px-4">{new Date(borrowing.dueDate).toLocaleDateString()}</td>
                    <td className="py-3 px-4">
                      <Badge variant="default" className="bg-success-green">
                        On Time
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="link" className="p-0 h-auto text-coep-blue">
                        Renew
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Digital Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">Digital Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {digitalResources.map((resource) => (
              <div 
                key={resource.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-coep-blue transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 ${resource.color} rounded-lg flex items-center justify-center`}>
                    {resource.name === "IEEE Xplore" ? (
                      <Download className={`w-5 h-5 ${resource.textColor}`} />
                    ) : resource.name === "SpringerLink" ? (
                      <BookOpen className={`w-5 h-5 ${resource.textColor}`} />
                    ) : (
                      <ExternalLink className={`w-5 h-5 ${resource.textColor}`} />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{resource.name}</p>
                    <p className="text-xs text-gray-600">{resource.type}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <Button variant="outline" className="w-full border-coep-blue text-coep-blue hover:bg-coep-blue hover:text-white">
                  {resource.name === "IEEE Xplore" ? "Access Database" : 
                   resource.name === "SpringerLink" ? "Browse Collection" : "Explore Courses"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
