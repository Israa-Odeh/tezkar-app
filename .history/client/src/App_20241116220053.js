import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setData(data.notes)); // Set the notes data (which is an array)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* If data exists, map over it and display note titles */}
        <p>
          {!data
            ? "Loading..."
            : data.map((note) => <div key={note._id}>{note.title}</div>)}
        </p>
      </header>
    </div>
  );
}

export default App;
