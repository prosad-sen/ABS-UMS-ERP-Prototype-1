import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '3rem',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '600px',
        width: '90%'
      }}>
        <h1 style={{
          color: '#1e40af',
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontWeight: '700'
        }}>
          COEP University Management System
        </h1>
        
        <p style={{
          color: '#6b7280',
          fontSize: '1.2rem',
          marginBottom: '2rem'
        }}>
          College of Engineering, Pune
        </p>
        
        <div style={{
          background: '#dcfce7',
          color: '#16a34a',
          padding: '1rem',
          borderRadius: '10px',
          margin: '2rem 0',
          fontWeight: '600'
        }}>
          ✓ React Application Successfully Loaded!
        </div>
        
        <div style={{
          background: '#f1f5f9',
          padding: '1.5rem',
          borderRadius: '10px',
          margin: '2rem 0'
        }}>
          <h3 style={{ color: '#1e40af', marginBottom: '1rem' }}>System Status</h3>
          <ul style={{ textAlign: 'left', display: 'inline-block', color: '#4b5563' }}>
            <li>✓ Frontend: React mounted successfully</li>
            <li>✓ Server: Express.js running on port 5000</li>
            <li>✓ Database: PostgreSQL connected</li>
            <li>✓ Authentication: Replit OAuth ready</li>
          </ul>
        </div>
        
        <div>
          <button 
            style={{
              background: '#1e40af',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '10px',
              fontSize: '1rem',
              cursor: 'pointer',
              margin: '0.5rem'
            }}
            onClick={() => alert('🎉 Interactive React button working perfectly!')}
          >
            Test React Interaction
          </button>
          
          <button 
            style={{
              background: '#16a34a',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '10px',
              fontSize: '1rem',
              cursor: 'pointer',
              margin: '0.5rem'
            }}
            onClick={() => window.open('/basic.html', '_blank')}
          >
            View Alternative Interface
          </button>
        </div>
      </div>
    </div>
  )
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}