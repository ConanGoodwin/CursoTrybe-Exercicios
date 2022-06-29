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

function verificaCompromisso(index, texto) {
  let compromisso = {
    legenda: '',
    link: ''
  };

  if (divPrimeiroEvento.children[1].children[index].innerText.substring(0, texto.length) === texto) {
    compromisso.legenda = divPrimeiroEvento.children[1].children[index].innerText;
    for (let i = index + 1; i < index + 4; i += 1) {
      if (divPrimeiroEvento.children[1].children[i].children[0]) {
        compromisso.link =
          divPrimeiroEvento.children[1].children[i].children[0].href;
      }
    }
    
  }
  return compromisso
}

const geraCompromisso = (iEvento, iHtml, texto) => {
  txtEvento[iEvento] = verificaCompromisso(iHtml, texto).legenda;
  txtLink[iEvento] = verificaCompromisso(iHtml, texto).link;
}

for (let index = 0; index < 200; index += 1) {
  let texto = horarios[atualCompromisso];

  if (txtEvento[atualCompromisso]  === '') {
    geraCompromisso(atualCompromisso, index, texto);
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
