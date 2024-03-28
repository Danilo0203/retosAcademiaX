const circulo = document.querySelector(".circulo");
const boton = document.querySelector("button");

const hexaColores = "0123456789ABCDEF";

boton.addEventListener("click", () => {
  let colorRandom = [];
  for (let i = 0; i < 6; i++) {
    const indiceRandom = Math.floor(Math.random() * 16);
    colorRandom.push(hexaColores[indiceRandom]);
  }
  circulo.style.backgroundColor = `#${colorRandom.join("")}`;
});
