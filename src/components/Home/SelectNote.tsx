import NoteLogo from "../../assets/select-file.svg";

export function SelectNote() {
  return (
    <div className="flex flex-col w-[60%] dark:bg-[rgba(24,24,24,1)] text-white justify-center items-center gap-3">
      <img className="w-20 h-20 invert dark:invert-0" src={NoteLogo} alt="" />
      <h1 className="text-xl dark:text-white text-black">
        Select a note to view
      </h1>
      <div className="w-[75%] shrink-0">
        <p className="text-xs text-gray-600 dark:text-[rgba(255,255,255,0.6)] text-center">
          choose a note from the list on the left to view its contents, or
          create a new note to add to your collections.
        </p>
      </div>
    </div>
  );
}
