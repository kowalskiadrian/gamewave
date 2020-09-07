import Piece from './Piece.js';
import KingBlack from '../../images/chess/King.svg';
import KingWhite from '../../images/chess/King-white.svg';

export default class King extends Piece{
  constructor(player, location){
    super(player, player === 'white' ? KingWhite : KingBlack, location )

  }

  isAvilable(board, currentPlayer){
    let avilableMoves = [];
    let fieldsUnderAttack = [];
    if(currentPlayer === 'white'){
      for(let i = 0; i < 64; i++){
        if(board[i] !== null &&
          board[i].player === 'black' && board[i].isAvilable(board) !== null
          && board[i].isAvilable(board).length > 0){
            fieldsUnderAttack.push(...board[i].isAvilable(board))
          }
        }
    }

    if(currentPlayer === 'black'){
      for(let i = 0; i < 64; i++){
        if(board[i] !== null &&
          board[i].player === 'white' && board[i].isAvilable(board) !== null
          && board[i].isAvilable(board).length > 0){
            fieldsUnderAttack.push(...board[i].isAvilable(board))
          }
        }
    }
    if(this.location + 8 < 64 &&
       (board[this.location + 8] === null ||
       board[this.location + 8].player !== this.player) &&
       !fieldsUnderAttack.includes(this.location + 8)){
         avilableMoves.push(this.location + 8);
       }
    if(this.location + 9 < 64 &&
       (board[this.location + 9] === null ||
       board[this.location + 9].player !== this.player) &&
       !fieldsUnderAttack.includes(this.location + 9)){
       avilableMoves.push(this.location + 9);
        }
    if(this.location + 7 < 64 &&
       (board[this.location + 7] === null ||
       board[this.location + 7].player !== this.player) &&
       !fieldsUnderAttack.includes(this.location + 7)){
       avilableMoves.push(this.location + 7);
        }
    if(this.location + 1 < 64 &&
       (board[this.location + 1] === null ||
       board[this.location + 1].player !== this.player) &&
       !fieldsUnderAttack.includes(this.location + 1)){
       avilableMoves.push(this.location + 1);
        }
    if(this.location - 1 >= 0 &&
       (board[this.location - 1] === null ||
       board[this.location - 1].player !== this.player) &&
       !fieldsUnderAttack.includes(this.location - 1)){
       avilableMoves.push(this.location - 1);
        }
    if(this.location - 7 >= 0 &&
       (board[this.location - 7] === null ||
       board[this.location - 7].player !== this.player) &&
       !fieldsUnderAttack.includes(this.location - 7)){
       avilableMoves.push(this.location - 7);
        }
    if(this.location - 8 >= 0 &&
       (board[this.location - 8] === null ||
       board[this.location - 8].player !== this.player) &&
       !fieldsUnderAttack.includes(this.location - 8)){
       avilableMoves.push(this.location - 8);
        }
    if(this.location - 9 >= 0 &&
       (board[this.location - 9] === null ||
       board[this.location - 9].player !== this.player) &&
       !fieldsUnderAttack.includes(this.location - 9)){
       avilableMoves.push(this.location - 9);
        }
    avilableMoves.push(this.location);
    return avilableMoves;
  }
}
