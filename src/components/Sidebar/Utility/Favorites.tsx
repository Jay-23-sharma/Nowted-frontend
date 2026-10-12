import { NavLink } from "react-router-dom";
import FavLogo from "../../../assets/fav-logo.svg";

export function Favorites() {
  return (
    <div className="group pl-3 h-10 flex items-center text-black dark:text-gray-400 hover:bg-[rgba(49,46,181,1)] hover:text-white">
      <NavLink className="flex gap-2 items-center w-full" to="favorite">
        <img
          className="w-4 h-4 invert dark:invert-0 group-hover:invert-0"
          src={FavLogo}
          alt="favorite star logo"
        />
        <p className="text-sm">Favourites</p>
      </NavLink>
    </div>
  );
}
