import React, { Component } from "react";
import Dice from "./Dice";

import "./Dice.css";

class Roll extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { dice1: "one", dice2: "one", rolling: false };
    this.rollAgain = this.rollAgain.bind(this);
  }
  rollAgain() {
    const newDice1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDice2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({ dice1: newDice1, dice2: newDice2, rolling: true });
    
    // wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    
    return (
        
      <div className="Roll">
        <Dice face={this.state.dice1} rolling={this.state.rolling} className={this.state.rolling ? 'animate__jackInTheBox' : ''}/>
        <Dice face={this.state.dice2} rolling={this.state.rolling}/>
        <div>
          <button
            className="btn"
            onClick={this.rollAgain}
            disabled={this.state.rolling}
          >
            {" "}
            {this.state.rolling ? "Rolling..." : "Roll Dice!"}{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Roll;
