import React from 'react';
import GameCell from './GameCell';
import '../style/GameBoard.css';

function GameBoard({ gameState, updateGame }) {

  return (
    <div className="game-board">
      {gameState.map((playerId, i) => (
        <GameCell
          id={ i }
          key={ i }
          onClick={ () => updateGame(i) }
          content={ playerId }
        />
      ))}
    </div>
  );
}

export default GameBoard;
