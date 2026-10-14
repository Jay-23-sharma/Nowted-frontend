import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { NoteDetails } from "./components/NoteDetails/NoteDetail";
import { SelectNote } from "./components/Home/SelectNote";
import { SelectFolder } from "./components/Home/SelectFolder";
import { NotesLayout } from "./components/NoteLayout";
import { RestorePage } from "./components/RestorePage";

function App() {
  return (
    <div>
      <div className="main-body flex w-screen h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route
                index
                element={
                  <>
                    <SelectFolder />
                    <SelectNote />
                  </>
                }
              />

              <Route path="folder/:folderId" element={<NotesLayout />}>
                <Route index element={<SelectNote />} />
                <Route path="notes/:noteId" element={<NoteDetails />} />
              </Route>

              <Route path="notes/:noteId" element={<NotesLayout />}>
                <Route index element={<NoteDetails />} />
              </Route>

              <Route path="favorite" element={<NotesLayout />}>
                <Route index element={<SelectNote />} />
                <Route path="notes/:noteId" element={<NoteDetails />} />
              </Route>

              <Route path="archive" element={<NotesLayout />}>
                <Route index element={<SelectNote />} />
                <Route path="notes/:noteId" element={<NoteDetails />} />
              </Route>

              <Route path="delete" element={<NotesLayout />}>
                <Route index element={<SelectNote />} />
                <Route path="notes/:noteId" element={<RestorePage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
