const notes = [
  { title: 'Next Trip', body: 'I would like to go to Chile' },
  { title: 'Lines to Ski', body: 'I would like to ski Hogum Fork' },
  { title: 'Learn JS', body: 'I would like to master JS' },
  { title: 'Text Teresa', body: 'Spines are awesome' },
]

// this is our search term
const filters = {
  searchText: '',
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
    noteEl.textContent = note.title
    notesContainer.appendChild(noteEl)
  })
}

// call the render notes function
renderNotes(notes, filters)

document
  .querySelector('#create-note')
  .addEventListener('click', function (event) {
    event.target.textContent = 'Clicked'
  })

document.querySelector('#remove-all').addEventListener('click', function () {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})

// connect the search input to the notes render function
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
