import React from "react";
import { useState } from "react";
import "./NoteLeftPanel.scss";
import { Folder, Search } from "lucide-react";

const NoteLeftPanel = ({ selectedNote, setSelectedNote, handleNoteClick }) => {
  return (
    <>
      <div className="note-left-panel">
        <div className="icons">
          <Folder className="folder-icon" />
          <p className="icon-name">iCloud/ Note</p>
        </div>
        <h2>Note</h2>
        <div className="search">
          <Search className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="note-list">
          <div className="pined">
            <h5>PINNED</h5>
            <div
              onClick={() => handleNoteClick(1)}
              className={`note-card ${selectedNote === 1 ? "selected-note" : " "}`}
            >
              <h4>Personal Profile</h4>
              <div className="note-name">
                <div className="l">
                  <p>Shivansh -Details</p>
                </div>
                <div className="r">
                  <p>Jan 12</p>
                </div>
              </div>
              <div className="note-detail">
                <p>Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="hack">
            <h5>HACK</h5>
            <div
              onClick={() => handleNoteClick(4)}
              className={`note-card ${selectedNote === 4 ? "selected-note" : " "}`}
            >
              <h4>DavelAI</h4>
              <div className="note-name">
                <div className="l">
                  <p>Ideas -Details</p>
                </div>
                <div className="r">
                  <p>Feb 5</p>
                </div>
              </div>
              <div className="note-detail">
                <p>AI power Coding Platform with Friends</p>
              </div>
            </div>
            <div
              onClick={() => handleNoteClick(2)}
              className={`note-card ${selectedNote === 2 ? "selected-note" : " "}`}
            >
              <h4>WonderLust</h4>
              <div className="note-name">
                <div className="l">
                  <p>Ideas -Details</p>
                </div>
                <div className="r">
                  <p>Feb 5</p>
                </div>
              </div>
              <div className="note-detail">
                <p>Travel Booking Platform</p>
              </div>
            </div>
            <div
              onClick={() => handleNoteClick(3)}
              className={`note-card ${selectedNote === 3 ? "selected-note" : " "}`}
            >
              <h4>Zerodha Clone – </h4>
              <div className="note-name">
                <div className="l">
                  <p>Ideas -Details</p>
                </div>
                <div className="r">
                  <p>Feb 5</p>
                </div>
              </div>
              <div className="note-detail">
                <p>Stock Portfolio Management System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteLeftPanel;
