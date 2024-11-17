import { useState, useEffect } from "react";
import { fetchNotes, createNote, updateNote, deleteNote } from "api/notesApi";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNotes = async () => {
      setLoading(true);
      try {
        const { notes } = await fetchNotes();
        setNotes(notes);
      } catch (err) {
        setError(err.message);
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
      setError(err.message);
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
      setError(err.message);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    notes,
    loading,
    error,
    handleCreateNote,
    handleUpdateNote,
    handleDeleteNote,
  };
};

export default useNotes;
