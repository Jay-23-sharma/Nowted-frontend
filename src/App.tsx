// import { useState } from 'react'

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { NoteDetails } from "./components/NoteDetails/NoteDetail";
import { SelectNote } from "./components/SelectNote";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className="main-body flex w-screen h-screen">
        <BrowserRouter>
          <Link to="/"></Link>
          <Link to="noteDetail"></Link>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<SelectNote />} />

              <Route path="notes/:noteId" element={<NoteDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
