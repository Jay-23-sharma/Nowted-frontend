
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { getRecentNotes } from "../services/noteAPI";
import FileLogo from "../../assets/select-file.svg";

type RecentNote = {
  id: string;
  title: string;
  folderId: string;
};

export function RecentNotes() {
  const [notes, setNotes] = useState<RecentNote[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNotes() {
      try {
        setError("");
        const data = await getRecentNotes();
        setNotes(data.recentNotes);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          setError(
            e.response?.data?.message || "Something went wrong"
          );
        } else {
          setError("Something went wrong");
        }
      }
    }

    fetchNotes();

    window.addEventListener("note-updated", fetchNotes);
    window.addEventListener("recent-notes-updated", fetchNotes);

    return () => {
      window.removeEventListener("note-updated", fetchNotes);
      window.removeEventListener("recent-notes-updated", fetchNotes);
    };
  }, []);

  return (
    <div className="overflow-auto">
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {notes.map((note) => (
        <NavLink
          key={note.id}
          to={`/folder/${note.folderId}/notes/${note.id}`}
          className="group flex items-center gap-2 pl-3 pr-3 h-9 hover:bg-[rgba(49,46,181,1)]"
        >
          <img
            src={FileLogo}
            alt="file icon"
            className="w-4 h-4 invert dark:invert-0 group-hover:invert-0"
          />

          <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white truncate">
            {note.title}
          </p>
        </NavLink>
      ))}
    </div>
  );
}