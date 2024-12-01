import { useNoteContext } from "contexts/NoteContext";
import Note from "../Note";
import "./noteList.css";

const NoteList = () => {
  const { notes } = useNoteContext();
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
