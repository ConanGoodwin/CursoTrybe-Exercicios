// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function evitaPadrao(evento) {
  const alvo = evento;

  alvo.preventDefault();
}

function evitaNaoA(evento) {
  const alvo = evento;

  if (alvo.key !== "a") {
    alvo.preventDefault();
  }
}

HREF_LINK.addEventListener("click", evitaPadrao);
INPUT_CHECKBOX.addEventListener("click", evitaPadrao);
INPUT_TEXT.addEventListener("keypress", evitaNaoA);
