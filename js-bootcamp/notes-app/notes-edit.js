const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteUid = location.hash.substring(1)
let notes = getSavedNotes()


//updating current note
const updateNote = function(notes){
    const note = notes.find(function(note){
        return note.uid === noteUid
    })
    
    if (note === undefined){
        location.assign('./index.html')
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body

    return note
}

let note = updateNote(notes)

titleElement.addEventListener('input', function(e){
    note.title = e.target.value
    note.lastChanged = new Date().getTime()
    saveNotes(notes)
})

bodyElement.addEventListener('input', function(e){
    note.body = e.target.value
    note.lastChanged = new Date().getTime()
    saveNotes(notes)
})

removeElement.addEventListener('click', function(){
    removeNote(note.uid)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = updateNote(notes)
        saveNotes(notes)
    }
})