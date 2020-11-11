// Scope tree
// Global Scope (convertFahrenheighToCelcius, one, two, three, four)
// - Local Scope (fahrenheit, celcius)
//   - Local Scope (isFreezing)
let convertFahrenheitToCelcius = function (fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9

  if (celcius <= 0) {
    let isFreezing = true
  }

  return celcius
}

let one = convertFahrenheitToCelcius(32)
let two = convertFahrenheitToCelcius(100)
let three = convertFahrenheitToCelcius(-40)
let four = convertFahrenheitToCelcius(40)

console.log(one)
console.log(two)
console.log(three)
console.log(four)
