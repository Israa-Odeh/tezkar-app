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

  useEffect(() => {
    if (operationError) {
      alert(`Error: ${operationError}`);
    }
  }, [operationError]);

  return (
    <div className="app">
      <TopBar onCreateNote={handleCreateNote} onSearch={handleSearchNotes} />
      <NoteKeeper
        loading={loading}
        fetchError={fetchError}
        notes={notes}
        handleUpdateNote={handleUpdateNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
};

export default AppShellLayout;
