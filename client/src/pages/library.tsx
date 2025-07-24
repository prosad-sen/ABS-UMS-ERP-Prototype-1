import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { isUnauthorizedError } from '@/lib/authUtils';
import { 
  Book, 
  Search, 
  Calendar, 
  User, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  BookOpen,
  Library as LibraryIcon,
  Plus
} from 'lucide-react';

export default function Library() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const { data: books = [], isLoading: isLoadingBooks } = useQuery({
    queryKey: ['/api/library/books', { search: searchQuery, category: selectedCategory }],
    retry: false,
  });

  const { data: borrowedBooks = [], isLoading: isLoadingBorrowed } = useQuery({
    queryKey: ['/api/student/borrowed-books'],
    retry: false,
  });

  const borrowBookMutation = useMutation({
    mutationFn: async (bookId: number) => {
      return await apiRequest('/api/student/borrow-book', 'POST', { bookId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/library/books'] });
      queryClient.invalidateQueries({ queryKey: ['/api/student/borrowed-books'] });
      toast({
        title: "Book Borrowed",
        description: "The book has been borrowed successfully.",
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
        title: "Borrow Failed",
        description: error.message || "Failed to borrow book. Please try again.",
        variant: "destructive",
      });
    },
  });

  const returnBookMutation = useMutation({
    mutationFn: async (borrowingId: number) => {
      return await apiRequest('/api/student/return-book', 'POST', { borrowingId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/library/books'] });
      queryClient.invalidateQueries({ queryKey: ['/api/student/borrowed-books'] });
      toast({
        title: "Book Returned",
        description: "The book has been returned successfully.",
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
        title: "Return Failed",
        description: error.message || "Failed to return book. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleBorrowBook = (bookId: number) => {
    borrowBookMutation.mutate(bookId);
  };

  const handleReturnBook = (borrowingId: number) => {
    returnBookMutation.mutate(borrowingId);
  };

  if (isLoading || isLoadingBooks) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading library...</p>
        </div>
      </div>
    );
  }

  const categories = ['all', 'textbook', 'reference', 'fiction', 'technical', 'research'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Library Management</h1>
        <div className="flex gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            {books.length} Books Available
          </Badge>
          <Badge variant="default" className="flex items-center gap-1">
            <LibraryIcon className="h-3 w-3" />
            {borrowedBooks.length} Borrowed
          </Badge>
        </div>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Books
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by title, author, or ISBN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* My Borrowed Books */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            My Borrowed Books
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoadingBorrowed ? (
            <div className="text-center py-8">
              <div className="w-6 h-6 border-2 border-coep-blue border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Loading borrowed books...</p>
            </div>
          ) : borrowedBooks.length === 0 ? (
            <div className="text-center py-8">
              <Book className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">No books currently borrowed</p>
            </div>
          ) : (
            <div className="space-y-4">
              {borrowedBooks.map((borrowing: any) => {
                const dueDate = new Date(borrowing.dueDate);
                const isOverdue = dueDate < new Date();
                return (
                  <div key={borrowing.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Book className="h-8 w-8 text-coep-blue" />
                      <div>
                        <h4 className="font-medium">{borrowing.book?.title}</h4>
                        <p className="text-sm text-gray-600">by {borrowing.book?.author}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                          <span>Borrowed: {new Date(borrowing.borrowDate).toLocaleDateString()}</span>
                          <span className={isOverdue ? 'text-red-600 font-medium' : ''}>
                            Due: {dueDate.toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {isOverdue && (
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          Overdue
                        </Badge>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleReturnBook(borrowing.id)}
                        disabled={returnBookMutation.isPending}
                        className="flex items-center gap-2"
                      >
                        {returnBookMutation.isPending ? (
                          <>
                            <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            Returning...
                          </>
                        ) : (
                          'Return Book'
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Available Books */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Available Books
          </CardTitle>
        </CardHeader>
        <CardContent>
          {books.length === 0 ? (
            <div className="text-center py-8">
              <Book className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">No books found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book: any) => {
                const isBorrowed = borrowedBooks.some((borrowing: any) => 
                  borrowing.bookId === book.id && !borrowing.returnDate
                );
                const isAvailable = book.availableCopies > 0;

                return (
                  <Card key={book.id} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">{book.title}</CardTitle>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {book.author}
                        </p>
                        <p>ISBN: {book.isbn}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{book.category}</Badge>
                          <span className="text-xs">
                            {book.availableCopies}/{book.totalCopies} available
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                        {book.description || 'No description available.'}
                      </p>
                      <div className="flex gap-2">
                        {isBorrowed ? (
                          <Badge variant="default" className="flex items-center gap-1">
                            <CheckCircle className="h-3 w-3" />
                            Already Borrowed
                          </Badge>
                        ) : isAvailable ? (
                          <Button
                            size="sm"
                            onClick={() => handleBorrowBook(book.id)}
                            disabled={borrowBookMutation.isPending}
                            className="flex items-center gap-2"
                          >
                            {borrowBookMutation.isPending ? (
                              <>
                                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Borrowing...
                              </>
                            ) : (
                              <>
                                <Plus className="h-3 w-3" />
                                Borrow
                              </>
                            )}
                          </Button>
                        ) : (
                          <Badge variant="destructive">Not Available</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}