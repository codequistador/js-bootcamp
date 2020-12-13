// Constructor function (we need this, so regular function)
const Hangman = function (word, guessesLeft) {
  this.word = word.toLowerCase().split('')
  this.guessesLeft = guessesLeft
  this.guessedLetters = []
  this.status = 'playing'
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
  if (this.status !== 'playing') {
    return
  }

  guess = letter.toLowerCase()

  const isUnique = !this.guessedLetters.includes(guess)
  const isMatch = this.word.includes(guess)

  isUnique && this.guessedLetters.push(guess)
  !isMatch && isUnique && this.guessesLeft--

  this.getStatus()
}

Hangman.prototype.getStatus = function () {
  const finished = this.word.every((letter) =>
    this.guessedLetters.includes(letter)
  )

  if (this.guessesLeft <= 0) {
    this.status = 'fail'
  } else if (finished) {
    this.status = 'success'
  } else {
    this.status = 'playing'
  }
}

Hangman.prototype.getStatusMessage = function () {
  if (this.status === 'success') {
    return 'Success! You got it.'
  } else if (this.status === 'fail') {
    return `Fail! The word was "${this.word.join('')}"`
  } else {
    return `Guesses Left: ${this.guessesLeft}`
  }
}

Hangman.prototype.renderGame = function (game) {
  const gameEl = document.querySelector('#game')
  const statusMessageEl = document.createElement('div')
  gameEl.textContent = game
  statusMessageEl.textContent = this.getStatusMessage()
  gameEl.appendChild(statusMessageEl)
}
