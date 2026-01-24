import React from "react";
import { Rnd } from "react-rnd";
import "./MacWindow.scss";

const MacWindow = ({ children, width, height }) => {
  return (
    <>
      <Rnd
        default={{
          x: 100,
          y: 100,
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
        }}
      >
        <div className="mac-window">
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
          </div>
          <div className="mac-window-content">{children}</div>
        </div>
      </Rnd>
    </>
  );
};

export default MacWindow;
