let things = []

const filters = {
  searchText: '',
  hideCompleted: false,
}

const localThings = localStorage.getItem('things')
if (localThings !== null) {
  things = JSON.parse(localThings)
}

const renderThings = function (things, filters) {
  const thingsContainer = document.querySelector('#things-container')

  // get matched things (using filter/includes*)
  const filteredThings = things.filter(function (thing) {
    const includesSearchText = thing.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())
    const incomplete = !filters.hideCompleted || !thing.completed
    return includesSearchText && incomplete
  })

  const remainingThings = filteredThings.filter(function (thing) {
    return !thing.completed
  })

  // clear thingsContainer
  thingsContainer.innerHTML = ''

  // render summary of filtered things
  const summary = document.createElement('h2')
  summary.textContent = `You have ${remainingThings.length} things left`
  thingsContainer.appendChild(summary)

  // render matched ones
  filteredThings.forEach(function (thing) {
    const p = document.createElement('p')
    p.textContent = thing.text
    thingsContainer.appendChild(p)
  })
}

renderThings(things, filters)

// render based on search terms
document
  .querySelector('#search-things')
  .addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderThings(things, filters)
  })

// form listener
document
  .querySelector('#add-thing-form')
  .addEventListener('submit', function (e) {
    e.preventDefault()
    things.push({
      text: e.target.elements.thingName.value,
      completed: false,
    })
    localStorage.setItem('things', JSON.stringify(things))
    e.target.elements.thingName.value = ''
    renderThings(things, filters)
  })

// hide completed listener
document
  .querySelector('#hide-completed')
  .addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderThings(things, filters)
  })
