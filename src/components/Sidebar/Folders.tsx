import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { getFolders, createFolder } from "../services/noteAPI";

type NoteFolder = {
  name: string;
  id: string;
};

type FoldersProps = {
  newFolder: string;
  setNewFolder: React.Dispatch<React.SetStateAction<string>>;
  isCreatingFolder: boolean;
  setIsCreatingFolder: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Folders({
  newFolder,
  setNewFolder,
  isCreatingFolder,
  setIsCreatingFolder,
}: FoldersProps) {
  const [folder, setFolder] = useState<NoteFolder[]>([]);
  const [error, setError] = useState("");

  async function fetchFolder() {
    try {
      const response = await getFolders();
      setFolder(response.folders);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data?.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    }
  }

  async function handleCreateFolder() {
    if (!newFolder.trim()) return;

    try {
      await createFolder(newFolder);
      await fetchFolder();
      setNewFolder("");
      setIsCreatingFolder(false);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data?.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    }
  }

  useEffect(() => {
    fetchFolder();
  }, []);

  return (
    <div className="sidebar bg-[rgba(24,24,24,1)] h-[30%] overflow-auto  [scrollbar-color:rgba(255,255,255,0.4)_rgba(24,24,24,1)]">
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {isCreatingFolder && (
        <div className="pl-3 h-10 flex items-center">
          <input
            autoFocus
            value={newFolder}
            onChange={(e) => setNewFolder(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCreateFolder();
              }
            }}
            className="text-white text-sm bg-transparent outline-none w-full"
          />
        </div>
      )}

      {folder.map((item) => (
        <div
          key={item.id}
          className="pl-3 hover:bg-[rgba(255,255,255,0.03)] h-10 flex items-center"
        >
          <NavLink
            to={`/folder/${item.id}`}
            className="text-gray-400 hover:text-white text-sm w-full"
          >
            {item.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
}