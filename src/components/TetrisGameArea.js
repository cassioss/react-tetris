import React from 'react';
import PropTypes from 'prop-types';
import {
  GAME_BOARD_TILE_COUNT_HORIZONTAL,
  GAME_BOARD_TILE_COUNT_VERTICAL,
  GAME_BOARD_TILE_SIZE,
} from '../constants';

import './TetrisGameArea.css';

export class TetrisGameArea extends React.Component {
  render() {
    return (
      <div className="tetris-area">
        {[...Array(this.props.tileCountVertical)].map((_, yIndex) => (
          <div key={yIndex} style={{display: 'flex'}}>
            {[...Array(this.props.tileCountHorizontal)].map((_, xIndex) => (
              <div key={xIndex} style={{
                height: this.props.tileSize,
                width: this.props.tileSize,
                backgroundColor: 'red',
                border: '1px solid black',
              }}/>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

TetrisGameArea.propTypes = {
  tileCountHorizontal: PropTypes.number,
  tileCountVertical: PropTypes.number,
  tileSize: PropTypes.number,
};

TetrisGameArea.defaultProps = {
  tileCountHorizontal: GAME_BOARD_TILE_COUNT_HORIZONTAL,
  tileCountVertical: GAME_BOARD_TILE_COUNT_VERTICAL,
  tileSize: GAME_BOARD_TILE_SIZE,
};

export default TetrisGameArea;
