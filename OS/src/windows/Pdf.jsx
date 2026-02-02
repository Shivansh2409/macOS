import React from "react";
import "./Pdf.scss";
import MacWindow from "./MacWindow";

const Pdf = (pop) => {
  return (
    <>
      <MacWindow
        width={1000}
        height={700}
        initialX={200}
        initialY={1}
        title="resume"
        Zindex={pop.Index.Pdf}
        setIndex={pop.setIndex}
      >
        <div className="pdf-viewer">
          <iframe src="/resume.pdf" title="PDF Viewer"></iframe>
        </div>
      </MacWindow>
    </>
  );
};

export default Pdf;
