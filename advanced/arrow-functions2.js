// in a normal function, we have access to the arguments object (these are rarely used)
const add = function () {
  return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44)) // 33

// arrow functions do not bind arguments
const addArrow = () => {
  return arguments[0] + arguments[1]
}

console.log(addArrow(11, 22, 33, 44)) // gobbledeegoop

// arrow functions do not bind this (bad candidates for most methods)
const car = {
  color: 'Green',
  getSummary: () => {
    return `The car is ${this.color}`
  },
}

console.log(car.getSummary()) // The car is undefined

// there is still a way to shorten method names
const boat = {
  color: 'Green',
  getSummary() {
    return `The boat is ${this.color}`
  },
}

console.log(boat.getSummary()) // The boat is Green
