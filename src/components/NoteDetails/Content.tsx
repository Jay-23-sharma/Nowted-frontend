import { useEffect, useRef, useState } from "react";

type DetailContent = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  onContentSave: (content: string) => void;
};

export function Content({
  content,
  setContent,
  onContentSave,
}: DetailContent) {
  const [editing, setEditing] = useState(false);

  const contentTimer = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    return () => {
      if (contentTimer.current) {
        clearTimeout(contentTimer.current);
      }
    };
  }, []);

  function handleContentChange(value: string) {
    setContent(value);

    if (contentTimer.current) {
      clearTimeout(contentTimer.current);
    }

    contentTimer.current = setTimeout(() => {
      onContentSave(value);
    }, 500);
  }

  return (
    <div
      className="content pl-5 pr-5 dark:text-white text-sm w-[100%] h-135"
      onClick={() => setEditing(true)}
    >
      {editing ? (
        <textarea
          className="w-full h-full bg-transparent outline-none resize-none"
          autoFocus
          value={content}
          onChange={(e) =>
            handleContentChange(e.target.value)
          }
        />
      ) : (
        <p>{content || "Write here..."}</p>
      )}
    </div>
  );
}