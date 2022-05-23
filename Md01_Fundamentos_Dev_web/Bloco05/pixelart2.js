let corAtual = document.getElementById("corAtual");
let tabelaPixel = document.getElementsByTagName("table")[0];
let qtPixel = 31;

for (let linha = 1; linha <= qtPixel; linha += 1) {
  let trAtual = criaTag("tr", "", "", "", "");
  tabelaPixel.appendChild(trAtual);
  for (let coluna = 1; coluna <= qtPixel; coluna += 1) {
    let tagTd = criaTag("td", "", "border small", "", "");
    tagTd.addEventListener("click", selecionaAtual);
    trAtual.appendChild(tagTd);
  }
}

function selecionaCor(cor) {
  corAtual.className = "border small  " + cor;
}

function selecionaAtual(eventoDeOrigem) {
  eventoDeOrigem.target.className = corAtual.className;
}

function criaTag(tipo, id, classe, atributo, valor) {
  let tag = document.createElement(tipo);

  if (id != "") {
    tag.id = id;
  }

  if (classe != "") {
    tag.className = classe;
  }

  if (atributo != "") {
    tag[atributo] = valor;
  }

  return tag;
}
