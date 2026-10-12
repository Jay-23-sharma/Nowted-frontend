import DateLogo from "../../assets/date-logo.svg";
import CurrFolder from "../../assets/folder-logo.svg";
import { useState } from "react";
import { useFolders } from "../FolderContext";

type DetailProps = {
  date: string;
  folder: string;
  onFolderChange: (folderId: string, folderName: string) => void;
};

export function Detail({
  date,
  folder,
  onFolderChange,
}: DetailProps) {
  const [folderMenu, setFolderMenu] = useState(false);
  const { folders } = useFolders();

  return (
    <div className="details text-black dark:text-white flex flex-col pl-5 gap-5 pr-5">
      <div className="date flex gap-20 border-b border-gray-300 dark:border-[rgba(255,255,255,0.1)] pb-4">
        <div className="dateIcon flex gap-2 w-6">
          <img
            className="h-4 invert dark:invert-0"
            src={DateLogo}
            alt="calendar image"
          />

          <p className="text-xs text-gray-500 dark:text-[rgba(255,255,255,0.6)]">
            Date
          </p>
        </div>

        <div className="dateNumb">
          <a className="underline">
            <p className="text-xs">{date.slice(0, 10)}</p>
          </a>
        </div>
      </div>

      <div className="folder flex gap-20">
        <div className="folderIcon flex gap-2 w-6">
          <img
            className="h-4 invert dark:invert-0"
            src={CurrFolder}
            alt="folder image"
          />

          <p className="text-xs text-gray-500 dark:text-[rgba(255,255,255,0.6)]">
            Folder
          </p>
        </div>

        <div className="folderInfo">
          <div className="relative flex flex-col">
            <button
              onClick={() => setFolderMenu(!folderMenu)}
              className="text-xs underline"
            >
              {folder}
            </button>

            {folderMenu && (
              <div className="absolute top-6 left-0 z-50 w-40 max-h-100 overflow-auto rounded-md bg-gray-100 dark:bg-[rgba(51,51,51,1)] text-black dark:text-white shadow-lg [scrollbar-color:rgba(120,120,120,0.5)_rgba(245,245,245,1)] dark:[scrollbar-color:rgba(255,255,255,0.4)_rgba(51,51,51,1)]">
                {folders.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onFolderChange(item.id, item.name);
                      setFolderMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs hover:bg-gray-300 dark:hover:bg-[rgba(255,255,255,0.1)]"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}