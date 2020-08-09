import React from 'react';
import PropTypes from 'prop-types';

import { EMPTY_BOARD } from '../constants';
import TetrisGameArea from './TetrisGameArea';
import TetrisInstructions from './TetrisInstructions';

import './GameBoard.css';

export class GameBoard extends React.Component {
  render() {
    return (
      <div className="game-wrapper">
        <div className="game-board">
          <TetrisGameArea colorMatrix={this.props.colorMatrix} />
          <TetrisInstructions />
        </div>
      </div>
    );
  }
}

GameBoard.propTypes = {
  colorMatrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

GameBoard.defaultProps = {
  colorMatrix: EMPTY_BOARD,
};

export default GameBoard;
