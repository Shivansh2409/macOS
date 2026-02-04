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
            <div className="card-social instagram">
              <Instagram className="i"></Instagram>
              <p className="social-name">Instagram</p>
              <p>Shivansh</p>
            </div>

            <div className="card-social github-social">
              <Github className="i"></Github>
              <p className="social-name"> GitHub</p>
              <p>Shivansh</p>
            </div>

            <div className="card-social link-in">
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
        <div className="div"> ex</div>
      </>
    );
  }
  return <></>;
};

export default LinksRight;
