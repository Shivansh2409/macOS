import React from "react";
import "./NoteContent.scss";

const NoteContent = ({
  selectedNote,
  isEditing,
  editTitle,
  editContent,
  onEdit,
  onSave,
  onDelete,
  onTitleChange,
  onContentChange,
  notes,
}) => {
  return (
    <div className="notes-content">
      {selectedNote ? (
        <>
          <div className="content-header">
            {isEditing ? (
              <input
                type="text"
                className="title-input"
                value={editTitle}
                onChange={(e) => onTitleChange(e.target.value)}
                placeholder="Note Title"
              />
            ) : (
              <h1>{selectedNote.title}</h1>
            )}
            <div className="content-actions">
              {isEditing ? (
                <button className="action-btn save" onClick={onSave}>
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
                <button className="action-btn" onClick={onEdit}>
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
                onClick={onDelete}
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
                onChange={(e) => onContentChange(e.target.value)}
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
        </div>
      )}
    </div>
  );
};

export default NoteContent;
