import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api/notes")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.notes));
  // }, []);

  return (
    <div className="App">
      <TopBar />
    </div>
  );
}

export default App;
