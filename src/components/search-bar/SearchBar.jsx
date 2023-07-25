import React from 'react'
import { FaSearch } from "react-icons/fa"
export const SearchBar = () => {
  return (
    <div className='input'>
      <FaSearch id="search-icon" />
      <input placeholder="Buscar" />      
    </div>    
  );
}
