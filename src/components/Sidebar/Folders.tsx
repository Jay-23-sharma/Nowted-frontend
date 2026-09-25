import CurrFoldersLogo from "../../assets/currentFolder-logo.png";
import { useState, useEffect } from "react";
import { getFolders } from "../services/noteAPI";
import { NavLink } from "react-router-dom";

type NoteFolder = {
  name: string;
  id: string;
};
export function Folders() {
  const [folders, setFolder] = useState<NoteFolder[]>([]);

  useEffect(() => {
    async function fetchFolder() {
      try {
        const response = await getFolders();
        setFolder(response.folders);
      } catch (e) {
        console.log(e);
      }
    }
    fetchFolder();
  }, []);
  return (
    <div className="sidebar bg-[rgba(24,24,24,1)] overflow-auto h-[30%] [scrollbar-color:rgba(255,255,255,0.4)_rgba(24,24,24,1)]">
        
      <div className="folders ">
        <div className="folderList flex flex-col ">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="folder1 h-10 content-center  pl-3 hover:bg-[rgba(255,255,255,0.03)]"
            >
              <NavLink className="flex gap-3 items-center" to="">
                <img
                  className="w-4 h-4 justify-center"
                  src={CurrFoldersLogo}
                  alt="current folder logo"
                />
                <p className="text-white text-sm">{folder.name}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
