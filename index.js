const btn = document.querySelector('.btn')
const game = document.querySelector('.game')
const $time = document.querySelector('#time')
const $result = document.querySelector('#result')
const timeHeader = document.querySelector('#time-header')
const resultHeader = document.querySelector('#result-header')

let score = 0
let isGameStarted = false


btn.addEventListener('click', start)
game.addEventListener('click', handelBoxClick)

function start() {
  score = 0
  setGameTime()
  timeHeader.classList.remove('hide')
  resultHeader.classList.add('hide')
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
  let time = 5
$time.textContent = time.toFixed(1)
}

function endGame() {
  isGameStarted = false
  setGameScore()
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

  box.style.backgroundColor = "black"
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