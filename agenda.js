const horarios = ["[*] 13h", "14h", "14h40", "15h", "16h", "17h", "18h", "[*] 18h40", "19h20", "19h30", "19h40"];
const divTituloGeral = document.getElementsByClassName("p-rich_text_section")
let position = 0;
for (let index = 0; index < divTituloGeral.length; index += 1) {
  position = index;
  if (document.getElementsByClassName("p-rich_text_section")[index].children[1].innerHTML.substring(0, 7) === " Agenda") {
    break;
  }
}
const divTitulo = document.getElementsByClassName("p-rich_text_section")[position];
const txtTitulo = divTitulo.children[1].innerText;
const divEventoGeral = document.getElementsByClassName("p-rich_text_block");
for (let index = 0; index < divEventoGeral.length; index += 1) {
  position = index;
  const localiza = document.getElementsByClassName("p-rich_text_block")[index].children[1].innerText.substring(0,3);
  // console.log(localiza);
  // console.log(horarios.some((horario) => horario.substring(0,3) === localiza));
  if (horarios.some((horario) => horario.substring(0,3) === localiza)) {
    break;
  }
}
const divPrimeiroEvento =
  document.getElementsByClassName("p-rich_text_block")[position];

let txtEvento = [];
let txtLink = [];
horarios.forEach(() => {
  txtEvento.push("");
  txtLink.push("");
});
let atualCompromisso = 0;

function verificaCompromisso(index) {
  let compromisso = {
    legenda: '',
    link: ''
  };
  let texto = horarios[atualCompromisso];
  let proxTexto = horarios[atualCompromisso + 1];

  if (divPrimeiroEvento.children[1].children[index]) {
    const txtComp = divPrimeiroEvento.children[1].children[index].innerText.substring(0, texto.length);
    if (txtComp === texto || txtComp === proxTexto) {
      compromisso.legenda = divPrimeiroEvento.children[1].children[index].innerText;
      for (let i = index + 1; i < index + 4; i += 1) {
        if (divPrimeiroEvento.children[1].children[i].innerText) {
          compromisso.legenda += divPrimeiroEvento.children[1].children[i].innerText;
        }
        if (divPrimeiroEvento.children[1].children[i].children[0]) {
          compromisso.link =
            divPrimeiroEvento.children[1].children[i].children[0].href;
        }
      }
      while (txtComp !== proxTexto && atualCompromisso < horarios.length - 1) {
        atualCompromisso += 1;
        proxTexto = horarios[atualCompromisso];
        console.log(proxTexto);
      }
    }
  }
  return compromisso
}

const geraCompromisso = (iEvento, iHtml) => {
  txtEvento[iEvento] = verificaCompromisso(iHtml).legenda;
  txtLink[iEvento] = verificaCompromisso(iHtml).link;
}

for (let index = 0; index < 200; index += 1) {
  if (txtEvento[atualCompromisso]  === '') {
    geraCompromisso(atualCompromisso, index);
  } else {
    atualCompromisso += 1;
  }
}

let menssagem = txtTitulo;
const agenda = horarios.map((horario, index) => `${txtEvento[index]} --- Link: ${txtLink[index]}`);
agenda.forEach((item) => menssagem += `
${item}
`);
console.log(menssagem);
window.alert(menssagem);
