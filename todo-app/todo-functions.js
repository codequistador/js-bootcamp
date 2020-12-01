// Get things from localStorage
const getSavedThings = () => {
  const localThings = localStorage.getItem('things')
  if (localThings !== null) {
    return JSON.parse(localThings)
  } else {
    return []
  }
}

// Save things to localStorage
const saveThings = (things) => {
  localStorage.setItem('things', JSON.stringify(things))
}

// Render Things
const renderThings = (things, filters) => {
  const thingsContainer = document.querySelector('#things-container')
  // get matched things (using filter/includes*)
  const filteredThings = things.filter((thing) => {
    const includesSearchText = thing.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())
    const incomplete = !filters.hideCompleted || !thing.completed
    return includesSearchText && incomplete
  })

  const remainingThings = filteredThings.filter((thing) => !thing.completed)

  // clear thingsContainer
  thingsContainer.innerHTML = ''

  // render summary of filtered things
  thingsContainer.appendChild(generateSummaryDOM(remainingThings))

  // render matched ones
  filteredThings.forEach((thing) => {
    thingsContainer.appendChild(generateThingDOM(thing))
  })
}

// Remove a thing from the things array
const removeThing = (id) => {
  const thingToRemove = things.findIndex((thing) => thing.id === id)

  if (thingToRemove > -1) {
    things.splice(thingToRemove, 1)
  }
}

// Toggle thing completed value
const toggleThing = (id) => {
  const thingToToggle = things.find((thing) => thing.id === id)

  if (thingToToggle !== undefined) {
    thingToToggle.completed = !thingToToggle.completed
  }
}

// Get the DOM elements for an individual thing
const generateThingDOM = (thing) => {
  const container = document.createElement('div')
  const checkbox = document.createElement('input')
  const thingText = document.createElement('span')
  const removeButton = document.createElement('button')

  container.setAttribute('class', 'thing')

  // setup checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = thing.completed
  container.appendChild(checkbox)
  checkbox.addEventListener('change', () => {
    toggleThing(thing.id)
    saveThings(things)
    renderThings(things, filters)
  })

  // setup text
  thingText.textContent = thing.text
  container.appendChild(thingText)

  // setup button
  removeButton.textContent = 'x'
  container.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeThing(thing.id)
    saveThings(things)
    renderThings(things, filters)
  })

  return container
}

// Get the DOM elements for list summary
const generateSummaryDOM = (things) => {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${things.length} things left`
  return summary
}
