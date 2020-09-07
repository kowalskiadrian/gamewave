export default class Piece{
  constructor(player, icon, location){
    this.player = player;
    this.location = location;
    this.icon = icon;
    this.style = {
      backgroundImage: "url('"+this.icon+"')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      width: "100%",
      height: "80%"
    };
  }
  setCurrentLocation(location){
    this.location = location;
  }
}
