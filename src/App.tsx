// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className="main-body flex w-screen h-screen">

        <div className="sidebar bg-black  w-md flex flex-col gap-y-12 overflow-auto">
          <div className="Logo flex justify-between pt-5">
            <img
              className="w-fit pl-3"
              src="src/assets/Nowted-logo.png"
              alt="Nowted Logo"
            />

            <img
              className="w-fit pr-3"
              src="src/assets/search-logo.png"
              alt="Search icon"
            />
          </div>

          <div className="addNote h-10 w-full pl-3 pr-3">
            <button className="addButton justify-center bg-[#1C1C1C] w-full h-full flex text-white w-full items-center rounded-sm text-sm">
              + New Note
            </button>
          </div>

          <div className="recents w-full">
            <p className="text-gray-400 text-xs pb-3 pl-3">Recents</p>

            <div className="recentList flex flex-col gap-4">
              <div className="recent1  pl-3">
                <a className="flex gap-2 items-center" href="">
                  <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/currentFile-logo.png"
                  alt=""
                />
                <p className="text-white text-sm">
                  Reflection of the month June
                </p>
                </a>
                
              </div>

              <div className="recent1  pl-3">
                <a className="flex gap-2 items-center" href="">
                  <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/recentFile-logo.png"
                  alt=""
                />
                <p className="text-gray-400 text-sm">
                  Project Proposal
                </p>
                </a>
                
              </div>

              <div className="recent1  pl-3">
                <a className="flex gap-2 items-center" href="">
                  <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/recentFile-logo.png"
                  alt=""
                />
                <p className="text-gray-400 text-sm">
                  Travel Itinerary
                </p>
                </a>
                
              </div>
            </div>
          </div>



          <div className="folders">

            <div className="flex justify-between pb-3 pl-3 pr-3">
              <p className="text-gray-400 text-xs">Folders</p>
              <img src="src/assets/addFolder-logo.png" alt="" />
            </div>
            

            <div className="folderList flex flex-col gap-4">
              <div className="folder1  pl-3">
                <a className="flex gap-3 items-center" href="">
                  <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/currentFolder-logo.png"
                  alt=""
                />
                <p className="text-white text-sm">
                  Personal
                </p>
                </a>
                
              </div>

              <div className="folder1  pl-3">
                <a className="flex gap-3 items-center" href="">
                  <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/folder-logo.png"
                  alt=""
                />
                <p className="text-gray-400 text-sm">
                  Work
                </p>
                </a>
                
              </div>

              <div className="folder1  pl-3">
                <a className="flex gap-3 items-center" href="">
                  <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/folder-logo.png"
                  alt=""
                />
                <p className="text-gray-400 text-sm">
                  Travel 
                </p>
                </a>
                
              </div>

              <div className="folder1  pl-3">
                <a className="flex gap-3 items-center" href="">
                  <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/folder-logo.png"
                  alt=""
                />
                <p className="text-gray-400 text-sm">
                  Finances
                </p>
                </a>
                
              </div>
            </div>
          </div>


          <div className="utility">

            <div className="utility w-full">
            <p className="text-gray-400 text-xs pb-3 pl-3">More</p>

            <div className="utilityList flex flex-col gap-4">
              <div className="r1  pl-3">
                <a className="flex gap-2 items-center" href="">
                  <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/fav-logo.png"
                  alt=""
                />
                <p className="text-white text-sm">
                  Favourites
                </p>
                </a>
                
              </div>

              <div className="utility1  pl-3">
                <a className="flex gap-2 items-center" href="">
                  <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/trash-logo.png"
                  alt=""
                />
                <p className="text-gray-400 text-sm">
                  Trash
                </p>
                </a>
                
              </div>

              <div className="utility1  pl-3">
                <a className="flex gap-2 items-center" href="">
                  <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/archive-logo.png"
                  alt=""
                />
                <p className="text-gray-400 text-sm">
                  Travel Itinerary
                </p>
                </a>
                
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="noteList bg-[#1C1C1C] w-md">
          <h1 className="text-white">Notes-List</h1>
        </div>

        <div className="noteDetails bg-black w-screen">
          <h1 className="text-white">Notes-Details</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
