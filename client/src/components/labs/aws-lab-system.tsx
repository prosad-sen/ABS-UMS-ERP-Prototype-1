import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { 
  Cloud, 
  Server, 
  Play, 
  Pause, 
  Terminal, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Monitor,
  Database,
  Shield,
  Network,
  Zap,
  User,
  Key,
  ExternalLink,
  Activity
} from "lucide-react";

interface AWSLab {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  services: string[];
  status: 'assigned' | 'in-progress' | 'completed' | 'expired';
  deadline: string;
  progress: number;
  serverStatus: 'starting' | 'running' | 'stopped' | 'error';
  instanceType: string;
  region: string;
  estimatedCost: number;
  objectives: string[];
  resources: string[];
}

interface AWSLabSystemProps {
  compact?: boolean;
}

export default function AWSLabSystem({ compact = false }: AWSLabSystemProps) {
  const [selectedLab, setSelectedLab] = useState<AWSLab | null>(null);
  const [showLabDetails, setShowLabDetails] = useState(false);
  const [awsConnected, setAwsConnected] = useState(false);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [serverStarting, setServerStarting] = useState(false);

  const awsLabs: AWSLab[] = [
    {
      id: 'lab-001',
      title: 'EC2 Instance Management',
      description: 'Learn to launch, configure, and manage AWS EC2 instances with different configurations.',
      difficulty: 'beginner',
      duration: 120,
      services: ['EC2', 'VPC', 'Security Groups'],
      status: 'assigned',
      deadline: '2024-03-28',
      progress: 0,
      serverStatus: 'stopped',
      instanceType: 't2.micro',
      region: 'us-east-1',
      estimatedCost: 0.0116,
      objectives: [
        'Launch an EC2 instance',
        'Configure security groups',
        'Connect via SSH',
        'Install web server',
        'Test connectivity'
      ],
      resources: [
        'EC2 User Guide',
        'VPC Documentation',
        'Security Best Practices'
      ]
    },
    {
      id: 'lab-002',
      title: 'S3 Bucket Operations',
      description: 'Master AWS S3 storage service with bucket creation, object management, and access policies.',
      difficulty: 'beginner',
      duration: 90,
      services: ['S3', 'IAM', 'CloudFront'],
      status: 'in-progress',
      deadline: '2024-03-25',
      progress: 65,
      serverStatus: 'running',
      instanceType: 'N/A',
      region: 'us-west-2',
      estimatedCost: 0.023,
      objectives: [
        'Create S3 bucket',
        'Upload/download objects',
        'Configure bucket policies',
        'Enable versioning',
        'Set up static website hosting'
      ],
      resources: [
        'S3 Developer Guide',
        'IAM Best Practices',
        'CloudFront Setup Guide'
      ]
    },
    {
      id: 'lab-003',
      title: 'RDS Database Setup',
      description: 'Deploy and manage relational databases using Amazon RDS with backup and scaling features.',
      difficulty: 'intermediate',
      duration: 150,
      services: ['RDS', 'VPC', 'CloudWatch'],
      status: 'assigned',
      deadline: '2024-04-02',
      progress: 0,
      serverStatus: 'stopped',
      instanceType: 'db.t3.micro',
      region: 'ap-south-1',
      estimatedCost: 0.0464,
      objectives: [
        'Create RDS instance',
        'Configure database security',
        'Connect from EC2',
        'Perform backup operations',
        'Monitor performance'
      ],
      resources: [
        'RDS User Guide',
        'Database Security Guide',
        'CloudWatch Monitoring'
      ]
    },
    {
      id: 'lab-004',
      title: 'Lambda Serverless Functions',
      description: 'Build and deploy serverless applications using AWS Lambda with API Gateway integration.',
      difficulty: 'advanced',
      duration: 180,
      services: ['Lambda', 'API Gateway', 'DynamoDB'],
      status: 'completed',
      deadline: '2024-03-20',
      progress: 100,
      serverStatus: 'stopped',
      instanceType: 'N/A',
      region: 'eu-west-1',
      estimatedCost: 0.00002,
      objectives: [
        'Create Lambda function',
        'Set up API Gateway',
        'Integrate with DynamoDB',
        'Implement error handling',
        'Deploy to production'
      ],
      resources: [
        'Lambda Developer Guide',
        'API Gateway Documentation',
        'DynamoDB Best Practices'
      ]
    }
  ];

  const getDifficultyColor = (difficulty: AWSLab['difficulty']) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
    }
  };

  const getStatusColor = (status: AWSLab['status']) => {
    switch (status) {
      case 'assigned': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-orange-100 text-orange-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'expired': return 'bg-red-100 text-red-800';
    }
  };

  const getServerStatusColor = (status: AWSLab['serverStatus']) => {
    switch (status) {
      case 'running': return 'text-green-600';
      case 'starting': return 'text-yellow-600';
      case 'stopped': return 'text-gray-600';
      case 'error': return 'text-red-600';
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'EC2': return <Server className="h-4 w-4" />;
      case 'S3': return <Database className="h-4 w-4" />;
      case 'RDS': return <Database className="h-4 w-4" />;
      case 'Lambda': return <Zap className="h-4 w-4" />;
      case 'VPC': return <Network className="h-4 w-4" />;
      case 'IAM': return <Shield className="h-4 w-4" />;
      default: return <Cloud className="h-4 w-4" />;
    }
  };

  const handleStartLab = async (lab: AWSLab) => {
    setServerStarting(true);
    setSelectedLab(lab);
    
    // Simulate AWS server startup
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setConnectionProgress(i);
    }
    
    setAwsConnected(true);
    setServerStarting(false);
    setShowLabDetails(true);
    
    // Update lab status to running
    lab.serverStatus = 'running';
    if (lab.status === 'assigned') {
      lab.status = 'in-progress';
    }
  };

  const handleConnectAWS = async () => {
    setServerStarting(true);
    
    // Simulate AWS connection process
    for (let i = 0; i <= 100; i += 5) {
      await new Promise(resolve => setTimeout(resolve, 100));
      setConnectionProgress(i);
    }
    
    setAwsConnected(true);
    setServerStarting(false);
  };

  if (compact) {
    // Compact version for dashboard
    const activeLabs = awsLabs.filter(lab => lab.status === 'assigned' || lab.status === 'in-progress');
    
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Cloud className="h-5 w-5 text-orange-600" />
            <span>AWS Labs</span>
            <Badge className="bg-orange-100 text-orange-800">
              {activeLabs.length} Active
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {activeLabs.slice(0, 2).map((lab) => (
            <div key={lab.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-sm">{lab.title}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className={getDifficultyColor(lab.difficulty)}>
                    {lab.difficulty}
                  </Badge>
                  <Badge className={getStatusColor(lab.status)}>
                    {lab.status}
                  </Badge>
                </div>
              </div>
              <Button 
                size="sm" 
                onClick={() => handleStartLab(lab)}
                disabled={lab.serverStatus === 'starting'}
                className="bg-orange-600 hover:bg-orange-700"
              >
                {lab.serverStatus === 'running' ? (
                  <>
                    <Terminal className="h-4 w-4 mr-1" />
                    Continue
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-1" />
                    Start
                  </>
                )}
              </Button>
            </div>
          ))}
          
          {activeLabs.length > 2 && (
            <Button variant="outline" className="w-full" onClick={() => window.location.href = '/labs'}>
              View All Labs ({activeLabs.length})
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  // Full version for dedicated labs page
  return (
    <div className="space-y-6">
      {/* AWS Connection Status */}
      <Card className={`border-2 ${awsConnected ? 'border-green-200 bg-green-50' : 'border-orange-200 bg-orange-50'}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${awsConnected ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`}></div>
              <div>
                <p className="font-semibold">
                  AWS Lab Environment: {awsConnected ? 'Connected' : 'Disconnected'}
                </p>
                <p className="text-sm text-gray-600">
                  {awsConnected 
                    ? 'Ready to start lab exercises with full AWS access' 
                    : 'Connect to AWS to access your assigned lab environments'
                  }
                </p>
              </div>
            </div>
            {!awsConnected && (
              <Button onClick={handleConnectAWS} disabled={serverStarting} className="bg-orange-600 hover:bg-orange-700">
                {serverStarting ? (
                  <>
                    <Activity className="h-4 w-4 mr-2 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <Key className="h-4 w-4 mr-2" />
                    Connect AWS
                  </>
                )}
              </Button>
            )}
          </div>
          
          {serverStarting && (
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Establishing AWS connection...</span>
                <span>{connectionProgress}%</span>
              </div>
              <Progress value={connectionProgress} className="h-2" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Labs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awsLabs.map((lab) => (
          <Card key={lab.id} className="hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{lab.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{lab.description}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge className={getDifficultyColor(lab.difficulty)}>
                    {lab.difficulty}
                  </Badge>
                  <Badge className={getStatusColor(lab.status)}>
                    {lab.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Progress Bar */}
              {lab.progress > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{lab.progress}%</span>
                  </div>
                  <Progress value={lab.progress} className="h-2" />
                </div>
              )}

              {/* Lab Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Duration</p>
                  <p className="font-medium">{lab.duration} minutes</p>
                </div>
                <div>
                  <p className="text-gray-600">Deadline</p>
                  <p className="font-medium">{lab.deadline}</p>
                </div>
                <div>
                  <p className="text-gray-600">Region</p>
                  <p className="font-medium">{lab.region}</p>
                </div>
                <div>
                  <p className="text-gray-600">Est. Cost</p>
                  <p className="font-medium">${lab.estimatedCost}/hour</p>
                </div>
              </div>

              {/* AWS Services */}
              <div>
                <p className="text-sm text-gray-600 mb-2">AWS Services</p>
                <div className="flex flex-wrap gap-2">
                  {lab.services.map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {getServiceIcon(service)}
                      <span className="ml-1">{service}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Server Status */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Monitor className={`h-4 w-4 ${getServerStatusColor(lab.serverStatus)}`} />
                  <span className="text-sm font-medium">
                    Server: {lab.serverStatus}
                  </span>
                  {lab.instanceType !== 'N/A' && (
                    <Badge variant="outline" className="text-xs">
                      {lab.instanceType}
                    </Badge>
                  )}
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  lab.serverStatus === 'running' ? 'bg-green-500 animate-pulse' :
                  lab.serverStatus === 'starting' ? 'bg-yellow-500 animate-pulse' :
                  'bg-gray-400'
                }`}></div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button 
                  className="flex-1 bg-orange-600 hover:bg-orange-700"
                  onClick={() => handleStartLab(lab)}
                  disabled={!awsConnected || lab.status === 'completed' || serverStarting}
                >
                  {lab.serverStatus === 'running' ? (
                    <>
                      <Terminal className="h-4 w-4 mr-2" />
                      Continue Lab
                    </>
                  ) : lab.status === 'completed' ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Start Lab
                    </>
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedLab(lab);
                    setShowLabDetails(true);
                  }}
                >
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lab Details Modal */}
      {selectedLab && (
        <Dialog open={showLabDetails} onOpenChange={setShowLabDetails}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                <Cloud className="h-5 w-5 text-orange-600" />
                <span>{selectedLab.title}</span>
                {selectedLab.serverStatus === 'running' && (
                  <Badge className="bg-green-100 text-green-800">
                    <Activity className="h-3 w-3 mr-1 animate-pulse" />
                    Live Environment
                  </Badge>
                )}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 mt-4">
              {/* Lab Overview */}
              <div>
                <h3 className="font-semibold mb-2">Lab Overview</h3>
                <p className="text-gray-600">{selectedLab.description}</p>
              </div>

              {/* Learning Objectives */}
              <div>
                <h3 className="font-semibold mb-2">Learning Objectives</h3>
                <div className="space-y-2">
                  {selectedLab.objectives.map((objective, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AWS Console Access */}
              {selectedLab.serverStatus === 'running' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">AWS Console Access</h3>
                  <p className="text-sm text-green-700 mb-3">
                    Your lab environment is ready. Access the AWS console to begin your exercises.
                  </p>
                  <div className="flex space-x-2">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open AWS Console
                    </Button>
                    <Button variant="outline">
                      <Terminal className="h-4 w-4 mr-2" />
                      SSH Access
                    </Button>
                  </div>
                </div>
              )}

              {/* Resources */}
              <div>
                <h3 className="font-semibold mb-2">Resources</h3>
                <div className="space-y-2">
                  {selectedLab.resources.map((resource, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <ExternalLink className="h-4 w-4 text-blue-600" />
                      <a href="#" className="text-blue-600 hover:underline">{resource}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}