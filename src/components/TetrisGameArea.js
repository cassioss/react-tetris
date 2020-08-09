import React from "react";
import PropTypes from "prop-types";

import { GAME_BOARD_TILE_SIZE } from "../constants";

import "./TetrisGameArea.css";

const TetrisGameArea = ({ colorMatrix }) => (
  <div className="tetris-game-area">
    {colorMatrix.map((lineColors, yIndex) => (
      <TetrisLine key={`y-${yIndex}`} lineColors={lineColors} />
    ))}
  </div>
);

const TetrisLine = ({ lineColors }) => (
  <div className="tetris-line">
    {lineColors.map((tileColor, xIndex) => (
      <TetrisTile key={`x-${xIndex}`} color={tileColor} />
    ))}
  </div>
);

const TetrisTile = ({ color }) => (
  <div
    style={{
      backgroundColor: color,
      border: "1px solid black",
      height: GAME_BOARD_TILE_SIZE,
      width: GAME_BOARD_TILE_SIZE,
    }}
  />
);

TetrisGameArea.propTypes = {
  colorMatrix: PropTypes.array.isRequired,
};

TetrisLine.propTypes = {
  lineColors: PropTypes.array.isRequired,
};

TetrisTile.propTypes = {
  color: PropTypes.string.isRequired,
};

export default TetrisGameArea;
