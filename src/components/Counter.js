import React from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  increment = () => {
    this.setState({ number: this.state.number + 1 });
  };

  decrement = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div>
        <p>
          Give these buttons the ability to increment and decrement the number.
          We will be using this bas to start learning react :)
        </p>
        <hr />
        <button onClick={this.increment.bind(this)}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}

export default Counter;
