import { useState } from "react";
import MoreLogo from "../../assets/more-logo.png"
import FavLogo from "../../assets/fav-logo.png"
import ArchiveLogo from "../../assets/archive-logo.png"
import TrashLogo from "../../assets/trash-logo.png"

type NoteTitle ={
    title:string;
}

export function More({title}:NoteTitle){
    const [openMenu, setMenu] = useState<boolean>(false);
    return(
        <div className="heading text-white text-3xl flex justify-between p-5 pt-8">
          <h1>{title}</h1>
          <div className="relative">
            <img
              onClick={() => setMenu(!openMenu)}
              src={MoreLogo}
              alt="more icon"
            />
            {openMenu && (
              <div className="absolute bg-[rgba(51,51,51,1)] right-1 top-10 rounded-lg">
                <div className="list flex flex-col w-45 h-30  justify-center rounded-lg">
                  <a
                    className="flex h-[33%] items-center pl-3 hover:bg-[rgba(255,255,255,0.05)]"
                    href=""
                  >
                    <div className="addFav flex text-xs  gap-3 justify-center">
                      <img
                        className="w-4 h-4 "
                        src={FavLogo}
                        alt="fav icon"
                      />
                      <p>Add to favorites</p>
                    </div>
                  </a>

                  <a
                    className="flex h-[33%] items-center pl-3 hover:bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.05)]"
                    href=""
                  >
                    <div className="addFav flex text-xs  gap-3 justify-center">
                      <img
                        className="w-4 h-4 "
                        src={ArchiveLogo}
                        alt="fav icon"
                      />
                      <p>Archived</p>
                    </div>
                  </a>

                  <a
                    className="flex h-[33%] items-center pl-3 hover:bg-[rgba(255,255,255,0.05)]"
                    href=""
                  >
                    <div className="addFav flex text-xs  gap-3 justify-center">
                      <img
                        className="w-4 h-4 "
                        src={TrashLogo}
                        alt="fav icon"
                      />
                      <p>Delete</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
    )
}