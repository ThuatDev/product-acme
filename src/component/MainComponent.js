import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'; // Thêm import cho useSearchParams
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import SortOptions from './SortOptions';

const MainComponent = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams(); // Sử dụng useSearchParams

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [sortOption, setSortOption] = useState(searchParams.get('sort') || 'default');
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  useEffect(() => {
    // Cập nhật searchParams khi có thay đổi
    setSearchParams({ category: selectedCategory, sort: sortOption, search: searchTerm });
  }, [selectedCategory, sortOption, searchTerm, setSearchParams]);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <CategoryList setSelectedCategory={setSelectedCategory} />
      <ProductList
        selectedCategory={selectedCategory}
        sortOption={sortOption}
        searchTerm={searchTerm}
      />
      <SortOptions handleSortChange={handleSortChange} />
    </div>
  );
};

export default MainComponent;
