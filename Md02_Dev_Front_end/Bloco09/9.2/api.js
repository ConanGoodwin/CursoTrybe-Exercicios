const url = `https://api.coincap.io/v2/assets`;
const lista = document.getElementById('lstModeadas');
const pErro= document.getElementById('erro');

fetch(url)
  .then((response) => response.json())
  .then(({ data }) => {
    console.log(data);
    data
      .filter((intem, index) => index < 10)
      .forEach(({ id, symbol, priceUsd }) => {
      const li = document.createElement('li');
      li.innerText = `${id}(${symbol}): ${priceUsd}`;
      lista.appendChild(li);
    });
  })
  .catch((erro) => pErro.innerText = erro);