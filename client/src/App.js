import NoteList from "./components/NoteList";
import TopBar from "./components/TopBar";
import "./App.css";

function App() {
  const sampleNotes = [
    {
      id: 1,
      title: "Meeting Notes",
      content: "Discuss project milestones and deadlines.",
      creationDate: "2024-11-10",
    },
    {
      id: 2,
      title: "Grocery List",
      content: "Milk, Bread, Eggs, Cheese, and Coffee.",
      creationDate: "2024-11-09",
    },
    {
      id: 3,
      title: "Workout Plan",
      content: "Monday: Cardio, Wednesday: Strength, Friday: Yoga.",
      creationDate: "2024-11-08",
    },
    {
      id: 4,
      title: "Ideas",
      content:
        "Brainstorm app features and user experience improvements. Brainstorm app features and user experience improvements.",
      creationDate: "2024-11-07",
    },
    {
      id: 5,
      title: "Reading List",
      content: "1. Clean Code, 2. Atomic Habits, 3. The Pragmatic Programmer.",
      creationDate: "2024-11-06",
    },
    {
      id: 6,
      title: "Travel Plans",
      content: "Book flights and hotels for the December vacation.",
      creationDate: "2024-11-05",
    },
    {
      id: 7,
      title: "Recipe Ideas",
      content: "1. Pasta Carbonara, 2. Grilled Salmon, 3. Chocolate Cake.",
      creationDate: "2024-11-04",
    },
    {
      id: 8,
      title: "Project Tasks",
      content: "Complete frontend UI and connect API endpoints.",
      creationDate: "2024-11-03",
    },
  ];

  return (
    <div className="App">
      <TopBar />
      <NoteList notes={sampleNotes} />
    </div>
  );
}

export default App;
