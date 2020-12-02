'use strict'

const titleField = document.querySelector('#note-title')
const bodyField = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const lastEdited = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note) {
  location.assign('/index.html')
}

// set initial values
titleField.value = note.title
bodyField.value = note.body
lastEdited.textContent = setLastEditedMessage(note.updatedAt)

// title event listener
titleField.addEventListener('input', (e) => {
  note.title = e.target.value
  note.updatedAt = dayjs().valueOf()
  lastEdited.textContent = setLastEditedMessage(note.updatedAt)
  saveNotes(notes)
})

// body event listener
bodyField.addEventListener('input', (e) => {
  note.body = e.target.value
  note.updatedAt = dayjs().valueOf()
  lastEdited.textContent = setLastEditedMessage(note.updatedAt)
  saveNotes(notes)
})

// set up remove button
removeButton.addEventListener('click', () => {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    let note = notes.find((note) => note.id === noteId)

    if (!note) {
      location.assign('/index.html')
    }

    // set initial values
    titleField.value = note.title
    bodyField.value = note.body
    lastEdited.textContent = setLastEditedMessage(note.updatedAt)
  }
})
