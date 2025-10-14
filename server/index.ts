import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Enhanced CORS and mobile support with Replit-specific headers
app.use((req, res, next) => {
  const origin = req.headers.origin;
  res.header('Access-Control-Allow-Origin', origin || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Forwarded-For, X-Real-IP');
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', '0');
  res.header('X-Frame-Options', 'SAMEORIGIN');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Log all requests for debugging
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - Origin: ${origin || 'none'} - User-Agent: ${(req.headers['user-agent'] || '').substring(0, 50)}...`);
  
  next();
});

// Handle OPTIONS preflight requests
app.options('*', (req, res) => {
  res.sendStatus(200);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    domain: process.env.REPLIT_DEV_DOMAIN,
    port: process.env.PORT || 5000,
  });
});

// Mobile specific route handler
app.get('/mobile-check', (req, res) => {
  res.json({
    status: 'success',
    domain: process.env.REPLIT_DEV_DOMAIN,
    port: process.env.PORT || 5000,
    userAgent: req.headers['user-agent'],
    timestamp: new Date().toISOString(),
    headers: req.headers
  });
});

// Root path specific handling for mobile
app.get('/', (req, res, next) => {
  const userAgent = req.headers['user-agent'] || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
  if (isMobile) {
    log(`Mobile device detected: ${userAgent.substring(0, 50)}...`);
  }
  
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Based on Replit docs: External port binding is required for mobile access
  // Default to 5000 which maps to external port in .replit config
  const port = parseInt(process.env.PORT || '5000', 10);
  
  // Bind to 0.0.0.0 to ensure external accessibility as per Replit docs
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port} (bound to 0.0.0.0 for external access)`);
    log(`🌐 Access your application through Replit's Preview tab`);
    log(`🔗 The preview window should show the ABC UMS ERP`);
    
    if (process.env.REPLIT_DEV_DOMAIN) {
      log(`📱 Mobile URL: https://${process.env.REPLIT_DEV_DOMAIN}`);
      log(`🔗 QR Code available in Replit's URL dropdown for mobile testing`);
      log(`📋 Alternative access: Visit replit.dev from mobile device`);
    }
    
    log(`💡 Troubleshooting: If mobile preview fails, use 'kill 1' command to restart VM`);
  });
})();
