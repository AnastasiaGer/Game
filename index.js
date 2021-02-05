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

box.style.backgroundColor = "black"
box.style.position = "absolute"

box.style.width = "50px"
box.style.height = "50px"

box.style.top = "50px"
box.style.left = "70px"
box.style.cursor = "pointer"
box.setAttribute('data-box', true)

game.insertAdjacentElement('afterbegin', box)
}