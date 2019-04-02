import React from "react";
import PropTypes from "prop-types";
import CardForImage from "./CardForImage";

const GalleryItems = ({ images, match }) => (
  <div className="d-flex flex-wrap">
    {images.map(image => (
      <CardForImage
        key={image.id}
        id={image.id}
        src={image.src}
        author={image.author}
        match={match}
      />
    ))}
  </div>
);
GalleryItems.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  )
};
export default GalleryItems;
