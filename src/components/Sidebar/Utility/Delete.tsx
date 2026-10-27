import TrashLogo from "../../../assets/bin-logo.svg";
import { NavLink } from "react-router-dom";

export function DeletedNotes() {
  return (
    <NavLink
      to="delete"
      className={({ isActive }) =>
        `group pl-3 h-10 flex items-center gap-2 w-full
        ${
          isActive
            ? "bg-red-900 text-white"
            : "text-black dark:text-gray-400 hover:bg-[rgba(49,46,181,1)] hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <img
            src={TrashLogo}
            alt="trash logo"
            className={`w-4 h-4 ${
              isActive
                ? "brightness-0 invert"
                : "brightness-0 dark:invert dark:opacity-60 group-hover:brightness-0 group-hover:invert group-hover:opacity-100"
            }`}
          />

          <p className="text-sm">Trash</p>
        </>
      )}
    </NavLink>
  );
}