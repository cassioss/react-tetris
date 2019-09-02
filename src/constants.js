// How many tiles will be present in each direction
const GAME_BOARD_TILE_COUNT_HORIZONTAL = 12;
const GAME_BOARD_TILE_COUNT_VERTICAL = 20;  

// Tiles will be squares, so we only need to define one dimension for them
const GAME_BOARD_TILE_SIZE = 30;

// Empty board tile color
const EMPTY_BOARD_TILE_COLOR = 'white';

const EMPTY_BOARD_ARRAY = (input) => (
  [...Array(GAME_BOARD_TILE_COUNT_VERTICAL)].map(_ =>
    Array(GAME_BOARD_TILE_COUNT_HORIZONTAL).fill(input)
  )
);

const EMPTY_BOARD = EMPTY_BOARD_ARRAY(EMPTY_BOARD_TILE_COLOR);

export {
  EMPTY_BOARD,
  EMPTY_BOARD_ARRAY,
  GAME_BOARD_TILE_SIZE,
}
