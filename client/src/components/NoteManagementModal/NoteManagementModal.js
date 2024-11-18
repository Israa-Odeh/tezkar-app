import { MdClose } from "react-icons/md";
import { NoteManagementForm } from "./components";
import "./noteManagementModal.css";

const NoteManagementModal = ({
  note = { _id: "", title: "", content: "" },
  onNoteSubmit,
  onClose,
}) => {
  const handleSubmit = (noteData) => {
    if (note._id) {
      onNoteSubmit(note._id, noteData);
    } else {
      onNoteSubmit(noteData);
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <MdClose size={24} />
        </button>
        {note._id ? (
          <NoteManagementForm note={note} onSubmit={handleSubmit} />
        ) : (
          <NoteManagementForm onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default NoteManagementModal;
