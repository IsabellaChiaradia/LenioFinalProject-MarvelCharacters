import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import './App.css';
import { SearchBar } from './components/search-bar/SearchBar';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://gateway.marvel.com:443/v1/public/characters',
          {
            params: {
              ts: '1',
              apikey: '4033a8ca4f424d8ad5066be57a6e5a5e',
              hash: '2ddbfdc5dd62b6adf7eefaf0c854ba0d',
              limit: 100,
            },
          }
        );

        setPersonajes(response.data.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const sortedCharacters = useMemo(() => {
    return [...personajes].sort((a, b) => a.name.localeCompare(b.name));
  }, [personajes]);

  const randomCharacters = useMemo(() => {
    const shuffledCharacters = [...sortedCharacters].sort(() => 0.5 - Math.random());
    return shuffledCharacters;
  }, [sortedCharacters]);

  const isValidThumbnail = (thumbnail) => {
    return thumbnail && !thumbnail.path.includes('image_not_available');
  };

  const handleSearch = (query) => {
    const filteredCharacters = personajes.filter((character) =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredCharacters);
  };

  useEffect(() => {
    setSearchResults([]); 
    if (searchQuery.trim() !== '') {
      handleSearch(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className="App">
      <SearchBar onSearch={setSearchQuery} />
      <div className="container">
        {searchResults.length > 0 ? (
          searchResults.map((per) => (
            isValidThumbnail(per.thumbnail) && (
              <div className="col" key={per.id}>
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
            )
          ))
        ) : (          
          randomCharacters.map((per) => (
            isValidThumbnail(per.thumbnail) && (
              <div className="col" key={per.id}>
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
            )
          ))
        )}
      </div>
    </div>
  );
}

export default App;
