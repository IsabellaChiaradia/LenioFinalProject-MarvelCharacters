import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

export const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchQuery);
    }
  };

  return (
    <form className='input-container' onSubmit={(e) => e.preventDefault()}>
      <FaSearch className="search-icon" />
      <input
        placeholder="Buscar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </form>
  );
};
