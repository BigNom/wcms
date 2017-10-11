import React, { Component } from 'react'
import './DrawButton.css'

class DrawButton extends Component{
  constructor(props) {
    super(props);
    this.drawCard = this.drawCard.bind(this);
    this.drawCard = this.drawCardTwo.bind(this);
  }
  drawCard(){
    this.props.drawCard();
  }
  render(props){
    return(
      <div className="buttonContainer">
      <button className="btn" onClick={this.drawCard}>Draw Card</button>
      <button className="btn" onClick={this.drawCardTwo}>Draw Card</button>
      </div>
    )
  }
}

export default DrawButton