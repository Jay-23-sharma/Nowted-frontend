import { Favorites } from "./Utility/Favorites";
import { DeletedNotes } from "./Utility/Delete";
import { Archived } from "./Utility/Archive";

export function Utility() {
  return (
    <div className="sidebar bg-[rgba(24,24,24,1)] pt-5">
      <div className="utility">
        <div className="utility w-full">
          <p className="text-gray-400 text-xs pb-3 pl-3">More</p>

          <div className="utilityList flex flex-col">
            <Favorites />

            <Archived />

            <DeletedNotes />
          </div>
        </div>
      </div>
    </div>
  );
}
