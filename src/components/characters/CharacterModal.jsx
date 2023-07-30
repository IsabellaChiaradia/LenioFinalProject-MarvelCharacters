import React from 'react';
import './CharacterModal.css';

const CharacterModal = ({ character, onClose }) => {
  return (
    <div className="character-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>{character.name}</h2>
        <div className="comics-list">
          {character.comics.map((comic) => (
            <div key={comic.id} className="comic-item">
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <div className="comic-details">
                <h3>{comic.title}</h3>
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
