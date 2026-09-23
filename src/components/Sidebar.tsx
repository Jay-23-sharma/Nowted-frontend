

export function Sidebar() {
  return (
    <div className="sidebar bg-[rgba(24,24,24,1)]  w-[20%] flex flex-col gap-y-6 overflow-auto">
      <div className="Logo flex justify-between pt-5">
        <img
          className="w-fit pl-3"
          src="src/assets/Nowted-logo.png"
          alt="Nowted Logo"
        />

        <button>
          <img
            className="w-fit pr-3"
            src="src/assets/search-logo.png"
            alt="Search icon"
          />
        </button>
      </div>

      <div className="addNote h-10 w-full pl-3 pr-3">
        <button className="addButton justify-center bg-[rgba(255,255,255,0.05)] w-full h-full flex text-white w-full items-center rounded-sm text-sm gap-1 hover:bg-[rgba(51,51,51,1)]">
          <p className="text-2xl">+</p><p>New Note</p>
        </button>
      </div>

      <div className="recents w-full">
        <p className="text-gray-400 text-xs pb-3 pl-3">Recents</p>

        <div className="recentList flex flex-col">
          <div className="recent1  pl-3 bg-[rgba(49,46,181,1)] h-8 content-center">
            <a className="flex gap-2 items-center" href="">
              <img
                className="w-4 h-4 justify-center"
                src="src/assets/currentFile-logo.png"
                alt=""
              />
              <p className="text-white text-sm">Reflection of the month June</p>
            </a>
          </div>

          <div className="recent1  pl-3 h-8 content-center">
            <a className="flex gap-2 items-center" href="">
              <img
                className="w-4 h-4 justify-center"
                src="src/assets/recentFile-logo.png"
                alt=""
              />
              <p className="text-gray-400 text-sm">Project Proposal</p>
            </a>
          </div>

          <div className="recent1  pl-3 h-8 content-center">
            <a className="flex gap-2 items-center" href="">
              <img
                className="w-4 h-4 justify-center"
                src="src/assets/recentFile-logo.png"
                alt=""
              />
              <p className="text-gray-400 text-sm">Travel Itinerary</p>
            </a>
          </div>
        </div>
      </div>

      <div className="folders">
        <div className="flex justify-between pb-3 pl-3 pr-3">
          <p className="text-gray-400 text-xs">Folders</p>
          <button><img src="src/assets/addFolder-logo.png" alt="" /></button>
        </div>

        <div className="folderList flex flex-col">
          <div className="folder1 h-10 content-center  pl-3 bg-[rgba(255,255,255,0.03)]">
            <a className="flex gap-3 items-center" href="">
              <img
                className="w-4 h-4 justify-center"
                src="src/assets/currentFolder-logo.png"
                alt=""
              />
              <p className="text-white text-sm">Personal</p>
            </a>
          </div>

          <div className="folder1  pl-3 h-10 content-center">
            <a className="flex gap-3 items-center" href="">
              <img
                className="w-4 h-4 justify-center"
                src="src/assets/folder-logo.png"
                alt=""
              />
              <p className="text-gray-400 text-sm">Work</p>
            </a>
          </div>

          <div className="folder1  pl-3 h-8">
            <a className="flex gap-3 items-center" href="">
              <img
                className="w-4 h-4 justify-center"
                src="src/assets/folder-logo.png"
                alt=""
              />
              <p className="text-gray-400 text-sm">Travel</p>
            </a>
          </div>

          <div className="folder1  pl-3">
            <a className="flex gap-3 items-center" href="">
              <img
                className="w-4 h-4 justify-center"
                src="src/assets/folder-logo.png"
                alt=""
              />
              <p className="text-gray-400 text-sm">Finances</p>
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
                <p className="text-white text-sm">Favourites</p>
              </a>
            </div>

            <div className="utility1  pl-3">
              <a className="flex gap-2 items-center" href="">
                <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/trash-logo.png"
                  alt=""
                />
                <p className="text-gray-400 text-sm">Trash</p>
              </a>
            </div>

            <div className="utility1  pl-3">
              <a className="flex gap-2 items-center" href="">
                <img
                  className="w-4 h-4 justify-center"
                  src="src/assets/archive-logo.png"
                  alt=""
                />
                <p className="text-gray-400 text-sm">Travel Itinerary</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
