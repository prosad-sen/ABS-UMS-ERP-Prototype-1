import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ExternalLink,
  Calendar,
  Award,
  Newspaper,
  Users,
  BookOpen,
  Heart,
  MessageCircle,
  Share
} from "lucide-react";

interface SlideData {
  id: string;
  type: 'social' | 'press' | 'student' | 'event';
  title: string;
  content: string;
  image?: string;
  date: string;
  author?: string;
  platform?: string;
  likes?: number;
  comments?: number;
  link?: string;
  tags?: string[];
}

export default function AnimatedInfoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides: SlideData[] = [
    {
      id: '1',
      type: 'social',
      title: 'ABC Tech Fest 2025 Winners Announced!',
      content: 'Congratulations to all participants! Outstanding innovation projects showcased by our talented students. The future of technology is bright at ABC Campus! 🚀',
      platform: 'Instagram',
      date: '2 hours ago',
      likes: 1247,
      comments: 89,
      link: 'https://instagram.com/xyz_engineering',
      tags: ['TechFest2025', 'Innovation', 'Students']
    },
    {
      id: '2',
      type: 'press',
      title: 'ABC Campus Students Win National Coding Championship',
      content: 'Three ABC Campus Computer Science students secured top positions in the All India Coding Competition, bringing glory to the institution.',
      author: 'The Times of India',
      date: '1 day ago',
      link: 'https://timesofindia.com/xyz-coding-win',
      tags: ['Achievement', 'Coding', 'National']
    },
    {
      id: '3',
      type: 'student',
      title: 'Student Spotlight: Priya Sharma',
      content: 'Final year Computer Science student Priya secured internship at Google! Her journey from classroom projects to tech giant internship inspires us all.',
      date: '3 days ago',
      tags: ['StudentSuccess', 'Internship', 'Google']
    },
    {
      id: '4',
      type: 'event',
      title: 'Annual Cultural Festival - Ganesh Kala Krida 2025',
      content: 'Join us for three days of music, dance, drama, and cultural celebrations. Register now for competitions and performances!',
      date: 'March 25-27, 2025',
      tags: ['Cultural', 'Festival', 'Registration']
    },
    {
      id: '5',
      type: 'social',
      title: 'New Research Publication',
      content: 'Dr. Mehta\'s AI research team publishes breakthrough paper on Machine Learning applications in sustainable engineering. Proud of our faculty! 📚',
      platform: 'LinkedIn',
      date: '5 days ago',
      likes: 892,
      comments: 34,
      link: 'https://linkedin.com/school/xyz-engineering',
      tags: ['Research', 'AI', 'Publication']
    },
    {
      id: '6',
      type: 'press',
      title: 'ABC Campus Ranks in Top 10 Engineering Colleges',
      content: 'ABC Campus maintains its position among India\'s premier engineering institutions in latest NIRF rankings.',
      author: 'Education Today',
      date: '1 week ago',
      link: 'https://educationtoday.in/xyz-ranking',
      tags: ['Ranking', 'Excellence', 'NIRF']
    }
  ];

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getTypeIcon = (type: SlideData['type']) => {
    switch (type) {
      case 'social': return <Users className="h-4 w-4" />;
      case 'press': return <Newspaper className="h-4 w-4" />;
      case 'student': return <BookOpen className="h-4 w-4" />;
      case 'event': return <Calendar className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: SlideData['type']) => {
    switch (type) {
      case 'social': return 'bg-blue-100 text-blue-800';
      case 'press': return 'bg-green-100 text-green-800';
      case 'student': return 'bg-purple-100 text-purple-800';
      case 'event': return 'bg-orange-100 text-orange-800';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return <Instagram className="h-4 w-4" />;
      case 'Twitter': return <Twitter className="h-4 w-4" />;
      case 'LinkedIn': return <Linkedin className="h-4 w-4" />;
      default: return <ExternalLink className="h-4 w-4" />;
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2">
      <CardContent className="p-0">
        <div className="relative h-80">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 flex items-center justify-center transition-all duration-500"
            style={{ 
              background: currentSlideData.type === 'social' 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : currentSlideData.type === 'press'
                ? 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
                : currentSlideData.type === 'student'
                ? 'linear-gradient(135deg, #e055a3 0%, #667eea 100%)'
                : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
            }}
          >
            <div className="text-center text-white p-6 max-w-lg">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Badge className={`${getTypeColor(currentSlideData.type)} flex items-center space-x-1`}>
                  {getTypeIcon(currentSlideData.type)}
                  <span className="capitalize">{currentSlideData.type}</span>
                </Badge>
                {currentSlideData.platform && (
                  <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                    {getPlatformIcon(currentSlideData.platform)}
                    <span className="ml-1">{currentSlideData.platform}</span>
                  </Badge>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight">{currentSlideData.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">{currentSlideData.content}</p>
              
              <div className="flex items-center justify-center space-x-4 text-xs text-white/80 mb-4">
                <span>{currentSlideData.date}</span>
                {currentSlideData.author && <span>• {currentSlideData.author}</span>}
              </div>

              {currentSlideData.type === 'social' && (
                <div className="flex items-center justify-center space-x-6 text-white/90 mb-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{currentSlideData.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{currentSlideData.comments}</span>
                  </div>
                  <Share className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform" />
                </div>
              )}

              {currentSlideData.tags && (
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {currentSlideData.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-white/10 text-white text-xs border-white/30">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}

              {currentSlideData.link && (
                <Button variant="outline" size="sm" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Read More
                </Button>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="bg-white/20 text-white hover:bg-white/30 rounded-full w-10 h-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute inset-y-0 right-4 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="bg-white/20 text-white hover:bg-white/30 rounded-full w-10 h-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Auto-play Toggle */}
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setAutoPlay(!autoPlay)}
              className="bg-white/20 text-white hover:bg-white/30 text-xs"
            >
              {autoPlay ? 'Pause' : 'Play'}
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}