// Global
// - Local
//    - Local (name)
// - Local

// Leaked global - assign a value to a variable that was never declared.
// It looks in it's scope, then goes up the tree. if it doesn't find
// a declaration at global it will declare it.

// let name = 'justin'

if (true) {
  // let name = 'teresa' // Variable shadowing. Finds this one first and prints it.
  if (true) {
    let name = 'sage'
    console.log(name)
  }
}

if (true) {
  console.log(name)
}
