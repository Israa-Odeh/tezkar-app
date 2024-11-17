export const fetchNotes = async () => {
  const response = await fetch("/api/notes");
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return response.json();
};
