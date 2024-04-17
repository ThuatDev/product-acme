// ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
  console.log('product:', product, 'ProductItem.js');
  return (
    <li>
      <div>
        <h3>{product.title}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
      </div>
    </li>
  );
};

export default ProductItem;
