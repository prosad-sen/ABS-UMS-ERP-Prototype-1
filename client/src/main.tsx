import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
  document.body.innerHTML = '<h1 style="color: red;">Error: Root element not found</h1>';
} else {
  console.log("Root element found, mounting React app...");
  createRoot(rootElement).render(<App />);
}
