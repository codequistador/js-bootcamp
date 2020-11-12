let myBook = {
  title: 'To Gram, or Not To Gram',
  author: 'Justin Stagramin',
  pageCount: 420,
}

let otherBook = {
  title: 'I Love Butter and Other Tails of Woe',
  author: 'Sage Daining',
  pageCount: 276,
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}.`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`,
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(otherBookSummary.pageCountSummary)

// Challenge Area

// F in - return object with F, C, and K
let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheight: fahrenheit,
    celcius: (fahrenheit - 32) * (5 / 9),
    kelvin: (fahrenheit + 459.67) * (5 / 9),
  }
}

let temps = convertFahrenheit(-40)
console.log(temps)
