import React, { useState } from "react";
import "./Grid.scss";
import { Folder, Clock, MapPin, ImageIcon, Monitor } from "lucide-react";
import Photo from "../windows/Photo";

const Grid = ({
  items,
  setItems,
  setOpenWindows,
  openWindows,
  Image,
  setImage,
  Index,
  setIndex,
}) => {
  const hackathonDetails = [
    {
      name: "HackCBS 8.0",
      date: "Nov 9, 2025",
      location: "Delhi",
      description: `🚀 A 24-Hour Story from HackCBS 8.0 ! The Birth of ResQMe

When I walked into HackCBS 8.0 in Delhi, I carried just a laptop, an idea, and the excitement of building something meaningful in only 24 hours.

The atmosphere was electric 
students coding like time didn’t exist,
teams brainstorming in corners,
and the constant hum of innovation filling the hall.

Amid that energy, I began building ResQMe - a quick-response safety app designed for moments when every second counts.

🕒 Hour 1-6

Everything started smoothly… until real-time features entered the chat.
APIs broke without warning.
Map rendering refused to cooperate.
My location glitched and pointed to places I’ve never been 🤦‍♂️.

But that’s hackathon life ! one problem at a time.


🕒 Hour 7-16

The real pressure kicked in.
Internet drops mid-testing.
Emergency triggers firing late.
A bug I fixed at 2 AM somehow returned at 3 AM with friends 😅.

Still, the vision stayed clear:
Build something that could genuinely help someone in danger.


🕒 Hour 17–24

With time slipping away, everything finally clicked into place -
⚡ Fast location detection
📍 Smart SOS triggers
🗺️ Real-time response flow
All built in a single, intense sprint powered by focus, teamwork, and adrenaline.

Submitting ResQMe felt surreal.
Not because it was perfect - but because it was meaningful.


💡 What this 24-hour journey taught me:

Hackathons aren’t about flawless code.
They’re about pushing limits, solving real problems fast, and believing in your idea even when the clock says otherwise.

Huge thanks to HackCBS 8.0, the sponsors like Base44, Brave, Solana, and every brilliant builder I met along the way.
This is just the beginning for ResQMe — and for me.`,
      techStack: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "HTML", "CSS"],
      imagesProject: [
        "../images/37.jpeg",
        "../images/38.jpeg",
        "../images/39.jpeg",
      ],
      imagesEvent: [
        "../images/4.jpeg",
        "../images/6.jpeg",
        "../images/7.jpeg",
        "../images/9.jpeg",
      ],
    },
    {
      name: "Zinnovation 3.0",
      date: "Nov 1, 2025",
      location: "Chandigarh",
      description:
        "Zinnovation 3.0 is the third edition of the annual innovation festival hosted by Zonal Tech University. This event brings together students, professionals, and innovators to showcase groundbreaking ideas and projects that push the boundaries of technology and creativity. With a focus on sustainability, social impact, and cutting-edge tech, Zinnovation 3.0 features workshops, keynote speeches, and a competitive platform for participants to present their innovations to a panel of esteemed judges and industry experts.",
      techStack: [
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "ExpressJS",
        "HTML",
        "CSS",
        "Google Cloud",
      ],
      imagesProject: [
        "../images/17.jpeg",
        "../images/20.jpeg",
        "../images/12.jpeg",
        "../images/11.jpeg",
      ],
      imagesEvent: [
        "../images/8.jpeg",
        "../images/13.jpeg",
        "../images/15.jpeg",
        "../images/19.jpeg",
      ],
    },
    {
      name: "Hack36",
      date: "Dec 15, 2025",
      location: "MNNIT Allahabad",
      description:
        "Hack36 is a high-energy, 36-hour hackathon that challenges participants to develop innovative software solutions to real-world problems. Hosted in the tech hub of Bangalore, this event attracts coders, designers, and entrepreneurs from across the country. Participants form teams to brainstorm, design, and build their projects from scratch, with access to mentors and resources throughout the event. Hack36 culminates in a demo day where teams present their solutions to a panel of judges for prizes and recognition.",
      techStack: ["JavaScript", "VueJS", "Firebase", "NodeJS", "HTML", "CSS"],
      imagesProject: ["../images/36.jpeg", "../images/27.jpeg"],
      imagesEvent: [
        "../images/33.jpeg",
        "../images/31.jpeg",
        "../images/32.jpeg",
        "../images/26.jpeg",
      ],
    },
  ];
  return (
    <>
      <div className="grid-container">
        {hackathonDetails.map(
          (hackathon) =>
            items === hackathon.name && (
              <div className="top">
                <div className="head">
                  <h1>
                    <Folder className="f-i"></Folder>
                    {hackathon.name}
                  </h1>
                  <p>
                    <Clock className="f-i" /> {hackathon.date}
                    <MapPin className="f-i" /> {hackathon.location}
                  </p>
                </div>
                <div className="main">
                  <h4>ABOUT PROJECT</h4>
                  <p className="detail">{hackathon.description}</p>
                  <h4>TECH STACK</h4>
                  <div className="tech-tag">
                    {hackathon.techStack.map((tech) => (
                      <div className="t-t">{tech}</div>
                    ))}
                  </div>

                  <h6>
                    <ImageIcon className="i-ii" /> Project Images &nbsp; &nbsp;
                  </h6>
                  <div className="imgs-event">
                    {hackathon.imagesProject.map((imgSrc, index) => (
                      <div
                        className="img-box"
                        key={index}
                        onClick={() => {
                          setOpenWindows((prev) => {
                            return { ...prev, Photo: true };
                          });
                          setImage(imgSrc);
                          setIndex((prev) => {
                            return {
                              ...prev,
                              Image: Math.max(...Object.values(prev)) + 1,
                            };
                          });
                        }}
                      >
                        <img src={imgSrc} alt={`Project ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <h6>
                    <Monitor className="i-id" /> Event Images &nbsp; &nbsp;
                  </h6>
                  <div className="imgs-project">
                    {hackathon.imagesEvent.map((imgSrc, index) => (
                      <div
                        className="img-box"
                        key={index}
                        onClick={() => {
                          setOpenWindows((prev) => {
                            return { ...prev, Photo: true };
                          });
                          setImage(imgSrc);
                        }}
                      >
                        <img src={imgSrc} alt={`Event ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ),
        )}
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
