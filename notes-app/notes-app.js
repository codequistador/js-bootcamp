const notes = getSavedNotes()

// this is our search term
const filters = {
  searchText: '',
}

// call the render notes function
renderNotes(notes, filters)

document
  .querySelector('#create-note')
  .addEventListener('click', function (event) {
    notes.push({
      id: uuidv4(),
      title: '',
      body: '',
    })
    saveNotes(notes)
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
