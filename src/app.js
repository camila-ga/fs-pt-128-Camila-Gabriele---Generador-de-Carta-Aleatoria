let valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"]
let palos = ["♦", "♥", "♠", "♣"]

function eleccionAutomatica(arr) {
  const aleatorio = Math.floor(Math.random() * arr.length)
  return arr[aleatorio]
}

const numeroAleatorio = eleccionAutomatica(valores)
const simboloAleatorio = eleccionAutomatica(palos)
const color = (simboloAleatorio === "♥" || simboloAleatorio === "♦") ? 'text-danger' : 'text-dark'

const cardContent = document.getElementById("card-content")
cardContent.classList.add(color)


const simboloStart = document.getElementById("palo-arriba")
simboloStart.innerHTML = simboloAleatorio

const numeroCenter = document.getElementById("numero-carta")
numeroCenter.innerHTML = numeroAleatorio
numeroCenter.classList.add(color)

const simboloEnd = document.getElementById("palo-abajo")
simboloEnd.innerHTML = simboloAleatorio
