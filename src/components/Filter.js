import React from "react";

function Filter({ category, onCategoryChange }) {
  return (
    <div>
      <label>
        Filter by Category:
        <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
