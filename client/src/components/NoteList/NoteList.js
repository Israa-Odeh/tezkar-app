import Note from "../Note";
import "./noteList.css";

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note._id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
