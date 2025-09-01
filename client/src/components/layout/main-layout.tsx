import { useState, useEffect } from 'react';
import Header from './header';
import Sidebar from './sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      const isMobileDevice = width < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
      
      // Force clear any cached navigation on mobile
      if (isMobileDevice) {
        localStorage.removeItem('cached_navigation');
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{position: 'relative', margin: '0', padding: '0'}}>
      <Header onMenuClick={toggleSidebar} isMobile={isMobile} />
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={closeSidebar} 
        isMobile={isMobile}
      />
      
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="mobile-overlay active"
          onClick={closeSidebar}
        />
      )}
      
      <main 
        className={`${isMobile ? 'mobile-content' : ''}`}
        style={isMobile 
          ? { padding: '1rem', paddingTop: '4rem' }
          : { position: 'absolute', top: '56px', left: '256px', right: '0', bottom: '0', padding: '0' }
        }
      >
        {children}
      </main>
    </div>
  );
}