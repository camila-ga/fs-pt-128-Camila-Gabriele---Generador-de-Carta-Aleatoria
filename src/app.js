window.myClickFunction = function myClickFunction() {


  let valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"]
  let palos = ["♦", "♥", "♠", "♣"]


  function eleccionAutomatica(arr) {
    const aleatorio = Math.floor(Math.random() * arr.length)
    return arr[aleatorio]
  }

  const numeroAleatorio = eleccionAutomatica(valores)
  const simboloAleatorio = eleccionAutomatica(palos)
  // const color = (simboloAleatorio === "♥" || simboloAleatorio === "♦") ? 'text-danger' : 'text-dark'

  // const cardContent = document.getElementById("card-content")
  // cardContent.classList.add(color)
  // comente esta parte porque no me funcionaba el codigo y no logre resolverlo, voy a pedir una mentoria =)


  const color = document.querySelector("#card-content")
  const numeroColor = document.querySelector("#numero-carta")

  if (simboloAleatorio === "♥" || simboloAleatorio === "♦") 
    { color.classList.add("rojo")
      numeroColor.classList.add("rojo") }
  else { color.classList.remove("rojo")
    numeroColor.classList.remove("rojo")}

  const simboloStart = document.getElementById("palo-arriba")
  simboloStart.innerHTML = simboloAleatorio

  const numeroCenter = document.getElementById("numero-carta")
  numeroCenter.innerHTML = numeroAleatorio
  // numeroCenter.classList.add(color)

  const simboloEnd = document.getElementById("palo-abajo")
  simboloEnd.innerHTML = simboloAleatorio

};

setInterval(myClickFunction, 10000);

const estiloCarta = document.getElementById("carta-poker");
const widthInput = document.getElementById("widthInput")
const heightInput = document.getElementById("heightInput")

heightInput.addEventListener('input', function(){
  const nuevoHeight = this.value;
  estiloCarta.style.height = nuevoHeight + 'px';
});

widthInput.addEventListener('input', function () {
  const nuevawidth = this.value;
  estiloCarta.style.width = nuevawidth + 'px';
});