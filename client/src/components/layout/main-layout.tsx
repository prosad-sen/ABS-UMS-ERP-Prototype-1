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
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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