import React, { useState } from 'react';
import GameBoard from './GameBoard';

// Resolução proveniente do gabarito no course da Trybe
// source: https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-usestate-e-usecontext/solutions/611b1c8e-3787-4110-84e5-194e0080c79f/gabarito-do-exercicios/d83551af-7517-47d4-83a2-3acaf8280b4c?use_case=calendar
// Observação: com correção da informação do jogador que ganhou
function TicTacToe() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const toggleActivePlayer = () => setActivePlayer(activePlayer === 1 ? 2 : 1);

  const updateState = (cellClicked) => {
    if (gameBoard[cellClicked] !== 0) return false;

    let newGameBoard = [...gameBoard];
    newGameBoard[cellClicked] = activePlayer;
    setGameBoard(newGameBoard);
    toggleActivePlayer();
  }

  const victoryArchivedInLine = () => {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gameBoard[i] === gameBoard[i + 1] &&
        gameBoard[i + 1] === gameBoard[i + 2] &&
        gameBoard[i] !== 0
      ) return true;
    }
    return false;
  }

  const victoryArchivedInColumn = () => {
    for (let i = 0; i <= 2 ; i += 1) {
      if (
        gameBoard[i] === gameBoard[i + 3] &&
        gameBoard[i + 3] === gameBoard[i + 6] &&
        gameBoard[i] !== 0
      ) return true;
    }
    return false;
  }

  const victoryArchivedInDiagonals = () => {
    if (gameBoard[4] === 0) return false;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) return true;
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) return true;
    return false;
  }

  const resetGame = () => {
    setActivePlayer(1);
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  const renderButton = () => {
    return (
      <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  }

  const victoryArchieved = () => {
    return (
      victoryArchivedInLine() || victoryArchivedInColumn() || victoryArchivedInDiagonals()
    );
  }

  const win = victoryArchieved();
  if (!gameBoard.includes(0) && !win) {
    return (
      <section>
        {renderButton()}
        <h1>Empate</h1>
      </section>
    );
  }

  if (victoryArchieved()) return (
    <section>
      {renderButton()}
      <h1>Fim de Jogo</h1>
      <h1>{`Player ${activePlayer === 1 ? 'O' : 'X'} Ganhou`}</h1>
    </section>
  )
  return (
    <section>
      {renderButton()}
      <GameBoard gameState={ gameBoard } updateGame={ updateState } />
    </section>
  )
}

export default TicTacToe;
