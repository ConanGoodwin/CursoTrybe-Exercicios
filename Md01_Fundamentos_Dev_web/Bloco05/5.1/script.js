const cabecalho = document.getElementById('header-container');
const rodape = document.getElementById('footer-container');
const divImportantes = document.querySelector('.emergency-tasks');
const divNaoImportantes = document.querySelector('.no-emergency-tasks');
const titulos = document.getElementsByTagName('h3');

cabecalho.style.backgroundColor = 'green';
divImportantes.style.backgroundColor = 'pink';
divNaoImportantes.style.backgroundColor = 'yellow';
titulos[0].style.backgroundColor = 'violet';
titulos[1].style.backgroundColor = 'violet';
titulos[2].style.backgroundColor = 'black';
titulos[3].style.backgroundColor = 'black';
rodape.style.backgroundColor = 'green';