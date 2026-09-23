import { useState } from "react";

export function NoteDetails() {
  const [openMenu, setMenu] = useState<boolean>(false);
  return (
    <div className="noteDetails bg-[rgba(24,24,24,1)]  w-[60%] overflow-auto">
      <div className="flex flex-col gap-5">
        <div className="heading text-white text-3xl flex justify-between p-5 pt-8">
          <h1>Reflecion of the Month June</h1>
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
                <p className="text-xs">21/06/2022</p>
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
                <p className="text-xs">Personal</p>
              </a>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="content pl-5 pr-5 text-white text-sm">
          <p>
            For those who are interested in finding random paragraphs, that's
            exactly what this webpage provides. If both a random word and a
            random sentence aren't quite long enough for your needs, then a
            random paragraph might be the perfect solution. Once you arrive at
            this page, you'll see a random paragraph. If you need another one,
            all you need to do is click on the "next paragraph" button. If you
            happen to need several random paragraphs all at once, you can use
            this other paragraph generator. Below you can find a number of ways
            that this generator can be used. Text Blocks There are a number of
            reasons you may need a block of text and when you do, a random
            paragraph can be the perfect solution. If you happen to be a web
            designer and you need some random text to show in your layout, a
            random paragraph can be an excellent way to do this. If you're a
            programmer and you need random text to test the program, using these
            paragraphs can be the perfect way to do this. Anyone who's in search
            of realistic text for a project can use one or more of these random
            paragraphs to fill their need. Improve Writing For writers looking
            for a way to get their creative writing juices flowing, using a
            random paragraph can be a great way to do this. One of the great
            benefits of this tool is that nobody knows what is going to appear
            in the paragraph. This can be leveraged in a few different ways to
            force the writer to use creativity. For example, the random
            paragraph can be used as the beginning paragraph of a story that the
            writer must finish. I can also be used as a paragraph somewhere
            inside a short story, or for a more difficult creative challenge, it
            can be used as the ending paragraph. In every case, the writer is
            forced to use creativity to incorporate the random paragraph into
            the story.
          </p>
        </div>
      </div>
    </div>
  );
}
