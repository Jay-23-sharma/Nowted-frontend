export function Utility() {
  return (
    <div className="sidebar bg-[rgba(24,24,24,1)]">
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
