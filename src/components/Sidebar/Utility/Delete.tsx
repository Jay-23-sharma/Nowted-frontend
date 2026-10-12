import TrashLogo from "../../../assets/bin-logo.svg";
import { NavLink } from "react-router-dom";

export function DeletedNotes() {
  return (
    <div className="group pl-3 h-10 flex items-center text-black dark:text-gray-400 hover:bg-[rgba(49,46,181,1)] hover:text-white">
      <NavLink className="flex gap-2 items-center w-full" to="delete">
        <img
          className="w-4 h-4 justify-center invert dark:invert-0 group-hover:invert-0"
          src={TrashLogo}
          alt="trash-logo"
        />
        <p className=" text-sm">Trash</p>
      </NavLink>
    </div>
  );
}
