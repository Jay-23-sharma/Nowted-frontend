import SearchIcon from "../../assets/search-logo.png";
import Logo from "../../assets/Nowted-logo.png";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { createNote } from "../services/noteAPI";

export function Search() {
  const [, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim()) {
        setSearchParams({ search: searchText });
      } else {
        setSearchParams({});
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText, setSearchParams]);

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
    } catch (e) {
      console.log(e);
      setWarning("Something went wrong");
    }
  }
  return (
    <div className="sidebar bg-[rgba(24,24,24,1)] flex flex-col gap-2 pb-2">
      <div className="Logo flex justify-between pt-5">
        <img className="w-fit pl-3" src={Logo} alt="Nowted Logo" />

        <button
          onClick={() =>
            setIsSearching((prev) => {
              if (prev) {
                setSearchText("");
                setSearchParams({});
              }
              return !prev;
            })
          }
        >
          <img className="w-fit pr-3" src={SearchIcon} alt="Search icon" />
        </button>
      </div>

      <div className="addNote w-full pl-3 pr-3">
        {isSearching ? (
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e.target.value);
            }}
            placeholder="Search notes..."
            className="w-full h-10 bg-[rgba(255,255,255,0.05)] text-white px-3 rounded-sm outline-none"
          />
        ) : (
          <button
            onClick={handleNewNote}
            className="h-10 w-full flex items-center justify-center bg-[rgba(255,255,255,0.05)] text-white rounded-sm text-sm gap-1 hover:bg-[rgba(51,51,51,1)]"
          >
            <p className="text-2xl">+</p>
            <p>New Note</p>
          </button>
        )}
        {warning && <p className="text-red-400 text-xs mt-2">{warning}</p>}
      </div>
    </div>
  );
}
