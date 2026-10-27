import { NavLink } from "react-router-dom";
import FavLogo from "../../../assets/fav-logo.svg";

export function Favorites() {
  return (
    <NavLink
      to="favorite"
      className={({ isActive }) =>
        `group pl-3 h-10 flex items-center gap-2 w-full
        ${
          isActive
            ? "bg-[rgba(49,46,181,1)] text-white"
            : "text-black dark:text-gray-400 hover:bg-[rgba(49,46,181,1)] hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <img
            src={FavLogo}
            alt="favorite star logo"
            className={`w-4 h-4 ${
              isActive
                ? "brightness-0 invert"
                : "brightness-0 dark:invert dark:opacity-60 group-hover:brightness-0 group-hover:invert group-hover:opacity-100"
            }`}
          />

          <p className="text-sm">Favourites</p>
        </>
      )}
    </NavLink>
  );
}