import Piece from './Piece.js';
import KnightBlack from '../../images/chess/Knight.svg';
import KnightWhite from '../../images/chess/Knight-white.svg';

export default class Knight extends Piece{
  constructor(player, location){
    super(player, player === 'white' ? KnightWhite : KnightBlack, location )

  }

  isAvilable(board, currentPlayer){
    let avilableMoves = [];
    const conditions =[
      (Math.floor(this.location/8) - 2) >=0 &&
      (this.location%8) + 1 < 8 &&
      (board[(Math.floor(this.location/8) - 2)*8 + (this.location%8) + 1] === null ||
      board[(Math.floor(this.location/8) - 2)*8 + (this.location%8) + 1].player !== this.player
      ),
      (Math.floor(this.location/8) - 2) >=0 &&
      (this.location%8) - 1 >= 0 &&
      (board[(Math.floor(this.location/8) - 2)*8 + (this.location%8) - 1] === null ||
      board[(Math.floor(this.location/8) - 2)*8 + (this.location%8) - 1].player !== this.player
      ),
      (Math.floor(this.location/8) + 2) < 8 &&
      (this.location%8) - 1 >= 0 &&
      (board[(Math.floor(this.location/8) + 2)*8 + (this.location%8) - 1] === null ||
      board[(Math.floor(this.location/8) + 2)*8 + (this.location%8) - 1].player !== this.player
      ),
      (Math.floor(this.location/8) + 2) < 8 &&
      (this.location%8) + 1 < 8 &&
      (board[(Math.floor(this.location/8) + 2)*8 + (this.location%8) + 1] === null ||
      board[(Math.floor(this.location/8) + 2)*8 + (this.location%8) + 1].player !== this.player
      ),
      (Math.floor(this.location/8) + 1) < 8 &&
      (this.location%8) + 2 < 8 &&
      (board[(Math.floor(this.location/8) + 1)*8 + (this.location%8) + 2] === null ||
      board[(Math.floor(this.location/8) + 1)*8 + (this.location%8) + 2].player !== this.player
      ),
      (Math.floor(this.location/8) + 1) < 8 &&
      (this.location%8) - 2 >= 0 &&
      (board[(Math.floor(this.location/8) + 1)*8 + (this.location%8) - 2] === null ||
      board[(Math.floor(this.location/8) + 1)*8 + (this.location%8) - 2].player !== this.player
      ),
      (Math.floor(this.location/8) - 1) >= 0 &&
      (this.location%8) + 2 < 8 &&
      (board[(Math.floor(this.location/8) - 1)*8 + (this.location%8) + 2] === null ||
      board[(Math.floor(this.location/8) - 1)*8 + (this.location%8) + 2].player !== this.player
      ),
      (Math.floor(this.location/8) - 1) >= 0 &&
      (this.location%8) - 2 >= 0 &&
      (board[(Math.floor(this.location/8) - 1)*8 + (this.location%8) - 2] === null ||
      board[(Math.floor(this.location/8) - 1)*8 + (this.location%8) - 2].player !== this.player
      ),
    ];
    if(conditions[0]){avilableMoves.push(this.location - 15)}
    if(conditions[1]){avilableMoves.push(this.location - 17)}
    if(conditions[2]){avilableMoves.push(this.location + 15)}
    if(conditions[3]){avilableMoves.push(this.location + 17)}
    if(conditions[4]){avilableMoves.push(this.location + 10)}
    if(conditions[5]){avilableMoves.push(this.location + 6)}
    if(conditions[6]){avilableMoves.push(this.location - 6)}
    if(conditions[7]){avilableMoves.push(this.location - 10)}
    if(conditions[7]){avilableMoves.push(this.location)}


    return avilableMoves;
  }
}
