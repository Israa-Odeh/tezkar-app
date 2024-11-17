//notesApi.js
// src/api/notesApi.js
  
  export const deleteNote = async (id) => {
    const response = await fetch(`/api/notes/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error("Failed to delete note");
    }
    return response.json();
  };
  
  export const searchNotes = async (query) => {
    const response = await fetch(`/api/notes/search?query=${query}`);
    if (!response.ok) {
      throw new Error("Failed to search notes");
    }
    return response.json();
  };

  
// useNotes.js
// src/hooks/useNotes.js
import { useState, useEffect } from 'react';
import { updateNote, deleteNote, searchNotes } from '../api/notesApi';

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch notes on initial load
  useEffect(() => {
    const loadNotes = async () => {
      setLoading(true);
      try {
        const data = await fetchNotes();
        setNotes(data.notes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadNotes();
  }, []);

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSearchNotes = async (query) => {
    try {
      const searchResults = await searchNotes(query);
      setNotes(searchResults);
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
    handleSearchNotes
  };
};

export default useNotes;



// NoteList.js
// src/components/NoteList.js
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note key={note._id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default NoteList;


// Note.js
// src/components/Note.js
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import NoteManagementModal from './NoteManagementModal';

const Note = ({ note, onDelete, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="note">
      <div className="note__details" onClick={handleModalOpen}>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
      <button onClick={() => onDelete(note._id)}>
        <MdDelete size={20} />
      </button>

      {isModalOpen && (
        <NoteManagementModal note={note} onClose={handleModalClose} onEdit={onEdit} />
      )}
    </div>
  );
};

export default Note;


// NoteManagementModal.js
// src/components/NoteManagementModal.js
import React, { useState, useEffect } from 'react';

const NoteManagementModal = ({ note, onClose, onEdit }) => {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = () => {
    const updatedNote = { title, content };
    onEdit(note._id, updatedNote);
    onClose();
  };

  return (
    <div className="modal">
      <h2>{note ? 'Edit Note' : 'Create Note'}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default NoteManagementModal;


// SearchBar.js
// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search notes"
      />
    </div>
  );
};

export default SearchBar;


// TopBar.js
// src/components/TopBar.js
import React from 'react';
import { RiStickyNoteAddLine } from 'react-icons/ri';
import SearchBar from './SearchBar';

const TopBar = ({ onSearch, onCreateNote }) => {
  return (
    <div className="topbar">
      <h1>Note Keeper</h1>
      <SearchBar onSearch={onSearch} />
      <button onClick={onCreateNote}>
        <RiStickyNoteAddLine size={32} />
      </button>
    </div>
  );
};

export default TopBar;


// App.js
// src/components/App.js
import React from 'react';
import TopBar from './TopBar';
import NoteList from './NoteList';
import useNotes from '../hooks/useNotes';

const App = () => {
  const {
    notes,
    loading,
    error,
    handleCreateNote,
    handleUpdateNote,
    handleDeleteNote,
    handleSearchNotes
  } = useNotes();

  return (
    <div>
      <TopBar onSearch={handleSearchNotes} onCreateNote={() => alert('Create Note')} />
      {loading && <p>Loading notes...</p>}
      {error && <p>Error: {error}</p>}
      <NoteList notes={notes} onDelete={handleDeleteNote} onEdit={handleUpdateNote} />
    </div>
  );
};

export default App;
