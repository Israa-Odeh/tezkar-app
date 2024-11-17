import useNotes from "./hooks/useNotes";
import { TopBar, NoteList } from "./components";
import loadingGif from "./images/loading.gif";
import errorGif from "./images/error.gif";
import "./App.css";

function App() {
  const { notes, loading, error, handleCreateNote } = useNotes();

  return (
    <div className="app">
      <TopBar onCreateNote={handleCreateNote} />
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
      {error && (
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
      {!loading && !error && <NoteList notes={notes} />}
    </div>
  );
}

export default App;
