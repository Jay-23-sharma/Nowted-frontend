// import { useState } from 'react'
import { Sidebar } from "./components/Sidebar";
import { NoteList } from "./components/NotesList";
import { NoteDetails } from "./components/NoteDetail";
import { BrowserRouter } from "react-router-dom";
import { SelectNote } from "./components/SelectNote";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className="main-body flex w-screen h-screen">
        <BrowserRouter>
          <Sidebar />
          <NoteList />
          {/* <NoteDetails /> */}
          <SelectNote />

          
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
