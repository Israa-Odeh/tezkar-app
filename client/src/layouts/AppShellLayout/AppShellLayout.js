import useNotes from "hooks/useNotes";
import TopBar from "layouts/TopBar";
import NoteKeeper from "pages/NoteKeeper";

const AppShellLayout = () => {
  const {
    notes,
    loading,
    fetchError,
    operationError,
    handleCreateNote,
    handleUpdateNote,
    handleDeleteNote,
    handleSearchNotes,
  } = useNotes();

  return (
    <div className="app">
      <TopBar onCreateNote={handleCreateNote} onSearch={handleSearchNotes} />
      <NoteKeeper
        loading={loading}
        fetchError={fetchError}
        notes={notes}
        handleUpdateNote={handleUpdateNote}
        handleDeleteNote={handleDeleteNote}
        operationError={operationError}
      />
    </div>
  );
};

export default AppShellLayout;
