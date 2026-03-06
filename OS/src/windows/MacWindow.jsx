import React from "react";
import { Rnd } from "react-rnd";
import "./MacWindow.scss";
import {
  Folder,
  ChevronLeft,
  ChevronRight,
  Search,
  List as ListIcon,
  Maximize2,
} from "lucide-react";
import Links from "./Links";

const MacWindow = ({
  children,
  width,
  height,
  finder,
  setSelected,
  selected,
  initialX = 100,
  initialY = 100,
  Zindex,
  setIndex,
  title,
  setOpenWindows,
  openWindows,
}) => {
  return (
    <>
      <Rnd
        default={{
          x: initialX,
          y: initialY,
          width: width || 600,
          height: height || 400,
        }}
        minWidth={200}
        minHeight={100}
        bounds="parent"
        dragHandleClassName="mac-window-header"
        style={{
          border: "1px solid #303030",
          borderRadius: "0.5rem",
          background: "#0f0f0f",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          zIndex: Zindex || 1,
        }}
      >
        <div className="mac-window">
          {finder ? (
            <div
              className="mac-window-header finder-header"
              onClick={() => {
                if (title === "Finder") {
                  setIndex((prev) => ({
                    ...prev,
                    Finder: Math.max(...Object.values(prev)) + 1,
                  }));
                }
              }}
            >
              <div className="tool">
                <div className="tools-left">
                  <div className="window-buttons">
                    <div
                      className="mac-window-button close"
                      style={{
                        width: "12px",
                        height: "12px",
                        background: "#ff5f57",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setOpenWindows((prev) => ({
                          ...prev,
                          [title]: false,
                        }));
                      }}
                    ></div>
                    <div
                      className="mac-window-button minimize"
                      style={{
                        width: "12px",
                        height: "12px",
                        background: "#ffbd2e",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      className="mac-window-button maximize"
                      style={{
                        width: "12px",
                        height: "12px",
                        background: "#28c840",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div className="arrows">
                    <ChevronLeft className="a-l" />
                    <ChevronRight className="a-r" />
                  </div>
                  <div className="folder-i">
                    <div className="i">
                      <Folder className="f-i" />
                    </div>
                    <span>Hackathons</span>
                  </div>
                </div>
                <div className="tools-right">
                  <div className="view-options">
                    <div className="view">
                      <div
                        className={`list ${selected === "list" ? "list-active" : ""}`}
                        onClick={() => {
                          setSelected("list");
                        }}
                      >
                        <Maximize2 className="w-4 h-4" />
                      </div>
                      <div
                        className={`grid ${selected === "grid" ? "list-active" : ""}`}
                        onClick={() => {
                          setSelected("grid");
                        }}
                      >
                        <ListIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="search-bar">
                    <Search className="search-i" />
                    <input type="text" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="mac-window-header"
              style={{
                height: "30px",
                background: "#494949",
                borderBottom: "1px solid #3b3b3b",
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                padding: "0 0.75rem",
              }}
              onClick={() => {
                if (title === "Finder") {
                  setIndex((prev) => ({
                    ...prev,
                    Finder: Math.max(...Object.values(prev)) + 1,
                  }));
                } else if (title === "Notes") {
                  setIndex((prev) => ({
                    ...prev,
                    Note: Math.max(...Object.values(prev)) + 1,
                  }));
                } else if (title === "Spotify") {
                  setIndex((prev) => ({
                    ...prev,
                    Spoti: Math.max(...Object.values(prev)) + 1,
                  }));
                } else if (title === "resume") {
                  setIndex((prev) => ({
                    ...prev,
                    Pdf: Math.max(...Object.values(prev)) + 1,
                  }));
                } else if (title === "GitHub - Projects") {
                  setIndex((prev) => ({
                    ...prev,
                    GitHub: Math.max(...Object.values(prev)) + 1,
                  }));
                } else if (title === "Image") {
                  setIndex((prev) => ({
                    ...prev,
                    Image: Math.max(...Object.values(prev)) + 1,
                  }));
                } else if (title === "Links") {
                  setIndex((prev) => ({
                    ...prev,
                    Links: Math.max(...Object.values(prev)) + 1,
                  }));
                }
              }}
            >
              <div
                className="mac-window-buttons"
                style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
              >
                <div
                  className="mac-window-button close"
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#ff5f57",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (title === "Finder") {
                      setOpenWindows((prev) => ({
                        ...prev,
                        Finder: false,
                      }));
                    } else if (title === "Notes") {
                      setOpenWindows((prev) => ({
                        ...prev,
                        Note: false,
                      }));
                    } else if (title === "Spotify") {
                      setOpenWindows((prev) => ({
                        ...prev,
                        Spoti: false,
                      }));
                    } else if (title === "resume") {
                      setOpenWindows((prev) => ({
                        ...prev,
                        Pdf: false,
                      }));
                    } else if (title === "GitHub - Projects") {
                      setOpenWindows((prev) => ({
                        ...prev,
                        GitHub: false,
                      }));
                    } else if (title === "Image") {
                      setOpenWindows((prev) => ({
                        ...prev,
                        Image: false,
                      }));
                    } else if (title === "Links") {
                      setOpenWindows((prev) => ({
                        ...prev,
                        Links: false,
                      }));
                    }
                  }}
                ></div>
                <div
                  className="mac-window-button minimize"
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#ffbd2e",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  className="mac-window-button maximize"
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#28c840",
                    borderRadius: "50%",
                  }}
                ></div>
                {openWindows.GitHub}
              </div>
            </div>
          )}
          <div
            className="mac-window-content"
            onClick={() => {
              if (title === "Finder") {
                setIndex((prev) => ({
                  ...prev,
                  Finder: Math.max(...Object.values(prev)) + 1,
                }));
              } else if (title === "Notes") {
                setIndex((prev) => ({
                  ...prev,
                  Note: Math.max(...Object.values(prev)) + 1,
                }));
              } else if (title === "Spotify") {
                setIndex((prev) => ({
                  ...prev,
                  Spoti: Math.max(...Object.values(prev)) + 1,
                }));
              } else if (title === "resume") {
                setIndex((prev) => ({
                  ...prev,
                  Pdf: Math.max(...Object.values(prev)) + 1,
                }));
              } else if (title === "GitHub - Projects") {
                setIndex((prev) => ({
                  ...prev,
                  GitHub: Math.max(...Object.values(prev)) + 1,
                }));
              } else if (title === "Image") {
                setIndex((prev) => ({
                  ...prev,
                  Image: Math.max(...Object.values(prev)) + 1,
                }));
              } else if (title === "Links") {
                setIndex((prev) => ({
                  ...prev,
                  Links: Math.max(...Object.values(prev)) + 1,
                }));
              }
            }}
          >
            {children}
          </div>
        </div>
      </Rnd>
    </>
  );
};

export default MacWindow;
