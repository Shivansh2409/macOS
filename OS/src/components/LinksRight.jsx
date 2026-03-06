import React from "react";
import "./LinksRight.scss";
import {
  Instagram,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
} from "lucide-react";

const LinksRight = (pop) => {
  if (pop.activeBar === "links") {
    return (
      <>
        <div className="content-panel">
          <div className="content-header">
            <h1>Links</h1>
            <p>Connect with me on social media</p>
          </div>

          <div className="card-container">
            <div
              className="card-link instagram"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/rathor_sahab_09?igsh=MXVtNW9wa3h3am85Mg%3D%3D",
                  "__blank",
                );
              }}
            >
              <Instagram className="i"></Instagram>
              <div className="card-info">
                <p className="social-name">Instagram</p>
                <p className="social-handle">@rathor_sahab_09</p>
              </div>
            </div>

            <div
              className="card-link github"
              onClick={() => {
                window.open("https://github.com/Shivansh2409", "__blank");
              }}
            >
              <Github className="i"></Github>
              <div className="card-info">
                <p className="social-name">GitHub</p>
                <p className="social-handle">@Shivansh2409</p>
              </div>
            </div>

            <div
              className="card-link linkedin"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/shivanshrathor/",
                  "__blank",
                );
              }}
            >
              <Linkedin className="i"></Linkedin>
              <div className="card-info">
                <p className="social-name">LinkedIn</p>
                <p className="social-handle">shivanshrathor</p>
              </div>
            </div>

            <div
              className="card-link twitter"
              onClick={() => {
                window.open("https://x.com/ShivanshRa89853", "__blank");
              }}
            >
              <Twitter className="i"></Twitter>
              <div className="card-info">
                <p className="social-name">Twitter</p>
                <p className="social-handle">@Shivansh2409</p>
              </div>
            </div>

            <div
              className="card-link youtube"
              onClick={() => {
                window.open("https://youtube.com", "__blank");
              }}
            >
              <Youtube className="i"></Youtube>
              <div className="card-info">
                <p className="social-name">YouTube</p>
                <p className="social-handle">Shivansh Rathore</p>
              </div>
            </div>

            <div
              className="card-link email"
              onClick={() => {
                window.open("mailto:shivanshrathore@example.com", "__blank");
              }}
            >
              <Mail className="i"></Mail>
              <div className="card-info">
                <p className="social-name">Email</p>
                <p className="social-handle">shivanshrathore@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="content-panel">
          <div className="content-header">
            <h1>Experience</h1>
            <p>My professional journey</p>
          </div>

          <div className="experience-list">
            <div className="ex-card">
              <div className="ex-header">
                <h3>Technical Lead</h3>
                <span className="company">AlgoZenith</span>
              </div>
              <span className="duration">2023 - Present</span>
              <ul>
                <li>
                  Leading a team of developers building educational technology
                  products
                </li>
                <li>
                  Architecting scalable solutions for online learning platforms
                </li>
                <li>Mentoring junior developers and conducting code reviews</li>
              </ul>
            </div>

            <div className="ex-card">
              <div className="ex-header">
                <h3>Senior Developer</h3>
                <span className="company">Tech Corp</span>
              </div>
              <span className="duration">2021 - 2023</span>
              <ul>
                <li>
                  Developed multiple web applications using React and Node.js
                </li>
                <li>
                  Implemented CI/CD pipelines and improved development workflows
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver
                  high-quality products
                </li>
              </ul>
            </div>

            <div className="ex-card">
              <div className="ex-header">
                <h3>Full Stack Developer</h3>
                <span className="company">StartupXYZ</span>
              </div>
              <span className="duration">2019 - 2021</span>
              <ul>
                <li>Built and maintained full-stack web applications</li>
                <li>Worked with RESTful APIs and database design</li>
                <li>Participated in agile development processes</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default LinksRight;
