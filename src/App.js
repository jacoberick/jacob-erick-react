import React from "react";
import "./App.scss";
import logo from "./logo.svg";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

//page imports
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Music from "./components/Music";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route path="/music" component={Music} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
