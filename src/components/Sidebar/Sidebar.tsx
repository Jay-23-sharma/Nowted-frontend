import { RecentNotes } from "./RecentNotes";
import { Folders } from "./Folders";
import { Utility } from "./Utility";
import { Search } from "./Search";

export function Sidebar() {
  return (
    <div className="sidebar bg-[rgba(24,24,24,1)]  w-[20%] flex flex-col gap-y-6 overflow-auto">
      <Search />

      <RecentNotes />

      <Folders />

      <Utility />
    </div>
  );
}
