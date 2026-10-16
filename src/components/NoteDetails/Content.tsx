import { useEffect, useRef, useState } from "react";

type DetailContent = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  onContentSave: (content: string) => void;
};

export function Content({ content, setContent, onContentSave }: DetailContent) {
  const [editing, setEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    <div className="content pl-5 pr-5 dark:text-white text-sm w-full h-135">
      <textarea
        ref={textareaRef}
        className="w-full h-full bg-transparent outline-none resize-none placeholder:text-gray-400"
        placeholder="Write here..."
        value={content}
        readOnly={!editing}
        onClick={() => setEditing(true)}
        onFocus={(e) => {
          if (editing) {
            const end = e.currentTarget.value.length;
            e.currentTarget.setSelectionRange(end, end);
          }
        }}
        onChange={(e) => handleContentChange(e.target.value)}
      />
    </div>
  );
}
