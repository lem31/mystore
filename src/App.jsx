/**
 * The main App component of the application.
 * Renders the Router component which handles navigation.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 */

import { useState } from "react";
import React from "react";
import Router from "./Components/Router";

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
