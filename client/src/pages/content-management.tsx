import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Video, 
  Image, 
  Download, 
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search
} from 'lucide-react';

export default function ContentManagement() {
  const [activeTab, setActiveTab] = useState('content');

  const contentItems = [
    {
      id: 'LEC-CS301-01',
      title: 'Introduction to Data Structures',
      type: 'video',
      course: 'CS301',
      faculty: 'Dr. Amit Kumar',
      uploadDate: '2024-03-20',
      size: '245 MB',
      views: 342,
      status: 'published'
    },
    {
      id: 'PDF-ME201-03',
      title: 'Thermodynamics Lecture Notes',
      type: 'document',
      course: 'ME201',
      faculty: 'Prof. Priya Sharma',
      uploadDate: '2024-03-18',
      size: '12 MB',
      views: 156,
      status: 'published'
    },
    {
      id: 'IMG-CV101-02',
      title: 'Engineering Drawing Examples',
      type: 'image',
      course: 'CV101',
      faculty: 'Dr. Rajesh Gupta',
      uploadDate: '2024-03-15',
      size: '8 MB',
      views: 89,
      status: 'draft'
    }
  ];

  const assignments = [
    {
      id: 'ASN-CS301-01',
      title: 'Implement Stack using Arrays',
      course: 'CS301',
      dueDate: '2024-03-30',
      submissions: 68,
      totalStudents: 75,
      status: 'active'
    },
    {
      id: 'ASN-ME201-02',
      title: 'Carnot Cycle Analysis',
      course: 'ME201',
      dueDate: '2024-04-02',
      submissions: 45,
      totalStudents: 68,
      status: 'active'
    },
    {
      id: 'ASN-CV101-01',
      title: 'Orthographic Projection',
      course: 'CV101',
      dueDate: '2024-03-25',
      submissions: 40,
      totalStudents: 45,
      status: 'completed'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-5 w-5 text-blue-600" />;
      case 'document': return <FileText className="h-5 w-5 text-green-600" />;
      case 'image': return <Image className="h-5 w-5 text-purple-600" />;
      default: return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Management System</h1>
          <p className="text-gray-600">Manage course content, assignments, and learning materials</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Upload Content
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Content</p>
                <p className="text-2xl font-bold">1,248</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Video className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Video Lectures</p>
                <p className="text-2xl font-bold">324</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Assignments</p>
                <p className="text-2xl font-bold">186</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Download className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Downloads</p>
                <p className="text-2xl font-bold">12,456</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search content..."
              className="pl-10"
            />
          </div>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="video">Videos</SelectItem>
            <SelectItem value="document">Documents</SelectItem>
            <SelectItem value="image">Images</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="published">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content">Course Content</TabsTrigger>
          <TabsTrigger value="assignments">Assignment Management</TabsTrigger>
          <TabsTrigger value="upload">Upload Center</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Content Library</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start space-x-3 flex-1">
                        {getTypeIcon(item.type)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <Badge className={getStatusColor(item.status)}>
                              {item.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                            <div>
                              <span className="font-medium">Course:</span>
                              <br />
                              {item.course}
                            </div>
                            <div>
                              <span className="font-medium">Faculty:</span>
                              <br />
                              {item.faculty}
                            </div>
                            <div>
                              <span className="font-medium">Size:</span>
                              <br />
                              {item.size}
                            </div>
                            <div>
                              <span className="font-medium">Views:</span>
                              <br />
                              {item.views}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assignment Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{assignment.title}</h3>
                          <Badge className={getStatusColor(assignment.status)}>
                            {assignment.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Course:</span>
                            <br />
                            {assignment.course}
                          </div>
                          <div>
                            <span className="font-medium">Due Date:</span>
                            <br />
                            {assignment.dueDate}
                          </div>
                          <div>
                            <span className="font-medium">Submissions:</span>
                            <br />
                            {assignment.submissions}/{assignment.totalStudents}
                          </div>
                          <div>
                            <span className="font-medium">Completion:</span>
                            <br />
                            {Math.round((assignment.submissions / assignment.totalStudents) * 100)}%
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Submissions
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Center</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload Course Content</h3>
                  <p className="text-gray-600 mb-4">Drag and drop files here or click to browse</p>
                  <Button>Choose Files</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Content Details</h4>
                    <Input placeholder="Content title" />
                    <Textarea placeholder="Content description" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs301">CS301 - Data Structures</SelectItem>
                        <SelectItem value="me201">ME201 - Thermodynamics</SelectItem>
                        <SelectItem value="cv101">CV101 - Engineering Drawing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Publishing Options</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lecture">Lecture Video</SelectItem>
                        <SelectItem value="notes">Lecture Notes</SelectItem>
                        <SelectItem value="assignment">Assignment</SelectItem>
                        <SelectItem value="reference">Reference Material</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="enrolled">Enrolled Students Only</SelectItem>
                        <SelectItem value="draft">Save as Draft</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Upload Content
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