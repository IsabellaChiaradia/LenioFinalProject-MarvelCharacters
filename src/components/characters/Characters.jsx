import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useCharacters } from '../../context/context.jsx';
import './Characters.css';
import { SearchBar } from '../search-bar/SearchBar.jsx';
import { useNavigate } from 'react-router-dom';

const Characters = () => {
  const { searchQuery, searchResults, setSearchResults } = useCharacters();
  const [allCharacters, setAllCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalPages = 16;
        const characterRequests = [];

        for (let page = 0; page < totalPages; page++) {
          characterRequests.push(
            axios.get('https://gateway.marvel.com:443/v1/public/characters', {
              params: {
                ts: '1',
                apikey: '4033a8ca4f424d8ad5066be57a6e5a5e',
                hash: '2ddbfdc5dd62b6adf7eefaf0c854ba0d',
                limit: 100,
                offset: page * 100,
              },
            })
          );
        }

        const responses = await Promise.all(characterRequests);
        const allCharactersData = responses.flatMap((response) => response.data.data.results);
        setAllCharacters(allCharactersData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    handleSearchQuery();
  }, [searchQuery, allCharacters]);

  const sortedCharacters = useMemo(() => {
    return [...allCharacters].sort((a, b) => a.name.localeCompare(b.name));
  }, [allCharacters]);

  const randomCharacters = useMemo(() => {
    const shuffledCharacters = [...sortedCharacters].sort(
      () => 0.5 - Math.random()
    );
    return shuffledCharacters;
  }, [sortedCharacters]);

  const isValidThumbnail = (thumbnail) => {
    return thumbnail && !thumbnail.path.includes('image_not_available');
  };

  const handleSearchQuery = () => {
    if (searchQuery.trim() !== '') {
      const filteredCharacters = allCharacters.filter((character) =>
        character.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      setSearchResults(filteredCharacters);
    } else {
      setSearchResults(randomCharacters);
    }
  };

  const handleCharacterClick = (character) => {
    const characterPath = encodeURIComponent(character.name);
    navigate(`/${characterPath}`); // Navigate to the character's path URL
  };

  return (
    <div className="container">
      <SearchBar />
      {searchResults.length > 0 ? (
        searchResults.map((per) =>
          isValidThumbnail(per.thumbnail) ? (
            <div className="col" key={per.id} onClick={() => handleCharacterClick(per)}>
              <div className="card">
                <img
                  src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                  className="character-img"
                  alt={`${per.name} image`}
                />
                <div className="card-body">
                  <p className="character-name">{per.name}</p>
                </div>
              </div>
            </div>
          ) : null
        )
      ) : (
        randomCharacters.map((per) =>
          isValidThumbnail(per.thumbnail) ? (
            <div className="col" key={per.id} onClick={() => handleCharacterClick(per)}>
              <div className="card">
                <img
                  src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                  className="character-img"
                  alt={`${per.name} image`}
                />
                <div className="card-body">
                  <p className="character-name">{per.name}</p>
                </div>
              </div>
            </div>
          ) : null
        )
      )}
    </div>
  );
};

export default Characters;