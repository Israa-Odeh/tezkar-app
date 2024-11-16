import { MdClose } from "react-icons/md";
import NoteManagementForm from "../";
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
          <NoteManagementForm note={note} />
        ) : (
          <NoteManagementForm />
        )}
      </div>
    </div>
  );
};

export default NoteManagementModal;
