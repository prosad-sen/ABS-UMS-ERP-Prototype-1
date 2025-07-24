import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Wait for DOM to be ready
function mountApp() {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found!");
    return;
  }
  
  try {
    console.log("Mounting React app...");
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("React app mounted successfully!");
  } catch (error) {
    console.error("Error mounting React app:", error);
    rootElement.innerHTML = `<h1>Error loading application</h1><pre>${error}</pre>`;
  }
}

// Ensure DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
