import React, { Component } from "react";
import v4 from "uuid/v4";

import Header from "./components/Header";
import Profile from "./components/Profile";
import UserForm from "./components/UserForm";
import ListUsersData from "./components/ListUsersData";
import Test from './components/Test';
import GroupForm from './components/GroupForm';

import profiles from "./object/profile";

import "./App.css";

class App extends Component {
  state = {
    userData: [{ login: "", password: "" }]
  };
  _addUserData = usersData => {
    const newUserData = {
      id: v4(),
      ...usersData
    };
    this.setState({
      userData: [...this.state.userData, newUserData]
    });
  };
  deleteItem = id => {
    this.setState({
      userData: this.state.userData.filter(userData => userData.id !== id)
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Test />
        <hr/>
        <GroupForm />
        <hr/>
        <UserForm returnUserData={this._addUserData} />

        <ListUsersData
          usersData={this.state.userData}
          deleteItem={this.deleteItem}
        />

        <div className="container">
          {profiles.map(profile => (
            <Profile {...profile} key={profile.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
