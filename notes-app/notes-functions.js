// Read existing notes from local storage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes')
  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// Save the notes to local storage
const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id
  })

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('span')
  const linkEl = document.createElement('a')
  const button = document.createElement('button')

  // Set up the remove note button
  button.textContent = 'x'
  noteEl.appendChild(button)
  button.addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  // Set up the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'You did not name the note'
  }
  noteEl.appendChild(textEl)

  // set up the edit link
  linkEl.textContent = 'edit'
  linkEl.setAttribute('href', `/edit.html#${note.id}`)
  textEl.appendChild(linkEl)

  return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
  const notesContainer = document.querySelector('#notes-container')
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  notesContainer.innerHTML = ''

  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note)
    notesContainer.appendChild(noteEl)
  })
}
