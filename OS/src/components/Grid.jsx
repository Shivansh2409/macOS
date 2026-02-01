import React, { useState } from "react";
import "./Grid.scss";
import { Folder, Clock, MapPin, ImageIcon, Monitor } from "lucide-react";

const Grid = ({ items, setItems }) => {
  const hackathonDetails = [
    {
      name: "HackCBS 8.0",
      date: "Nov 9, 2025",
      location: "Delhi",
      description:
        "HackCBS is the annual flagship hackathon of Shri Mata Vaishno Devi University, attracting tech enthusiasts from across the nation. The event fosters innovation, collaboration, and problem -solving over a thrilling 36-hour coding marathon. Participants engage in workshops, mentorship sessions, and networking opportunities, culminating in a grand showcase of cutting-edge projects. HackCBS not only celebrates technological creativity but also builds a vibrant community of developers, entrepreneurs, and visionaries dedicated to shaping the future through technology.",
      techStack: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "HTML", "CSS"],
      imagesProject: [],
      imagesEvent: [],
    },
    {
      name: "Zinnovation 3.0",
      date: "Nov 1, 2025",
      location: "Chandigarh",
      description:
        "Zinnovation 3.0 is the third edition of the annual innovation festival hosted by Zonal Tech University. This event brings together students, professionals, and innovators to showcase groundbreaking ideas and projects that push the boundaries of technology and creativity. With a focus on sustainability, social impact, and cutting-edge tech, Zinnovation 3.0 features workshops, keynote speeches, and a competitive platform for participants to present their innovations to a panel of esteemed judges and industry experts.",
      techStack: ["Python", "Django", "PostgreSQL", "Docker", "HTML", "CSS"],
      imagesProject: [],
      imagesEvent: [],
    },
    {
      name: "Hack36",
      date: "Dec 15, 2025",
      location: "Bangalore",
      description:
        "Hack36 is a high-energy, 36-hour hackathon that challenges participants to develop innovative software solutions to real-world problems. Hosted in the tech hub of Bangalore, this event attracts coders, designers, and entrepreneurs from across the country. Participants form teams to brainstorm, design, and build their projects from scratch, with access to mentors and resources throughout the event. Hack36 culminates in a demo day where teams present their solutions to a panel of judges for prizes and recognition.",
      techStack: ["JavaScript", "VueJS", "Firebase", "NodeJS", "HTML", "CSS"],
      imagesProject: [],
      imagesEvent: [],
    },
  ];
  return (
    <>
      <div className="grid-container">
        <div className="top">
          <div className="head">
            <h1>
              <Folder className="f-i"></Folder>
              HackCBS
            </h1>
            <p>
              <Clock className="f-i" /> Nov 9, 2025
              <MapPin className="f-i" /> Delhi
            </p>
          </div>
          <div className="main">
            <h4>ABOUT PROJECT</h4>
            <p className="detail">
              HackCBS is the annual flagship hackathon of Shri Mata Vaishno Devi
              University, attracting tech enthusiasts from across the nation.
              The event fosters innovation, collaboration, and problem -solving
              over a thrilling 36-hour coding marathon. Participants engage in
              workshops, mentorship sessions, and networking opportunities,
              culminating in a grand showcase of cutting-edge projects. HackCBS
              not only celebrates technological creativity but also builds a
              vibrant community of developers, entrepreneurs, and visionaries
              dedicated to shaping the future through technology.
            </p>
            <h4>TECH STACK</h4>
            <div className="tech-tag">
              <div className="t-t">ReactJS</div>
              <div className="t-t">NodeJS</div>
              <div className="t-t">MongoDB</div>
              <div className="t-t">ExpressJS</div>
              <div className="t-t">HTML/CSS</div>
              <div className="t-t">JavaScript</div>
            </div>
            <h6>
              <ImageIcon className="i-ii" /> Project Images &nbsp; &nbsp;
            </h6>
            <div className="imgs-event">
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1769650796145-30df10357926?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                  alt="Project 1"
                />
              </div>
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1769650796145-30df10357926?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                  alt="Project 2"
                />
              </div>
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1769650796145-30df10357926?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                  alt="Project 3"
                />
              </div>
            </div>
            <h6>
              <Monitor className="i-id" /> Event Images &nbsp; &nbsp;
            </h6>
            <div className="imgs-project">
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1769650796145-30df10357926?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                  alt="Project 1"
                />
              </div>
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1769650796145-30df10357926?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                  alt="Project 1"
                />
              </div>
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1769650796145-30df10357926?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                  alt="Project 1"
                />
              </div>
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1769650796145-30df10357926?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                  alt="Project 1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom ">
          <div
            className={`third grid-body ${items === "HackCBS 8.0" ? "active" : ""}`}
            onClick={() => {
              setItems("HackCBS 8.0");
            }}
          >
            <div className="i">
              <Folder className="f-i" />
            </div>
            <p>HackCBS 8.0</p>
          </div>
          <div
            className={`third grid-body ${items === "Zinnovation 3.0" ? "active" : ""}`}
            onClick={() => {
              setItems("Zinnovation 3.0");
            }}
          >
            <div className="i">
              <Folder className="f-i" />
            </div>
            <p>Zinnovation 3.0</p>
          </div>
          <div
            className={`third grid-body ${items === "Hack36" ? "active" : ""}`}
            onClick={() => {
              setItems("Hack36");
            }}
          >
            <div className="i">
              <Folder className="f-i" />
            </div>
            <p>Hack36</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
