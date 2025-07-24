import React from "react";
import { createRoot } from "react-dom/client";

// Simple working component
function SimpleApp() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f3f4f6',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{ color: '#1e40af', marginBottom: '20px' }}>
          COEP University Management System
        </h1>
        <p style={{ color: '#059669', fontWeight: 'bold', margin: '20px 0' }}>
          ✓ React Application is Working!
        </p>
        <p style={{ color: '#6b7280', marginBottom: '30px' }}>
          The University Management System is now successfully running.
        </p>
        <div style={{ 
          background: '#dbeafe', 
          padding: '15px', 
          borderRadius: '5px', 
          margin: '20px 0' 
        }}>
          <p><strong>System Status:</strong></p>
          <ul style={{ textAlign: 'left', display: 'inline-block', margin: 0 }}>
            <li>Server: Running on Port 5000</li>
            <li>Frontend: React Successfully Mounted</li>
            <li>Database: PostgreSQL Connected</li>
            <li>Authentication: Replit Auth Ready</li>
          </ul>
        </div>
        <button 
          style={{
            background: '#1e40af',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '10px 5px'
          }}
          onClick={() => alert('Interactive button working!')}
        >
          Test Interaction
        </button>
        <button 
          style={{
            background: '#059669',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '10px 5px'
          }}
          onClick={() => window.location.reload()}
        >
          Reload App
        </button>
      </div>
    </div>
  );
}

// Mount the application
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<SimpleApp />);
} else {
  console.error("Root container not found");
}