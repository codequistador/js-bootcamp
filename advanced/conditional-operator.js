// const myAge = 27
// const message = myAge >= 18 ? 'You can vote!' : 'You can not vote.'
// console.log(message)

// const myAge = 36
// const showPage = () => 'showing the page'
// const showErrorPage = () => 'showing the error page'

// const message = myAge >= 21 ? showPage() : showErrorPage()
// console.log(message)

const team = ['Sage', 'Chex', 'Lani', 'Monty', 'Kona']
// print team size if less than or equal to 4
// print too many people otherwise

const message =
  team.length <= 4
    ? `Team size: ${team.length}`
    : 'Too many people on your team, bud'
console.log(message)
