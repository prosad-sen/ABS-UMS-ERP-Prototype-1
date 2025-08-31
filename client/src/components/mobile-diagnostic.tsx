import { useEffect, useState } from 'react';

interface DiagnosticInfo {
  userAgent: string;
  viewport: string;
  url: string;
  serverStatus?: string;
  connectivity?: string;
  timestamp: string;
}

export function MobileDiagnostic() {
  const [diagnostics, setDiagnostics] = useState<DiagnosticInfo | null>(null);
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      const gatherDiagnostics = async () => {
        const info: DiagnosticInfo = {
          userAgent: navigator.userAgent,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          url: window.location.href,
          timestamp: new Date().toISOString()
        };

        // Test server connectivity
        try {
          const healthResponse = await fetch('/api/health');
          const healthData = await healthResponse.json();
          info.serverStatus = healthData.status;
          info.connectivity = 'Connected';
        } catch (error) {
          info.serverStatus = 'Error';
          info.connectivity = `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`;
        }

        setDiagnostics(info);
        setShowDiagnostics(true);
      };

      // Show diagnostics after 2 seconds on mobile
      setTimeout(gatherDiagnostics, 2000);
    }
  }, []);

  if (!showDiagnostics || !diagnostics) {
    return null;
  }

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '15px',
        borderRadius: '8px',
        fontSize: '12px',
        zIndex: 9999,
        maxHeight: '200px',
        overflow: 'auto'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <strong>Mobile Diagnostics</strong>
        <button 
          onClick={() => setShowDiagnostics(false)}
          style={{
            background: 'transparent',
            border: '1px solid white',
            color: 'white',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '10px',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>
      
      <div style={{ marginBottom: '5px' }}>
        <strong>Server Status:</strong> {diagnostics.serverStatus}
      </div>
      <div style={{ marginBottom: '5px' }}>
        <strong>Connectivity:</strong> {diagnostics.connectivity}
      </div>
      <div style={{ marginBottom: '5px' }}>
        <strong>Viewport:</strong> {diagnostics.viewport}
      </div>
      <div style={{ marginBottom: '5px' }}>
        <strong>URL:</strong> {diagnostics.url}
      </div>
      <div style={{ fontSize: '10px', color: '#ccc' }}>
        {diagnostics.timestamp}
      </div>
    </div>
  );
}