import React from "react";
import "./LinksRight.scss";
import { Instagram, Github, Linkedin } from "lucide-react";

const LinksRight = (pop) => {
  if (pop.activeBar === "social") {
    return (
      <>
        <div className="social">
          <h1>Social Links</h1>
          <div className="card-container">
            <div
              className="card-social instagram"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/rathor_sahab_09?igsh=MXVtNW9wa3h3am85Mg%3D%3D",
                  "__blank",
                );
              }}
            >
              <Instagram className="i"></Instagram>
              <p className="social-name">Instagram</p>
              <p>Shivansh</p>
            </div>

            <div
              className="card-social github-social"
              onClick={() => {
                window.open("https://github.com/Shivansh2409", "__blank");
              }}
            >
              <Github className="i"></Github>
              <p className="social-name"> GitHub</p>
              <p>Shivansh</p>
            </div>

            <div
              className="card-social link-in"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/shivanshrathor/",
                  "__blank",
                );
              }}
            >
              <Linkedin className="i"></Linkedin>
              <p className="social-name">LinkedIn</p>
              <p>Shivansh</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="experiences">
          <h1>Experience</h1>
          <div className="ex-card">
            <h3>Technical Lead At AlgoZenith</h3>
            <ul>
              <li>head at</li>
              <li>head at</li>
              <li>head at</li>
            </ul>
          </div>
          <div className="ex-card">
            <h3>Technical Lead At AlgoZenith</h3>
            <ul>
              <li>head at</li>
              <li>head at</li>
              <li>head at</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default LinksRight;
