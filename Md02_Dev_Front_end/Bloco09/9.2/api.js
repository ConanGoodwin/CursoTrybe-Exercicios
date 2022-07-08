const url = `https://api.coincap.io/v2/assets`;
const urlReal = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`;
const lista = document.getElementById('lstModeadas');
const pErro= document.getElementById('erro');

async function converteDeDolarPReal(priceUsd) {
  let precoReal= 0;
  try {
    const resposta = await fetch(urlReal);
    const { usd } = await resposta.json();
    precoReal = usd.brl * priceUsd;
  } catch(erro) {
    pErro.innerText = erro;
  }
  
  return precoReal;
}

async function montaLi({ id, symbol, priceUsd }) {
  const li = document.createElement('li');
  li.innerText = `${id}(${symbol}): ${priceUsd} em Real: ${await converteDeDolarPReal(priceUsd)}`;
  lista.appendChild(li);  
}

function baixaDadosCripto() {
  fetch(url)
    .then((response) => response.json())
    .then(({ data }) => {
      data
        .filter((i, index) => index < 10)
        .forEach((item) => {
          montaLi(item);
      });
    })
    .catch((erro) => pErro.innerText = erro);
}

baixaDadosCripto();
converteDeDolarPReal('','','');