// Constructor function (we need this, so regular function)
class Hangman {
  constructor(word, guessesLeft) {
    this.word = word.toLowerCase().split('')
    this.guessesLeft = guessesLeft
    this.guessedLetters = []
    this.status = 'playing'
  }

  get game() {
    let game = ''

    this.word.forEach((letter) => {
      const guessed = this.guessedLetters.includes(letter) || letter === ' '
      game += guessed ? letter : '*'
    })

    return game
  }

  makeGuess(letter) {
    if (this.status !== 'playing') {
      return
    }

    const guess = letter.toLowerCase()

    const isUnique = !this.guessedLetters.includes(guess)
    const isMatch = this.word.includes(guess)

    isUnique && this.guessedLetters.push(guess)
    !isMatch && isUnique && this.guessesLeft--

    this.getStatus()
  }

  getStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === ' '
    )

    if (this.guessesLeft <= 0) {
      this.status = 'fail'
    } else if (finished) {
      this.status = 'success'
    } else {
      this.status = 'playing'
    }
  }

  get statusMessage() {
    if (this.status === 'success') {
      return 'Success! You got it.'
    } else if (this.status === 'fail') {
      return `Fail! The word was "${this.word.join('')}"`
    } else {
      return `Guesses Left: ${this.guessesLeft}`
    }
  }
}
