// multiple arguments
let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 409)
console.log(result)

// default arguments
let getScoreText = function (name = 'Anonymous Coward', score = 0) {
  return `Name: ${name}. Score: ${score}.`
}

let scoreText = getScoreText(undefined, 5993988)

console.log(scoreText)

// Challenge Area
// Two args. Total for Bill. Tip Percentage (20% default)
// Template Strings - Return string. "a 25% tip on $40 would be $10"
let getTip = function (total, tipPercentage = 0.2) {
  let percent = tipPercentage * 100
  let tip = total * tipPercentage
  return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(64.27)

console.log(tip)
