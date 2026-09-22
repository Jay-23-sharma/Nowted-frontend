// import { useState } from 'react'
import { Sidebar } from "./components/Sidebar";
import { NoteList } from "./components/NotesList";
import { NoteDetails } from "./components/NoteDetail";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className="main-body flex w-screen h-screen">
        <Sidebar />
        <NoteList />
        <NoteDetails />
      </div>
    </div>
  );
}

export default App;
