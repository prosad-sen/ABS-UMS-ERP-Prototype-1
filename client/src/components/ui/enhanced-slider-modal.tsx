import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Star, 
  TrendingUp, 
  Award, 
  Target,
  Briefcase,
  Users,
  Calendar,
  BookOpen,
  Zap,
  ExternalLink,
  Linkedin,
  Building,
  BarChart3
} from 'lucide-react';

interface EnhancedSliderModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  title: string;
}

export default function EnhancedSliderModal({ isOpen, onClose, type, title }: EnhancedSliderModalProps) {
  
  const getModalContent = () => {
    switch (type) {
      case 'rising-star':
        return {
          icon: <Star className="h-8 w-8 text-yellow-500" />,
          stats: [
            { label: 'Academic Rank', value: '12/1250', color: 'text-blue-600' },
            { label: 'Achievement Badges', value: '8', color: 'text-purple-600' },
            { label: 'Leadership Score', value: '94/100', color: 'text-green-600' },
            { label: 'Research Projects', value: '3', color: 'text-orange-600' }
          ],
          achievements: [
            { title: 'Dean\'s List Scholar', description: 'Top 1% academic performance', icon: Trophy },
            { title: 'Innovation Challenge Winner', description: 'Best Technical Project 2025', icon: Award },
            { title: 'Student Leader', description: 'CSE Department Representative', icon: Users },
            { title: 'Research Excellence', description: 'Published research paper', icon: BookOpen }
          ],
          recommendations: [
            'Apply for prestigious internships at top-tier companies',
            'Consider pursuing advanced research opportunities',
            'Join entrepreneurship development programs',
            'Explore leadership positions in student organizations'
          ]
        };
      
      case 'exciting-opportunities':
        return {
          icon: <Zap className="h-8 w-8 text-blue-500" />,
          stats: [
            { label: 'Available Opportunities', value: '47', color: 'text-blue-600' },
            { label: 'Application Deadline', value: '15 Days', color: 'text-red-600' },
            { label: 'Success Rate', value: '73%', color: 'text-green-600' },
            { label: 'Alumni Network', value: '2,500+', color: 'text-purple-600' }
          ],
          opportunities: [
            {
              title: 'Google Summer of Code 2025',
              company: 'Google',
              type: 'Open Source Program',
              deadline: 'March 18, 2025',
              stipend: '$1,500 - $6,600',
              skills: ['Python', 'Machine Learning', 'Open Source'],
              difficulty: 'Competitive'
            },
            {
              title: 'Microsoft Imagine Cup',
              company: 'Microsoft',
              type: 'Innovation Competition',
              deadline: 'April 15, 2025',
              prize: '$100,000',
              skills: ['Cloud Computing', 'AI', 'Innovation'],
              difficulty: 'Global'
            },
            {
              title: 'Amazon SDE Internship',
              company: 'Amazon',
              type: 'Summer Internship',
              deadline: 'February 28, 2025',
              stipend: '₹80,000/month',
              skills: ['Data Structures', 'Algorithms', 'System Design'],
              difficulty: 'Highly Selective'
            },
            {
              title: 'COEP Alumni Mentorship',
              company: 'COEP Tech',
              type: 'Mentorship Program',
              deadline: 'Rolling Basis',
              benefit: 'Career Guidance',
              skills: ['Professional Development', 'Networking'],
              difficulty: 'Open'
            }
          ],
          careerInsights: [
            'Tech industry hiring increased by 23% this quarter',
            'AI/ML roles show highest growth potential',
            'COEP alumni placement rate: 94.7% for CSE',
            'Average package for CSE graduates: ₹12.5 LPA'
          ]
        };
      
      default:
        return null;
    }
  };

  const content = getModalContent();
  
  if (!content) return null;

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/school/coep-technological-university/', '_blank');
  };

  const openCOEPWebsite = () => {
    window.open('https://share.google/Ei1JFgWkjMhPkm1W0', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/share/16vMg2fhP5/?mibextid=qi2Omg', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3 text-2xl">
            {content.icon}
            <span>{title}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Section (for Rising Star) */}
          {type === 'rising-star' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span>Your Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <achievement.icon className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Personalized Recommendations</h4>
                  <div className="space-y-2">
                    {content.recommendations?.map((rec, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <p className="text-sm text-gray-700">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Opportunities Section (for Exciting Opportunities) */}
          {type === 'exciting-opportunities' && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-blue-500" />
                    <span>Curated Opportunities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {content.opportunities?.map((opp, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-lg text-gray-900">{opp.title}</h4>
                            <p className="text-blue-600 font-medium">{opp.company}</p>
                          </div>
                          <Badge className={
                            opp.difficulty === 'Competitive' ? 'bg-red-100 text-red-800' :
                            opp.difficulty === 'Global' ? 'bg-purple-100 text-purple-800' :
                            opp.difficulty === 'Highly Selective' ? 'bg-orange-100 text-orange-800' :
                            'bg-green-100 text-green-800'
                          }>
                            {opp.difficulty}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3 text-sm">
                          <div>
                            <p className="text-gray-600">Type</p>
                            <p className="font-medium">{opp.type}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Deadline</p>
                            <p className="font-medium">{opp.deadline}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Reward</p>
                            <p className="font-medium">{opp.stipend || opp.prize || opp.benefit}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Skills</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {opp.skills.slice(0, 2).map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <Button size="sm" className="bg-coep-blue hover:bg-blue-700">
                          Apply Now
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-green-500" />
                    <span>Market Insights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.careerInsights?.map((insight, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        <p className="text-sm text-gray-700">{insight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Social Media and COEP Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building className="h-5 w-5 text-blue-600" />
                <span>Connect with COEP Community</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={openLinkedIn}
                  variant="outline" 
                  className="flex items-center space-x-2"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>COEP LinkedIn</span>
                  <ExternalLink className="h-3 w-3" />
                </Button>
                
                <Button 
                  onClick={openCOEPWebsite}
                  variant="outline" 
                  className="flex items-center space-x-2"
                >
                  <Building className="h-4 w-4" />
                  <span>COEP Website</span>
                  <ExternalLink className="h-3 w-3" />
                </Button>
                
                <Button 
                  onClick={openFacebook}
                  variant="outline" 
                  className="flex items-center space-x-2"
                >
                  <Users className="h-4 w-4" />
                  <span>COEP Facebook</span>
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}