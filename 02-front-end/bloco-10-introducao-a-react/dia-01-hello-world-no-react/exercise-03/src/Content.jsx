import React from "react";

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

// Resolução proveniente do course da Trybe
// source: https://app.betrybe.com/course/front-end/introducao-a-react/hello-world-no-react/solutions/4c79bcea-26c6-40d2-861d-a1b1dcdcadb7/gabarito-dos-exercicios-de-fixacao/760e3283-b946-414e-bf51-dd0f1321ae11?use_case=calendar
class Content extends React.Component {
  render() {
    return (
      <main className="main">
        {conteudos.map((element) => ( // Posso utilizar () na HOF também
          <div key={element.conteudo} className='card'>
            <h4>{`O conteúdo é: ${element.conteudo}`}</h4>
            <p>{`Status: ${element.status}`}</p>
            <p>{`Bloco: ${element.bloco}`}</p>
          </div>
        ))}
      </main>
    );
  }
};

export default Content;