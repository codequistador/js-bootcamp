let notes = getSavedNotes()

// this is our search term
const filters = {
  searchText: '',
  sortBy: 'byEdited',
}

// call the render notes function
renderNotes(notes, filters)

document
  .querySelector('#create-note')
  .addEventListener('click', function (event) {
    const id = uuidv4()
    const time = dayjs().valueOf()
    notes.push({
      id: id,
      createdAt: time,
      updatedAt: time,
      title: '',
      body: '',
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
  })

// connect the search input to the notes render function
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#sort-notes').addEventListener('change', function (e) {
  filters.sortBy = e.target.value
  renderNotes(notes, filters)
})

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})
