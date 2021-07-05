const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habbits to work on',
    body: 'Excercise, Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const sortNotes = function(notes){
    notes.sort(function(a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return  -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle){
    return notes.find(function(note){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function(notes, string){
    return notes.filter(function(note){
        const isTitleMatch = note.title.toLowerCase().includes(string.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(string.toLowerCase())
    
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'ne'))
console.log('----------------------------')
const note = findNote(notes, 'office modification')
console.log(note)
console.log('--------------before sorting--------------')
console.log(notes)
console.log('--------------after sorting--------------')
sortNotes(notes)
console.log(notes)
