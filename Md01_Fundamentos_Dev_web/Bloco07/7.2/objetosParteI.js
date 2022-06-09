const objeto = {
  nome: 'Conan',
}

const objetoCompleto = (objeto,chave,valor) => {
  objeto[chave] = valor;
  return objeto;
}

console.log(objetoCompleto(objeto,'sobre nome','Goodwin'));
