import React from "react";
import MacWindow from "../windows/MacWindow";
import "./GitHub.scss";
import { ExternalLink, Github, Star, GitFork, Calendar } from "lucide-react";

const GitHub = (pop) => {
  const projects = [
    {
      title: "Davel AI - AI Content Generator",
      description:
        "Engineered a real-time, collaborative coding platform to accelerate team development workflows. Features an integrated AI assistant that generates and debugs code.",
      tech: [
        "React",
        "Node.js",
        "Redis",
        "MongoDB",
        "Socket.IO",
        "Tailwind CSS",
        "Express.js",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      liveUrl: "https://davel.vercel.app/",
      githubUrl: "https://github.com/Shivansh2409/Davel",
      stars: 128,
      forks: 45,
      language: "JavaScript",
      languageColor: "#f1e05a",
      updatedAt: "2 days ago",
    },
    {
      title: "WonderLust - Travel Review App",
      description:
        "A full-stack CRUD-based travel review platform where users can share destinations, post reviews, upload images, and view places via an interactive map.",
      tech: ["EJS", "Node.js", "Express.js", "MongoDB", "Mapbox", "Cloudinary"],
      imageUrl:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
      liveUrl: "https://wonderlust-1-2kty.onrender.com/",
      githubUrl: "https://github.com/Shivansh2409/WonderLust",
      stars: 89,
      forks: 23,
      language: "JavaScript",
      languageColor: "#f1e05a",
      updatedAt: "1 week ago",
    },
    {
      title: "Zerodha Clone",
      description:
        "A full-stack clone of the popular Indian trading platform, Zerodha. Features secure authentication and stock portfolio management.",
      tech: ["React", "Axios", "JWT", "MongoDB", "CSS Modules"],
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
      liveUrl: "https://github.com/Shivansh2409/ZerodhaClone",
      githubUrl: "https://github.com/Shivansh2409/ZerodhaClone",
      stars: 156,
      forks: 67,
      language: "CSS",
      languageColor: "#563d7c",
      updatedAt: "3 days ago",
    },
    {
      title: "Portfolio OS - This Project",
      description:
        "A macOS-inspired web-based desktop simulation built with React, featuring glassmorphism design and responsive layout.",
      tech: ["React", "Vite", "SCSS", "react-rnd", "lucide-react"],
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      liveUrl: "#",
      githubUrl: "https://github.com/Shivansh2409/portfolio-os",
      stars: 234,
      forks: 89,
      language: "JavaScript",
      languageColor: "#f1e05a",
      updatedAt: "Today",
    },
  ];

  return (
    <>
      <MacWindow
        Zindex={pop.Index.GitHub}
        width={1100}
        height={700}
        title="GitHub - Projects"
        setIndex={pop.setIndex}
        setOpenWindows={pop.setOpenWindows}
        openWindows={pop.openWindows}
      >
        <div className="github-container">
          {/* GitHub Header */}
          <div className="github-header">
            <div className="header-left">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="github-logo"
              />
              <span className="username">Shivansh2409</span>
              <span className="slash">/</span>
              <span className="repo-name">projects</span>
            </div>
            <div className="header-right">
              <button className="repo-btn">
                <Star size={16} />
                Fork
              </button>
              <button className="repo-btn primary">
                <GitFork size={16} />
                New fork
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar">
            <div className="stat">
              <Star size={16} />
              <span>607</span>
              <span className="stat-label">stars</span>
            </div>
            <div className="stat">
              <GitFork size={16} />
              <span>224</span>
              <span className="stat-label">forks</span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-header">
                  <div className="project-icon">
                    <svg
                      height="32"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      fill="currentColor"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8ZM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25Z"></path>
                    </svg>
                  </div>
                  <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="public-badge">Public</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-meta">
                  <div className="language">
                    <span
                      className="language-color"
                      style={{ backgroundColor: project.languageColor }}
                    ></span>
                    <span>{project.language}</span>
                  </div>
                  <div className="meta-stat">
                    <Star size={14} />
                    <span>{project.stars}</span>
                  </div>
                  <div className="meta-stat">
                    <GitFork size={14} />
                    <span>{project.forks}</span>
                  </div>
                  <div className="updated">
                    <Calendar size={14} />
                    <span>{project.updatedAt}</span>
                  </div>
                </div>

                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn secondary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>

                <div className="tech-tags">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-tag more">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MacWindow>
    </>
  );
};

export default GitHub;
