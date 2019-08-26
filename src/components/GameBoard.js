import React from 'react';
import TetrisGameArea from './TetrisGameArea';
import TetrisInstructions from './TetrisInstructions';

import './GameBoard.css';

export class GameBoard extends React.Component {
  render() {
    return (
      <div className="game-board">
        <TetrisGameArea />
        <TetrisInstructions />
      </div>
    );
  }
}

export default GameBoard;
