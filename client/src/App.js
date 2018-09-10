import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import WorkSpace from "./pages/Workspace/index";
import "./App.css";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/workspace" component={WorkSpace}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
