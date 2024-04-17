import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ selectedCategory, sortOption, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('selectedCategory:', selectedCategory);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log('Products data:', data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log('products:fixxxx', products);
  const filteredAndSortedProducts = products
    .filter(product =>
      product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) => {
      if (sortOption === 'price_asc') {
        console.log('a.price:', a.price, 'b.price:', b.price);
        return a.price - b.price;
      } else if (sortOption === 'price_desc') {
        return b.price - a.price;
        
      } else {
        console.log('a.id:', a.id, 'b.id:', b.id);
        return 0;
      }
    });
    console.log('filteredAndSortedProducts:', filteredAndSortedProducts);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {filteredAndSortedProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
