import React, { Component } from "react";
import Coin from "./Coin";

class Flip extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "https://venkatarun.files.wordpress.com/2015/11/india-1-rupee-2013.jpg",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      totFlips: 0,
      numHeads: 0,
      numTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = this.props.coins[Math.floor(Math.random() * 2)];
    this.setState((st) => {
      return {
        currCoin: newCoin,
        totFlips: st.totFlips + 1,
        numHeads: st.numHeads + (newCoin.side === "heads" ? 1 : 0),
        numTails: st.numTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }
  handleClick() {
    this.flipCoin();
  }
  render() {
    return (
      <div>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip the coin!</button>
        <p>
          Out of {this.state.totFlips}, number of heads: {this.state.numHeads},
          number of tails: {this.state.numTails}
        </p>
      </div>
    );
  }
}

export default Flip;
