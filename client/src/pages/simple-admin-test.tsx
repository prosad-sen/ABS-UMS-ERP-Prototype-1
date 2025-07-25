import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SimpleAdminTest() {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    console.log(message);
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const testAdminAccess = () => {
    addLog('Testing admin dashboard access...');
    
    // Set admin role
    localStorage.setItem('selectedRole', 'admin');
    localStorage.setItem('userRole', 'admin');
    addLog('Admin role set in localStorage');
    
    // Navigate to admin dashboard
    addLog('Navigating to /admin-dashboard...');
    window.location.href = '/admin-dashboard';
  };

  const checkStorage = () => {
    const selectedRole = localStorage.getItem('selectedRole');
    const userRole = localStorage.getItem('userRole');
    addLog(`Selected Role: ${selectedRole || 'none'}`);
    addLog(`User Role: ${userRole || 'none'}`);
  };

  const clearStorage = () => {
    localStorage.clear();
    addLog('Storage cleared');
    setLogs([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Admin Dashboard Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <Button onClick={testAdminAccess} className="bg-purple-600 hover:bg-purple-700">
              🔧 Test Admin Dashboard Access
            </Button>
            <Button onClick={checkStorage} variant="outline">
              🔍 Check Current Storage
            </Button>
            <Button onClick={clearStorage} variant="outline">
              🗑️ Clear Storage
            </Button>
            <Button onClick={() => window.location.href = '/'} variant="outline">
              🏠 Back to Home
            </Button>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Console Logs:</h3>
            <div className="bg-gray-100 p-4 rounded-lg max-h-64 overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-gray-500">No logs yet...</p>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="text-sm font-mono">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}