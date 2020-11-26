// Get things from localStorage
const getSavedThings = function () {
  const localThings = localStorage.getItem('things')
  if (localThings !== null) {
    return JSON.parse(localThings)
  } else {
    return []
  }
}

// Save things to localStorage
const saveThings = function (things) {
  localStorage.setItem('things', JSON.stringify(things))
}

// Render Things
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

  thingsContainer.appendChild(generateSummaryDOM(remainingThings))

  // render matched ones
  filteredThings.forEach(function (thing) {
    thingsContainer.appendChild(generateThingDOM(thing))
  })
}

// Get the DOM elements for an individual thing
const generateThingDOM = function (thing) {
  const container = document.createElement('div')
  const checkbox = document.createElement('input')
  const thingText = document.createElement('span')
  const removeButton = document.createElement('button')

  container.setAttribute('class', 'thing')

  // setup checkbox
  checkbox.setAttribute('type', 'checkbox')
  container.appendChild(checkbox)

  // setup text
  thingText.textContent = thing.text
  container.appendChild(thingText)

  // setup button
  removeButton.textContent = 'x'
  container.appendChild(removeButton)

  return container
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (things) {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${things.length} things left`
  return summary
}
