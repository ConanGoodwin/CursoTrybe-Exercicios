const divTitulo = document.getElementsByClassName("p-rich_text_section")[0];
const txtTitulo = divTitulo.children[1].innerText;
const divPrimeiroEvento =
  document.getElementsByClassName("p-rich_text_block")[0];
const horarios = ["[*] 13h", "14h", "15h", "16h", "18h", "[*] 18h40", "19h20", "19h30"];
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
      if (txtComp === proxTexto) {
        atualCompromisso += 1;  
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
