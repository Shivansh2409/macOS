import React from "react";
import "./NoteSidebar.scss";

const NoteSidebar = ({
  notes,
  selectedNote,
  onSelectNote,
  onAddNote,
  onTogglePin,
  searchQuery,
  onSearchChange,
}) => {
  // Filter notes based on search
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const pinnedNotes = filteredNotes.filter((n) => n.pinned);
  const otherNotes = filteredNotes.filter((n) => !n.pinned);

  return (
    <div className="notes-sidebar">
      <div className="sidebar-header">
        <div className="folder-row">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
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
          onChange={(e) => onSearchChange(e.target.value)}
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
                onClick={() => onSelectNote(note)}
              >
                <div className="note-item-header">
                  <span className="note-title">{note.title}</span>
                  <button
                    className="pin-btn pinned"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTogglePin(note.id);
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
                onClick={() => onSelectNote(note)}
              >
                <div className="note-item-header">
                  <span className="note-title">{note.title}</span>
                  <button
                    className="pin-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTogglePin(note.id);
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

      <button className="new-note-btn" onClick={onAddNote}>
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
  );
};

export default NoteSidebar;
