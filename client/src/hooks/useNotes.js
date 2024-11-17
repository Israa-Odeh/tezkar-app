import { useState, useEffect } from "react";
import { fetchNotes, createNote } from "api/notesApi";

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

  return {
    notes,
    loading,
    error,
    handleCreateNote,
  };
};

export default useNotes;
