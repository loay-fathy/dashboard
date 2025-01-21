import React from "react";
import ReactDOM from "react-dom"; // Use 'react-dom' instead of 'react-dom/client'
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";

// Render the application using ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root") // The root element where the app will mount
);
