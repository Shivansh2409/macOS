import React from "react";
import "./LinksLeft.scss";
import { Search, Briefcase, Link } from "lucide-react";

const LinksLeft = (pop) => {
  return (
    <>
      <div className="left-container">
        <div className="search">
          <Search className="search-icon"></Search>
          <input type="text" placeholder="Search" />
        </div>

        <div className="section-title">DISCOVER</div>

        <div
          className={`menu-item ${pop.activeBar === "experience" ? "selected" : ""}`}
          onClick={() => {
            pop.setActiveBar("experience");
          }}
        >
          <Briefcase className="i"></Briefcase>
          <p>Experience</p>
        </div>

        <div
          className={`menu-item ${pop.activeBar === "links" ? "selected" : ""}`}
          onClick={() => {
            pop.setActiveBar("links");
          }}
        >
          <Link className="i"></Link>
          <p>Links</p>
        </div>
      </div>
    </>
  );
};

export default LinksLeft;
