import React, { Component } from 'react';
import '../../styles/chess.css';
import Pawn from './Pawn'
import Knight from './Knight'
import King from './King'
import Queen from './Queen'
import Rook from './Rook'
import Bishop from './Bishop'

class Chess extends Component{
  constructor(props){
    super(props);
    this.state = {
      board: this.initBoard(),
      currentPiece: null,
      currentPlayer: 'white'
    }
  }


  renderPiece = (piece) =>{
    if(piece !== null){
      return(
        <div style={piece.style}></div>
      )
    }
  }

  initBoard = () =>{
    let board = Array(64).fill(null);
    for(let i = 0; i < 64; i++){
      if(Math.floor(i/8) === 1){
        board[i] = new Pawn('black', i);
      }
      if(Math.floor(i/8) === 6){
        board[i] = new Pawn('white', i);
      }
      if(Math.floor(i/8) === 0){
        if(i%8 === 0 || i%8 === 7)
          board[i] = new Rook("black", i)
        if(i%8 === 1 || i%8 === 6)
            board[i] = new Knight("black", i)
        if(i%8 === 2 || i%8 === 5)
            board[i] = new Bishop("black", i)
        if(i%8 === 3)
            board[i] = new Queen("black", i)
        if(i%8 === 4)
            board[i] = new King("black", i)
      }

      if(Math.floor(i/8) === 7){
        if(i%8 === 0 || i%8 === 7)
          board[i] = new Rook("white", i)
        if(i%8 === 1 || i%8 === 6)
            board[i] = new Knight("white", i)
        if(i%8 === 2 || i%8 === 5)
            board[i] = new Bishop("white", i)
        if(i%8 === 3)
            board[i] = new Queen("white", i)
        if(i%8 === 4)
            board[i] = new King("white", i)
      }
    }
    return board;
  }

  handleClick(index){

    if(this.state.currentPiece === null && this.state.board[index] !== null
      && this.state.board[index].player === this.state.currentPlayer){
      this.setState({currentPiece: this.state.board[index]});
      this.state.board[index] = null;
    }
    if( this.state.currentPiece !== null &&
      this.state.currentPiece.isAvilable(this.state.board, this.state.currentPlayer).includes(index)){
        if(this.state.currentPiece.location !== index){
          this.setState({currentPlayer: this.state.currentPlayer === 'white' ? 'black' : 'white'})
        }
        let updatedBoard = this.state.board;
        updatedBoard[index] = this.state.currentPiece;
        this.state.currentPiece.setCurrentLocation(index);
        this.setState({
          board: updatedBoard,
          currentPiece: null});
    }

  }

  render() {
    const board = this.state.board.map((cell, i) => {
        return(
          <div
            key={i}
            className={`cell ${(Math.floor(i/8) + i)%2 === 0 ? 'light' : 'darker'}`}
            onClick={() => this.handleClick(i)}
            >{this.renderPiece(cell)}</div>)}
    )
    let style = {}
    if(this.state.currentPiece !== null){
      style = {cursor: "url('" + this.state.currentPiece.icon + "'),auto" }
    }
      return (
        <div className="chessGameBoard" style={style}>
          {board}
        </div>
      );
    }
}
export default Chess;
