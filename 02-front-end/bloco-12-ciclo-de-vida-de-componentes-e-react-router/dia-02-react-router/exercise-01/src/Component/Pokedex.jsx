import React from 'react';
import Pokemon from '../Component/Pokemon';
import Button from '../Component/Button';
import PropTypes from 'prop-types';

class Pokedex  extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0, 
      pokeType: '',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
  }

  handleClick = (event) => {
    this.setState({
      pokeType: event.target.name,
      index: 0,
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
        index: 0,
      })
    }
  }
   
  render() {
    const {index, pokeType} = this.state;
    const { data, types, favorites } = this.props;
    const currentList = data.filter((item) => {
      if (pokeType === '' || pokeType === 'All') return true 
      return item.type === pokeType
    });
    const currentIndex = currentList[index];
    const isFavorite = favorites.some((favorite) => favorite.id === currentIndex.id);

    return (
      <>
        {<Pokemon element={currentIndex} className="list-item" isFavorite={ isFavorite } />}
        <div className="button-section">
          <Button onClick={this.handleClick} name='All'/>
          {types.map((type) => (<Button onClick={this.handleClick} key={type} name={type}/>))}
          <Button onClick={() => this.handleClickNext(currentList.length)} name='Next' disabled={currentList.length <= 1} />
        </div>
      </>
    );
  }
}

Pokedex.propTypes = {
  index: PropTypes.number,
  pokeType: PropTypes.string,
};

export default Pokedex;
