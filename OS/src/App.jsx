import React, { useEffect, useState } from "react";
import { KeyboardEvent } from "react";
import "./App.scss";
import { Dock } from "./components/Dock";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import Finder from "./windows/Finder";
import GitHub from "./windows/GitHub";
import Note from "./windows/Note";
import Pdf from "./windows/Pdf";
import Spoti from "./windows/Spoti";
import Links from "./windows/Links";
import Photo from "./windows/Photo";
import TerminalApp from "./windows/Terminal";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState({
    GitHub: 1,
    Note: 1,
    Finder: 1,
    Pdf: 1,
    Spoti: 1,
    Links: 1,
    Image: 1,
    Photo: 1,
    Terminal: 1,
  });
  const [openWindows, setOpenWindows] = useState({
    GitHub: false,
    Note: false,
    Finder: false,
    Pdf: false,
    Spoti: false,
    Links: false,
    Photo: false,
    Terminal: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only run shortcuts if in 'socials' view
      // REQUIRE Ctrl key to be pressed
      if (!e.ctrlKey) return;

      const key = e.key.toLowerCase();

      if (key === "f") {
        e.preventDefault(); // Prevent default browser actions (e.g. Ctrl+P print)
        console.log(key);
        setOpenWindows((prev) => ({ ...prev, Finder: true }));
        setIndex((prev) => ({
          ...prev,
          Finder: Math.max(...Object.values(prev)) + 1,
        }));
      } else if (key === "g") {
        e.preventDefault(); // Prevent default browser actions (e.g. Ctrl+P print)
        console.log(key);
        setOpenWindows((prev) => ({ ...prev, GitHub: true }));
        setIndex((prev) => ({
          ...prev,
          GitHub: Math.max(...Object.values(prev)) + 1,
        }));
      } else if (key === "n") {
        e.preventDefault(); // Prevent default browser actions (e.g. Ctrl+P print)
        console.log(key);
        setOpenWindows((prev) => ({ ...prev, Note: true }));
        setIndex((prev) => ({
          ...prev,
          Note: Math.max(...Object.values(prev)) + 1,
        }));
      } else if (key === "p") {
        e.preventDefault(); // Prevent default browser actions (e.g. Ctrl+P print)
        console.log(key);
        setOpenWindows((prev) => ({ ...prev, Pdf: true }));
        setIndex((prev) => ({
          ...prev,
          Pdf: Math.max(...Object.values(prev)) + 1,
        }));
      } else if (key === "s") {
        e.preventDefault(); // Prevent default browser actions (e.g. Ctrl+P print)
        console.log(key);
        setOpenWindows((prev) => ({ ...prev, Spoti: true }));
        setIndex((prev) => ({
          ...prev,
          Spoti: Math.max(...Object.values(prev)) + 1,
        }));
      } else if (key === "l") {
        e.preventDefault(); // Prevent default browser actions (e.g. Ctrl+P print)
        console.log(key);
        setOpenWindows((prev) => ({ ...prev, Links: true }));
        setIndex((prev) => ({
          ...prev,
          Links: Math.max(...Object.values(prev)) + 1,
        }));
      } else if (key === "i") {
        e.preventDefault(); // Prevent default browser actions (e.g. Ctrl+P print)
        console.log(key);
        setOpenWindows((prev) => ({ ...prev, Image: true }));
        setIndex((prev) => ({
          ...prev,
          Image: Math.max(...Object.values(prev)) + 1,
        }));
      } else if (key === "o") {
        e.preventDefault(); // Prevent default browser actions (e.g. Ctrl+O open)
        console.log(key);
        setOpenWindows((prev) => ({ ...prev, Photo: true }));
        setIndex((prev) => ({
          ...prev,
          Photo: Math.max(...Object.values(prev)) + 1,
        }));
      } else if (key === "t") {
        e.preventDefault(); // Prevent default browser actions (e.g. Ctrl+T terminal)
        console.log(key);
        setOpenWindows((prev) => ({ ...prev, Terminal: true }));
        setIndex((prev) => ({
          ...prev,
          Terminal: Math.max(...Object.values(prev)) + 1,
        }));
      }
    };
    console.log("he");
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const [image, setImage] = useState("./image/1.jpeg");

  return (
    <>
      {isLoading && <Loading onLoadComplete={() => setIsLoading(false)} />}
      <main>
        <Nav></Nav>
        <div className="windows">
          {openWindows.GitHub && (
            <GitHub
              Index={index}
              setIndex={setIndex}
              openWindows={openWindows}
              setOpenWindows={setOpenWindows}
            ></GitHub>
          )}
          {openWindows.Note && (
            <Note
              Index={index}
              setIndex={setIndex}
              openWindows={openWindows}
              setOpenWindows={setOpenWindows}
            ></Note>
          )}
          {openWindows.Finder && (
            <Finder
              Index={index}
              setIndex={setIndex}
              openWindows={openWindows}
              setOpenWindows={setOpenWindows}
              Image={image}
              setImage={setImage}
            ></Finder>
          )}
          {openWindows.Pdf && (
            <Pdf
              Index={index}
              setIndex={setIndex}
              openWindows={openWindows}
              setOpenWindows={setOpenWindows}
            ></Pdf>
          )}
          {openWindows.Spoti && (
            <Spoti
              Index={index}
              setIndex={setIndex}
              openWindows={openWindows}
              setOpenWindows={setOpenWindows}
            ></Spoti>
          )}

          {openWindows.Links && (
            <Links
              Index={index}
              setIndex={setIndex}
              openWindows={openWindows}
              setOpenWindows={setOpenWindows}
            ></Links>
          )}

          {openWindows.Photo && (
            <Photo
              Index={index}
              setIndex={setIndex}
              openWindows={openWindows}
              setOpenWindows={setOpenWindows}
              Image={image}
              setImage={setImage}
            ></Photo>
          )}

          {openWindows.Terminal && (
            <TerminalApp
              Index={index}
              setIndex={setIndex}
              openWindows={openWindows}
              setOpenWindows={setOpenWindows}
            ></TerminalApp>
          )}
        </div>

        <Dock
          openWindows={openWindows}
          setOpenWindows={setOpenWindows}
          setIndex={setIndex}
        ></Dock>
      </main>
    </>
  );
}

export default App;
