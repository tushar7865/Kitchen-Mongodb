import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './styles.css'          // ✅ your custom CSS
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="1174748555-sqv8qq1qobaq9oj4rrv33tdl1h59kud4.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
