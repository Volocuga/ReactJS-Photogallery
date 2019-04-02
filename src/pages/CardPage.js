import React from "react";

export const CardPage = ({match}) => (
  <div>
    <h2>CardPage</h2>
    <p>ID: {match.params.id}</p>
  </div>
);

