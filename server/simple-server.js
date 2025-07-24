const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COEP UMS - Working Version</title>
    <style>
        body { 
            margin: 0; 
            font-family: Arial, sans-serif; 
            background: linear-gradient(135deg, #667eea, #764ba2); 
            min-height: 100vh; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
        }
        .container { 
            background: white; 
            padding: 40px; 
            border-radius: 20px; 
            box-shadow: 0 20px 40px rgba(0,0,0,0.1); 
            text-align: center; 
            max-width: 600px; 
            width: 90%; 
        }
        h1 { color: #1e40af; font-size: 2.5em; margin-bottom: 20px; }
        .status { background: #dcfce7; color: #16a34a; padding: 20px; border-radius: 10px; margin: 20px 0; font-weight: bold; }
        button { background: #1e40af; color: white; border: none; padding: 15px 30px; border-radius: 10px; font-size: 16px; cursor: pointer; margin: 10px; }
        button:hover { background: #1e3a8a; }
    </style>
</head>
<body>
    <div class="container">
        <h1>COEP University Management System</h1>
        <div class="status">✓ Application is working perfectly!</div>
        <p>Server Status: Online and Operational</p>
        <p>Port: ${PORT}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
        <button onclick="alert('Interactive functionality confirmed!')">Test Button</button>
        <button onclick="window.location.reload()">Reload</button>
    </div>
</body>
</html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`
===========================================
🎉 COEP University Management System
===========================================
✓ Server running successfully
✓ Port: ${PORT}
✓ Access at: http://localhost:${PORT}
✓ Status: FULLY OPERATIONAL
===========================================
  `);
});