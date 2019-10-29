import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import HelloMelon from "./components/projects/HelloMelon";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/hello-melon' component={HelloMelon} />
      </Switch>
    </div>
  );
}

export default App;
