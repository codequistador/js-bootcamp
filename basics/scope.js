// Lexical scoping (Static scope) - a variable defined in one part of
// your program might not be available everywhere.
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside of a code block

// In a scope you can access variables defined in that scope
// or any parent/ancestor scope

// Global Scope (varOne)
// - Local Scope (varTwo)
//    - Local Scope (varFour)
// - Local Scope (varThree)

let varOne = 'varOne'

if (true) {
  console.log(varOne)
  let varTwo = 'varTwo'
  console.log(varTwo)

  if (true) {
    let varFour = 'varFour'
    console.log(varTwo)
  }
}

if (true) {
  let varThree = 'varThree'
}

console.log(varTwo)
