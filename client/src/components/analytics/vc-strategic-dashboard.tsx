import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  Target,
  Award,
  Building,
  Users,
  DollarSign,
  BarChart3,
  Globe,
  Zap,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export default function VCStrategicDashboard() {
  
  // Competitive Analysis Data
  const peerComparison = [
    { name: 'IIT Bombay', rank: 45, budget: '₹450Cr', students: 12000, research: 95 },
    { name: 'IIT Delhi', rank: 52, budget: '₹420Cr', students: 11500, research: 92 },
    { name: 'COEP', rank: 78, budget: '₹180Cr', students: 8500, research: 86 },
    { name: 'VJTI Mumbai', rank: 89, budget: '₹120Cr', students: 6500, research: 78 },
    { name: 'NIT Trichy', rank: 95, budget: '₹200Cr', students: 9000, research: 82 }
  ];

  // Strategic KPIs
  const strategicKPIs = [
    { 
      title: 'Global Ranking Target', 
      current: 78, 
      target: 65, 
      progress: 68,
      trend: 'up',
      priority: 'high'
    },
    { 
      title: 'Research Output', 
      current: '2,847 papers', 
      target: '3,200 papers', 
      progress: 89,
      trend: 'up',
      priority: 'medium'
    },
    { 
      title: 'Industry Partnerships', 
      current: 156, 
      target: 200, 
      progress: 78,
      trend: 'up',
      priority: 'high'
    },
    { 
      title: 'International Faculty', 
      current: '12%', 
      target: '25%', 
      progress: 48,
      trend: 'stable',
      priority: 'critical'
    }
  ];

  // Financial Performance Metrics
  const financialMetrics = {
    totalRevenue: '₹45.6Cr',
    researchGrants: '₹12.3Cr',
    industryFunding: '₹8.7Cr',
    governmentFunding: '₹24.6Cr',
    growthRate: '+23%',
    budgetUtilization: 87
  };

  // Critical Issues & Opportunities
  const criticalIssues = [
    {
      type: 'opportunity',
      title: 'Government AI Initiative',
      description: 'New ₹50Cr AI research grant opportunity - deadline in 30 days',
      priority: 'high',
      impact: 'High revenue potential + ranking boost'
    },
    {
      type: 'risk',
      title: 'Faculty Retention Challenge',
      description: '15% faculty considering industry moves due to compensation gap',
      priority: 'critical',
      impact: 'Risk to academic reputation and student experience'
    },
    {
      type: 'opportunity',
      title: 'International Collaboration',
      description: 'MIT partnership proposal for dual-degree programs',
      priority: 'medium',
      impact: 'Significant ranking improvement potential'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Strategic KPIs Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-blue-600" />
            <span>Strategic KPIs Dashboard</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {strategicKPIs.map((kpi, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{kpi.title}</h4>
                  <div className="flex items-center space-x-2">
                    {kpi.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-600" />}
                    {kpi.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-600" />}
                    <Badge 
                      variant={kpi.priority === 'critical' ? 'destructive' : 
                              kpi.priority === 'high' ? 'default' : 'secondary'}
                    >
                      {kpi.priority}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current: {kpi.current}</span>
                    <span>Target: {kpi.target}</span>
                  </div>
                  <Progress value={kpi.progress} className="h-2" />
                  <p className="text-xs text-gray-600">
                    {kpi.progress}% progress towards annual target
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Peer Institution Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-purple-600" />
            <span>Competitive Intelligence</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {peerComparison.map((peer, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">#{peer.rank}</div>
                    <div className="text-xs text-gray-500">Rank</div>
                  </div>
                  <div>
                    <p className="font-semibold">{peer.name}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{peer.budget} budget</span>
                      <span>{peer.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Research Score:</span>
                    <Progress value={peer.research} className="w-20 h-2" />
                    <span className="font-semibold">{peer.research}</span>
                  </div>
                  {peer.name === 'COEP' && (
                    <Badge className="mt-1 bg-blue-100 text-blue-800">Our Position</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financial Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <span>Financial Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{financialMetrics.totalRevenue}</div>
                <p className="text-gray-600">Total Revenue (FY 2024)</p>
                <Badge className="mt-1 bg-green-100 text-green-800">
                  {financialMetrics.growthRate} YoY Growth
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Research Grants</span>
                  <span className="font-semibold">{financialMetrics.researchGrants}</span>
                </div>
                <div className="flex justify-between">
                  <span>Industry Funding</span>
                  <span className="font-semibold">{financialMetrics.industryFunding}</span>
                </div>
                <div className="flex justify-between">
                  <span>Government Grants</span>
                  <span className="font-semibold">{financialMetrics.governmentFunding}</span>
                </div>
              </div>
              
              <div className="pt-3 border-t">
                <div className="flex justify-between mb-2">
                  <span>Budget Utilization</span>
                  <span className="font-semibold">{financialMetrics.budgetUtilization}%</span>
                </div>
                <Progress value={financialMetrics.budgetUtilization} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Critical Issues & Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-orange-600" />
              <span>Strategic Alerts & Opportunities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criticalIssues.map((issue, index) => (
                <div 
                  key={index} 
                  className={`p-3 border rounded-lg ${
                    issue.type === 'opportunity' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {issue.type === 'opportunity' ? 
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /> :
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    }
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-semibold ${
                          issue.type === 'opportunity' ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {issue.title}
                        </h4>
                        <Badge 
                          variant={issue.priority === 'critical' ? 'destructive' : 
                                  issue.priority === 'high' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {issue.priority}
                        </Badge>
                      </div>
                      <p className={`text-sm ${
                        issue.type === 'opportunity' ? 'text-green-700' : 'text-red-700'
                      } mb-2`}>
                        {issue.description}
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        Impact: {issue.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-blue-600" />
            <span>Recommended Strategic Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg border-blue-200 bg-blue-50">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-blue-800">Immediate (30 days)</span>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Submit AI research grant application</li>
                <li>• Address faculty retention issues</li>
                <li>• Initiate MIT partnership discussions</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg border-yellow-200 bg-yellow-50">
              <div className="flex items-center space-x-2 mb-2">
                <Building className="h-4 w-4 text-yellow-600" />
                <span className="font-semibold text-yellow-800">Short-term (90 days)</span>
              </div>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Launch international faculty recruitment</li>
                <li>• Upgrade research infrastructure</li>
                <li>• Establish industry advisory board</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg border-purple-200 bg-purple-50">
              <div className="flex items-center space-x-2 mb-2">
                <Globe className="h-4 w-4 text-purple-600" />
                <span className="font-semibold text-purple-800">Long-term (1 year)</span>
              </div>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Achieve top 65 global ranking</li>
                <li>• Launch dual-degree programs</li>
                <li>• Establish international campus</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}