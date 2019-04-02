import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardForImage = ({ src, author, id, match }) => (
  <div className="card text-white bg-primary mx-3 my-3 w-25">
    <div className="card-header">Header</div>
    <div className="card-body">
      <h4 className="card-title">Author: {author}</h4>
      <img src={src} alt="" width="100" height="100" />
    </div>
    <Link to={`${match.url}/${id}`} className="btn btn-secondary">
      Detail
    </Link>
  </div>
);

CardForImage.propTypes = {
  src: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default CardForImage;
