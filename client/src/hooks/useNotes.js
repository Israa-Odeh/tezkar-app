import { useState, useEffect } from "react";
import {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
  searchNotes,
} from "api/notesApi";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [operationError, setOperationError] = useState(null);

  useEffect(() => {
    const loadNotes = async () => {
      setLoading(true);
      try {
        const { notes } = await fetchNotes();
        setNotes(notes);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadNotes();
  }, []);

  const handleCreateNote = async (note) => {
    try {
      const createdNote = await createNote(note);
      setNotes((prevNotes) => [...prevNotes, createdNote]);
    } catch (err) {
      setOperationError(err.message);
    }
  };

  const handleUpdateNote = async (id, updatedNote) => {
    try {
      await updateNote(id, updatedNote);
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? { ...note, ...updatedNote } : note
        )
      );
    } catch (err) {
      setOperationError(err.message);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (err) {
      setOperationError(err.message);
    }
  };

  const handleSearchNotes = async (query) => {
    try {
      const searchResults = await searchNotes(query);
      setNotes(searchResults);
    } catch (err) {
      setOperationError(err.message);
    }
  };

  return {
    notes,
    loading,
    fetchError,
    operationError,
    handleCreateNote,
    handleUpdateNote,
    handleDeleteNote,
    handleSearchNotes,
  };
};

export default useNotes;
