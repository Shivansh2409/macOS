import React from "react";
import { useState } from "react";
import MacWindow from "./MacWindow";
import NoteLeftPanel from "../components/NoteLeftPanel";
import NoteRightPanel from "../components/NoteRightPanel";
import "./Note.scss";

const Note = () => {
  const [selectedNote, setSelectedNote] = useState(1);

  const handleNoteClick = (noteId) => {
    setSelectedNote(noteId);
  };
  return (
    <MacWindow nameOfWindow="Note" width={1100} height={500}>
      <div className="note">
        <NoteLeftPanel
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          handleNoteClick={handleNoteClick}
        />
        <NoteRightPanel
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          handleNoteClick={handleNoteClick}
        />
      </div>
    </MacWindow>
  );
};

export default Note;
