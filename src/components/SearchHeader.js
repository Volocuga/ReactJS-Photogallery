import React from "react";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SearchHeader = ({ searchWorldFn }) => {
  let searchInput = null;
  const setSearchWorld = event => {
    event.preventDefault();
    searchWorldFn(searchInput.value);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to="/home" className="navbar-brand">
        Navbar
      </NavLink>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={setSearchWorld}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            ref={node => (searchInput = node)}
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

SearchHeader.propTypes = {};

export default SearchHeader;
