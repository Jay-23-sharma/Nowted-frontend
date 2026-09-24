import SearchIcon from "../../assets/search-logo.png"
import Logo from "../../assets/Nowted-logo.png"

export function Search(){
    return(
        <div className="sidebar bg-[rgba(24,24,24,1)]">
            <div className="Logo flex justify-between pt-5">
        <img
          className="w-fit pl-3"
          src={Logo}
          alt="Nowted Logo"
        />

        <button>
          <img
            className="w-fit pr-3"
            src={SearchIcon}
            alt="Search icon"
          />
        </button>
      </div>

      <div className="addNote h-10 w-full pl-3 pr-3">
        <button className="addButton justify-center bg-[rgba(255,255,255,0.05)] w-full h-full flex text-white w-full items-center rounded-sm text-sm gap-1 hover:bg-[rgba(51,51,51,1)]">
          <p className="text-2xl">+</p>
          <p>New Note</p>
        </button>
      </div>
        </div>
    )
}