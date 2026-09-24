import axios from "axios";


export async function getRecentNotes(){
    const response = await axios.get('https://nowted-server.remotestate.com/notes/recent')
    
    return response.data
}


type NoteId ={
    noteId:string
}
export async function getNotesByID({noteId}:NoteId){
    const response = await axios.get(`https://nowted-server.remotestate.com/notes/${noteId}`);
    return response.data;
}



export async function getFolders(){
    const response = await axios.get(`https://nowted-server.remotestate.com/folders`)
    return response.data;
}