import Piece from './Piece.js';
import PawnBlack from '../../images/chess/Pawn.svg';
import PawnWhite from '../../images/chess/Pawn-white.svg';

export default class Pawn extends Piece{
  constructor(player, location){
    super(player, player === 'white' ? PawnWhite : PawnBlack, location )

  }

  isAvilable(board, currentPlayer){
    let avilableMoves = [];

    if(this.player === 'white'){
      if(this.location >= 48 && this.location < 56){
        if(board[this.location - 8] === null && board[this.location - 16] === null){avilableMoves.push(this.location-16)}
        }
      if(board[this.location - 8] === null){avilableMoves.push(this.location-8)}
      if(board[this.location - 7] !== null && board[this.location -7].player !== this.player){
        avilableMoves.push(this.location-7)
      }
      if(board[this.location - 9] !== null && board[this.location -9].player !== this.player){
        avilableMoves.push(this.location-9)
      }
      if(board[this.location - 7] !== null && board[this.location -7].player !== this.player){
        avilableMoves.push(this.location-9)
      }
    }

    if(this.player === 'black'){
      if(this.location >= 8 && this.location < 16){
        if(board[this.location + 8] === null && board[this.location + 16] === null){avilableMoves.push(this.location + 16)}
        }
      if(board[this.location + 8] === null){avilableMoves.push(this.location + 8)}
      if(board[this.location + 7] !== null && board[this.location + 7].player !== this.player){
        avilableMoves.push(this.location + 7)
      }
      if(board[this.location + 9] !== null && board[this.location + 9].player !== this.player){
        avilableMoves.push(this.location + 9)
      }
      if(board[this.location + 7] !== null && board[this.location + 7].player !== this.player){
        avilableMoves.push(this.location + 9)
      }
    }
    avilableMoves.push(this.location)
    return avilableMoves;

  }
}
