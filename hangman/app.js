const gameEl = document.querySelector('#game')
const statusMessageEl = document.querySelector('#status')
let game1

window.addEventListener('keydown', (e) => {
  if (
    (e.keyCode > 64 && e.keyCode < 91) ||
    (e.keyCode > 96 && e.keyCode < 123)
  ) {
    const guess = String.fromCharCode(e.keyCode)
    game1.makeGuess(guess)
    renderGame()
  }
})

const renderGame = () => {
  gameEl.textContent = game1.game
  statusMessageEl.textContent = game1.statusMessage
}

const startGame = async (words = 2, guesses = 5) => {
  const game = await getGame(words)
  game1 = new Hangman(game, guesses)
  renderGame()
}

document.querySelector('#reset').addEventListener('submit', (e) => {
  e.preventDefault()
  const words = document.querySelector('#words').value
  const guesses = document.querySelector('#guesses').value
  startGame(words, guesses)
})

startGame()
