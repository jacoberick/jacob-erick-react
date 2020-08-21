import React, { useState, useEffect } from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="main--nav">
        <div className="half-nav">
          <Link to="/" className="nav--link">
            HOME
          </Link>
          <Link to="/music" className="nav--link">
            MUSIC
          </Link>
        </div>
        <div className="middle-nav">
          <img
            src={require("../images/skellygif.gif")}
            alt="skelly"
            id="skellygif"
          />
        </div>
        <div className="half-nav">
          {" "}
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCFbv2XhL6KFlwPS63GhZnMA"
            className="nav--link"
          >
            VIDEO
          </a>
          <Link to="/contact" className="nav--link">
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
