import React, { Component } from "react";

export default class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: "X",
      winner: "",
    };
  }
  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      if (
        this.state.board[a] &&
        this.state.board[a] === this.state.board[b] &&
        this.state.board[a] === this.state.board[c]
      ) {
        this.setState({
          winner: this.state.player,
        });
      }
    }
  }
  handleClick = (index) => {
    if (this.state.board[index] === null && !this.state.winner) {
      const newBoard = this.state.board;
      newBoard[index] = this.state.player;
      this.setState({
        board: newBoard,
        player: this.state.player === "X" ? "O" : "X",
      });
    }
    // console.log(this.state.board);
    // console.log(this.state.player);
    this.checkWinner();
  };
  render() {
    const Box = this.state.board.map((box, index) => (
      <div
        className="box"
        key={index}
        onClick={() => {
          this.handleClick(index);
        }}
      >
        {box}
      </div>
    ));
    return (
      <React-Fragment className="container">
        <h1>Hello React</h1>
        <h3>Tic Tac Toe</h3>
    {!this.state.winner ?  <h4>player Turn {this.state.player}</h4> : " "}
        {this.state.winner ? <h4>winner is {this.state.winner}</h4> : ""}
        {Box}
      </React-Fragment>
    );
  }
}
