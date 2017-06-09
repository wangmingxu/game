import React from 'react';

class Moves extends React.Component {
  render(){
    const moves = this.props.history.map((step, move) => {
      const desc = move ? "Move #" + move : "Game start";
      return (
        <li key={move}>
          <a href="#" onClick={() => this.props.onClick(move)}>{desc}</a>
        </li>
      );
    });
    return (
      <ol className="game-info">
        {moves}
      </ol>
    )
  }
}

export default Moves;
