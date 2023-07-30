import React from 'react';
import './FavoritesModal.css';
import { useCharacters } from '../../context/context';
import { BsStarFill } from 'react-icons/bs';

const FavoritesModal = ({ onClose }) => {
  const { favoriteComics } = useCharacters();

  return (
    <div className="favorites-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Favorites</h2>
        <div className="comics-list">
          {favoriteComics.length > 0 ? (
            favoriteComics.map((comic) => (
              <div key={comic.id} className="comic-item">
                <div className="comic-title-container">
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    className="comic-thumbnail"
                    alt={comic.title}
                  />
                  <span className="comic-title">{comic.title}</span>
                  <BsStarFill size={16} color="#f5c518" />
                </div>
                <div className="comic-details">
                  <p>{comic.description || 'No description available'}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No favorite comics yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
