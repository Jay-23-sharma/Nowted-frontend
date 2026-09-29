
import { More } from "./More";
import { Detail } from "./Detail";
import { Content } from "./Content";
import { getFolders, getNotesByID, updateNote } from "../services/noteAPI";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type NoteFolder = {
  name: string;
  id: string;
};

export function NoteDetails() {
  type Note = {
    id: string;
    title: string;
    content: string;
    createdAt:string;
    folder:{
      id:string;
      name:string;
    }
  };
  const {noteId} = useParams();
  const [note,setNote] = useState<Note | null>(null)
  const [error,setError] = useState("");
  const [folders,setFolders] = useState<NoteFolder[]>([]);


  useEffect(()=>{
    async function fetchFolders(){
      try{
        const data = await getFolders();
        setFolders(data.folders);
      }catch(e){
        
        console.log(e);
      }
    }
    fetchFolders()
  },[]);


  async function handleFolderChange(folderId:string,
    folderName:string){
    if(!noteId) return;
    try{
      await updateNote(noteId,{folderId});
      setNote((prev)=>prev?{...prev,folder:{id:folderId,name:folderName},}:prev);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    async function fetchNote(){
      try{
        if(!noteId) return;
        const data = await getNotesByID({noteId});
        setNote(data.note);
      }catch(e){
        if (axios.isAxiosError(e)) {
          setError(e.response?.data?.message || "Something went wrong");
        } else {
          setError("Something went wrong");
        }
      }
    }
    fetchNote();
  },[noteId])

  if(!note){
    return <div className="text-white w-[60%] bg-[rgba(24,24,24,1)]">Loading...</div>
  }
  
  return (
    <div className="noteDetails bg-[rgba(24,24,24,1)]  w-[60%] overflow-auto">
      <div className="flex flex-col gap-5">
        {error && <p className="Error text-red-600 text-xl">{error}</p>}
        <More title={note.title}/>

        <Detail date={note.createdAt} folder={note.folder.name} folders={folders} onFolderChange={handleFolderChange}/>

        <Content paragraph={note.content}/>
        
      </div>
    </div>
  );
}
