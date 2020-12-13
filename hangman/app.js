// create multiple instances
const game1 = new Hangman('Yoga and Climbing', 3)

game1.renderGame(game1.game)

window.addEventListener('keydown', (e) => {
  if (
    (e.keyCode > 64 && e.keyCode < 91) ||
    (e.keyCode > 96 && e.keyCode < 123)
  ) {
    const guess = String.fromCharCode(e.keyCode)
    game1.makeGuess(guess)
    game1.renderGame(game1.game)
  }
})
