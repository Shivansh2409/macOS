import React, { useState } from "react";
import "./Dev.scss";
import { Code, X, Command } from "lucide-react";

const shortcuts = [
  { key: "Ctrl + F", action: "Finder" },
  { key: "Ctrl + G", action: "GitHub" },
  { key: "Ctrl + N", action: "Note" },
  { key: "Ctrl + P", action: "PDF" },
  { key: "Ctrl + S", action: "Spotify" },
  { key: "Ctrl + L", action: "Links" },
  { key: "Ctrl + I", action: "Image" },
  { key: "Ctrl + O", action: "Photo" },
  { key: "Ctrl + T", action: "Terminal" },
];

const Dev = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button className="dev-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={18} /> : <Code size={18} />}
      </button>

      {/* Floating Panel */}
      <div className={`dev-panel ${isOpen ? "open" : ""}`}>
        <div className="dev-header">
          <Code size={20} className="dev-icon" />
          <span>Keyboard Shortcuts</span>
        </div>
        <div className="dev-content">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="shortcut-item">
              <span className="shortcut-key">
                <Command size={12} className="cmd-icon" />
                {shortcut.key.replace("Ctrl + ", "")}
              </span>
              <span className="shortcut-action">{shortcut.action}</span>
            </div>
          ))}
        </div>
        <div className="dev-footer">
          <span> shortcuts</span>
          Press Ctrl to use{" "}
        </div>
      </div>
    </>
  );
};

export default Dev;
