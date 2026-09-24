type DetailProps = {
    date:string;
    folder:string;
}

export function Detail({date,folder}:DetailProps){
    return(
        <div className="details text-white flex flex-col pl-5 gap-5 pr-5">
          <div className="date flex gap-20 border-b border-[rgba(255,255,255,0.1)] pb-4">
            <div className="dateIcon flex gap-2 w-6 ">
              <img
                className="h-4"
                src="src/assets/calendar-logo.png"
                alt="calendar image"
              />
              <p className="text-xs text-[rgba(255,255,255,0.6)]">Date</p>
            </div>

            <div className="dateNumb">
              <a className="underline">
                <p className="text-xs">{date}</p>
              </a>
            </div>
          </div>

          <div className="folder flex gap-20">
            <div className="folderIcon flex gap-2 w-6 ">
              <img
                className="h-4"
                src="src/assets/folder-logo.png"
                alt="calendar image"
              />
              <p className="text-xs text-[rgba(255,255,255,0.6)]">Folder</p>
            </div>

            <div className="dateNumb">
              <a className="underline">
                <p className="text-xs">{folder}</p>
              </a>
            </div>
          </div>
        </div>
    )
}