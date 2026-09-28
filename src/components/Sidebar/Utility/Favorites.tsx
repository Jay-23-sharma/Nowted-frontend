import { NavLink } from "react-router-dom";
import FavLogo from "../../../assets/favorites.png";

export function Favorites() {
  return (
    <div className="r1  pl-3 hover:bg-[rgba(255,255,255,0.03)] h-10 content-center text-gray-400 hover:text-white">
      <NavLink className="flex gap-2 items-center" to="favorite">
        <img
          className="w-4 h-4 justify-center"
          src={FavLogo}
          alt="favorite star logo"
        />
        <p className=" text-sm ">Favourites</p>
      </NavLink>
    </div>
  );
}
