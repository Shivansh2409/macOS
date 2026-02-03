import React from "react";
import MacWindow from "../windows/MacWindow";
import "./GitHub.scss";

const GitHub = (pop) => {
  const projects = [
    {
      title: "Davel AI - AI Content Generator ",
      description:
        "Engineered a real-time, collaborative coding platform to accelerate team development workflows. The application features an integrated AI assistant that generates and debugs code, with suggestions that can be discussed in a built-in team chat. It supports Google Docs-style simultaneous code editing, with all changes saved instantly. A core innovation is the use of Web Containers to spin up live Node.js servers in the cloud with a single click, eliminating local setup.",
      tech: [
        "React",
        "Node.js",
        "Redis",
        "JWT tokens",
        "MongoDB",
        "Socket.IO",
        "Tailwind CSS",
        "Web Containers",
        "Gemini API",
        "Express.js",
      ],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1767857306999-c070a25f85de?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://davel.vercel.app/",
      githubUrl: "https://github.com/Shivansh2409/Davel",
    },
    {
      title: "WonderLust - Travel Review Web App",
      description:
        "A full-stack CRUD-based travel review platform where users can share destinations,post reviews, upload images, and view places via an interactive map.",
      tech: [
        "EJS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mapbox",
        "Passport.js",
        "Joi",
        "Multer",
        "Cloudinary",
      ],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1767857306999-c070a25f85de?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://wonderlust-1-2kty.onrender.com/",
      githubUrl: "https://github.com/Shivansh2409/WonderLust",
    },
    {
      title: "Zerodha Clone – Stock Portfolio Management System",
      description:
        "This project is a full-stack clone of the popular Indian trading platform, Zerodha. The goal was to build a secure and intuitive application where users can manage their stock investments. The application features a complete client-server architecture, from a dynamic frontend to a robust backend with secure authentication.",
      tech: ["React", "Axios", "JWT", "CSS Modules", "MongoDB"],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1767857306999-c070a25f85de?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://github.com/Shivansh2409/ZerodhaClone",
      githubUrl: "https://github.com/Shivansh2409/ZerodhaClone",
    },
  ];
  return (
    <>
      <MacWindow
        Zindex={pop.Index.GitHub}
        width={900}
        height={600}
        title="GitHub - Projects"
        setIndex={pop.setIndex}
        setOpenWindows={pop.setOpenWindows}
        openWindows={pop.openWindows}
      >
        <div className="cards container">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <div className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="card-image"
              />

              <div className="card-content">
                <div className="card-header">
                  <div>
                    <h2>{project.title}</h2>
                  </div>
                </div>
                <div className="description-wrapper">
                  <p>{project.description}</p>
                </div>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span className="tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MacWindow>
    </>
  );
};

export default GitHub;
