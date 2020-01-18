import React from "react";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import HelloMelon from "./components/projects/HelloMelon";
import ForgetMeNot from "./components/projects/ForgetMeNot";
import LambdaMUD from "./components/projects/LambdaMUD";

AOS.init();

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/hello-melon' component={HelloMelon} />
        <Route path='/fmn' component={ForgetMeNot} />
        <Route path='/mud' component={LambdaMUD} />
      </Switch>
    </div>
  );
}

export default App;
