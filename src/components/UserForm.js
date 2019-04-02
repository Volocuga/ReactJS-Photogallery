import React, { Component } from "react";
import Button from "./Button";

class UserForm extends Component {
  state = {
    loginInput: "",
    passwordInput: ""
  };
  _loginChange = event => {
    const value = event.target.value;
    this.setState({
      loginInput: value
    });
  };
  _passwordChange = event => {
    const value = event.target.value;
    this.setState({
      passwordInput: value
    });
  };
  _submitForm = event => {
    event.preventDefault();
    if(!this.state.loginInput || !this.state.passwordInput) return false;
    const userData = {
      login: this.state.loginInput,
      password: this.state.passwordInput
    };
    this.props.returnUserData(userData);
    this.setState({
      loginInput: "",
      passwordInput: ""
    });
  };

  render() {
    const { loginInput, passwordInput } = this.state;

    return (
      <div className="d-flex justify-content-center">
        <form className="w-50 my-4" onSubmit={this._submitForm}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="login"
              value={loginInput}
              onChange={this._loginChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={passwordInput}
              onChange={this._passwordChange}
            />
          </div>

          <Button classN="btn btn-primary" text={"Submit"} type={"submit"} />

        </form>
      </div>
    );
  }
}

export default UserForm;
