// App.jsx

import React from "react";
import { ThemeProvider } from "./themes/ThemeContext";
import RoutesApp from "./routes/RoutesApp";
import "./App.css";
//import Button from "./components/Button";

const App = () => {
  return (
    <div /*className={`${theme}`}*/>
      <ThemeProvider>
        <RoutesApp />
      </ThemeProvider>
    </div>
  );
};

export default App;
