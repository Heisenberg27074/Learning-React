import React, { Component } from "react";
import "./Dice.css";
class Dice extends Component {
  render() {
    
    return <i className={`Dice-1  fas fa-dice-${this.props.face} animate__animated animate__bounce`}></i>;
  }
}

export default Dice;
