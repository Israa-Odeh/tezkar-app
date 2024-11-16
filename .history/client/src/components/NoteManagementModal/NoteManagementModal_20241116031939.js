import { MdClose } from "react-icons/md";
import NoteCreationForm from "../NoteManagementForm";
import "./noteManagementModal.css";

const NoteManagementModal = ({
  note = { title: "", content: "" },
  onClose,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <MdClose size={24} />
        </button>
        {note.title && note.content ? (
          <NoteCreationForm note={note} />
        ) : (
          <NoteCreationForm />
        )}
      </div>
    </div>
  );
};

export default NoteManagementModal;
