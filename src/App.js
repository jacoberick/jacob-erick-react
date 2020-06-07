import React from "react";
import "./App.scss";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//page imports
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
