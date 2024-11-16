import { useState } from "react";
import "./noteManagementForm.css";

const NoteManagementForm = ({ note = { title: "", content: "" } }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const hasValue = note.title && note.content;

  return (
    <form onSubmit={""} className="note-form">
      <h2 className="note-form__title">
        {!hasValue ? "Add New Note" : "Update Existing Note"}
      </h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="note-form__input"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        placeholder="Content"
        className="note-form__textarea"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="note-form__button" type="submit">
        {!hasValue ? " Add Note" : "Update Note"}
      </button>
    </form>
  );
};

export default NoteManagementForm;
