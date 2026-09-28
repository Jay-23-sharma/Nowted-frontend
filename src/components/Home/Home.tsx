import { NotesList } from "../NotesList";
import { Sidebar } from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <div className="main-body flex w-screen h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}
