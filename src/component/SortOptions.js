// SortOptions.js
import React from 'react';

const SortOptions = ({ handleSortChange }) => {
  const handleChange = (e) => {
    handleSortChange(e.target.value);
  };

  return (
    <div>
      <h2>Sort Options</h2>
      <select onChange={handleChange}>
        <option value="default">Default</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
