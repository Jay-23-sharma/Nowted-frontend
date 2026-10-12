import { useEffect, useRef, useState } from "react";
import MoreLogo from "../../assets/option-logo.svg";
import FavLogo from "../../assets/fav-logo.svg";
import ArchiveLogo from "../../assets/archived-logo.svg";
import TrashLogo from "../../assets/bin-logo.svg";
import { updateNote, deleteNote } from "../services/noteAPI";
import { useNavigate, useLocation } from "react-router-dom";

type NoteTitle = {
  title: string;
  noteId: string;
  folderId?: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  onTitleSave: (title: string) => void;
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  isArchived: boolean;
  setIsArchived: React.Dispatch<React.SetStateAction<boolean>>;
};

export function More({
  title,
  noteId,
  folderId,
  setTitle,
  onTitleSave,
  isFavorite,
  setIsFavorite,
  isArchived,
  setIsArchived,
}: NoteTitle) {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu, setMenu] = useState(false);
  const [editing, setEditing] = useState(false);

  const titleTimer = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    return () => {
      if (titleTimer.current) {
        clearTimeout(titleTimer.current);
      }
    };
  }, []);

  function handleTitleChange(value: string) {
    setTitle(value);

    if (titleTimer.current) {
      clearTimeout(titleTimer.current);
    }

    titleTimer.current = setTimeout(() => {
      onTitleSave(value);
    }, 500);
  }

  async function handleFav() {
    try {
      const val = !isFavorite;

      await updateNote(noteId, {
        isFavorite: val,
      });

      setIsFavorite(val);

      window.dispatchEvent(new Event("note-updated"));
      window.dispatchEvent(
        new Event("recent-notes-updated")
      );

      setMenu(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleArchive() {
    try {
      const val = !isArchived;

      await updateNote(noteId, {
        isArchived: val,
      });

      setIsArchived(val);

      window.dispatchEvent(new Event("note-updated"));
      window.dispatchEvent(
        new Event("recent-notes-updated")
      );

      setMenu(false);

      if (location.pathname.startsWith("/archive")) {
        navigate("/archive");
      } else if (location.pathname.startsWith("/favorite")) {
        navigate("/favorite");
      } else if (location.pathname.startsWith("/delete")) {
        navigate("/delete");
      } else if (folderId) {
        navigate(`/folder/${folderId}`);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDelete() {
    try {
      await deleteNote(noteId);

      window.dispatchEvent(new Event("note-updated"));
      window.dispatchEvent(
        new Event("recent-notes-updated")
      );

      setMenu(false);

      if (location.pathname.startsWith("/archive")) {
        navigate("/archive");
      } else if (location.pathname.startsWith("/favorite")) {
        navigate("/favorite");
      } else if (location.pathname.startsWith("/delete")) {
        navigate("/delete");
      } else if (folderId) {
        navigate(`/folder/${folderId}`);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="heading text-black dark:text-white text-3xl flex justify-between p-5 pt-8">
      {editing ? (
        <input
          autoFocus
          value={title}
          onChange={(e) =>
            handleTitleChange(e.target.value)
          }
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.currentTarget.blur();
            }
          }}
          className="bg-transparent outline-none text-black dark:text-white w-full"
        />
      ) : (
        <p
          onClick={() => setEditing(true)}
          className="cursor-text"
        >
          {title}
        </p>
      )}

      <div className="relative">
        <img
          className="invert dark:invert-0 cursor-pointer"
          onClick={() => setMenu(!openMenu)}
          src={MoreLogo}
          alt="more icon"
        />

        {openMenu && (
          <div className="absolute bg-gray-200 dark:bg-[rgba(51,51,51,1)] right-1 top-10 rounded-lg shadow-lg">
            <div className="flex flex-col w-45 h-30 justify-center rounded-lg overflow-hidden">
              <button
                className="group flex h-[33%] items-center pl-3 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[rgba(255,255,255,0.05)]"
                onClick={handleFav}
              >
                <div className="flex text-xs gap-3 items-center">
                  {isFavorite ? (
                    <span className="text-yellow-500 text-2xl">
                      ★
                    </span>
                  ) : (
                    <img
                      className="w-4 h-4 invert dark:invert-0 group-hover:invert-0"
                      src={FavLogo}
                      alt="favorite icon"
                    />
                  )}

                  <p>
                    {isFavorite
                      ? "Remove Favorites"
                      : "Add to Favorites"}
                  </p>
                </div>
              </button>

              <button
                className="group flex h-[33%] items-center pl-3 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[rgba(255,255,255,0.05)] border-b border-gray-300 dark:border-[rgba(255,255,255,0.05)]"
                onClick={handleArchive}
              >
                <div className="flex text-xs gap-3 items-center">
                  <img
                    className="w-4 h-4 invert dark:invert-0 group-hover:invert-0"
                    src={ArchiveLogo}
                    alt="archive icon"
                  />

                  <p>
                    {isArchived ? "UnArchive" : "Archived"}
                  </p>
                </div>
              </button>

              <button
                className="group flex h-[33%] items-center pl-3 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[rgba(255,255,255,0.05)]"
                onClick={handleDelete}
              >
                <div className="flex text-xs gap-3 items-center">
                  <img
                    className="w-4 h-4 invert dark:invert-0 group-hover:invert-0"
                    src={TrashLogo}
                    alt="delete icon"
                  />

                  <p>Delete</p>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}