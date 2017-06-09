import React from 'react';
import ReactDOM from 'react-dom';
import './css/game.css';
import Board from './component/board';
import GanmeInfo from './component/gameInfo';
import Moves from './component/moves';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      nextPlayer: "X"
    };
  }

  handleClick(i) {
    const history = [...this.state.history];
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.nextPlayer;
    this.setState({
      history: [...history,{
        squares: squares
      }],
      stepNumber: history.length,
      nextPlayer: this.state.nextPlayer=="X" ? "O":"X"
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      nextPlayer: step % 2 ? "O" : "X"
    });
  }

  calculateWinner(squares) {
    const victoryArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < victoryArray.length; i++) {
      const [a, b, c] = victoryArray[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const nextPlayer = this.state.nextPlayer;

    return (
      <div className="game">
        <Board
          squares={current.squares}
          onClick={i => this.handleClick(i)}
        />
        <Moves
          history={history}
          onClick={(step)=>this.jumpTo(step)}
        />
        <GanmeInfo
          status={status}
          nextPlayer={nextPlayer}
          winner={winner}
        />
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("app"));
