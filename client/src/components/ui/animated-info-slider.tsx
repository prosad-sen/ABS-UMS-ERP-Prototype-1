import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, TrendingUp, Award, Clock } from "lucide-react";

interface SliderItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  stats?: {
    value: string;
    label: string;
    trend?: "up" | "down" | "stable";
  };
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface AnimatedInfoSliderProps {
  items: SliderItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export default function AnimatedInfoSlider({ 
  items, 
  autoPlay = true, 
  interval = 5000,
  className = ""
}: AnimatedInfoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (!items.length) return null;

  const currentItem = items[currentIndex];
  const IconComponent = currentItem.icon;

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-3 w-3 text-green-600" />;
      case 'down':
        return <TrendingUp className="h-3 w-3 text-red-600 rotate-180" />;
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Card className="overflow-hidden shadow-lg border-0">
        <CardContent className="p-0">
          <div 
            className={`${currentItem.bgColor} relative min-h-[200px] flex items-center justify-between p-6 text-white transition-all duration-500 ease-in-out`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(autoPlay)}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-24 h-24 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-8 h-8 border border-white/20 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="flex-1 z-10">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{currentItem.title}</h3>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Featured Information
                  </Badge>
                </div>
              </div>
              
              <p className="text-white/90 mb-4 max-w-md leading-relaxed">
                {currentItem.description}
              </p>
              
              {currentItem.stats && (
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold">{currentItem.stats.value}</span>
                      {getTrendIcon(currentItem.stats.trend)}
                    </div>
                    <div className="text-white/80 text-sm">{currentItem.stats.label}</div>
                  </div>
                </div>
              )}
              
              {currentItem.action && (
                <Button 
                  onClick={currentItem.action.onClick}
                  className="bg-white text-gray-900 hover:bg-white/90"
                >
                  {currentItem.action.label}
                </Button>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="flex flex-col items-center space-y-4 z-10">
              <Button
                variant="ghost"
                size="sm"
                onClick={goToPrevious}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex flex-col space-y-2">
                {items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={goToNext}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Auto-play indicator */}
            <div className="absolute bottom-2 left-2">
              <button
                onClick={toggleAutoPlay}
                className="text-white/60 hover:text-white/80 text-xs flex items-center space-x-1"
              >
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                <span>{isAutoPlaying ? 'Auto' : 'Manual'}</span>
              </button>
            </div>

            {/* Progress bar */}
            {isAutoPlaying && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div 
                  className="h-full bg-white transition-all duration-100 ease-linear"
                  style={{
                    width: `${((Date.now() % interval) / interval) * 100}%`,
                    animation: `progress ${interval}ms linear infinite`
                  }}
                ></div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>


    </div>
  );
}