'use strict'

let things = getSavedThings()

const filters = {
  searchText: '',
  hideCompleted: false,
}

renderThings(things, filters)

// render based on search terms
document.querySelector('#search-things').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderThings(things, filters)
})

// add thing form listener
document.querySelector('#add-thing-form').addEventListener('submit', (e) => {
  const trimmedInput = e.target.elements.thingName.value.trim()
  e.preventDefault()

  if (trimmedInput.length > 0) {
    things.push({
      id: uuidv4(),
      text: trimmedInput,
      completed: false,
    })
    saveThings(things)
    e.target.elements.thingName.value = ''
    renderThings(things, filters)
  }
})

// hide completed listener
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked
  renderThings(things, filters)
})
