import { RecentNotes } from "./RecentNotes";
import { Folders } from "./Folders";
import { Utility } from "./Utility";
import { Search } from "./Search";
import AddFolder from "../../assets/addFolder-logo.png";
import { useState } from "react";

export function Sidebar() {
  const [newFolder, setNewFolder] = useState("");
  const [isCreatingFolder,setIsCreatingFolder] = useState(false);

  function handleAddFolder(){
    setNewFolder("new folder 1");
    setIsCreatingFolder(true);
  }
  return (
    <div className="sidebar bg-[rgba(24,24,24,1)]  w-[18%] flex flex-col gap-y-2 overflow-auto">
      <Search />

      <RecentNotes />

      <div className="flex justify-between  pl-3 pr-3">
        <p className="text-gray-400 text-xs">Folders</p>
        <button onClick={handleAddFolder}>
          <img src={AddFolder} alt="Add folder" />
        </button>
      </div>
      <Folders newFolder={newFolder} setNewFolder={setNewFolder} isCreatingFolder={isCreatingFolder} setIsCreatingFolder={setIsCreatingFolder} />

      <Utility />
    </div>
  );
}
