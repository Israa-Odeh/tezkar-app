import { NoteProvider } from "contexts/NoteContext";
import TopBar from "layouts/TopBar";
import NoteKeeper from "pages/NoteKeeper";

const AppShellLayout = () => {
  return (
    <NoteProvider>
      <div className="app">
        <TopBar />
        <NoteKeeper />
      </div>
    </NoteProvider>
  );
};

export default AppShellLayout;
