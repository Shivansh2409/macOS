import React from "react";
import "./Dock.scss";
import { Github, AppWindow, Notebook, Mail, Images } from "lucide-react";

export const Dock = (pop) => {
  return (
    <>
      <footer className="dock">
        <div
          className="icon github"
          onClick={() => {
            pop.setOpenWindows((prev) => {
              return { ...prev, GitHub: true };
            });
            pop.setIndex((prev) => {
              return { ...prev, GitHub: Math.max(...Object.values(prev)) + 1 };
            });
          }}
        >
          <img
            src="https://imgs.search.brave.com/zszJNSvqAjSPXVIrXOS0CiX7Erkh4v5qRrmvyeK6SGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zMDM2MTUv/Z2l0aHViLWljb24t/MS1sb2dvLnN2Zw"
            alt=""
          />
        </div>
        <div
          className="icon pdf"
          onClick={() => {
            pop.setOpenWindows((prev) => {
              return { ...prev, Pdf: true };
            });
            pop.setIndex((prev) => {
              return { ...prev, Pdf: Math.max(...Object.values(prev)) + 1 };
            });
          }}
        >
          <img
            src="https://imgs.search.brave.com/ls7Nzr1zbrLzKmzmi5O8jsWqsOZcbYK_yoOnLVVj_CE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8yNTU4MTgv/cGRmLnN2Zw"
            alt=""
          />
        </div>
        <div
          className="icon note"
          onClick={() => {
            pop.setOpenWindows((prev) => {
              return { ...prev, Note: true };
            });
            pop.setIndex((prev) => {
              return { ...prev, Note: Math.max(...Object.values(prev)) + 1 };
            });
          }}
        >
          <Notebook className="find"></Notebook>
        </div>
        <div
          className="icon mail"
          onClick={() => {
            window.open("mailto:shivanshrathore@example.com", "__blank");
          }}
        >
          <Mail className="m"></Mail>
        </div>
        <div
          className="icon spotify"
          onClick={() => {
            pop.setOpenWindows((prev) => {
              return { ...prev, Spoti: true };
            });
            pop.setIndex((prev) => {
              return { ...prev, Spoti: Math.max(...Object.values(prev)) + 1 };
            });
          }}
        >
          <img src="/icons/spotify.webp" alt="" />
        </div>
        <div
          className="icon link"
          onClick={() => {
            pop.setOpenWindows((prev) => {
              return { ...prev, Links: true };
            });
            pop.setIndex((prev) => {
              return { ...prev, Links: Math.max(...Object.values(prev)) + 1 };
            });
          }}
        >
          <img src="/icons/link.webp" alt="" />
        </div>
        <div
          className="icon photo"
          onClick={() => {
            pop.setOpenWindows((prev) => {
              return { ...prev, Photo: true };
            });
            pop.setIndex((prev) => {
              return { ...prev, Photo: Math.max(...Object.values(prev)) + 1 };
            });
          }}
        >
          <Images className="find"></Images>
        </div>
        <div
          className="icon terminal"
          onClick={() => {
            pop.setOpenWindows((prev) => {
              return { ...prev, Terminal: true };
            });
            pop.setIndex((prev) => {
              return {
                ...prev,
                Terminal: Math.max(...Object.values(prev)) + 1,
              };
            });
          }}
        >
          <img src="/icons/terminal.webp" alt="" />
        </div>
        <div
          className="icon finder"
          onClick={() => {
            pop.setOpenWindows((prev) => {
              return { ...prev, Finder: true };
            });
            pop.setIndex((prev) => {
              return { ...prev, Finder: Math.max(...Object.values(prev)) + 1 };
            });
          }}
        >
          <div>
            <AppWindow className="find"></AppWindow>
          </div>
        </div>
      </footer>
    </>
  );
};
