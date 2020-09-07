import React, { Component } from 'react';
import '../styles/tetris.css';

class Tetris extends Component{

  constructor(props){
    super(props);
    this.canvas = React.createRef();
    this.state = {score : 0};
    this.setScore = this.setScore.bind(this);

  }

  setScore(value){
    this.setState({score: value});
  }
  componentDidMount() {
   this.context = this.canvas.current.getContext('2d');
   this.game = new Game(this.context, this.setScore);
}

  render() {
      return (
        <div className="wrapper">
          <canvas id="can" ref={this.canvas} width='300px' height='600px' />
          <div className="instructions">
            <div className="arrows">
              <div className="arrow arrow-left"></div>
              <div className="arrow arrow-right"></div>
              <div className="arrow arrow-down"></div>
            </div>
            <h1>Use arrows to move</h1>
            <div className="space-button"></div>
            <h1>Use space to rotate the block</h1>
            <h1>Score: {this.state.score}</h1>
          </div>
        </div>
      );
  }
}
export default Tetris;

class Game{
  constructor(context, setScore){
    this.setScore = setScore;
    this.context2D = context;
    this.settings = {cellSize: 30, rows: 20, columns: 10, intervals: 1000/4, loose: false}
    this.gameBoard = new Board(this.settings.rows,this.settings.columns,this.settings.cellSize);
    this.tetromino = new Tetromino(this.settings.cellSize, this.settings);
    window.addEventListener('keydown', e => {
      if (e.keyCode == 37){this.tetromino.moveLeft(this.gameBoard.gameBoard);}
      if (e.keyCode == 39){this.tetromino.moveRight(this.gameBoard.gameBoard);}
      if (e.keyCode == 32){this.tetromino.rotate(this.gameBoard.gameBoard);}
      if (e.keyCode == 40){this.tetromino.drop(this.gameBoard);}
      if (e.keyCode == 81){
        this.gameBoard = new Board(this.settings.rows,this.settings.columns,this.settings.cellSize);
        this.tetromino = new Tetromino(this.settings.cellSize, this.settings);
        this.settings.loose = false;
        this.start();
      }
    });

    this.start();
  }

  start = () => {
    this.time = {then: Date.now(), now: 0, elapsed: 0, interval: 1000/30, dropCounter: 0};
    this.gameBoard.drawBoard(this.context2D);
    this.gameLoop();
  }

  gameLoop = () =>{
    this.frameID = requestAnimationFrame(this.gameLoop);
    this.time.now = Date.now();
    this.time.elapsed = this.time.now - this.time.then;
    if (this.time.elapsed > this.time.interval) {
        this.time.then = this.time.now - (this.time.elapsed % this.time.interval);
        this.time.dropCounter += 1;
        this.context2D.clearRect(0, 0, this.context2D.canvas.width, this.context2D.canvas.height);
        this.gameBoard.drawBoard(this.context2D);
        if(this.time.dropCounter == 20){
          this.tetromino.moveDown(this.gameBoard);
          this.time.dropCounter = 0;
        }
        this.tetromino.drawTetromino(this.context2D);
        this.setScore(this.gameBoard.score);
        if(this.settings.loose){
          cancelAnimationFrame(this.frameID);
          this.context2D.clearRect(0, 0, this.context2D.canvas.width, this.context2D.canvas.height);
          this.context2D.font = "30px Comic Sans MS";
          this.context2D.fillStyle = "white";
          this.context2D.textAlign = "center";
          this.context2D.fillText("You loose!", this.context2D.canvas.width/2, 130);
          this.context2D.fillText("press 'q' to", this.context2D.canvas.width/2, 170);
          this.context2D.fillText("restart game", this.context2D.canvas.width/2, 200);
        }

    }
  }
}

class Board{

  constructor(boardHeight, boardWidth, cellSize){
    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;
    this.score = 0;
    this.cellSize = cellSize;
    this.gameBoard = [];
    for (let row = 0; row < this.boardHeight; row++) {
      this.gameBoard[row] = [];
      for (let column = 0; column < this.boardWidth; column++) {
        this.gameBoard[row][column] = 0;
      }
    }
  }

  drawBoard(context){
    for (let row = 0; row < this.boardHeight; row++) {
      for (let column = 0; column < this.boardWidth; column++) {
        context.fillStyle = "#000000";
        if (this.gameBoard[row][column] == 0){
          context.fillStyle = "#DDDDDD";
        }
        context.fillRect(column*this.cellSize,row*this.cellSize,this.cellSize-1,this.cellSize-1);
      }
    }
  }

  lockOnBoard(tetromino, x, y){
    for(let row = 0; row < 4; row++){
      for(let column = 0; column < 4; column++){
          if(tetromino[column + row*4] == 1){
              this.gameBoard[y + row][x + column] = 1;
            }
        }
    }
    this.checkFullRows()
  }
  checkFullRows(){
    let full = true;
    for(let row = this.gameBoard.length - 1; row >=0; row--){
      for(let column = 0; column < this.gameBoard[0].length; column++){
          if (this.gameBoard[row][column] == 0){
            full = false;
            }
        }
      if (full){
          this.score += 100;
          for(let column = 0; column < this.gameBoard[0].length; column++){
            this.gameBoard[row][column] = 0;
          }
          for (let tmp = row; tmp >= 1; tmp--){
            this.gameBoard[tmp] = [...this.gameBoard[tmp - 1]];
          }
      row = this.gameBoard.length;
    }
    full = true;
    }
  }
}


class Tetromino{
  constructor(cellSize, settings){
    this.settings = settings;
    this.cellSize = cellSize;
    this.x = 3;
    this.y = 0;
    this.shapes = ['00001111','01100110','00100111',
        '01000111','00010111','00110110','01100011'];
    this.currentTetromino = this.generateRandomTetromino();
  }

  generateRandomTetromino(board){
    this.x = 3;
    this.y = -1;
    return('0000'+this.shapes[Math.floor(Math.random()*7)]+'0000');
  }

  drawTetromino(context){
    for(let row = 0; row < 4; row++){
      for(let column = 0; column < 4; column++){
          if(this.currentTetromino[column + row*4] == 1){
            context.fillStyle = "#000000";
            context.fillRect((this.x + column) * this.cellSize, (this.y + row)* this.cellSize, this.cellSize-1, this.cellSize-1);
          }
      }
    }
  }

  collison(board, deltaX, deltaY, rotation = ''){
    let tetrominoToCheck = rotation;
    if(rotation === ''){
      tetrominoToCheck = this.currentTetromino;
    }
    for(let row = 0; row < 4; row++){
      for(let column = 0; column < 4; column++){
        if (tetrominoToCheck[column + row*4] == 1){

          let newX = this.x + column + deltaX;
          let newY = this.y + row + deltaY;
          if(newX < 0 || newX >= board[0].length || newY >= board.length){return true;}

          if(board[newY][newX] !== 0){return true;}

        }
      }
    }
    return false;
  }

  rotate(board){
    let result = '';
    if(this.y < 0 ) {this.y = 0; }
    for(let x in this.currentTetromino){
      result += this.currentTetromino[((15-x)%4)*4 + Math.floor(x/4)];
    }
    if(!this.collison(board, 0, 0, result)){
      this.currentTetromino = result;
    }

  }

  drop(board){
    while(!this.collison(board.gameBoard, 0, 1)){
      this.moveDown(board);
    }
  }

  moveDown(board){
    if(!this.collison(board.gameBoard, 0, 1)){
        this.y += 1;
    }else{
      board.lockOnBoard(this.currentTetromino, this.x, this.y);
      this.currentTetromino = this.generateRandomTetromino(board);
      if(this.collison(board.gameBoard, 0, 0)){
        this.settings.loose = true;
      }
    }
  }
  moveLeft(board){
    if(!this.collison(board, -1, 0)){
        this.x -= 1;
    }
  }
  moveRight(board){
    if(!this.collison(board, 1, 0)){
        this.x += 1;
    }
  }

}
