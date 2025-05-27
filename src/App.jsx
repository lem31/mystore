/**
 * The main App component of the application.
 * Renders the Router component which handles navigation.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 */

import Router from "./Components/Router";

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
