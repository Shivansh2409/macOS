import React, { useState } from "react";
import "./App.scss";
import { Dock } from "./components/Dock";
import Nav from "./components/Nav";
import Finder from "./windows/Finder";
import GitHub from "./windows/GitHub";
import Note from "./windows/Note";
import Pdf from "./windows/Pdf";
import Spoti from "./windows/Spoti";
import Links from "./windows/Links";

function App() {
  const [index, setIndex] = useState({
    GitHub: 1,
    Note: 1,
    Finder: 1,
    Pdf: 1,
    Spoti: 1,
    Links: 1,
  });
  const [openWindows, setOpenWindows] = useState({
    GitHub: false,
    Note: false,
    Finder: false,
    Pdf: false,
    Spoti: false,
    Links: false,
  });
  return (
    <>
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
