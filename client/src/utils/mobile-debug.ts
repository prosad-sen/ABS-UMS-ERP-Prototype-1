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

// Auto-run diagnostics on mobile
if (typeof window !== 'undefined' && window.innerWidth < 768) {
  setTimeout(() => {
    mobileDebug.detectEnvironment();
    mobileDebug.checkConnectivity();
  }, 1000);
}