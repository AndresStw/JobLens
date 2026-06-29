console.log("Script Cargado");

// const button = document.getElementById("analize");
// const score = document.getElementById("score");
// const status = document.getElementById("status");

// button.addEventListener("click", () => {

//   status.textContent = "Analizando...";//agregar animacion
//   score.textContent = "0%";//Agregar Animacion

//   });
console.log("Popup cargado");

document.addEventListener("DOMContentLoaded", loadOffer);

function loadOffer() {
  chrome.storage.local.get("currentOffer", ({ currentOffer }) => {
    console.log(currentOffer);

    const status = document.getElementById("status");
    const score = document.getElementById("score");

    if (!currentOffer) {
      status.textContent = "No se encontró ninguna oferta.";
      score.textContent = "--";

      return;
    }

    status.textContent = currentOffer.title;
    score.textContent = currentOffer.company;
  });
}
