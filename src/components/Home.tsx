import { Sidebar } from "./Sidebar/Sidebar";
import { NoteList } from "./NotesList";
import { SelectNote } from "./SelectNote";
import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <div className="main-body flex w-screen h-screen">
      <Sidebar />
      <NoteList />
      <Outlet />
    </div>
  );
}
