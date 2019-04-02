import React, { Component } from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

export default class Profile extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    const { name, lastName, dob } = this.props;
    return (
      <div>
        <div className="card text-white bg-info mb-3">
          <div className="card-header">
            {name} {lastName}
          </div>
          <div className="card-body">
            <h4 className="card-title">{dob}</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Counter />
          </div>
        </div>
      </div>
    );
  }
}
