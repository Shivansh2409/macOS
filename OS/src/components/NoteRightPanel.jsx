import React from "react";
import "./NoteRightPanel.scss";
import {
  Trash2,
  Share,
  SquarePen,
  Grid,
  Type,
  CheckSquare,
  AlignLeft,
  MoreHorizontal,
} from "lucide-react";
import NoteMainContent from "./NoteMainContent";

const NoteRightPanel = ({ selectedNote, setSelectedNote, handleNoteClick }) => {
  return (
    <>
      <div className="noteRightPanel">
        <div className="note-top">
          <div className="nav-x"></div>
          <div className="nav-r">
            <p>Edited 10:42 AM</p>
          </div>
          <div className="nav-l">
            <Trash2 className="delete" />
            <Share className="share" />
            <SquarePen className="edit" />
          </div>
        </div>
        <div className="main-content">
          <NoteMainContent key={selectedNote} />
        </div>
        <div className="note-bottom">
          <div className="b-l">
            <Grid className="bottom-icon" />
            <Type className="bottom-icon" />
            <CheckSquare className="bottom-icon" />
            <AlignLeft className="bottom-icon" />
          </div>
          <div className="b-r">
            <MoreHorizontal className="bottom-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteRightPanel;
