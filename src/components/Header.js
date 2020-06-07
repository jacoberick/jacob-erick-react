import React, { useState, useEffect } from "react";
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
        <a
          target="blank_"
          href="https://www.youtube.com/channel/UCFbv2XhL6KFlwPS63GhZnMA"
          className="nav--link"
        >
          VIDEO
        </a>
        <Link to="/contact" className="nav--link">
          CONTACT
        </Link>
      </nav>
    </div>
  );
};

export default Header;
