import React from "react";
import "./Pdf.scss";
import MacWindow from "./MacWindow";

const Pdf = () => {
  return (
    <>
      <MacWindow
        width={1000}
        height={700}
        initialX={200}
        initialY={1}
        title="resume.pdf"
      >
        <div className="pdf-viewer">
          <iframe src="/resume.pdf" title="PDF Viewer"></iframe>
        </div>
      </MacWindow>
    </>
  );
};

export default Pdf;
