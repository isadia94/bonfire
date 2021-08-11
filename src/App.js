import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Tours from "./Tours";
import Hotels from "./Hotels";
import About from "./About";
import Honeymoon from "./Honeymoon";
import Contact from "./Contact";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Landing} exact></Route>
        <Route path="/tours" component={Tours}></Route>
        <Route path="/hotels" component={Hotels}></Route>
        <Route path="/honey-moon" component={Honeymoon}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}

export default App;
