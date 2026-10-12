import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { getFolders } from "./services/noteAPI";

type NoteFolder = {
  id: string;
  name: string;
};

type FolderContextType = {
  folders: NoteFolder[];
  refreshFolders: () => Promise<void>;
};

const FolderContext = createContext<FolderContextType | null>(null);

export function FolderProvider({ children }: { children: React.ReactNode }) {
  const [folders, setFolders] = useState<NoteFolder[]>([]);

  async function refreshFolders() {
    try {
      const response = await getFolders();
      setFolders(response.folders);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e.response?.data?.message || "Something went wrong");
      } else {
        console.log("Something went wrong");
      }
    }
  }

  useEffect(() => {
    refreshFolders();
  }, []);

  return (
    <FolderContext.Provider value={{ folders, refreshFolders }}>
      {children}
    </FolderContext.Provider>
  );
}

export function useFolders() {
  const context = useContext(FolderContext);

  if (!context) {
    throw new Error("useFolders must be used inside FolderProvider");
  }

  return context;
}
