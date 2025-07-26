import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Award, 
  FileText, 
  CheckCircle, 
  Clock,
  TrendingUp,
  AlertTriangle,
  Shield,
  Star,
  Calendar,
  Download,
  Upload
} from 'lucide-react';

export default function AccreditationManagement() {
  const [activeTab, setActiveTab] = useState('overview');

  const accreditationStatus = {
    naacGrade: 'A++',
    naacScore: 3.62,
    nbaProgramsAccredited: 8,
    totalPrograms: 10,
    lastReview: '2023-11-15',
    nextReview: '2029-11-15',
    validityPeriod: '6 years'
  };

  const accreditationBodies = [
    {
      name: 'NAAC (National Assessment and Accreditation Council)',
      status: 'Accredited',
      grade: 'A++',
      score: 3.62,
      validFrom: '2023-11-15',
      validTo: '2029-11-15',
      certificate: 'NAAC-2023-A++.pdf'
    },
    {
      name: 'NBA (National Board of Accreditation)',
      status: 'Accredited',
      programs: 8,
      validFrom: '2022-06-01',
      validTo: '2025-05-31',
      certificate: 'NBA-2022-Programs.pdf'
    },
    {
      name: 'AICTE (All India Council for Technical Education)',
      status: 'Approved',
      validFrom: '2023-07-01',
      validTo: '2024-06-30',
      certificate: 'AICTE-2023-Approval.pdf'
    },
    {
      name: 'UGC (University Grants Commission)',
      status: 'Recognized',
      validFrom: '2020-01-01',
      validTo: '2025-12-31',
      certificate: 'UGC-2020-Recognition.pdf'
    }
  ];

  const nbaPrograms = [
    {
      program: 'Computer Engineering',
      status: 'Accredited',
      validFrom: '2022-06-01',
      validTo: '2025-05-31',
      tier: 'Tier-I',
      score: 750
    },
    {
      program: 'Mechanical Engineering',
      status: 'Accredited',
      validFrom: '2022-06-01',
      validTo: '2025-05-31',
      tier: 'Tier-I',
      score: 720
    },
    {
      program: 'Civil Engineering',
      status: 'Accredited',
      validFrom: '2022-06-01',
      validTo: '2025-05-31',
      tier: 'Tier-I',
      score: 710
    },
    {
      program: 'Electronics Engineering',
      status: 'Accredited',
      validFrom: '2022-06-01',
      validTo: '2025-05-31',
      tier: 'Tier-I',
      score: 740
    },
    {
      program: 'Production Engineering',
      status: 'Under Review',
      appliedDate: '2024-01-15',
      expectedDecision: '2024-06-30',
      tier: 'Pending',
      score: 0
    },
    {
      program: 'Instrumentation Engineering',
      status: 'Under Review',
      appliedDate: '2024-01-15',
      expectedDecision: '2024-06-30',
      tier: 'Pending',
      score: 0
    }
  ];

  const qualityIndicators = [
    { indicator: 'Student Satisfaction', score: 4.2, maxScore: 5.0, category: 'Teaching-Learning' },
    { indicator: 'Faculty Qualification', score: 92, maxScore: 100, category: 'Faculty' },
    { indicator: 'Research Publications', score: 87, maxScore: 100, category: 'Research' },
    { indicator: 'Industry Collaboration', score: 78, maxScore: 100, category: 'Industry' },
    { indicator: 'Infrastructure', score: 88, maxScore: 100, category: 'Infrastructure' },
    { indicator: 'Placement Rate', score: 87.3, maxScore: 100, category: 'Outcomes' },
    { indicator: 'Alumni Network', score: 83, maxScore: 100, category: 'Stakeholder' },
    { indicator: 'Governance', score: 90, maxScore: 100, category: 'Governance' }
  ];

  const complianceChecklist = [
    { item: 'Faculty-Student Ratio', status: 'compliant', requirement: '1:15', current: '1:12' },
    { item: 'Faculty with PhD', status: 'compliant', requirement: '70%', current: '84%' },
    { item: 'Research Publications', status: 'compliant', requirement: '100/year', current: '156/year' },
    { item: 'Laboratory Facilities', status: 'compliant', requirement: 'Adequate', current: 'Excellent' },
    { item: 'Library Resources', status: 'compliant', requirement: 'Adequate', current: 'Very Good' },
    { item: 'Industry Partnerships', status: 'needs-attention', requirement: '20+', current: '18' },
    { item: 'Student Support Services', status: 'compliant', requirement: 'Available', current: 'Excellent' },
    { item: 'Financial Resources', status: 'compliant', requirement: 'Adequate', current: 'Good' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accredited':
      case 'Approved':
      case 'Recognized':
      case 'compliant':
        return 'bg-green-100 text-green-800';
      case 'Under Review':
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'needs-attention':
        return 'bg-orange-100 text-orange-800';
      case 'Expired':
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Accreditation & Quality Assurance</h1>
          <p className="text-gray-600">Comprehensive accreditation management and quality monitoring for COEP</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Certificates
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Upload className="h-4 w-4 mr-2" />
            Upload Documents
          </Button>
        </div>
      </div>

      {/* Accreditation Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Award className="h-10 w-10 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">NAAC Grade</p>
                <p className="text-3xl font-bold text-green-600">{accreditationStatus.naacGrade}</p>
                <p className="text-sm text-gray-500">Score: {accreditationStatus.naacScore}/4.0</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Shield className="h-10 w-10 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">NBA Programs</p>
                <p className="text-3xl font-bold">{accreditationStatus.nbaProgramsAccredited}/{accreditationStatus.totalPrograms}</p>
                <p className="text-sm text-gray-500">Accredited Programs</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-10 w-10 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Next Review</p>
                <p className="text-lg font-bold">{accreditationStatus.nextReview}</p>
                <p className="text-sm text-gray-500">{accreditationStatus.validityPeriod} validity</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-10 w-10 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Overall Quality</p>
                <p className="text-3xl font-bold text-green-600">Excellent</p>
                <p className="text-sm text-gray-500">All parameters met</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="naac">NAAC</TabsTrigger>
          <TabsTrigger value="nba">NBA Programs</TabsTrigger>
          <TabsTrigger value="quality">Quality Indicators</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Accreditation Bodies Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accreditationBodies.map((body, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{body.name}</h3>
                          <Badge className={getStatusColor(body.status)}>
                            {body.status}
                          </Badge>
                          {body.grade && (
                            <Badge className="bg-green-100 text-green-800">
                              Grade: {body.grade}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Valid From:</span>
                            <br />
                            {body.validFrom}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Valid To:</span>
                            <br />
                            {body.validTo}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Certificate:</span>
                            <br />
                            <Button variant="link" className="p-0 h-auto text-blue-600">
                              {body.certificate}
                            </Button>
                          </div>
                        </div>

                        {body.score && (
                          <div className="mt-3">
                            <span className="font-medium text-gray-600">Score: </span>
                            <span className="text-lg font-bold text-green-600">{body.score}/4.0</span>
                          </div>
                        )}

                        {body.programs && (
                          <div className="mt-3">
                            <span className="font-medium text-gray-600">Accredited Programs: </span>
                            <span className="text-lg font-bold text-blue-600">{body.programs}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          View Details
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

        <TabsContent value="naac" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>NAAC Accreditation Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Current Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Grade:</span>
                      <Badge className="bg-green-100 text-green-800">A++</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>CGPA:</span>
                      <span className="font-bold">3.62/4.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accreditation Date:</span>
                      <span>November 15, 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Valid Until:</span>
                      <span>November 15, 2029</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peer Team Visit:</span>
                      <span>October 2023</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Criteria-wise Scores</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Curricular Aspects:</span>
                      <span className="font-bold">3.8/4.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Teaching-Learning:</span>
                      <span className="font-bold">3.6/4.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Research & Innovation:</span>
                      <span className="font-bold">3.7/4.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Infrastructure:</span>
                      <span className="font-bold">3.5/4.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Student Support:</span>
                      <span className="font-bold">3.4/4.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Governance:</span>
                      <span className="font-bold">3.8/4.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Innovation Practices:</span>
                      <span className="font-bold">3.5/4.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nba" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>NBA Program Accreditation Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nbaPrograms.map((program, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold">{program.program}</h3>
                          <Badge className={getStatusColor(program.status)}>
                            {program.status}
                          </Badge>
                          {program.tier !== 'Pending' && (
                            <Badge className="bg-blue-100 text-blue-800">
                              {program.tier}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          {program.validFrom && (
                            <div>
                              <span className="font-medium text-gray-600">Valid From:</span>
                              <br />
                              {program.validFrom}
                            </div>
                          )}
                          {program.validTo && (
                            <div>
                              <span className="font-medium text-gray-600">Valid To:</span>
                              <br />
                              {program.validTo}
                            </div>
                          )}
                          {program.score > 0 && (
                            <div>
                              <span className="font-medium text-gray-600">Score:</span>
                              <br />
                              <span className="font-bold text-green-600">{program.score}/1000</span>
                            </div>
                          )}
                          {program.appliedDate && (
                            <div>
                              <span className="font-medium text-gray-600">Applied Date:</span>
                              <br />
                              {program.appliedDate}
                            </div>
                          )}
                          {program.expectedDecision && (
                            <div>
                              <span className="font-medium text-gray-600">Expected Decision:</span>
                              <br />
                              {program.expectedDecision}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {program.status === 'Under Review' && (
                          <Button variant="outline" size="sm">
                            Track Status
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quality" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quality Indicators Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {qualityIndicators.map((indicator, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">{indicator.indicator}</h3>
                          <div className="text-right">
                            <span className={`text-xl font-bold ${getScoreColor(indicator.score, indicator.maxScore)}`}>
                              {indicator.score}
                            </span>
                            <span className="text-gray-600">/{indicator.maxScore}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline">{indicator.category}</Badge>
                          <span className="text-sm text-gray-600">
                            {((indicator.score / indicator.maxScore) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                (indicator.score / indicator.maxScore) * 100 >= 80 
                                  ? 'bg-green-600' 
                                  : (indicator.score / indicator.maxScore) * 100 >= 60 
                                    ? 'bg-yellow-600' 
                                    : 'bg-red-600'
                              }`}
                              style={{ width: `${(indicator.score / indicator.maxScore) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceChecklist.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{item.item}</h3>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status === 'compliant' ? (
                              <>
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Compliant
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="h-3 w-3 mr-1" />
                                Needs Attention
                              </>
                            )}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Requirement:</span>
                            <br />
                            {item.requirement}
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Current Status:</span>
                            <br />
                            <span className={item.status === 'compliant' ? 'text-green-600 font-semibold' : 'text-orange-600 font-semibold'}>
                              {item.current}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {item.status === 'needs-attention' && (
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                            Take Action
                          </Button>
                        )}
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