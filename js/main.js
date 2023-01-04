import NotesAPI from "./NotesAPI.js"

const localStorageKey = "notesapp-notes";

/*NotesAPI.saveNote(localStorageKey, {
    //id: 684109,
    title: "Delete me!",
    body: "I'm just here to be deleted!"
});*/

/*NotesAPI.deleteNote(localStorageKey,852418);*/

console.log(NotesAPI.getAllNotes(localStorageKey));