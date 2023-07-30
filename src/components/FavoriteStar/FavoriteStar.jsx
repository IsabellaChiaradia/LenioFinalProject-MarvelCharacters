import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

const FavoriteStar = ({ isFavorite, onToggle }) => {
  return (
    <div className="favorite-icon" onClick={onToggle} style={{ color: '#333' }}>
      {isFavorite ? <BsStarFill size={16} /> : <BsStar size={16} />}
    </div>
  );
};

export default FavoriteStar;
