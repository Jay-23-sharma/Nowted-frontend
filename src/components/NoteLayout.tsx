import { Outlet } from "react-router-dom";
import { NotesList } from "./NotesList";

export function NotesLayout() {
  return (
    <>
      <NotesList />
      <Outlet />
    </>
  );
}