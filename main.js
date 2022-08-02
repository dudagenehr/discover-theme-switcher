const main = document.querySelector("main")
const ball = document.querySelector(".ball")
const container = document.querySelector(".container")

container.onclick = () => {
  ball.classList.toggle("dark-ball")
  main.classList.toggle("dark-mode")
  container.classList.toggle("dark-sand")
}