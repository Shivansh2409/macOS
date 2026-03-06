import React, { useState, useEffect } from "react";
import MacWindow from "./MacWindow";
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

  // Filter notes based on search
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const pinnedNotes = filteredNotes.filter((n) => n.pinned);
  const otherNotes = filteredNotes.filter((n) => !n.pinned);

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
        {/* Sidebar */}
        <div className="notes-sidebar">
          <div className="sidebar-header">
            <div className="folder-row">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15A4.485 4.485 0 0 0 1.5 10.146Z" />
              </svg>
              <span>iCloud</span>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="search-box">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="notes-list">
            {pinnedNotes.length > 0 && (
              <div className="notes-section">
                <h4 className="section-title">Pinned</h4>
                {pinnedNotes.map((note) => (
                  <div
                    key={note.id}
                    className={`note-item ${selectedNote?.id === note.id ? "active" : ""}`}
                    onClick={() => handleNoteClick(note)}
                  >
                    <div className="note-item-header">
                      <span className="note-title">{note.title}</span>
                      <button
                        className="pin-btn pinned"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePin(note.id);
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="12"
                          height="12"
                          fill="currentColor"
                        >
                          <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
                        </svg>
                      </button>
                    </div>
                    <span className="note-date">{note.date}</span>
                  </div>
                ))}
              </div>
            )}

            {otherNotes.length > 0 && (
              <div className="notes-section">
                {pinnedNotes.length > 0 && (
                  <h4 className="section-title">Others</h4>
                )}
                {otherNotes.map((note) => (
                  <div
                    key={note.id}
                    className={`note-item ${selectedNote?.id === note.id ? "active" : ""}`}
                    onClick={() => handleNoteClick(note)}
                  >
                    <div className="note-item-header">
                      <span className="note-title">{note.title}</span>
                      <button
                        className="pin-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePin(note.id);
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 2v8m0 0l4-4m-4 4l-4-4M5 12h14" />
                        </svg>
                      </button>
                    </div>
                    <span className="note-date">{note.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="new-note-btn" onClick={handleAddNote}>
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            New Note
          </button>
        </div>

        {/* Main Content */}
        <div className="notes-content">
          {selectedNote ? (
            <>
              <div className="content-header">
                {isEditing ? (
                  <input
                    type="text"
                    className="title-input"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Note Title"
                  />
                ) : (
                  <h1>{selectedNote.title}</h1>
                )}
                <div className="content-actions">
                  {isEditing ? (
                    <button className="action-btn save" onClick={handleSave}>
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Save
                    </button>
                  ) : (
                    <button className="action-btn" onClick={handleEdit}>
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      </svg>
                      Edit
                    </button>
                  )}
                  <button
                    className="action-btn delete"
                    onClick={handleDelete}
                    disabled={notes.length <= 1}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="content-body">
                {isEditing ? (
                  <textarea
                    className="content-textarea"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    placeholder="Start typing your note..."
                  />
                ) : (
                  <pre className="note-content">
                    {selectedNote.content || "No content"}
                  </pre>
                )}
              </div>
            </>
          ) : (
            <div className="no-note-selected">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15A4.485 4.485 0 0 0 1.5 10.146Z" />
              </svg>
              <p>Select a note to view</p>
              <button onClick={handleAddNote}>Create New Note</button>
            </div>
          )}
        </div>
      </div>
    </MacWindow>
  );
};

export default Note;
