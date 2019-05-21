import React from "react";

const QueryBar = ({ query, onChange }) => (
  <input onChange={onChange} value={query} />
);

export default QueryBar;
