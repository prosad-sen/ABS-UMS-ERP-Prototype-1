// Mobile debugging utilities
export const mobileDebug = {
  log: (message: string, data?: any) => {
    console.log(`[MOBILE DEBUG] ${message}`, data || '');
    
    // Visual debug for mobile
    if (window.innerWidth < 768) {
      const debugDiv = document.getElementById('mobile-debug') || document.createElement('div');
      debugDiv.id = 'mobile-debug';
      debugDiv.style.cssText = `
        position: fixed;
        bottom: 10px;
        left: 10px;
        right: 10px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 12px;
        z-index: 9999;
        max-height: 200px;
        overflow-y: auto;
      `;
      
      const timestamp = new Date().toLocaleTimeString();
      debugDiv.innerHTML += `<div>[${timestamp}] ${message}</div>`;
      
      if (!document.body.contains(debugDiv)) {
        document.body.appendChild(debugDiv);
      }
      
      // Auto-hide after 10 seconds
      setTimeout(() => {
        if (debugDiv.parentNode) {
          debugDiv.parentNode.removeChild(debugDiv);
        }
      }, 10000);
    }
  },
  
  checkConnectivity: async () => {
    try {
      const response = await fetch('/mobile-check');
      const data = await response.json();
      mobileDebug.log('Connectivity check successful', data);
      return data;
    } catch (error) {
      mobileDebug.log('Connectivity check failed', error);
      return null;
    }
  },
  
  detectEnvironment: () => {
    const info = {
      userAgent: navigator.userAgent,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      url: window.location.href,
      isMobile: window.innerWidth < 768,
      isReplit: window.location.hostname.includes('replit.dev')
    };
    mobileDebug.log('Environment detected', info);
    return info;
  }
};

// Auto-run diagnostics on mobile with enhanced error handling
if (typeof window !== 'undefined') {
  setTimeout(async () => {
    try {
      const env = mobileDebug.detectEnvironment();
      const connectivity = await mobileDebug.checkConnectivity();
      
      if (env.isMobile) {
        mobileDebug.log('Mobile environment initialized', { env, connectivity });
        
        // Additional mobile-specific checks
        mobileDebug.log('Screen info', {
          screen: `${screen.width}x${screen.height}`,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          devicePixelRatio: window.devicePixelRatio,
          orientation: screen.orientation?.type || 'unknown'
        });
        
        // Test basic functionality
        try {
          const testResponse = await fetch('/api/health', { method: 'GET' });
          mobileDebug.log('Health check', { status: testResponse.status });
        } catch (error) {
          mobileDebug.log('Health check failed', error);
        }
      }
    } catch (error) {
      mobileDebug.log('Mobile diagnostics failed', error);
    }
  }, 500);
}