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
  gameEl.innerHTML = ''
  statusMessageEl.textContent = game1.statusMessage

  const gameArray = game1.game.split('')
  gameArray.forEach((letter) => {
    const span = document.createElement('span')
    if (letter === ' ') {
      span.className = 'space'
    }
    span.textContent = letter
    gameEl.appendChild(span)
  })
}

const startGame = async (words = 2, guesses = 5) => {
  const game = await getGame(words)
  game1 = new Hangman(game, guesses)
  renderGame()
}

document.querySelector('#reset').addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e.target.elements)
  const words = e.target.elements.words.value
  const guesses = e.target.elements.guesses.value
  startGame(words, guesses)
})

startGame()
