import { useState, useEffect } from "react";
import { fetchNotes } from "api/notesApi";

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

  return {
    notes,
    loading,
    error,
  };
};

export default useNotes;
