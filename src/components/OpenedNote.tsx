import { Sidebar } from "./Sidebar/Sidebar";
import { NoteList } from "./NotesList";
import { NoteDetails } from "./NoteDetails/NoteDetail";

export function OpenedNote() {
  return (
    <div className="main-body flex w-screen h-screen">
      <Sidebar />
      <NoteList />
      <NoteDetails />
    </div>
  );
}
