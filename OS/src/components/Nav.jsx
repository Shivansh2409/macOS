import React from "react";
import Time from "./Time";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="left">
          <div className="apple-menu"></div>
          <div className="menu-item">Finder</div>
          <div className="menu-item">File</div>
          <div className="menu-item">Edit</div>
          <div className="menu-item">View</div>
          <div className="menu-item">Go</div>
          <div className="menu-item">Window</div>
          <div className="menu-item">Help</div>
        </div>
        <div className="right">
          <Time className="time"></Time>
        </div>
      </nav>
    </>
  );
};

export default Nav;
