import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import HelloMelon from "./components/projects/HelloMelon";
import ForgetMeNot from "./components/projects/ForgetMeNot";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/hello-melon' component={HelloMelon} />
        <Route exact path='/fmn' component={ForgetMeNot} />
      </Switch>
    </div>
  );
}

export default App;
