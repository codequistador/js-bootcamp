const titleField = document.querySelector('#note-title')
const bodyField = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
  return note.id === noteId
})

if (note === undefined) {
  location.assign('/index.html')
}

// set initial values
titleField.value = note.title
bodyField.value = note.body

// title event listener
titleField.addEventListener('input', function (e) {
  note.title = e.target.value
  saveNotes(notes)
})

// body event listener
bodyField.addEventListener('input', function (e) {
  note.body = e.target.value
  saveNotes(notes)
})

// set up remove button
removeButton.addEventListener('click', function () {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    let note = notes.find(function (note) {
      return note.id === noteId
    })

    if (note === undefined) {
      location.assign('/index.html')
    }

    // set initial values
    titleField.value = note.title
    bodyField.value = note.body
  }
})
