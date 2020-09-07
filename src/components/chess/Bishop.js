import Piece from './Piece.js';
import BishopBlack from '../../images/chess/Bishop.svg';
import BishopWhite from '../../images/chess/Bishop-white.svg';

export default class Bishop extends Piece{
  constructor(player, location){
    super(player, player === 'white' ? BishopWhite : BishopBlack, location )

  }

  isAvilable(board, currentPlayer){
    let block = [false, false, false, false] //topright, bottomright, topleft, bottomleft
    let avilableMoves = [];
    for(let i = 1; i < 8; i++){
      if( this.location%8 + i < 8){
        if(Math.floor(this.location/8) - i >= 0){
          let squerToCheck = (Math.floor(this.location/8) - i)*8 + this.location%8 + i;
          if(!block[0] && board[squerToCheck] === null){
                  avilableMoves.push(squerToCheck);
                }
          if(!block[0] && board[squerToCheck] !== null && board[squerToCheck].player === this.player){block[0] = true;}
          if(!block[0] && board[squerToCheck] !== null && board[squerToCheck].player !== this.player){
            avilableMoves.push(squerToCheck);
            block[0] = true;
          }
        }
        if(Math.floor(this.location/8) + i < 8){
          let squerToCheck = (Math.floor(this.location/8) + i)*8 + this.location%8 + i;
          if(!block[1] && board[squerToCheck] === null){
                  avilableMoves.push(squerToCheck);
                }
          if(!block[1] && board[squerToCheck] !== null && board[squerToCheck].player === this.player){block[1] = true;}
          if(!block[1] && board[squerToCheck] !== null && board[squerToCheck].player !== this.player){
            avilableMoves.push(squerToCheck);
            block[1] = true;
            }
          }
      }
      if( this.location%8 - i >= 0){
        if(Math.floor(this.location/8) - i >= 0){
          let squerToCheck = (Math.floor(this.location/8) - i)*8 + this.location%8 - i;
          if(!block[2] && board[squerToCheck] === null){
                  avilableMoves.push(squerToCheck);
                }
          if(!block[2] && board[squerToCheck] !== null && board[squerToCheck].player === this.player){block[2] = true;}
          if(!block[2] && board[squerToCheck] !== null && board[squerToCheck].player !== this.player){
            avilableMoves.push(squerToCheck);
            block[2] = true;
          }

        }
        if(Math.floor(this.location/8) + i < 8){
          let squerToCheck = (Math.floor(this.location/8) + i)*8 + this.location%8 - i;
          if(!block[3] && board[squerToCheck] === null){
                  avilableMoves.push(squerToCheck);
                }
          if(board[squerToCheck] !== null && board[squerToCheck].player === this.player){block[3] = true;}
          if(board[squerToCheck] !== null && board[squerToCheck].player !== this.player){
            avilableMoves.push(squerToCheck);
            block[3] = true;
          }

        }
      }
    }
    return avilableMoves;
  }
}
