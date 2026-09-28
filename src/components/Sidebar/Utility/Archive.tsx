import { NavLink } from "react-router-dom";
import ArchiveLogo from "../../../assets/archive-logo.png";

export function Archived() {
  return (
    <div className="r2  pl-3 hover:bg-[rgba(255,255,255,0.03)] h-10 content-center text-gray-400 hover:text-white text-gray-400 ">
      <NavLink className="flex gap-2 items-center" to="archive">
        <img className="w-4 h-4 justify-center" src={ArchiveLogo} alt="archive logo" />
        <p className="text-sm">Archived</p>
      </NavLink>
    </div>
  );
}
