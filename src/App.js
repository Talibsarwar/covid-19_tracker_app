import React from "react";
import Home from "./pages/Home";
import About from "./pages/About.js";
import Graph from "./pages/Graph/Graph";
import Nav from "./Nav";
import Footer from "./Footer";
import Symptom from "./pages/Symptom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/symptom" component={Symptom} />
          <Route path="/graph" component={Graph} />
          <Route path="/about" component={About} />
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
