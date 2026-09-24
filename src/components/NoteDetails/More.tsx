import { useState } from "react";

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
              src="src/assets/more-logo.png"
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
                        src="src/assets/fav-logo.png"
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
                        src="src/assets/archive-logo.png"
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
                        src="src/assets/trash-logo.png"
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