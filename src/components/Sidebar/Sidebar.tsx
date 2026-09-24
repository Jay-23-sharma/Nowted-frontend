import { RecentNotes } from "./RecentNotes";
import { Folders } from "./Folders";
import { Utility } from "./Utility";
import { Search } from "./Search";
import AddFolder from "../../assets/addFolder-logo.png"

export function Sidebar() {
  return (
    <div className="sidebar bg-[rgba(24,24,24,1)]  w-[20%] flex flex-col gap-y-6 overflow-auto">
      <Search />

      <RecentNotes />
      
        <div className="flex justify-between  pl-3 pr-3">
          <p className="text-gray-400 text-xs">Folders</p>
          <button>
            <img src={AddFolder} alt="" />
          </button>
        </div>
      <Folders />

      <Utility />
    </div>
  );
}
