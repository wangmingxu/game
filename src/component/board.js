import React from 'react';

//方格组件，无状态组件
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

//井字组件
class Board extends React.Component {
  renderSquare(row_num,size) {
    let row = [];
    for(let i=0;i<size;i++){
      row.push(
        <Square
          key={row_num*size+i+100}
          value={this.props.squares[row_num*size+i]}
          onClick={() => this.props.onClick(row_num*size+i)}
        />
      );
    }
    return row;
  }

  renderBoard(size) {
    let row = [];
    for(let i=0;i<size;i++){
      row.push(
        <div className="board-row" key={i}>{this.renderSquare(i,size)}</div>
      );
    }
    return row;
  }

  render() {
    return (
      <div className="game-board">
        {this.renderBoard(3)}
      </div>
    );
  }
}

export default Board;
