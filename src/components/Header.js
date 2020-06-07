import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="main--nav">
        <Link to="/home" className="nav--link">
          HOME
        </Link>
        <Link to="/music" className="nav--link">
          MUSIC
        </Link>
        <img
          src={require("../images/skellygif.gif")}
          alt="skelly"
          id="skellygif"
        />
        <Link to="/video" className="nav--link">
          VIDEO
        </Link>
        <Link to="/contact" className="nav--link">
          CONTACT
        </Link>
      </nav>
    </div>
  );
};

export default Header;
