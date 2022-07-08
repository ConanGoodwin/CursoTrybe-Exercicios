const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  const pokoUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
  // const hqUrl = 'https://comicvine.gamespot.com/api/character';

  // console.log(fetch(url));
  fetch(url)
    .then((response) => response.json())
    .then(({ value }) => console.log(value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));

  fetch(pokoUrl)
    .then((response) => response.json())
    .then(({ abilities }) => console.log(abilities[0].ability))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));

  // fetch(hqUrl)
  //   .then((response) => console.log(response.json()))
  //   // .then(({ abilities }) => console.log(abilities[0].ability))
  //   .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();