import React, { useState } from "react";
import "./App.scss";
import { Dock } from "./components/Dock";
import Nav from "./components/Nav";
import Finder from "./windows/Finder";
import GitHub from "./windows/GitHub";
import Note from "./windows/Note";
import Pdf from "./windows/Pdf";
import Spoti from "./windows/Spoti";

function App() {
  const [index, setIndex] = useState({
    GitHub: 1,
    Note: 1,
    Finder: 1,
    Pdf: 1,
    Spoti: 1,
  });
  const [openWindows, setOpenWindows] = useState({
    GitHub: false,
    Note: false,
    Finder: false,
    Pdf: false,
    Spoti: false,
  });
  return (
    <>
      <main>
        <Nav></Nav>
        <div className="windows">
          <GitHub
            Index={index}
            setIndex={setIndex}
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
          ></GitHub>
          <Note
            Index={index}
            setIndex={setIndex}
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
          ></Note>
          <Finder
            Index={index}
            setIndex={setIndex}
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
          ></Finder>
          <Pdf
            Index={index}
            setIndex={setIndex}
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
          ></Pdf>
          <Spoti
            Index={index}
            setIndex={setIndex}
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
          ></Spoti>
        </div>

        <Dock></Dock>
      </main>
    </>
  );
}

export default App;
