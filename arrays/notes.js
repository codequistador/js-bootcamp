const notes = [
  { title: 'Next Trip', body: 'I would like to go to Chile' },
  { title: 'Lines to Ski', body: 'I would like to ski Hogum Fork' },
  { title: 'Learn JS', body: 'I would like to master JS' },
  { title: 'Text Teresa', body: 'Spines are awesome' },
]

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

const findNote = function (notes, noteTitle) {
  return notes.find(function (note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const findNotes = function (notes, query) {
  return notes.filter(function (note) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

console.log(findNotes(notes, 'ine'))

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, i) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

const note = findNote(notes, 'next trip')
console.log(note)

sortNotes(notes)
console.log(notes)
