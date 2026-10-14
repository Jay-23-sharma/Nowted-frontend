import { More } from "./More";
import { Detail } from "./Detail";
import { Content } from "./Content";
import { getNotesByID, updateNote } from "../services/noteAPI";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  folder: {
    id: string;
    name: string;
  };
  isFavorite: boolean;
  isArchived: boolean;
};

export function NoteDetails() {
  const navigate = useNavigate();
  const { noteId, folderId } = useParams();

  const [note, setNote] = useState<Note | null>(null);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [isArchived, setIsArchived] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchNote() {
      if (!noteId) return;

      setNote(null);
      setError("");

      try {
        const data = await getNotesByID({ noteId });

        if (cancelled) return;

        setNote(data.note);
        setTitle(data.note.title);
        setContent(data.note.content);
        setIsFavorite(data.note.isFavorite);
        setIsArchived(data.note.isArchived);
      } catch (e) {
        if (cancelled) return;

        if (axios.isAxiosError(e)) {
          setError(e.response?.data?.message || "Something went wrong");
        } else {
          setError("Something went wrong");
        }
      }
    }

    fetchNote();

    return () => {
      cancelled = true;
    };
  }, [noteId]);

  async function handleTitleSave(newTitle: string) {
    if (!noteId) return;

    try {
      setError("");

      await updateNote(noteId, {
        title: newTitle,
      });

      setTitle(newTitle);

      window.dispatchEvent(new Event("note-updated"));
      window.dispatchEvent(new Event("recent-notes-updated"));
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data?.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    }
  }

  async function handleContentSave(newContent: string) {
    if (!noteId) return;

    try {
      setError("");

      await updateNote(noteId, {
        content: newContent,
      });

      setContent(newContent);

      window.dispatchEvent(new Event("note-updated"));
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data?.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    }
  }

  async function handleFolderChange(newFolderId: string, _folderName: string) {
    if (!noteId) return;

    try {
      setError("");

      await updateNote(noteId, {
        folderId: newFolderId,
      });

      window.dispatchEvent(new Event("note-updated"));
      window.dispatchEvent(new Event("recent-notes-updated"));

      navigate(`/folder/${newFolderId}`, {
        replace: true,
      });
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data?.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    }
  }

  if (!noteId) {
    return (
      <div className="bg-[rgba(24,24,24,1)] text-red-500 flex justify-center items-center w-[60%]">
        Note not found
      </div>
    );
  }

  if (!note) {
    return (
      <div className="text-black dark:text-white w-[60%] dark:bg-[rgba(24,24,24,1)]">
        {error || "Loading..."}
      </div>
    );
  }

  return (
    <div className="noteDetails bg-white dark:bg-[rgba(24,24,24,1)] w-[60%] overflow-auto">
      <div className="flex flex-col gap-5">
        {error && <p className="Error text-red-600 text-xl">{error}</p>}

        <More
          title={title}
          setTitle={setTitle}
          onTitleSave={handleTitleSave}
          noteId={noteId}
          folderId={folderId}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          isArchived={isArchived}
          setIsArchived={setIsArchived}
        />

        <Detail
          date={note.createdAt}
          folder={note.folder.name}
          onFolderChange={handleFolderChange}
        />

        <Content
          content={content}
          setContent={setContent}
          onContentSave={handleContentSave}
        />
      </div>
    </div>
  );
}
