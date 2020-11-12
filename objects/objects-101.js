// Properties are pieces of data stored on an object
let myBook = {
  title: 'To Gram, or Not To Gram',
  author: 'Justin Stagramin',
  pageCount: 420,
}

console.log(
  `${myBook.title} by ${myBook.author} is ${myBook.pageCount} pages long.`
)

myBook.title = 'My Feed, My Lyfe'

console.log(
  `${myBook.title} by ${myBook.author} is ${myBook.pageCount} pages long.`
)

// Challenge Area

// Model a person (name, age, location)
let person = {
  name: 'Mother Teresa',
  age: 76,
  location: 'Ondacouch',
}

// Name is Age and lives in Location
console.log(
  `${person.name} is ${person.age} years old and lives in ${person.location}.`
)

// Increase age by 1 and print new message
person.age = person.age + 1

console.log(
  `${person.name} is ${person.age} years old and lives in ${person.location}.`
)
