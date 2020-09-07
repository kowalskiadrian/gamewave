import React, { Component } from 'react';

export default class Cell extends Component{
  constructor(props){
    super(props);
    this.state={
        piece: this.props.piece,
        id: this.props.id
      }
    this.cellClick = this.cellClick.bind(this);
  }

  componentDidMount() {
    this.setState({piece: 1});
    this.props.setCellState(this.state.piece, this.state.id)
  }

  cellClick = () => {
    console.log("Klikam na cell");
    this.setState({piece: "10/10"});
    this.props.setCellState(this.state);
  }

  render(){
    return(
        <div
          className="cell">
        </div>
    );
  }
}
