'use strict'

// Read existing notes from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (error) {
    return []
  }
}

// Save the notes to local storage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('a')
  const textEl = document.createElement('p')
  const statusEl = document.createElement('p')

  // Set up the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'You did not name the note'
  }
  textEl.classList.add('list-item__title')
  noteEl.appendChild(textEl)

  // set up the edit link
  noteEl.setAttribute('href', `/edit.html#${note.id}`)
  noteEl.classList.add('list-item')

  // set up status message
  statusEl.textContent = setLastEditedMessage(note.updatedAt)
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)

  return noteEl
}

// Sort notes by one of three ways
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byName') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }
}

// Render application notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy)
  const notesContainer = document.querySelector('#notes-container')

  // Search functionality
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  )

  notesContainer.innerHTML = ''

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDOM(note)
      notesContainer.appendChild(noteEl)
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'No notes, bud.'
    emptyMessage.classList.add('empty-message')
    notesContainer.appendChild(emptyMessage)
  }
}

// Generate the last edited message
const setLastEditedMessage = (timestamp) =>
  `Last edited ${dayjs(timestamp).fromNow()}`
