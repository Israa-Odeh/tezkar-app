import { useState } from "react";
import "./noteManagementForm.css";

const NoteManagementForm = ({
  note = { _id: "", title: "", content: "" },
  onSubmit,
}) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const isNewNote = !note._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <h2 className="note-form__title">
        {isNewNote ? "Add New Note" : "Update Existing Note"}
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
        {isNewNote ? " Add Note" : "Update Note"}
      </button>
    </form>
  );
};

export default NoteManagementForm;