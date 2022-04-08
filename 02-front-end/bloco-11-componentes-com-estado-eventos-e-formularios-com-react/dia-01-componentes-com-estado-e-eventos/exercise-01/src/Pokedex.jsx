import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import data from './data';
import types from './dataType';

// Resolução proveniente da resolução da Michele Gusmão realizada durante a monitoria com o Especialista Gabriel Espindola e Intrutor Ander
class Pokedex  extends React.Component {
  // Constructor que possibilita utilizar os estados
  constructor() {
    super()
    this.state = {
      index: 0, // inicia meu algoritmo como o primeiro elemento do array
      pokeType: '' // type inicia com um valor em branco
    }
    // Realiza o bind das informações
    this.handleClick = this.handleClick.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
  }

  // Função que captura qual tipo de pokemon será filtrado
  handleClick = (event) => {
    this.setState({
      pokeType: event.target.name, // captura o tipo do pokemon
      index: 0 // inicia como o primeiro elemento do array
    })
  }

  // Função que realiza a alteração para o próximo elemento tendo em vista o tamanho do array
  handleClickNext = (size) => {
    const { index } = this.state; // Desestruturação do index presente no state
    // condição para retornar ao primeiro elemento do array
    if(index < size-1) { 
      // Se for menor, posso alterar para o próximo
      this.setState((old, _props) => ({
        index: old.index + 1
      }))
    } else {
      // Se não tive um valor válido em seguida, reinicia o index para o primeiro elemento do array
      this.setState({
        index: 0
      })
    }
  }

  // Função que filtra um array mediante o tipo informado
  pokemonFilter = (array, info) => array.filter((item) => item.type === info);
   

  render() {
    const {index, pokeType} = this.state // Desestruturação das informações do estado
    // Constante que pesquisa os valores mediante filtro presente no estado
    const currentList = data.filter((item) => {
      if (pokeType === '' || pokeType === 'All') return true // Se o estado for vazio ou all (todos) retorna todos os pokemon
      return item.type === pokeType // Se não retorna os pokemon do tipo presente no estado
    });
    // Constante que armazena o pokemon referente ao index
    const currentIndex = currentList[index];
    
    return (
      <>
        {/* Mostra na tela o pokemon presente na constante currentIndex */}
        {<Pokemon element={currentIndex} className="list-item"/>}
        {/* Seção que contém todos os botões, sendo o dos tipos de forma dinâmica */}
        <div className="button-section">
          {/* Botão que retorna todos os pokemon para a lista */}
          <Button onClick={this.handleClick} name='All'/>
          {types.map((type) => (<Button onClick={this.handleClick} key={type} name={type}/>))}
          {/* Botão que troca para o próximo pokemon incrementando um no state.index e é desabilidado caso não haja mais de um pokemon */}
          <Button onClick={() => this.handleClickNext(currentList.length)} name='Next' disabled={currentList.length <= 1} />
        </div>
      </>
    );
  }
}

export default Pokedex;
