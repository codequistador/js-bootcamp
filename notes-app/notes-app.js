let notes = []

// this is our search term
const filters = {
  searchText: '',
}

// check for existing saved data
const notesJSON = localStorage.getItem('notes')
if (notesJSON !== null) {
  notes = JSON.parse(notesJSON)
}

// first only return notes that match search term. then render them. delete the rest.
const renderNotes = function (notes, filters) {
  const notesContainer = document.querySelector('#notes-container')
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  notesContainer.innerHTML = ''

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p')

    if (note.title.length > 0) {
      noteEl.textContent = note.title
    } else {
      noteEl.textContent = 'You did not name the note'
    }
    notesContainer.appendChild(noteEl)
  })
}

// call the render notes function
renderNotes(notes, filters)

document
  .querySelector('#create-note')
  .addEventListener('click', function (event) {
    notes.push({
      title: '',
      body: '',
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
  })

// connect the search input to the notes render function
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#sort-notes').addEventListener('change', function (e) {
  console.log(e.target.value)
})
