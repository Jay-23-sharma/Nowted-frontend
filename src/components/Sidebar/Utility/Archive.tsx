import { NavLink } from "react-router-dom";
import ArchiveLogo from "../../../assets/archived-logo.svg";

export function Archived() {
  return (
    <div className="group pl-3 h-10 flex items-center text-black dark:text-gray-400 hover:bg-[rgba(49,46,181,1)] hover:text-white">
      <NavLink className="flex gap-2 items-center w-full" to="archive">
        <img
          className="w-4 h-4 justify-center invert dark:invert-0 group-hover:invert-0"
          src={ArchiveLogo}
          alt="archive logo"
        />
        <p className="text-sm">Archived</p>
      </NavLink>
    </div>
  );
}
