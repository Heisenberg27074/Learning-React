import React, { Component } from "react";
import "./Pockecard.css";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padTothree = (number) =>
  number <= 999 ? ` 00${number}`.slice(-3) : number;
class Pockecard extends Component {
  render() {
    let imgSrc = ` ${POKE_API}${padTothree(this.props.id)}.png `;
    return (
      <div className="Pockecard">
        <h1 className="Pockecard-title">{this.props.name}</h1>
        <div className="Pockecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>

        <div className="Pockecard-data">Type: {this.props.type}</div>
        <div className="Pockecard-data">Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pockecard;
