import axios from "axios";

export async function getRecentNotes() {
  const response = await axios.get(
    "https://nowted-server.remotestate.com/notes/recent",
  );

  return response.data;
}

type NoteId = {
  noteId: string;
};
export async function getNotesByID({ noteId }: NoteId) {
  const response = await axios.get(
    `https://nowted-server.remotestate.com/notes/${noteId}`,
  );
  return response.data;
}

export async function getFolders() {
  const response = await axios.get(
    `https://nowted-server.remotestate.com/folders`,
  );
  return response.data;
}

export async function getNoteList({
  folderId,
  favorite,
  archived,
  deleted,
  search,
}: {
  folderId?: string;
  favorite?: boolean;
  archived?: boolean;
  deleted?: boolean;
  search?: string;
}) {
  console.log(search);
  const response = await axios.get(
    "https://nowted-server.remotestate.com/notes",
    {
      params: {
        folderId,
        favorite,
        archived,
        deleted,
        search,
      },
    },
  );
  return response.data;
}

export async function createNote(note: {
  folderId: string;
  title: string;
  content: string;
  isFavorite: boolean;
  isArchived: boolean;
}) {
  const response = await axios.post(
    "https://nowted-server.remotestate.com/notes",
    note,
  );

  return response.data;
}

export async function createFolder(name: string) {
  const response = await axios.post(
    "https://nowted-server.remotestate.com/folders",
    {
      name,
    },
  );
  return response.data;
}

export async function updateNote(noteId: string, data: { folderId?: string; title?:string; content?:string; isFavorite?:boolean; isArchived?:boolean }) {
  const response = await axios.patch(
    `https://nowted-server.remotestate.com/notes/${noteId}`,
    data
  );
  return response.data;
}

export async function deleteNote(noteId:string){
    const response = await axios.delete(`https://nowted-server.remotestate.com/notes/${noteId}`);
    return response.data;
}

export async function restoreNote({noteId}:NoteId){
    const response = await axios.post(`https://nowted-server.remotestate.com/notes/${noteId}/restore`);
    return response.data;
}

export async function editFolderName(folderId:string,folderName:string){
    const response = await axios.patch(`https://nowted-server.remotestate.com/folders/${folderId}`,{
        name:folderName
    });
    return response.data;
}

export async function deleteFolder(folderId:string){
    const response = await axios.delete(`https://nowted-server.remotestate.com/folders/${folderId}`)
    return response.data;
}

