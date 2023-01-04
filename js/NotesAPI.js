export default class NotesAPI{
    //  Remember neither static methods nor static properties can 
    //  be called on instances of the class. Instead, they're 
    //  called on the class itself.

    static getAllNotes(localStorageKey){
        
        const notes = JSON.parse(localStorage.getItem(localStorageKey) || "[]" );

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(localStorageKey, noteToSave){
        //  Get reference to all notes
        const notes = NotesAPI.getAllNotes(localStorageKey);
        const existing = notes.find(note => note.id == noteToSave.id);

        //  Edit / update
        if(existing){
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        }else{
            //  Insert new note
            noteToSave.id = Math.floor(Math.random() * 1000000 );
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
    
        }
        localStorage.setItem(localStorageKey, JSON.stringify(notes))
        
    }

    static deleteNote(localStorageKey, id){
        const notes = NotesAPI.getAllNotes(localStorageKey);
        //  get all notes != the note id passed in.
        //  //  Array.prototype.filter()
        //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        const newNotes = notes.filter(note => note.id != id);

        //  Update localstorage with new array
        localStorage.setItem(localStorageKey, JSON.stringify(newNotes));
    }

}