const notes = [
  { title: 'Next Trip', body: 'I would like to go to Chile' },
  { title: 'Lines to Ski', body: 'I would like to ski Hogum Fork' },
  { title: 'Learn JS', body: 'I would like to master JS' },
]

// console.log(notes.pop())
// notes.push('New Note')

// console.log(notes.shift())
// notes.unshift('Newer Note')

// notes.splice(1, 1, 'This is the new second item') // 0 as second argument to add, no replace or remove.

// notes[2] = 'This is now the new Note 3'

// callback function is a function that gets passed into a function
// (similar to why we call a function as a property of an object a method)
// notes.forEach(function (item, index) {
//   console.log(index, item)
// })

// const lastNote = notes[notes.length - 1]
// console.log(lastNote)

console.log(`Total Notes: ${notes.length}`)
console.log(notes)

// for (initializer (runs once); condition; expression) creates its own local scope
// for (let count = 2; count >= 0; count--) {
//   console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count])
// }

// indexOf uses === operator
// console.log(notes.indexOf({})) // -1

// let someObject = {}
// let otherObject = {}
// console.log(someObject === otherObject) // false

// let someOtherObject = {}
// let otherSomeOtherObject = someOtherObject
// console.log(someOtherObject === otherSomeOtherObject) // true

// findIndex is good if you want the index
const index = notes.findIndex(function (note, index) {
  console.log(note)
  return note.title === 'Lines to Ski'
})
console.log(index)

// find is better if you want just the object
