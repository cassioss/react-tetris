import React from 'react';

const TILE_SIZE = 20;

const TETRIMINO_SQUARE_SCHEMA = [
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  [
    [0, 1, 0],
    [1, 1, 0],
    [0, 1, 0],
  ],
];

const TetrisTile = ({ squareColor = 'red' }) => (
  <div
    style={{
      width: TILE_SIZE,
      height: TILE_SIZE,
      backgroundColor: squareColor,
      textAlign: 'center',
    }}
  >
    P
  </div>
);

const Tetrimino = ({
  squareColor = 'blue',
  schema = TETRIMINO_SQUARE_SCHEMA,
  rotation = 0,
}) =>
  schema[rotation % 4].map((schemaRow, idx) => (
    <div
      key={`idx: ${idx}, rotation: ${rotation % 4}`}
      style={{ display: 'flex' }}
    >
      {schemaRow.map((schemaTile, idy) =>
        schemaTile === 1 ? (
          <TetrisTile
            key={`idx: ${idx}, idy: ${idy}, rotation: ${rotation % 4}`}
            squareColor={squareColor}
          />
        ) : (
          <TetrisTile
            key={`idx: ${idx}, idy: ${idy}, rotation: ${rotation % 4}`}
            squareColor="white"
          />
        )
      )}
    </div>
  ));

export { TetrisTile, Tetrimino };
