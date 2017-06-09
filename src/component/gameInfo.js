import React from 'react';

class GameInfo extends React.Component {
  render(){
    let status;
    if (this.props.winner) {
      status = "Winner: " + this.props.winner;
    } else {
      status = "Next player: " + (this.props.nextPlayer);
    }
    return (
      <div className="game-info">
        <div>{status}</div>
      </div>
    )
  }
}

export default GameInfo;
