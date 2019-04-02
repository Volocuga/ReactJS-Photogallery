import React, { Component } from "react";

class Test extends Component {
  state = {
    counter: 0
  };
  _addCounter = () => {
    this.setState(prevValue => ({ counter: prevValue.counter + 1 }));
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>{counter}</h1>
        <button className="btn btn-success" onClick={this._addCounter}>
          add
        </button>
      </div>
    );
  }
}

export default Test;
