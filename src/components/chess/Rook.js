import Piece from './Piece.js';
import RookBlack from '../../images/chess/Rook.svg';
import RookWhite from '../../images/chess/Rook-white.svg';

export default class Rook extends Piece{
  constructor(player, location){
    super(player, player === 'white' ? RookWhite : RookBlack, location )

  }

  isAvilable(board, currentPlayer){
    let avilableMoves = [];
    let block = [false, false, false, false] //top, right, bottom, left
    for(let i = 1; i < 8; i++){
      if(!block[1] && this.location%8 + i < 8){
        if(board[this.location + i] !== null &&
          this.player !== board[this.location + i].player){
            console.log("ziemniak: " + board[this.location + i].player);
            avilableMoves.push(this.location + i)
            block[1] = true;
          }
          if(board[this.location + i] !== null &&
            this.player === board[this.location + i].player){
              block[1] = true;
            }
        if(!block[1]){avilableMoves.push(this.location + i)}
      }
      if(!block[3] && this.location%8 - i >= 0){
        if(board[this.location - i] !== null &&
          this.player !== board[this.location - i].player){
            avilableMoves.push(this.location - i)
            block[3] = true;
          }
          if(board[this.location - i] !== null &&
            this.player === board[this.location - i].player){
              block[3] = true;
            }
        if(!block[3]){avilableMoves.push(this.location - i)}
      }
      if(!block[2] && Math.floor(this.location/8) + i < 8){
        if(board[this.location + i*8] !== null &&
          this.player !== board[this.location + i*8].player){
            avilableMoves.push(this.location + i*8)
            block[2] = true;
          }
          if(board[this.location + i*8] !== null &&
            this.player === board[this.location + i*8].player){
              block[2] = true;
            }
        if(!block[2]){avilableMoves.push(this.location + i*8)}
      }
      if(!block[0] && Math.floor(this.location/8) - i >= 0){
        if(board[this.location - i*8] !== null &&
          this.player !== board[this.location - i*8].player){
            avilableMoves.push(this.location - i*8)
            block[0] = true;
          }
          if(board[this.location - i*8] !== null &&
            this.player === board[this.location - i*8].player){
              block[0] = true;
            }
        if(!block[0]){avilableMoves.push(this.location - i*8)}
      }
    }
    return avilableMoves;
  }
}
