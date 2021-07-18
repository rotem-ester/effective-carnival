const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
       saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title is already taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const toRemove = notes.findIndex((note) =>  note.title === title)

    if (toRemove !== -1) {
        notes.splice(toRemove, 1)
        saveNotes(notes)
        console.log(chalk.green('Note has been removed'))
    } else {
        console.log(chalk.red('Note does not exist'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if (noteToRead) {
        console.log(chalk.magenta(noteToRead.title + ':'))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red('No such note'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bold.blue('Your notes:'))
    notes.forEach((note) => {
        console.log(chalk.cyan(note.title))
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}