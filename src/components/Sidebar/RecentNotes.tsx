import { useEffect, useState } from "react";
import { getRecentNotes } from "../services/noteAPI";
import { NavLink } from "react-router-dom";
import CurrFileLogo from "../../assets/currentFile-logo.png"


export function RecentNotes() {
  type Note = {
    id: string;
    title: string;
  };
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const data = await getRecentNotes();
        setNotes(data.recentNotes);
      } catch (e) {
        console.log(e);
      }
    }

    fetchNotes();
  }, []);

  return (
    <div className="sidebar bg-[rgba(24,24,24,1)] pb-1">
      <div className="recents w-full">
        <p className="text-gray-400 text-xs pb-3 pl-3">Recents</p>
        <div className="recentList flex flex-col">
          {notes.map((note) => (
            <div
              key={note.id}
              className="recent1  pl-3 hover:bg-[rgba(49,46,181,1)] h-8 content-center"
            >
              <NavLink to={`/notes/${note.id}`} className="flex gap-2 items-center">
                <img
                  className="w-4 h-4 justify-center"
                  src={CurrFileLogo}
                  alt=""
                />
                <p className="text-white text-sm">{note.title}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
