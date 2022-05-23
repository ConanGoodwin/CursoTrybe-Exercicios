let corAtual = document.getElementById("corAtual");
let tabelaPixel = document.getElementsByTagName('table')[0];
let qtPixel = 31;

for (let linha = 1; linha <= qtPixel; linha += 1) {
  let trAtual = criaTag('tr','','','','');
  tabelaPixel.appendChild(trAtual);
  for (let coluna =1; coluna <= qtPixel; coluna += 1) {
    let identificador = linha.toString() + ":" + coluna.toString();
    let tagTd = criaTag('td',identificador,'border small','','');
    trAtual.appendChild(tagTd);
    tagTd.setAttribute('onclick','selecionaAtual("' + identificador + '")');
    // selecionaAtual("' + identificador + '")
  }
}

function selecionaCor(cor) {
  corAtual.className = "border small  " + cor;
  // corAtual = cor;
  // console.log(corAtual);
}

function selecionaAtual(identidade) {
  let pixel = document.getElementById(identidade);

  pixel.className = corAtual.className;
  console.log(identidade);
}

function criaTag (tipo, id, classe, atributo, valor) {
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