import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Safely inject analytics if environment variables are present
const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

if (endpoint && websiteId) {
  try {
    const script = document.createElement('script');
    script.defer = true;
    script.src = `${endpoint}/umami`;
    script.setAttribute('data-website-id', websiteId);
    document.body.appendChild(script);
  } catch (err) {
    console.error("Failed to inject analytics script:", err);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
