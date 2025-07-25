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
  X
} from "lucide-react";

interface DetailedStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'student-progress' | 'research-grant' | 'teaching-excellence' | 'system-performance' | 'budget-optimization' | 'global-ranking' | 'financial-performance';
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
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="recommendations">Actions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="mt-4">
          {getDetailedContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
}