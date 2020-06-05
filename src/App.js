import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//page imports
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
