import { createContext, useContext, useEffect } from "react";
import useNotes from "hooks/useNotes";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
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
    <NoteContext.Provider
      value={{
        notes,
        loading,
        fetchError,
        handleCreateNote,
        handleUpdateNote,
        handleDeleteNote,
        handleSearchNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  return useContext(NoteContext);
};
