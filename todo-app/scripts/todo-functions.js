'use strict'

// Get things from localStorage
const getSavedThings = () => {
  const localThings = localStorage.getItem('things')

  try {
    return localThings ? JSON.parse(localThings) : []
  } catch (error) {
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

  if (filteredThings.length > 0) {
    // render summary of filtered things
    thingsContainer.appendChild(generateSummaryDOM(remainingThings))

    // render matched ones
    filteredThings.forEach((thing) => {
      thingsContainer.appendChild(generateThingDOM(thing))
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.classList.add('empty-message')
    emptyMessage.textContent = 'No things here, bud.'
    thingsContainer.appendChild(emptyMessage)
  }
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

  if (thingToToggle) {
    thingToToggle.completed = !thingToToggle.completed
  }
}

// Get the DOM elements for an individual thing
const generateThingDOM = (thing) => {
  const container = document.createElement('label')
  const wrapper = document.createElement('div')
  const checkbox = document.createElement('input')
  const thingText = document.createElement('span')
  const removeButton = document.createElement('button')

  container.setAttribute('class', 'thing')

  // setup checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = thing.completed
  wrapper.appendChild(checkbox)
  checkbox.addEventListener('change', () => {
    toggleThing(thing.id)
    saveThings(things)
    renderThings(things, filters)
  })

  // setup text
  thingText.textContent = thing.text
  wrapper.appendChild(thingText)

  // setup wrapper
  container.classList.add('list-item')
  wrapper.classList.add('list-item__container')
  container.appendChild(wrapper)

  // setup button
  removeButton.textContent = 'remove'
  removeButton.classList.add('button', 'button--text')
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
  summary.classList.add('list-title')
  const plural = things.length === 1 ? '' : 's'
  summary.textContent = `You have ${things.length} thing${plural} left`
  return summary
}
