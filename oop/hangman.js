// Constructor function (we need this, so regular function)
const Hangman = function (word, guessesLeft, guess) {
  this.word = word.toLowerCase().split('')
  this.guessesLeft = guessesLeft
  this.guessedLetters = ['a', 'b', 'y']
}

Hangman.prototype.getGame = function () {
  let game = ''

  this.word.forEach((letter) => {
    const guessed = this.guessedLetters.includes(letter) || letter === ' '
    game += guessed ? letter : '*'
  })

  return game
}

// create multiple instances
const game1 = new Hangman('Yoga', 3)
const game2 = new Hangman('Climbing And Stuff', 4)

console.log(game2.getGame())

// console.log(game1)
// console.log(game2)
