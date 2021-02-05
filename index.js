const btn = document.querySelector('.btn')
const game = document.querySelector('.game')

btn.addEventListener('click', start)

function start() {
  btn.classList.add('hide')
  game.style.backgroundColor = "white"

  renderBox()
}

function renderBox() {

}