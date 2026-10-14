import {
  useParams,
  useLocation,
  useSearchParams,
  NavLink,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getNoteList } from "./services/noteAPI";
import { useFolders } from "./FolderContext";

type NoteList = {
  id: string;
  folderId: string;
  preview: string;
  createdAt: string;
  title: string;
  isFavorite: boolean;
  isArchived: boolean;
};

export function NotesList() {
  const { folderId } = useParams();
  const { folders } = useFolders();

  const [loading, setLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [notes, setNote] = useState<NoteList[]>([]);
  const [error, setError] = useState("");

  const location = useLocation();
  const [searchParams] = useSearchParams();

  const favoritePage = location.pathname.startsWith("/favorite");
  const deletedPage = location.pathname.startsWith("/delete");
  const archivedPage = location.pathname.startsWith("/archive");

  const search = searchParams.get("search")?.trim() || "";

  const folderName =
    folders.find((folder) => folder.id === folderId)?.name || "";

  useEffect(() => {
    let cancelled = false;

    async function fetchNoteList() {
      const firstLoad = !hasLoaded;

      if (firstLoad) {
        setLoading(true);
      }

      setError("");

      try {
        let data;

        if (search) {
          data = await getNoteList({
            search,
          });
        } else if (favoritePage) {
          data = await getNoteList({
            favorite: true,
          });
        } else if (archivedPage) {
          data = await getNoteList({
            archived: true,
          });
        } else if (deletedPage) {
          data = await getNoteList({
            deleted: true,
          });
        } else if (folderId) {
          data = await getNoteList({
            folderId,
          });
        } else {
          if (!cancelled) {
            setNote([]);
            setHasLoaded(true);
            setLoading(false);
          }

          return;
        }

        if (cancelled) return;

        setNote(data.notes);
        setHasLoaded(true);
      } catch (e) {
        if (cancelled) return;

        if (axios.isAxiosError(e)) {
          setError(e.response?.data?.message || "Something went wrong");
        } else {
          setError("Something went wrong");
        }

        if (!hasLoaded) {
          setNote([]);
        }

        setHasLoaded(true);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchNoteList();

    function handleNoteUpdated() {
      fetchNoteList();
    }

    window.addEventListener("note-updated", handleNoteUpdated);

    return () => {
      cancelled = true;

      window.removeEventListener("note-updated", handleNoteUpdated);
    };
  }, [folderId, favoritePage, archivedPage, deletedPage, search]);

  let heading = folderName;

  if (search) {
    heading = "Search Results";
  } else if (favoritePage) {
    heading = "Favorites";
  } else if (archivedPage) {
    heading = "Archived Notes";
  } else if (deletedPage) {
    heading = "Deleted Notes";
  }

  return (
    <div className="noteList bg-gray-200 dark:bg-[rgba(28,28,28,1)] w-[22%] overflow-auto dark:[scrollbar-color:rgba(255,255,255,0.4)_rgba(24,24,24,1)] [scrollbar-color:rgba(150,150,150,0.5)_rgba(245,245,245,1)]">
      <h1 className="text-black dark:text-white p-3 pb-6">{heading}</h1>

      <div className="flex flex-col pl-3 pr-3 gap-6 h-[50%]">
        {loading && !hasLoaded && (
          <div className="flex justify-center items-center">
            <p className="text-sm text-black dark:text-[rgba(255,255,255,0.6)]">
              Loading...
            </p>
          </div>
        )}

        {error && <p className="text-red-600 text-lg">{error}</p>}

        {hasLoaded && notes.length === 0 && !error && (
          <div className="flex justify-center items-center">
            <p className="text-sm text-black dark:text-[rgba(255,255,255,0.6)]">
              {search ? "No notes found" : "Folder is Empty"}
            </p>
          </div>
        )}

        {!error &&
          notes.map((note) => {
            let notePath = `/folder/${note.folderId}/notes/${note.id}`;

            if (favoritePage) {
              notePath = `/favorite/notes/${note.id}`;
            } else if (archivedPage) {
              notePath = `/archive/notes/${note.id}`;
            } else if (deletedPage) {
              notePath = `/delete/notes/${note.id}`;
            }

            return (
              <NavLink
                key={note.id}
                to={notePath}
                className="list1 bg-white dark:bg-[rgba(255,255,255,0.03)] flex flex-col p-2 gap-2 justify-center rounded-sm hover:bg-gray-300 dark:hover:bg-[rgba(255,255,255,0.1)]"
              >
                <p className="dark:text-white text-black pl-3 text-sm wrap-break-word">
                  {note.title}
                </p>

                <div className="shrink-0 flex gap-3 pl-3 pr-2">
                  <p className="dark:text-[rgba(255,255,255,0.4)] text-[73%]">
                    {note.createdAt.slice(0, 10)}
                  </p>

                  <p className="truncate min-w-0 dark:text-[rgba(255,255,255,0.6)] text-xs">
                    {note.preview}
                  </p>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}
