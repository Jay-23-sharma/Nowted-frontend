import DateLogo from "../../assets/calendar-logo.png";
import CurrFolder from "../../assets/folder-logo.png";
import { useState } from "react";

type DetailProps = {
  date: string;
  folder: string;
};

export function Detail({ date, folder }: DetailProps) {
  const [folderMenu, setFolderMenu] = useState(false);
  return (
    <div className="details text-white flex flex-col pl-5 gap-5 pr-5">
      <div className="date flex gap-20 border-b border-[rgba(255,255,255,0.1)] pb-4">
        <div className="dateIcon flex gap-2 w-6 ">
          <img className="h-4" src={DateLogo} alt="calendar image" />
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
          <img className="h-4" src={CurrFolder} alt="folder image" />
          <p className="text-xs text-[rgba(255,255,255,0.6)]">Folder</p>
        </div>

        <div className="folderInfo">
          <div className="relative flex flex-col justify-top">
            <button
              onClick={() => setFolderMenu(!folderMenu)}
              className="text-xs underline"
            >
              {folder}
            </button>
            {folderMenu && <div className="bg-[rgba(255,255,255,0.03)] opacity-100 text-black w-40 h-100 absolute top-6 rounded-md overflow backdrop-blur-md"></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
