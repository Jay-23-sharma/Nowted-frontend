import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getNoteList, getFolders } from "./services/noteAPI";
import { NavLink } from "react-router-dom";

type NoteList = {
  id: string;
  folderId: string;
  preview: string;
  createdAt: string;
  title: string;
  isFavorite: boolean;
  isArchived: boolean;
};

type FolderName = {
  id: string;
  name: string;
};

export function NotesList() {
  const { folderId } = useParams();
  const [loading, setLoading] = useState(false);
  const [notes, setNote] = useState<NoteList[]>([]);
  const [error, setError] = useState("");
  const [folderName, setFolderName] = useState("");
  const location = useLocation();
  const favoritePage = location.pathname == "/favorite";
  const deletedPage = location.pathname == "/delete";
  const archivedPage = location.pathname == "/archive";
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    async function getFolderName() {
      try {
        const response = await getFolders();

        const folder = response.folders.find(
          (folder: FolderName) => folder.id === folderId,
        );

        if (folder) {
          setFolderName(folder.name);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getFolderName();
  }, [folderId, favoritePage]);

  useEffect(() => {
    async function fetchNoteList() {
      setLoading(true);
      try {
        if (favoritePage) {
          const data = await getNoteList({ favorite: true });
          setNote(data.notes);
        } else if (archivedPage) {
          const data = await getNoteList({ archived: true });
          setNote(data.notes);
        } else if (search) {
          const data = await getNoteList({ search });
          setNote(data.notes);
        } else if (deletedPage) {
          const data = await getNoteList({ deleted: true });
          setNote(data.notes);
        } else if (folderId) {
          const data = await getNoteList({ folderId });
          setNote(data.notes);
        }
      } catch (e) {
        if (axios.isAxiosError(e)) {
          setError(e.response?.data?.message || "Something went wrong");
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchNoteList();
  }, [
    folderId,
    favoritePage,
    archivedPage,
    deletedPage,
    location.pathname,
    search,
  ]);
  return (
    <div className="noteList bg-[rgba(28,28,28,1)] w-[22%] overflow-auto [scrollbar-color:rgba(255,255,255,0.4)_rgba(24,24,24,1)] ">
      <h1 className="text-white p-3 pb-6">
        {favoritePage
          ? "Favorites"
          : archivedPage
            ? "Archived Notes"
            : deletedPage
              ? "Deleted Notes"
              : folderName}
      </h1>

      <div className="flex flex-col pl-3 pr-3 gap-6 h-[50%]">
        {loading && (
          <p className="text-sm text-[rgba(255,255,255,0.6)]">Loading...</p>
        )}
        {error && <p className="text-red-600 text-lg">{error}</p>}
        {!loading && notes.length === 0 && (
          <div className="flex justify-center items-center">
            <p className="text-sm text-[rgba(255,255,255,0.6)]">
              Folder is Empty
            </p>
          </div>
        )}
        {!loading &&
          !error &&
          notes.map((note) => (
            <NavLink
              key={note.id}
              to={`notes/${note.id}`}
              className="list1 bg-[rgba(255,255,255,0.03)] flex flex-col p-2 gap-2 justify-center rounded-xs hover:bg-[rgba(255,255,255,0.1)]"
            >
              <p className="text-white pl-3 text-sm wrap-break-word">{note.title}</p>
              <div className="shrink-0 flex gap-3 pl-3 pr-2">
                <p className="text-[rgba(255,255,255,0.4)] text-[73%]">
                  {note.createdAt.slice(0, 10)}
                </p>
                <p className="truncate min-w-0 text-[rgba(255,255,255,0.6)] text-xs">
                  {note.preview}
                </p>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}
