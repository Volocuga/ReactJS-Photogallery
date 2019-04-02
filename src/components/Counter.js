import React, { Component } from "react";
import Button from "./Button";

export default class Counter extends Component {
  state = {
    myCounter: 0,
    isVisible: true
  };

  _clickMethodStart = () => {
    this.counterState = setInterval(() => {
      this.setState({ myCounter: this.state.myCounter + 1 });
    }, 500);
  };
  _clickMethodStop = () => {
    clearInterval(this.counterState);
  };
  _clickMethodClear = () => {
    this.setState({
      myCounter: 0
    });
  };
  _clickMethodHide = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    const { isVisible, myCounter } = this.state;
    return (
      <div>
        {isVisible && <h1>{myCounter}</h1>}
        <Button
          classN="btn btn-primary"
          onClickFn={this._clickMethodStart}
          text={"Start"}
          type={"button"}
        />
        <Button
          classN="btn btn-secondary"
          onClickFn={this._clickMethodStop}
          text={"Stop"}
          type={"button"}
        />
        <Button
          classN="btn btn-danger"
          onClickFn={this._clickMethodClear}
          text={"Clear"}
          type={"button"}
        />
        <Button
          classN="btn btn-primary"
          onClickFn={this._clickMethodHide}
          text={"Hide"}
          type={"button"}
        >
          {isVisible ? "hide" : "show"}
        </Button>
      </div>
    );
  }
}
