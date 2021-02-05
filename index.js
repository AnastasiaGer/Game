const btn = document.querySelector('.btn')
const game = document.querySelector('.game')
const $time = document.querySelector('#time')

let score = 0
let isGameStarted = false


btn.addEventListener('click', start)
game.addEventListener('click', handelBoxClick)

function start() {
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

function endGame() {
  isGameStarted = false
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