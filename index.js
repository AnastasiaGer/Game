const btn = document.querySelector('.btn')
const game = document.querySelector('.game')
const $time = document.querySelector('#time')
const $result = document.querySelector('#result')
const timeHeader = document.querySelector('#time-header')
const resultHeader = document.querySelector('#result-header')
const gameTime = document.querySelector('#game-time')
let colors = ["#a98e34", "#7368a7", "#d9e57d", "#b31350", "#2bcc17", "#2c03f1", "#9f46de"]

let score = 0
let isGameStarted = false


btn.addEventListener('click', start)
game.addEventListener('click', handelBoxClick)
gameTime.addEventListener('input', setGameTime)

function start() {
  score = 0
  setGameTime()
  gameTime.setAttribute('disabled', 'true')

  isGameStarted = true
  btn.classList.add('hide')
  game.style.backgroundColor = "white"

  let interval = setInterval(function () {
    let time = parseFloat($time.textContent)
    if (time <= 0) {
      clearInterval(interval)
      endGame()
    } else {
      $time.textContent = (time - 0.1).toFixed(1)
    }
  }, 100)

  renderBox()
}

function setGameScore() {
  $result.textContent = score.toString()
}

function setGameTime() {
  let time = +gameTime.value
  $time.textContent = time.toFixed(1)
  timeHeader.classList.remove('hide')
  resultHeader.classList.add('hide')
}

function endGame() {
  isGameStarted = false
  setGameScore()
  gameTime.removeAttribute('disabled')
  btn.classList.remove('hide')
  game.innerHTML = ''
  game.style.backgroundColor = "#ccc"
  timeHeader.classList.add('hide')
  resultHeader.classList.remove('hide')
}

function handelBoxClick(event) {
  if (!isGameStarted) {
    return
  }

  if (event.target.dataset.box) {
    score++
    renderBox()
  }
}

function renderBox() {
  game.innerHTML = ''
  let box = document.createElement('div')
  let boxSize = getRandom(30, 100)
  let gameSize = game.getBoundingClientRect()
  let maxTop = gameSize.height - boxSize
  let maxLeft = gameSize.width - boxSize
  let randomColorIndex = getRandom(0, colors.length)

  box.style.backgroundColor = colors[randomColorIndex]
  box.style.position = "absolute"

  box.style.width = boxSize + 'px'
  box.style.height = boxSize + 'px'

  box.style.top = getRandom(0, maxTop) + 'px'
  box.style.left = getRandom(0, maxLeft) + 'px'
  box.style.cursor = "pointer"
  box.setAttribute('data-box', true)

  game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)

}
