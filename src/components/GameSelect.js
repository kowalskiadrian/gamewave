import React from 'react';
import { useHistory } from "react-router-dom";

function GameSelect(){
  let history = useHistory();

  return(
    <div className="GameSelect">
      <div className="card">
        <div className="wrapper">
          <div className="card-one img"></div>
          <div className="title-one title"></div>
        </div>
        <p>Grab a cup of coffee and Your friend. Then challenge yourself in the most famous board game of all time - chess! </p>
        <button onClick={() => {history.push("/chess")}} id="chess-btn" className="btn">Play</button>
      </div>
      <div className="card">
        <div className="wrapper">
          <div className="card-two img"></div>
          <div className="title-two title"></div>
        </div>
        <p>Scratch your head trying to solve a 3x3 Rubik's cube. Be patient and don't give up, it's not that hard!</p>
        <button onClick={() => {history.push("/rubiks")}} id="rubiks-btn" className="btn">Play</button>
      </div>
      <div className="card">
        <div className="wrapper">
          <div className="card-three img"></div>
          <div className="title-three title"></div>
        </div>
        <p>Play a classic Tetris game just like in the 90s! Can you get over 9000 points?</p>
        <button onClick={() => {history.push("/tetris")}} id="tetris-btn" className="btn">Play</button>
      </div>
    </div>
  );

}

export default GameSelect;
