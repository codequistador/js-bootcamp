const things = [
  { text: 'learn js', completed: false },
  { text: 'play with sage', completed: false },
  { text: 'go skiing', completed: true },
  { text: 'chorin', completed: true },
  { text: 'look on the bright side', completed: false },
]

const filters = {
  searchText: '',
}

const renderThings = function (things, filters) {
  const thingsContainer = document.querySelector('#things-container')

  // get matched things (using filter/includes*)
  const filteredThings = things.filter(function (thing) {
    return thing.text.toLowerCase().includes(filters.searchText.toLowerCase())
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

// add button listener
document.querySelector('#add-thing').addEventListener('click', function () {
  console.log('Added a thing')
})

// add input listener
document.querySelector('#thing-to-add').addEventListener('input', function (e) {
  console.log(e.target.value)
})
