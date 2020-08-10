import React, { useEffect, useState } from 'react';
import { TetrisTile, Tetrimino } from './tetris-tetrimino';

const TetrisGame = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTimer(timer + 1);
  }

  return (
    <div>
      <TetrisTile squareColor="blue" />
      <TetrisTile />
      <Tetrimino />
      <Tetrimino rotation={timer} />
      {timer}
    </div>
  );
};

export default TetrisGame;
