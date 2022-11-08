import { Container } from './styles/styleNotesApp'
import NotesAPI from "../assets/services/apis/NotesAPI"
import { useState } from 'react';
const notes = NotesAPI.getAllNotes();



document.addEventListener("DOMContentLoaded", function(){
    const btnAddNote = document.querySelector(".notes__add");
    const inpTitle = document.querySelector(".notes__title");
    const inpBody = document.querySelector(".notes__body");
    const btnSaveNote = document.querySelector(".save__note")
    const notesListContainer = document.querySelector(".notes__list");
    let noteSelectedID


    // Adicionar uma nota
    btnAddNote.addEventListener("click", () => {
        const newNote = {
            title: "Nova nota!",
            body: "Tome nota..."
        };
        NotesAPI.saveNote(newNote)
        location.reload()

    });

    // const lastNoteCreated = JSON.parse(localStorage.getItem("notesapp-notes"));
    // document.querySelector(`.notes__list-item[data-note-id="${lastNoteCreated[lastNoteCreated.length -1].id}"]`).classList.add("notes__list-item--selected");
    // updateNotePreviewVisibility(true)
    

  
    // Salvar uma nota após modificar ela 
    btnSaveNote.addEventListener("click", () => {
        const updatedTitle = inpTitle.value.trim();
        const updatedBody = inpBody.value.trim();
        
        NotesAPI.saveNote({
            title: updatedTitle,
            body: updatedBody,
            id: noteSelectedID
        });

        location.reload()
       
    });
   
    


    // Adicionando eventos para selecionar ou excluir as notas
    notesListContainer.querySelectorAll(".notes__list-item").forEach(noteListItem => {
        // A visualização da nota inicia em branco e aparece apenas quando clicam em uma nota
        const updateNotePreviewVisibility = (visible) => {
            document.querySelector(".notes__preview").style.visibility = visible ? "visible" : "hidden";
        }
        updateNotePreviewVisibility(false);


        noteListItem.addEventListener("click", () => {
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
            const doDelete = confirm("Você tem certeza que deseja excluir permanentemente essa nota?");

            if (doDelete) {
                const noteId = noteListItem.dataset.noteId
                NotesAPI.deleteNote(noteId)
                location.reload()
            }
        });
    });


})


export function NotesApp() {
const [notesLocalStorage, setNotesLocalStorage] = useState(JSON.parse(localStorage.getItem("notesapp-notes")));
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
                  <button className='save__note' >Salvar nota</button>
              </div>
          </div>
      </Container>
  )
}