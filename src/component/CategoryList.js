// CategoryList.js
import React from 'react';

const CategoryList = ({ setSelectedCategory }) => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        console.log('Categories data:', data);
        setCategories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
