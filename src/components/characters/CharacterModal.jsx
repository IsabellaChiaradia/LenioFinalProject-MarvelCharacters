import React from 'react';
import FavoriteStar from '../FavoriteStar/FavoriteStar.jsx';
import './CharacterModal.css';

const CharacterModal = ({ character, onClose, favoriteComics, onToggleFavorite }) => {
  const isComicInFavorites = (comic) => {
    return favoriteComics.some((favComic) => favComic.id === comic.id);
  };

  const handleComicFavoriteToggle = (comic) => {
    onToggleFavorite(comic);

    console.log('Comics in favorites:', favoriteComics);
  };

  return (
    <div className="character-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{character.name}</h2>
        <div className="comics-list">
          {character.comics.map((comic) => (
            <div key={comic.id} className="comic-item">
              <div className="comic-title-container">
                <span className="comic-title">{comic.title}</span>
                <FavoriteStar
                  isFavorite={isComicInFavorites(comic)}
                  onToggle={() => handleComicFavoriteToggle(comic)}
                />
              </div>
              <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
              <div className="comic-details">
                <p>{comic.description || 'No description available'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
