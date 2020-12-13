// Prototypal Inheritance

// implicit return
const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.likes = likes
}

// Prototype is object with everything we want to share with instances of this constructor function
Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age} years old.`

  // Since arrow functions don't bind this, we can use the parent's this here.
  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`
  })

  return bio
}

Person.prototype.setName = function (fullName) {
  const nameArray = fullName.split(' ')
  this.firstName = nameArray[0]
  this.lastName = nameArray[1]
}

const me = new Person('Justin', 'Daining', 36, ['Climbing', 'Skiing'])

me.setName('Bruce Bronson')
console.log(me.getBio())

const teresa = new Person('Teresa', 'Daining', 33, ['The Sims'])

console.log(teresa.getBio())
