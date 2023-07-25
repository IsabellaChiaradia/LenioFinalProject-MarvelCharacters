import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import './App.css';
import { SearchBar } from './components/search-bar/SearchBar';

function App() {
  const [personajes, setPersonajes] = useState([]);

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
    // Check if the thumbnail path exists and is not a default placeholder image
    return thumbnail && !thumbnail.path.includes('image_not_available');
  };

  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        {randomCharacters.map((per) => (
          isValidThumbnail(per.thumbnail) && ( // Check if the thumbnail is valid
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
        ))}
      </div>
    </div>
  );
}

export default App;