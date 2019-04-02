import React, { Component } from "react";

class ListUsersData extends Component {
  render() {
    const { deleteItem, usersData } = this.props;
    return (
      <ul className="list-group my-5">
        {usersData.map(
          user =>
            user.id && (
              <li
                className="list-group-item list-group-item-action"
                key={user.id}
              >
                <div>
                  <strong>Login: </strong> {user.login}
                  <strong>Password: </strong> {user.password}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteItem(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )
        )}
      </ul>
    );
  }
}

export default ListUsersData;
