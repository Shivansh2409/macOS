import React, { useEffect, useState } from "react";
import "./Loading.scss";

const Loading = ({ onLoadComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Loading messages
    const messages = [
      "Initializing macOS...",
      "Loading kernel...",
      "Starting services...",
      "Loading applications...",
      "Preparing desktop...",
    ];

    let messageIndex = 0;
    let charIndex = 0;
    let messageTimer;
    let progressTimer;

    const typeMessage = () => {
      if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
          setDisplayText(messages[messageIndex].substring(0, charIndex + 1));
          charIndex++;
          messageTimer = setTimeout(typeMessage, 50);
        } else {
          messageIndex++;
          charIndex = 0;
          messageTimer = setTimeout(typeMessage, 400);
        }
      }
    };

    const updateProgress = () => {
      setProgress((prev) => {
        if (prev < 95) {
          return prev + Math.random() * 20;
        }
        return prev;
      });
    };

    typeMessage();
    progressTimer = setInterval(updateProgress, 300);

    // Complete loading after 1.5 seconds
    const completeTimer = setTimeout(() => {
      setProgress(100);
      setDisplayText("Ready!");
      setTimeout(onLoadComplete, 300);
    }, 1500);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(completeTimer);
      clearInterval(progressTimer);
    };
  }, [onLoadComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="apple-logo"></div>

        <div className="loading-text">{displayText}</div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="progress-percent">
          {Math.min(Math.round(progress), 100)}%
        </div>
      </div>
    </div>
  );
};

export default Loading;
