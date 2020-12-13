// Constructor function (we need this, so regular function)
const Hangman = function (word, guessesLeft, guess) {
  this.word = word.toLowerCase().split('')
  this.guessesLeft = guessesLeft
  this.guessedLetters = []
}

Hangman.prototype.getGame = function () {
  let game = ''

  this.word.forEach((letter) => {
    const guessed = this.guessedLetters.includes(letter) || letter === ' '
    game += guessed ? letter : '*'
  })

  return game
}

Hangman.prototype.makeGuess = function (letter) {
  guess = letter.toLowerCase()

  const isUnique = !this.guessedLetters.includes(guess)
  const isMatch = this.word.includes(guess)

  isUnique && this.guessedLetters.push(guess)
  !isMatch && isUnique && this.guessesLeft--
}

// create multiple instances
const game1 = new Hangman('Yoga', 3)

console.log(game1.getGame())
console.log(`${game1.guessesLeft} guesses left in game 1`)

window.addEventListener('keydown', (e) => {
  const isLetter = e.key.toLowerCase() != e.key.toUpperCase()
  isLetter && game1.makeGuess(e.key)
  console.log(game1.getGame())
  console.log(`${game1.guessesLeft} guesses left in game 1`)
})
