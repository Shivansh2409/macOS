import React, { useState, useEffect } from "react";
import MacWindow from "./MacWindow";
import NoteSidebar from "../components/NoteSidebar";
import NoteContent from "../components/NoteContent";
import "./Note.scss";

// Default notes data
const defaultNotes = [
  {
    id: 1,
    title: "Personal Profile",
    category: "Personal",
    content: `SHIVANSH RATHORE

Occupation: Software Engineer
Location: Lucknow, UP
Contact: shivanshrathore61@gmail.com

Professional Summary:
Experienced Software Engineer with a strong background in developing scalable web applications and working across the full stack. Proficient in JavaScript, React, Node.js, and database management.

Skills:
• JavaScript, React, Node.js
• HTML, CSS, SASS
• RESTful APIs
• Database Management (SQL, NoSQL)
• Version Control (Git)`,
    date: "Jan 12",
    pinned: true,
  },
  {
    id: 2,
    title: "WonderLust - Travel App",
    category: "Projects",
    content: `WonderLust – Travel Booking Platform

WonderLust is a full-stack travel booking platform that allows users to explore and book travel experiences worldwide.

Technologies Used:
• EJS, Node.js, Express
• MongoDB, RESTful APIs
• CSS Modules, Axios

Features:
• User Registration and Login with JWT
• Browse and Search Travel Packages
• Filter Packages by Destination, Price, Duration
• Book Travel Experiences
• User Dashboard`,
    date: "Feb 5",
    pinned: false,
  },
  {
    id: 3,
    title: "Zerodha Clone",
    category: "Projects",
    content: `Zerodha Clone – Stock Portfolio Management System

A full-stack clone of the popular Indian trading platform, Zerodha.

Technologies Used:
• React, Axios
• JWT for Authentication
• CSS Modules
• MongoDB

Features:
• User Registration and Login
• View Real-time Stock Prices
• Buy and Sell Stocks
• Portfolio Management
• Responsive Design`,
    date: "Feb 5",
    pinned: false,
  },
  {
    id: 4,
    title: "DavelAI",
    category: "Projects",
    content: `DavelAI - AI Power Coding Platform

An innovative coding platform that leverages AI to assist developers.

Technologies Used:
• React, Node.js, Express
• WebContainer
• WebSocket for Real-time
• MongoDB

Features:
• AI-powered Code Suggestions
• Real-time Error Detection
• Performance Optimization
• Collaborative Coding
• Version Control Integration`,
    date: "Feb 5",
    pinned: false,
  },
];

const Note = (pop) => {
  // Load notes from localStorage or use default
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("macos-notes");
    return saved ? JSON.parse(saved) : defaultNotes;
  });

  const [selectedNote, setSelectedNote] = useState(notes[0] || null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("macos-notes", JSON.stringify(notes));
  }, [notes]);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setIsEditing(false);
  };

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      title: "New Note",
      category: "Other",
      content: "",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      pinned: false,
    };
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    setSelectedNote(newNote);
    setEditTitle(newNote.title);
    setEditContent(newNote.content);
    setIsEditing(true);
  };

  const handleEdit = () => {
    if (selectedNote) {
      setEditTitle(selectedNote.title);
      setEditContent(selectedNote.content);
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    if (selectedNote) {
      const updatedNotes = notes.map((note) =>
        note.id === selectedNote.id
          ? {
              ...note,
              title: editTitle,
              content: editContent,
              date: new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              }),
            }
          : note,
      );
      setNotes(updatedNotes);
      setSelectedNote({
        ...selectedNote,
        title: editTitle,
        content: editContent,
      });
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (selectedNote && notes.length > 1) {
      const updatedNotes = notes.filter((note) => note.id !== selectedNote.id);
      setNotes(updatedNotes);
      setSelectedNote(updatedNotes[0]);
    }
  };

  const togglePin = (noteId) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, pinned: !note.pinned } : note,
    );
    // Sort: pinned first
    updatedNotes.sort((a, b) =>
      b.pinned === a.pinned ? 0 : b.pinned ? 1 : -1,
    );
    setNotes(updatedNotes);
    if (selectedNote && selectedNote.id === noteId) {
      setSelectedNote({ ...selectedNote, pinned: !selectedNote.pinned });
    }
  };

  return (
    <MacWindow
      nameOfWindow="Note"
      width={900}
      height={600}
      className="note-window"
      title="Notes"
      Zindex={pop.Index.Note}
      setIndex={pop.setIndex}
      setOpenWindows={pop.setOpenWindows}
      openWindows={pop.openWindows}
    >
      <div className="notes-app">
        <NoteSidebar
          notes={notes}
          selectedNote={selectedNote}
          onSelectNote={handleNoteClick}
          onAddNote={handleAddNote}
          onTogglePin={togglePin}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <NoteContent
          selectedNote={selectedNote}
          isEditing={isEditing}
          editTitle={editTitle}
          editContent={editContent}
          onEdit={handleEdit}
          onSave={handleSave}
          onDelete={handleDelete}
          onTitleChange={setEditTitle}
          onContentChange={setEditContent}
          notes={notes}
        />
      </div>
    </MacWindow>
  );
};

export default Note;
