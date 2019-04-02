import React from "react";
import GalleryItems from "./../components/GalleryItems";

export const HomePage = props => (
  <>
    <h1>Welcome in Gallery Items</h1>
    <GalleryItems images={props.images} match={props.match} />
  </>
);
