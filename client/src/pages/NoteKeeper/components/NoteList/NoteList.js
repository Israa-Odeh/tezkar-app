import Note from "../Note";
import "./noteList.css";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note._id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
