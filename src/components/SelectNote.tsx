export function SelectNote(){
    return(
        <div className="flex flex-col w-[60%] bg-[rgba(24,24,24,1)] text-white justify-center items-center gap-3">
            <img className="w-20 h-20" src="src/assets/selectNote-logo.png" alt="" />
            <h1 className="text-xl">Select a note to view</h1>
            <div className="w-120">
                <p className="text-xs text-[rgba(255,255,255,0.6)] text-center">choose a note from the list on the left to view its contents, or create a new note to add to your collections</p>
            </div>

        </div>
    )
}