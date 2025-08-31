import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";

import App from "./App.tsx";
import "./index.css";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const url = queryKey[0] as string;

        
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          credentials: 'same-origin',
        });
        

        
        if (!res.ok) {
          if (res.status >= 500) {
            throw new Error(`Server Error: ${res.status}`);
          }
          const text = await res.text();
          throw new Error(`${res.status}: ${text}`);
        }
        return res.json();
      },
      retry: 3,
      retryDelay: 1000,
    },
  },
});

// Initialize app with comprehensive error handling
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Add global error handling for mobile
window.addEventListener('error', (event) => {

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    // Mobile error display
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      right: 20px;
      background: #dc2626;
      color: white;
      padding: 15px;
      border-radius: 8px;
      z-index: 10000;
      font-size: 14px;
    `;
    errorDiv.innerHTML = `Error: ${event.error?.message || 'Unknown error'}`;
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 5000);
  }
});

// Hide loading screen once React is ready
setTimeout(() => {
  if (typeof window !== 'undefined' && (window as any).hideLoadingScreen) {
    (window as any).hideLoadingScreen();
  }
}, 1000);

createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <App />
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);