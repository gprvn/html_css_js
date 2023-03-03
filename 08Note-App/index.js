const btnEle = document.getElementById("btn");
const containerEle = document.getElementById("container");

getNotes().forEach((note) => {
    const noteEle = createNoteEle(note.id, note.content)
    containerEle.insertBefore(noteEle, btnEle)
});

function createNoteEle(id, content){
    const element = document.createElement("textarea");
    element.classList.add("noteText");
    element.placeholder = "empty note";
    element.value = content;

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if(warning){
            deleteNote(id, element);
        }
    });

    element.addEventListener("input",()=>{
        updateNote(id, element.value);
    });

    return element;
}

function deleteNote(id, element){
    const notes = getNotes().filter((note) => note.id != id)
    saveNotesInLocalStorage(notes);
    containerEle.removeChild(element);
}

function updateNote(id, content){
    const notes = getNotes();
    const target = notes.filter((note) => note.id === id)[0];
    target.content = content;
    saveNotesInLocalStorage(notes);
}

function addTextArea(){
   const notes = getNotes();
   const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: ""
   };
   const noteEle = createNoteEle(noteObj.id, noteObj.content);
   containerEle.insertBefore(noteEle, btnEle);
   notes.push(noteObj);
   saveNotesInLocalStorage(notes)
}

function saveNotesInLocalStorage(notes){
    localStorage.setItem("note-app",JSON.stringify(notes))
}

function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

btnEle.addEventListener("click", addTextArea);