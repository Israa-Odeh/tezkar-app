import { useNoteContext } from "contexts/NoteContext";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { ConfirmationDialog, NoteManagementModal } from "components";
import { formatDate } from "utils/formatDate";
import "./note.css";

const Note = ({ note }) => {
  const { handleUpdateNote, handleDeleteNote } = useNoteContext();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleConfirmDelete = () => {
    handleDeleteNote(note._id);
    setShowConfirmation(false);
  };

  const handleEdit = (noteData) => {
    handleUpdateNote(note._id, noteData);
  };

  return (
    <div className="note">
      <div className="note__details" onClick={handleModalOpen}>
        <h2 className="note__title" title={note.title}>
          {note.title}
        </h2>
        <p className="note__content">{note.content}</p>
        <span className="note__creation-date">
          {formatDate(note.creationDate)}
        </span>
      </div>
      <button
        className="note__delete-button"
        type="button"
        onClick={handleDelete}
      >
        <MdDelete size={20} />
      </button>

      {showConfirmation && (
        <ConfirmationDialog
          title="Note Deletion"
          message="Are you sure you want to delete this note?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {isModalOpen && (
        <NoteManagementModal
          note={note}
          onSubmit={handleEdit}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Note;
