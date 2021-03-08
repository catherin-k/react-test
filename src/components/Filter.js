import React from "react";

const Filter = ({ value, onChangea }) => (
  <label>
    Filter <input type="text" value={value} onChange={onChangea} />
  </label>
);

export default Filter;
