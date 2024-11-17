import { MdClose } from "react-icons/md";
import NoteManagementForm from "../NoteManagementForm";
import "./noteManagementModal.css";

const NoteManagementModal = ({
  note = { title: "", content: "" },
  onNoteSubmit,
  onClose,
}) => {
  const handleSubmit = (noteData) => {
    onNoteSubmit(noteData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <MdClose size={24} />
        </button>
        {note.title && note.content ? (
          <NoteManagementForm note={note} onSubmit={handleSubmit} />
        ) : (
          <NoteManagementForm onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default NoteManagementModal;
