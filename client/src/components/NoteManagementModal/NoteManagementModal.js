import { MdClose } from "react-icons/md";
import { NoteManagementForm } from "./components";
import "./noteManagementModal.css";

const NoteManagementModal = ({
  note = { _id: "", title: "", content: "" },
  onSubmit,
  onClose,
}) => {
  const handleSubmit = (noteData) => {
    onSubmit(noteData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <MdClose size={24} />
        </button>
        <NoteManagementForm note={note} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default NoteManagementModal;
