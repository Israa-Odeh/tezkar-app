import { useEffect } from "react";
import useNotes from "./hooks/useNotes";
import { TopBar, NoteList } from "./components";
import loadingGif from "./images/loading.gif";
import errorGif from "./images/error.gif";
import "./App.css";

function App() {
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
      {loading && (
        <div className="app__status">
          <img
            className="app__status-image"
            src={loadingGif}
            width={400}
            height={400}
            alt="Loading, please wait while the data is being fetched"
          />
          <p className="app__status-text">
            The notes are being prepared. Please wait a moment.
          </p>
        </div>
      )}
      {fetchError && (
        <div className="app__status">
          <img
            className="app__status-image"
            src={errorGif}
            width={400}
            height={400}
            alt="Error occurred while fetching data"
          />
          <p className="app__status-text">
            An issue occurred while the notes were being fetched. Please try
            again later.
          </p>
        </div>
      )}
      {!loading && !fetchError && (
        <NoteList
          notes={notes}
          onEdit={handleUpdateNote}
          onDelete={handleDeleteNote}
        />
      )}
    </div>
  );
}

export default App;
