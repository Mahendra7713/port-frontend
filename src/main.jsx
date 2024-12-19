import React from "react";
import { createRoot } from "react-dom/client"; // Explicit import for createRoot
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Please check your HTML file.");
}
