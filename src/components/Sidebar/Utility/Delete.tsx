import TrashLogo from "../../../assets/trash-logo.png"
import { NavLink } from "react-router-dom"

export function DeletedNotes(){
    return(
         <div className="r2  pl-3 hover:bg-[rgba(255,255,255,0.03)] h-10 content-center text-gray-400 hover:text-white text-gray-400 ">
            <NavLink className="flex gap-2 items-center" to="delete">
                <img
                  className="w-4 h-4 justify-center"
                  src={TrashLogo}
                  alt="trash-logo"
                />
                <p className=" text-sm">Trash</p>
              </NavLink>
         </div>
    )
}