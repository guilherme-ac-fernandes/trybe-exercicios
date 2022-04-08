import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import data from './data';
import types from './dataType';

// Resolução proveniente da resolução da Michele Gusmão realizada durante a monitoria com o Especialista Gabriel Espindola e Intrutor Ander
class Pokedex  extends React.Component {
  constructor() {
    super()
    this.state = {
    
      index: 0,
      pokeType: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
  }

  handleClick = (event) => {
    this.setState({
      pokeType: event.target.name,
      index: 0
    })
  }

  handleClickNext = (size) => {
    const { index } = this.state;
    if(index < size-1) {
      this.setState((old, _props) => ({
        index: old.index + 1
      }))
    } else {
      this.setState({
        index: 0
      })
    }
  }

  pokemonFilter = (array, info, position) => {
    const arrayFilter = array.filter((item) => item.type === info)
    return arrayFilter
  }

  render() {
    const {index, pokeType} = this.state
    const currentList = data.filter((item) => {
      if (pokeType === '' || pokeType === 'All') return true
      return item.type === pokeType
    });
    const currentListIndex = currentList[index];
    
    return (
      <>
        {<Pokemon element={currentListIndex} className="list-item"/>}
        <div className='button-section'>
          <Button onClick={this.handleClick} name='All'/>
          {types.map((type) => (<Button onClick={this.handleClick} key={type} name={type}/>))}
          <Button onClick={() => this.handleClickNext(currentList.length)} name='Next' disabled={currentList.length <= 1}/>
        </div>
      </>
    );
  }
}

export default Pokedex;
