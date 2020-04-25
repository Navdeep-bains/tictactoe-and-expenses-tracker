import React, { Component } from "react";

export default class Arrays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        { name: "apple", price: 100, quantity: 1 },
        { name: "kiwi", price: 150, quantity: 1 },
        { name: "grapes", price: 400, quantity: 4 },
        { name: "pineapple", price: 200, quantity: 2 },
      ],
    };
  }
  totalAll = () => {
    const reducer = (accumulator, item) => {
        return accumulator + item;
      };

const total = this.state.names.reduce(reducer);

    console.log(total);
  };
  render() {
    return (
      <div>
        <button onClick={() => this.totalAll()}> Total </button>
      </div>
    );
  }
}
