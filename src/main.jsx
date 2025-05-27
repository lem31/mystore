/**
 * Entry point for the React application.
 *
 * - Wraps the main <App /> component with React's StrictMode for highlighting potential problems.
 * - Uses BrowserRouter to enable client-side routing.
 * - Renders the application into the DOM element with id "root".
 */

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
