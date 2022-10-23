import { Container } from './styles/styleNotesApp'
import NotesAPI from "../assets/services/apis/NotesAPI"


const notes = NotesAPI.getAllNotes();
const notesLocalStorage = JSON.parse(localStorage.getItem("notesapp-notes")) ;

document.addEventListener("DOMContentLoaded", function(){
    
    const btnAddNote = document.querySelector(".notes__add");
    const noteListItems = document.querySelectorAll(".notes__list-item")
    const inpTitle = document.querySelector(".notes__title");
    const inpBody = document.querySelector(".notes__body");
    const notesListContainer = document.querySelector(".notes__list");
    let noteSelectedID

    console.log(notes)

    // Adicionar uma nota
    btnAddNote.addEventListener("click", () => {
        const newNote = {
            title: "Nova nota!",
            body: "Tome nota..."
        };

        NotesAPI.saveNote(newNote)

        location.reload()
    });

    [inpTitle, inpBody].forEach(inputField => {
        inputField.addEventListener("blur", () => {
            const updatedTitle = inpTitle.value.trim();
            const updatedBody = inpBody.value.trim();
            
            NotesAPI.saveNote({
                id: noteSelectedID,
                title: updatedTitle,
                body: updatedBody
            });

            location.reload()

        });
    });


    // Adicionando eventos para selecionar ou excluir as notas
    notesListContainer.querySelectorAll(".notes__list-item").forEach(noteListItem => {
        // A visualização da nota inicia em branco e aparece apenas quando clicam em uma nota
        const updateNotePreviewVisibility = (visible) => {
            document.querySelector(".notes__preview").style.visibility = visible ? "visible" : "hidden";
        }
        updateNotePreviewVisibility(false);


        noteListItem.addEventListener("click", () => {
            console.log(noteListItem.dataset.noteId);
            noteSelectedID = noteListItem.dataset.noteId
            const selectedNote = notes.find(note => note.id == noteSelectedID);
            
            document.querySelector(".notes__title").value = selectedNote.title;
            document.querySelector(".notes__body").value = selectedNote.body;
    
            document.querySelectorAll(".notes__list-item").forEach(noteListItem => {
                noteListItem.classList.remove("notes__list-item--selected");
            });
    
            document.querySelector(`.notes__list-item[data-note-id="${selectedNote.id}"]`).classList.add("notes__list-item--selected");
            updateNotePreviewVisibility(true)
        });


        noteListItem.addEventListener("dblclick", () => {
            const doDelete = confirm("Are you sure you want to delete this note?");

            if (doDelete) {
                const noteId = noteListItem.dataset.noteId
                NotesAPI.deleteNote(noteId)
                location.reload()
            }
        });
    });



    



})




export function NotesApp() {
  return (
      <Container>
          <div className="notes" id="app">
              <div className="notes__sidebar">
                  <button className="notes__add" type="button">Adicionar Nota</button>
                  <div className="notes__list" id='notes__list'>
                    {notesLocalStorage && notesLocalStorage.map((note) => (
                    <div className="notes__list-item" id='notes__list-item' data-note-id={note.id} key={note.id}>
                    <div className="notes__small-title">{note.title}</div>
                    <div className="notes__small-body" >{
                        note.body && note.body.length > 60 ? `${note.body.substring(0, 60)}  ...` : note.body
                    }</div>
                    <div className="notes__small-updated">
                        {new Date(note.updated).toLocaleString('en-US', {dateStyle: 'full', timeStyle: 'short'}) }
                    </div>
                  </div>
                  ))} 
                  </div>
              </div>
              <div className="notes__preview">
                  <input className="notes__title" type="text" placeholder="Nova nota..."/>
                  <textarea className="notes__body" defaultValue="Tome nota..."></textarea>
              </div>
          </div>
      </Container>
  )
}