import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Header} />
      </Switch>
    </div>
  );
}

export default App;
