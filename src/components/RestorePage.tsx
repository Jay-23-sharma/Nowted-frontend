import RestoreLogo from "../assets/restore-file.svg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getNotesByID, restoreNote } from "./services/noteAPI";
import { useNavigate } from "react-router-dom";

export function RestorePage() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function getTitle() {
      try {
        if (!noteId) return;
        const data = await getNotesByID({ noteId });
        setTitle(data.note.title);
      } catch (e) {
        console.log(e);
      }
    }
    getTitle();
  }, [noteId]);

  async function restoreNotes() {
    try {
      if (!noteId) return;
      await restoreNote({ noteId });

      window.dispatchEvent(new Event("note-updated"));
      navigate(`/delete`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-[60%] bg-white dark:bg-[rgba(24,24,24,1)] text-white justify-center items-center gap-3">
      <img
        className="invert dark:invert-0"
        src={RestoreLogo}
        alt="restore logo"
      />
      <p className="invert invert-0 text-black dark:text-white">{title}</p>
      <p className="dark:text-gray-400 text-gray-700 w-[65%] text-center">
        Don't want to lose this note? it's not too late! Just click the
        'Restore' button and it will be added back to your list.its's that
        simple.
      </p>
      <button
        className="bg-[rgba(49,46,181,1)] w-[10%] h-[5%] rounded-sm"
        onClick={restoreNotes}
      >
        Restore
      </button>
    </div>
  );
}
