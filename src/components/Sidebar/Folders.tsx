import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  createFolder,
  editFolderName,
  deleteFolder,
} from "../services/noteAPI";
import { useFolders } from "../FolderContext";
import FolderLogo from "../../assets/folder-logo.svg";
import CurrentFolder from "../../assets/open-folder-logo.svg";
import EditLogo from "../../assets/editLogo.svg";
import Trash from "../../assets/bin-logo.svg";

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
  const { folders, refreshFolders } = useFolders();
  const [error, setError] = useState("");
  const [editingFolderId, setEditingFolderId] = useState<string | null>(null);
  const [editingFolderName, setEditingFolderName] = useState("");

  async function handleCreateFolder() {
    if (!newFolder.trim()) return;

    try {
      setError("");

      await createFolder(newFolder);
      await refreshFolders();

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

  function handleEditFolder(folderId: string, folderName: string) {
    setEditingFolderId(folderId);
    setEditingFolderName(folderName);
  }

  async function handleSaveFolder(folderId: string) {
    if (!editingFolderName.trim()) return;

    try {
      setError("");

      await editFolderName(folderId, editingFolderName);
      await refreshFolders();

      setEditingFolderId(null);
      setEditingFolderName("");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data?.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    }
  }

  function handleCancelEdit() {
    setEditingFolderId(null);
    setEditingFolderName("");
  }

  async function handleDeleteFolder(folderId: string) {
    try {
      setError("");

      await deleteFolder(folderId);
      await refreshFolders();
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data?.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    }
  }

  return (
    <div className="sidebar bg-white dark:bg-[rgba(24,24,24,1)] h-[30%] overflow-auto [scrollbar-color:rgba(150,150,150,0.5)_rgba(245,245,245,1)] dark:[scrollbar-color:rgba(255,255,255,0.4)_rgba(24,24,24,1)]">
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

              if (e.key === "Escape") {
                setNewFolder("");
                setIsCreatingFolder(false);
              }
            }}
            className="text-black dark:text-white text-sm bg-transparent outline-none w-full"
          />
        </div>
      )}

      {folders.map((item) => (
        <NavLink
          key={item.id}
          to={`/folder/${item.id}`}
          className={({ isActive }) =>
            `group pl-3 pr-2 h-10 flex items-center w-full ${
              isActive
                ? "bg-gray-200 dark:bg-[rgba(255,255,255,0.08)]"
                : "hover:bg-[rgba(49,46,181,1)]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <img
                  src={isActive ? CurrentFolder : FolderLogo}
                  alt="folder icon"
                  className="w-4 h-4 shrink-0 invert dark:invert-0 group-hover:invert-0"
                />

                {editingFolderId === item.id ? (
                  <input
                    autoFocus
                    value={editingFolderName}
                    onChange={(e) => setEditingFolderName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSaveFolder(item.id);
                      }

                      if (e.key === "Escape") {
                        handleCancelEdit();
                      }
                    }}
                    className="text-sm bg-transparent text-black dark:text-white outline-none w-full"
                  />
                ) : (
                  <p
                    className={`text-sm truncate ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-gray-600 dark:text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </p>
                )}
              </div>

              {isActive && editingFolderId !== item.id && (
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleEditFolder(item.id, item.name);
                    }}
                    className="p-1 rounded hover:bg-gray-300 dark:hover:bg-[rgba(255,255,255,0.1)]"
                  >
                    <img
                      src={EditLogo}
                      alt="Edit folder"
                      className="w-4 h-4 invert dark:invert-0"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDeleteFolder(item.id);
                    }}
                    className="p-1 rounded hover:bg-gray-300 dark:hover:bg-[rgba(255,255,255,0.1)]"
                  >
                    <img
                      src={Trash}
                      alt="Delete folder"
                      className="w-4 h-4 invert dark:invert-0"
                    />
                  </button>
                </div>
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}
