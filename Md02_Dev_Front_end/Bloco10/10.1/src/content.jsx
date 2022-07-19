import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const criaLi = (obj, indice) => {
  return (
    <li key={indice} className="card">
      O conteúdo é: {obj.conteudo} <br />
      Status: {obj.status} <br />
      Bloco: {obj.bloco}
    </li>
  );
};

class Content extends React.Component {
  render() {
    return (
      <ul>
        {conteudos.map((item, index) => criaLi(item, index))}
      </ul>
    );
  }
}

export default Content;