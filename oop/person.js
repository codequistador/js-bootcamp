// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age} years old.`

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
  }

  set fullName(fullName) {
    const nameArray = fullName.split(' ')
    this.firstName = nameArray[0]
    this.lastName = nameArray[1]
  }

  // computed property
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    // Super is the constructor of the extended class
    super(firstName, lastName, age, likes)
    this.position = position
  }

  getBio() {
    return `${this.fullName} is a ${this.position}.`
  }

  getYearsLeft() {
    return 65 - this.age
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }

  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing'
    return `${this.firstName} is ${status} the course.`
  }

  adjustGrade(amount) {
    this.grade += amount
  }
}

const student = new Student('Teresa', 'McSass', 33, 90)
console.log(student.getBio())
student.adjustGrade(-50)
console.log(student.getBio())

const employee = new Employee('Sagertooth', 'Tiger', 3, 'Dog', [
  'Fetch',
  'Tug of War',
])
console.log(employee.getBio())

const me = new Person('Justin', 'Daining', 36, ['Climbing', 'Skiing'])
me.fullName = 'Bruce Bronson'
console.log(me.getBio())

const teresa = new Person('Teresa', 'Daining', 33, ['The Sims'])
console.log(teresa.getBio())
