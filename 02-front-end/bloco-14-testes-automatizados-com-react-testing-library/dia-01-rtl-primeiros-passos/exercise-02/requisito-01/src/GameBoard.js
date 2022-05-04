import React from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    const { gameState } = this.props;
    return (
      <div className="game-board">
        { gameState.map((_playerId, i) => (
          <GameCell
            id={ i }
            key={ i }
          />
        )) }
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default GameBoard;
