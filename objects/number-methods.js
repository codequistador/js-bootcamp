let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 6
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)

// Challenge Area
// Function (guess)
let makeGuess = function (guess) {
  let min = 1
  let max = 6
  let num = Math.floor(Math.random() * (max - min + 1)) + min
  return num === guess
}

console.log(makeGuess(1))
console.log(makeGuess(3))
console.log(makeGuess(6))
