import Piece from './Piece.js';
import QueenBlack from '../../images/chess/Queen.svg';
import QueenWhite from '../../images/chess/Queen-white.svg';

export default class Queen extends Piece{
  constructor(player, location){
    super(player, player === 'white' ? QueenWhite : QueenBlack, location )

  }

  isAvilable(board, currentPlayer){
    let avilableMoves = [];
    let block = [false, false, false, false]
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
    let blockDiagonal = [false, false, false, false]
    for(let i = 1; i < 8; i++){
      if( this.location%8 + i < 8){
        if(Math.floor(this.location/8) - i >= 0){
          let squerToCheck = (Math.floor(this.location/8) - i)*8 + this.location%8 + i;
          if(!blockDiagonal[0] && board[squerToCheck] === null){
                  avilableMoves.push(squerToCheck);
                }
          if(!blockDiagonal[0] && board[squerToCheck] !== null && board[squerToCheck].player === this.player){blockDiagonal[0] = true;}
          if(!blockDiagonal[0] && board[squerToCheck] !== null && board[squerToCheck].player !== this.player){
            avilableMoves.push(squerToCheck);
            blockDiagonal[0] = true;
          }
        }
        if(Math.floor(this.location/8) + i < 8){
          let squerToCheck = (Math.floor(this.location/8) + i)*8 + this.location%8 + i;
          if(!blockDiagonal[1] && board[squerToCheck] === null){
                  avilableMoves.push(squerToCheck);
                }
          if(!blockDiagonal[1] && board[squerToCheck] !== null && board[squerToCheck].player === this.player){blockDiagonal[1] = true;}
          if(!blockDiagonal[1] && board[squerToCheck] !== null && board[squerToCheck].player !== this.player){
            avilableMoves.push(squerToCheck);
            blockDiagonal[1] = true;
            }
          }
      }
      if( this.location%8 - i >= 0){
        if(Math.floor(this.location/8) - i >= 0){
          let squerToCheck = (Math.floor(this.location/8) - i)*8 + this.location%8 - i;
          if(!blockDiagonal[2] && board[squerToCheck] === null){
                  avilableMoves.push(squerToCheck);
                }
          if(!blockDiagonal[2] && board[squerToCheck] !== null && board[squerToCheck].player === this.player){blockDiagonal[2] = true;}
          if(!blockDiagonal[2] && board[squerToCheck] !== null && board[squerToCheck].player !== this.player){
            avilableMoves.push(squerToCheck);
            blockDiagonal[2] = true;
          }

        }
        if(Math.floor(this.location/8) + i < 8){
          let squerToCheck = (Math.floor(this.location/8) + i)*8 + this.location%8 - i;
          if(!blockDiagonal[3] && board[squerToCheck] === null){
                  avilableMoves.push(squerToCheck);
                }
          if(board[squerToCheck] !== null && board[squerToCheck].player === this.player){blockDiagonal[3] = true;}
          if(board[squerToCheck] !== null && board[squerToCheck].player !== this.player){
            avilableMoves.push(squerToCheck);
            blockDiagonal[3] = true;
          }

        }
      }
    }
    return avilableMoves
  }
}
