const btn = document.querySelector('.btn')
const game = document.querySelector('.game')

let score = 0 

btn.addEventListener('click', start)
game.addEventListener('click', handelBoxClick)

function start() {
  btn.classList.add('hide')
  game.style.backgroundColor = "white"

  renderBox()
}

function handelBoxClick(event) {
  if(event.target.dataset.box) {
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

function getRandom (min, max) {
return Math.floor(Math.random() * (max-min) + min)

}