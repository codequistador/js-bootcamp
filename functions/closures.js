const createCounter = () => {
  let count = 0

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    },
  }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(59))

// Tipper
const createTipper = (tip) => {
  return (bill) => {
    return bill * tip
  }
}

const tip15 = createTipper(0.15)
const tip20 = createTipper(0.2)
const tip25 = createTipper(0.25)

console.log(tip15(69))
console.log(tip20(420))
console.log(tip25(69420))
