import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
