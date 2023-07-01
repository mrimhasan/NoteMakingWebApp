const addnote = document.querySelector("#addnote")
const main = document.querySelector("#main")
addnote.addEventListener('click',function(){
    // alert('clicked')
     addNewNote()

    
})

const saveNotes = () => {
    const Notes = document.querySelectorAll('.note textarea') 
    const data = []
    console.log(Notes)
    Notes.forEach( 
        (note) => {
            data.push(note.value)
        }
    );
    if (data.length === 0) {
        localStorage.removeItem('Notes')
    } 
    else {
    localStorage.setItem('Notes',JSON.stringify(data))
    }
    // console.log(data)
}

const addNewNote = (text = "") => {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `<div class="tool"><label title="Save"><i class="save fa-solid fa-floppy-disk"></i></label>
    <label title="Delete"><i class="trash fa-sharp fa-solid fa-trash"></i></label>
 </div>
    <textarea placeholder="Note here...">${text}</textarea>`;

     note.querySelector('.trash').addEventListener('click',()=>{
        note.remove()
        saveNotes()
     })
     note.querySelector('.save').addEventListener('click', ()=>{
        saveNotes()
     })

     /*for auto save */
    //  note.querySelector('textarea').addEventListener('focusout',function(){
    //     saveNotes()
    //  })

    main.appendChild(note)
    saveNotes()
}

// self calling function
(
   function(){
    const localstorageNotes = JSON.parse(localStorage.getItem('Notes'))
    //console.log(localstorageNotes)
    
        if(localstorageNotes == null){
            addNewNote()
        }
        else{
        localstorageNotes.forEach(element => {
        addNewNote(element)
        })
    }
  }
)()
