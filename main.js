const main = document.querySelector("main")
const ball = document.querySelector(".ball")
const container = document.querySelector(".container")

ball.onclick = () => {
  ball.classList.toggle("dark-ball")
  main.classList.toggle("dark-mode")
  container.classList.toggle("dark-sand")
}