import SearchIcon from "../../assets/search-icon.svg";
import Logo from "../../assets/nowted-logo.svg";
import LightMode from "../../assets/LightMode_logo.png";
import DarkMode from "../../assets/darkMode_logo.png";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { createNote } from "../services/noteAPI";
import { useTheme } from "../../components/ThemeContext";

export function Search() {
  const { theme, setTheme } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [warning, setWarning] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );

  useEffect(() => {
    setSearchText(searchParams.get("search") || "");
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (searchText.trim()) {
        params.set("search", searchText.trim());
      } else {
        params.delete("search");
      }

      setSearchParams(params);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  async function handleNewNote() {
    const parts = location.pathname.split("/");
    const folderId = parts[1] === "folder" ? parts[2] : undefined;

    if (!folderId) {
      setWarning("Please select a folder first");

      setTimeout(() => {
        setWarning("");
      }, 8000);

      return;
    }

    try {
      const data = await createNote({
        folderId,
        title: "Untitled Note",
        content: "",
        isFavorite: false,
        isArchived: false,
      });

      navigate(`/folder/${folderId}/notes/${data.id}`);

      window.dispatchEvent(new Event("note-updated"));
      window.dispatchEvent(new Event("recent-notes-updated"));
    } catch (e) {
      console.log(e);
      setWarning("Something went wrong");
    }
  }

  return (
    <div className="sidebar bg-white dark:bg-[rgba(24,24,24,1)] flex flex-col gap-2 pb-2">
      <div className="Logo flex justify-between pt-5">
        <img
          className="w-fit pl-3 invert dark:invert-0"
          src={Logo}
          alt="Nowted Logo"
        />

        <div className="buttons flex gap-4">
          <div className="content-center">
            <button
              className="p-1 dark:bg-transparent rounded-sm"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            >
              <img
                className="w-fit"
                src={theme === "dark" ? LightMode : DarkMode}
                alt="theme icon"
              />
            </button>
          </div>

          <button
            className="p-1 dark:bg-transparent rounded-sm"
            onClick={() => {
              if (isSearching) {
                setSearchText("");

                const params = new URLSearchParams(searchParams);
                params.delete("search");
                setSearchParams(params);
              }

              setIsSearching((prev) => !prev);
            }}
          >
            <img
              className="w-fit pr-3 invert dark:invert-0"
              src={SearchIcon}
              alt="Search icon"
            />
          </button>
        </div>
      </div>

      <div className="addNote w-full pl-3 pr-3">
        {isSearching ? (
          <input
            type="text"
            value={searchText}
            autoFocus
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search notes..."
            className="w-full h-10 bg-gray-200 dark:bg-[rgba(255,255,255,0.05)] text-black dark:text-white px-3 rounded-sm outline-none"
          />
        ) : (
          <button
            onClick={handleNewNote}
            className="h-10 w-full flex items-center justify-center bg-gray-200 dark:bg-[rgba(255,255,255,0.05)] text-black dark:text-white rounded-sm text-sm gap-1 hover:bg-gray-300 dark:hover:bg-[rgba(51,51,51,1)]"
          >
            <p className="text-2xl">+</p>
            <p>New Note</p>
          </button>
        )}

        {warning && (
          <p className="text-red-400 text-xs mt-2">{warning}</p>
        )}
      </div>
    </div>
  );
}