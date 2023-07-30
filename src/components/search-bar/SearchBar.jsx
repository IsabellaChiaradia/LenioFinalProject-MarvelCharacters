import React, { useState } from 'react';
import marvelLogo from '../../assets/marvel-logo.png';
import { BsStar } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import './SearchBar.css';
import { useCharacters } from '../../context/context.jsx';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const { setSearchQuery } = useCharacters();
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLocalSearchQuery(event.target.value);
    setSearchQuery(event.target.value);
    navigate(`/${encodeURIComponent(event.target.value)}`); // Navigate to the search URL
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={marvelLogo} alt="Marvel Logo" className="marvel-logo" />
        <span className="vertical-bar">|</span>
      </div>
    <form className='input-container' onSubmit={(e) => e.preventDefault()}>
      <CiSearch className='search-icon' />
      <input
        placeholder='Buscar'
        value={localSearchQuery}
        onChange={handleChange}
      />
    </form>
    <BsStar className="star-icon"/>
    </div>
  );
};

export default SearchBar;
