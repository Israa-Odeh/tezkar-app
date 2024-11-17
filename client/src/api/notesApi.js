export const fetchNotes = async () => {
  const response = await fetch("/api/notes");
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return response.json();
};

export const createNote = async (note) => {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  if (!response.ok) {
    throw new Error("Failed to create note");
  }
  return response.json();
};
