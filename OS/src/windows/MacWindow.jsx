import React from "react";
import { Rnd } from "react-rnd";
import "./MacWindow.scss";

const MacWindow = ({
  children,
  width = "40vw",
  height = "40vh",
  windowName,
  setWindowsState,
  nameOfWindow = null,
}) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 300,
        y: 200,
      }}
      dragHandleClassName="mac-window-header"
      minWidth={200}
      minHeight={100}
    >
      <div className="window">
        <div className="nav mac-window-header">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>{nameOfWindow || "shivansh - zsh"}</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
