import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  Award,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Clock,
  CheckCircle,
  AlertTriangle,
  X,
  Building,
  Trophy,
  DollarSign
} from "lucide-react";

interface DetailedStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'student-progress' | 'research-grant' | 'teaching-excellence' | 'system-performance' | 'budget-optimization' | 'global-ranking' | 'financial-performance' | 'mentorship' | 'network' | 'fundraising' | 'placements' | 'research-excellence' | 'industry-partnerships' | 'sustainability-leadership';
  data: any;
}

export default function DetailedStatsModal({ 
  isOpen, 
  onClose, 
  title, 
  type, 
  data 
}: DetailedStatsModalProps) {

  const getDetailedContent = () => {
    switch (type) {
      case 'student-progress':
        return (
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full text-xs sm:text-sm">
              <TabsTrigger value="overview" className="px-2 py-1">Overview</TabsTrigger>
              <TabsTrigger value="performance" className="px-2 py-1">Performance</TabsTrigger>
              <TabsTrigger value="trends" className="px-2 py-1">Trends</TabsTrigger>
              <TabsTrigger value="recommendations" className="px-2 py-1">Actions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Class Average</p>
                        <p className="text-2xl font-bold text-green-600">8.45 CGPA</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="mt-2">
                      <Progress value={84} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">12% improvement this month</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Above Benchmark</p>
                        <p className="text-2xl font-bold text-blue-600">89%</p>
                      </div>
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="mt-2">
                      <Progress value={89} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">32 out of 36 students</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Subject-wise Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { subject: 'Database Management Systems', score: 91, trend: 'up' },
                      { subject: 'Computer Networks', score: 87, trend: 'up' },
                      { subject: 'Software Engineering', score: 85, trend: 'stable' },
                      { subject: 'Operating Systems', score: 89, trend: 'up' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium">{item.subject}</p>
                          <Progress value={item.score} className="h-2 mt-1" />
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <span className="font-semibold">{item.score}%</span>
                          {item.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-600" />}
                          {item.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-600" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="performance" className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 mx-auto text-yellow-600 mb-2" />
                    <p className="text-2xl font-bold">15</p>
                    <p className="text-sm text-gray-600">Top Performers</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Target className="h-8 w-8 mx-auto text-green-600 mb-2" />
                    <p className="text-2xl font-bold">28</p>
                    <p className="text-sm text-gray-600">Met Goals</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <AlertTriangle className="h-8 w-8 mx-auto text-orange-600 mb-2" />
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-sm text-gray-600">Need Support</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trends" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Progress Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { month: 'January', score: 78, improvement: '+2%' },
                      { month: 'February', score: 82, improvement: '+5%' },
                      { month: 'March', score: 84, improvement: '+2%' },
                      { month: 'April', score: 89, improvement: '+6%' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium">{item.month}</span>
                        <div className="flex items-center space-x-3">
                          <Progress value={item.score} className="w-32 h-2" />
                          <span className="font-semibold">{item.score}%</span>
                          <Badge variant="outline" className="text-green-600 border-green-200">
                            {item.improvement}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-4">
              <div className="space-y-4">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800">Continue Current Methods</h4>
                        <p className="text-sm text-green-700 mt-1">Your interactive lab sessions are showing excellent results. Consider sharing techniques with other faculty.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Focus Areas</h4>
                        <p className="text-sm text-blue-700 mt-1">4 students need additional support in advanced topics. Consider additional office hours.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        );

      case 'global-ranking':
        return (
          <Tabs defaultValue="ranking" className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="ranking">Ranking</TabsTrigger>
              <TabsTrigger value="comparison">Peer Analysis</TabsTrigger>
              <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ranking" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>QS World University Rankings Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-600 mb-2">#78</div>
                      <p className="text-gray-600">Current Global Rank</p>
                      <Badge className="mt-2 bg-green-100 text-green-800">↑ 12 positions</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Academic Reputation</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={85} className="w-20 h-2" />
                          <span className="text-sm font-medium">85</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span>Research Impact</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={78} className="w-20 h-2" />
                          <span className="text-sm font-medium">78</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span>Industry Partnerships</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={92} className="w-20 h-2" />
                          <span className="text-sm font-medium">92</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="comparison" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Peer Institution Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'IIT Bombay', rank: 45, trend: 'stable', score: 94 },
                      { name: 'IIT Delhi', rank: 52, trend: 'up', score: 91 },
                      { name: 'COEP', rank: 78, trend: 'up', score: 86 },
                      { name: 'VJTI Mumbai', rank: 89, trend: 'down', score: 82 },
                      { name: 'NIT Trichy', rank: 95, trend: 'stable', score: 79 }
                    ].map((inst, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="text-lg font-bold">#{inst.rank}</div>
                          <div>
                            <p className="font-medium">{inst.name}</p>
                            <div className="flex items-center space-x-2">
                              <Progress value={inst.score} className="w-24 h-2" />
                              <span className="text-sm">{inst.score}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {inst.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-600" />}
                          {inst.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-600" />}
                          {inst.trend === 'stable' && <Activity className="h-4 w-4 text-gray-600" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="metrics" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Research Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Publications</span>
                        <span className="font-semibold">2,847</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Citations</span>
                        <span className="font-semibold">15,234</span>
                      </div>
                      <div className="flex justify-between">
                        <span>H-Index</span>
                        <span className="font-semibold">89</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Patents</span>
                        <span className="font-semibold">67</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Industry Connect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Corporate Partners</span>
                        <span className="font-semibold">156</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Placement Rate</span>
                        <span className="font-semibold">94.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg. Package</span>
                        <span className="font-semibold">₹15.2L</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Startup Incubated</span>
                        <span className="font-semibold">23</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="strategy" className="space-y-4">
              <div className="space-y-4">
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Target for Next Year: #65</h4>
                        <p className="text-sm text-blue-700 mt-1">Focus on international collaborations and research output to climb 13 more positions.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <BarChart3 className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-purple-800">Key Investment Areas</h4>
                        <ul className="text-sm text-purple-700 mt-1 space-y-1">
                          <li>• International faculty recruitment</li>
                          <li>• Research infrastructure upgrade</li>
                          <li>• Student exchange programs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        );

      case 'mentorship':
        return (
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="overview">Mentorship Overview</TabsTrigger>
              <TabsTrigger value="students">Current Students</TabsTrigger>
              <TabsTrigger value="success">Success Stories</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Users className="h-12 w-12 mx-auto text-blue-600 mb-3" />
                      <h3 className="text-2xl font-bold text-blue-800">15</h3>
                      <p className="text-blue-600">Active Mentees</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto text-green-600 mb-3" />
                      <h3 className="text-2xl font-bold text-green-800">89%</h3>
                      <p className="text-green-600">Placement Success</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Clock className="h-12 w-12 mx-auto text-purple-600 mb-3" />
                      <h3 className="text-2xl font-bold text-purple-800">45hrs</h3>
                      <p className="text-purple-600">Monthly Hours</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="students" className="space-y-4">
              <div className="space-y-3">
                {[
                  { name: "Arjun Patel", year: "Final Year", branch: "CSE", goal: "Software Engineering at Google" },
                  { name: "Priya Sharma", year: "Third Year", branch: "IT", goal: "Data Science Career" },
                  { name: "Rohit Kumar", year: "Final Year", branch: "CSE", goal: "Product Management" }
                ].map((student, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{student.name}</h4>
                          <p className="text-sm text-gray-600">{student.year} • {student.branch}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{student.goal}</p>
                          <Button size="sm" className="mt-2">Schedule Session</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="success" className="space-y-4">
              <div className="space-y-4">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800">Successful Placement: Microsoft</h4>
                        <p className="text-sm text-green-700 mt-1">Guided Ankur through interview preparation, resulting in SDE-2 role with ₹28L package.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Career Transition Success</h4>
                        <p className="text-sm text-blue-700 mt-1">Helped Neha transition from development to product management at Flipkart.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Interview Preparation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• System Design Templates</li>
                      <li>• Coding Interview Practice</li>
                      <li>• Behavioral Question Bank</li>
                      <li>• Mock Interview Sessions</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Career Guidance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Industry Trends Analysis</li>
                      <li>• Resume Review Templates</li>
                      <li>• Networking Strategies</li>
                      <li>• Salary Negotiation Tips</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        );

      case 'network':
        return (
          <Tabs defaultValue="connections" className="space-y-4">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="connections">My Network</TabsTrigger>
              <TabsTrigger value="events">Events Organized</TabsTrigger>
              <TabsTrigger value="growth">Network Growth</TabsTrigger>
            </TabsList>
            
            <TabsContent value="connections" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Network Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Total Connections</span>
                        <span className="font-semibold">347</span>
                      </div>
                      <div className="flex justify-between">
                        <span>This Year</span>
                        <span className="font-semibold text-green-600">+89</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Networkers</span>
                        <span className="font-semibold">156</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Top Industries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Technology</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={78} className="h-2 w-20" />
                          <span className="text-sm">156</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Finance</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={45} className="h-2 w-20" />
                          <span className="text-sm">89</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Consulting</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={32} className="h-2 w-20" />
                          <span className="text-sm">67</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              <div className="space-y-3">
                {[
                  { title: "COEP Tech Meetup 2024", date: "March 15, 2024", attendees: 85 },
                  { title: "Alumni Career Fair", date: "January 20, 2024", attendees: 156 },
                  { title: "Industry Connect Session", date: "December 10, 2023", attendees: 67 }
                ].map((event, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{event.title}</h4>
                          <p className="text-sm text-gray-600">{event.date}</p>
                        </div>
                        <div>
                          <Badge className="bg-blue-500">{event.attendees} Attendees</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        );

      case 'fundraising':
        return (
          <Tabs defaultValue="impact" className="space-y-4">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="impact">Impact Report</TabsTrigger>
              <TabsTrigger value="projects">Funded Projects</TabsTrigger>
              <TabsTrigger value="recognition">Recognition</TabsTrigger>
            </TabsList>
            
            <TabsContent value="impact" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Users className="h-12 w-12 mx-auto text-green-600 mb-3" />
                      <h3 className="text-2xl font-bold text-green-800">500+</h3>
                      <p className="text-green-600">Students Benefited</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Building className="h-12 w-12 mx-auto text-blue-600 mb-3" />
                      <h3 className="text-2xl font-bold text-blue-800">₹2.5L</h3>
                      <p className="text-blue-600">Total Contribution</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Project Impact Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Computer Lab Modernization</h4>
                      <p className="text-sm text-blue-700 mt-1">Your contribution helped upgrade 50 workstations with latest hardware and software, directly benefiting 500+ computer science students.</p>
                      <div className="mt-3 flex items-center space-x-4 text-sm">
                        <span className="text-blue-600">• 50 New Workstations</span>
                        <span className="text-blue-600">• Latest Software Licenses</span>
                        <span className="text-blue-600">• High-Speed Network</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              <div className="space-y-3">
                {[
                  { title: "Computer Lab Modernization", amount: "₹2,50,000", status: "Completed", impact: "500+ students benefited" },
                  { title: "Scholarship Fund", amount: "₹50,000", status: "Ongoing", impact: "10 scholarships awarded" },
                  { title: "Library Digital Initiative", amount: "₹25,000", status: "Planned", impact: "Enhanced digital resources" }
                ].map((project, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold">{project.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{project.impact}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-lg">{project.amount}</p>
                          <Badge className={
                            project.status === 'Completed' ? 'bg-green-500' :
                            project.status === 'Ongoing' ? 'bg-blue-500' : 'bg-orange-500'
                          }>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recognition" className="space-y-4">
              <div className="space-y-4">
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800">Distinguished Alumni Award 2024</h4>
                        <p className="text-sm text-yellow-700 mt-1">Recognized for outstanding contributions to university development and student mentorship.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Trophy className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-purple-800">Patron Contributor Status</h4>
                        <p className="text-sm text-purple-700 mt-1">Achieved patron status through consistent support of university infrastructure development.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        );

      case 'placements':
        return (
          <Tabs defaultValue="referrals" className="space-y-4">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="referrals">My Referrals</TabsTrigger>
              <TabsTrigger value="opportunities">Job Opportunities</TabsTrigger>
              <TabsTrigger value="impact">Success Impact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="referrals" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                <Card className="bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <CheckCircle className="h-12 w-12 mx-auto text-green-600 mb-3" />
                      <h3 className="text-2xl font-bold text-green-800">8</h3>
                      <p className="text-green-600">Successful Placements</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Users className="h-12 w-12 mx-auto text-blue-600 mb-3" />
                      <h3 className="text-2xl font-bold text-blue-800">15</h3>
                      <p className="text-blue-600">Active Referrals</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <DollarSign className="h-12 w-12 mx-auto text-purple-600 mb-3" />
                      <h3 className="text-2xl font-bold text-purple-800">₹18.5L</h3>
                      <p className="text-purple-600">Avg Package</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Ankit Sharma", company: "Microsoft", role: "SDE-2", package: "₹28L", status: "Placed" },
                  { name: "Pooja Agarwal", company: "Google", role: "Software Engineer", package: "₹32L", status: "Interview" },
                  { name: "Rahul Patel", company: "Amazon", role: "SDE-1", package: "₹22L", status: "Applied" }
                ].map((referral, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{referral.name}</h4>
                          <p className="text-sm text-gray-600">{referral.company} • {referral.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{referral.package}</p>
                          <Badge className={
                            referral.status === 'Placed' ? 'bg-green-500' :
                            referral.status === 'Interview' ? 'bg-blue-500' : 'bg-orange-500'
                          }>
                            {referral.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="opportunities" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Post New Job Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Create Job Posting</Button>
                  <p className="text-sm text-gray-600 mt-2 text-center">Help COEP students find their dream jobs</p>
                </CardContent>
              </Card>
              <div className="space-y-3">
                <h3 className="font-semibold">Recent Opportunities Posted</h3>
                {[
                  { company: "Microsoft", role: "Software Development Engineer", experience: "0-2 years", applications: 23 },
                  { company: "Flipkart", role: "Product Manager", experience: "2-4 years", applications: 15 }
                ].map((job, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{job.role}</h4>
                          <p className="text-sm text-gray-600">{job.company} • {job.experience}</p>
                        </div>
                        <div>
                          <Badge>{job.applications} Applications</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        );

      case 'research-excellence':
        return (
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full text-xs sm:text-sm">
              <TabsTrigger value="overview" className="px-2 py-1">Research Output</TabsTrigger>
              <TabsTrigger value="patents" className="px-2 py-1">Patents & IP</TabsTrigger>
              <TabsTrigger value="funding" className="px-2 py-1">Funding</TabsTrigger>
              <TabsTrigger value="collaborations" className="px-2 py-1">Collaborations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <Trophy className="h-12 w-12 mx-auto mb-3" />
                      <h3 className="text-3xl font-bold">67</h3>
                      <p className="text-purple-100">Patents Published</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <DollarSign className="h-12 w-12 mx-auto mb-3" />
                      <h3 className="text-3xl font-bold">₹12.3Cr</h3>
                      <p className="text-green-100">Research Grants</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <Building className="h-12 w-12 mx-auto mb-3" />
                      <h3 className="text-3xl font-bold">245</h3>
                      <p className="text-blue-100">Publications</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        );

      case 'industry-partnerships':
        return (
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full text-xs sm:text-sm">
              <TabsTrigger value="overview" className="px-2 py-1">Partnership Overview</TabsTrigger>
              <TabsTrigger value="companies" className="px-2 py-1">Top Partners</TabsTrigger>
              <TabsTrigger value="placements" className="px-2 py-1">Placement Impact</TabsTrigger>
              <TabsTrigger value="revenue" className="px-2 py-1">Revenue Streams</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <Building className="h-12 w-12 mx-auto mb-3" />
                      <h3 className="text-3xl font-bold">156</h3>
                      <p className="text-blue-100">Industry Partners</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto mb-3" />
                      <h3 className="text-3xl font-bold">94.2%</h3>
                      <p className="text-green-100">Placement Rate</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <DollarSign className="h-12 w-12 mx-auto mb-3" />
                      <h3 className="text-3xl font-bold">₹15.2L</h3>
                      <p className="text-purple-100">Avg Package</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        );

      case 'sustainability-leadership':
        return (
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full text-xs sm:text-sm">
              <TabsTrigger value="overview" className="px-2 py-1">Green Metrics</TabsTrigger>
              <TabsTrigger value="energy" className="px-2 py-1">Energy Efficiency</TabsTrigger>
              <TabsTrigger value="waste" className="px-2 py-1">Waste Management</TabsTrigger>
              <TabsTrigger value="initiatives" className="px-2 py-1">Green Initiatives</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto mb-3" />
                      <h3 className="text-3xl font-bold">85%</h3>
                      <p className="text-green-100">Sustainability Score</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <DollarSign className="h-12 w-12 mx-auto mb-3" />
                      <h3 className="text-3xl font-bold">₹1.2Cr</h3>
                      <p className="text-blue-100">Energy Savings</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <TrendingDown className="h-12 w-12 mx-auto mb-3" />
                      <h3 className="text-3xl font-bold">34%</h3>
                      <p className="text-orange-100">Carbon Reduction</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        );

      default:
        return (
          <div className="text-center py-8">
            <BarChart3 className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">Detailed analytics for {title}</p>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl h-[90vh] max-h-[90vh] overflow-y-auto p-2 sm:p-6">
        <DialogHeader className="pb-3">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg sm:text-xl font-bold truncate pr-2">{title}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="flex-shrink-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="mt-2 overflow-y-auto">
          {getDetailedContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
}