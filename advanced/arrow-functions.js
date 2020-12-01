const square = (num) => num * num
console.log(square(69))

const people = [
  { name: 'justin', age: 36 },
  { name: 'andrew', age: 27 },
  { name: 'vikram', age: 31 },
]

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const whoIs31 = people.find((person) => person.age === 31)
console.log(whoIs31.name)
