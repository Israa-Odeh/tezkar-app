import { useState } from "react";
import { RiStickyNoteAddLine } from "react-icons/ri";
import stickyNote from "images/stickyNote.png";
import { SearchBar, NoteManagementModal } from "components";
import { useNoteContext } from "contexts/NoteContext";
import "./topBar.css";

const TopBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleCreateNote, handleSearchNotes } = useNoteContext();

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <div className="topbar">
      <div className="topbar__logo-container">
        <img
          className="topbar__logo"
          src={stickyNote}
          width={48}
          height={48}
          alt="Tezkar logo featuring a sticky note icon"
          title="Tezkar"
        />
        <h1 className="topbar__title">Tezkar</h1>
      </div>
      <div className="topbar__controls">
        <SearchBar onSearch={handleSearchNotes} />
        <button
          className="topbar__add-note-button"
          type="button"
          onClick={handleModalOpen}
        >
          <RiStickyNoteAddLine className="topbar__add-note-icon" size={32} />
        </button>
      </div>

      {isModalOpen && (
        <NoteManagementModal
          onSubmit={handleCreateNote}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default TopBar;
