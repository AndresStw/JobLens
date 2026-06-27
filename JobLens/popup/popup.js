console.log("Script Cargado");

const button = document.getElementById("analize");
const score = document.getElementById("score");
const status = document.getElementById("status");

button.addEventListener("click", () => {

  status.textContent = "Analizando...";//agregar animacion
  score.textContent = "0%";//Agregar Animacion

  });
