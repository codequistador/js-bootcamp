// const is immutable. Use this for all variables that will not be reassigned.
const person = {
  age: 36,
}

// Invalid: Re-assigning whole object
// person = {}

// Valid: reassigning one of the object's properties.
person.age = 21

console.log(person)
