import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

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

  const getRandomCharacters = () => {
    const shuffledCharacters = [...personajes].sort(() => 0.5 - Math.random());
    const randomCharacters = shuffledCharacters.slice(0, 8);
    return randomCharacters;
  };

  const randomCharacters = getRandomCharacters();

  return (
    <div className="App">
      <h1>Marvel</h1>
      <div className="container">
        {randomCharacters.map((per) => (
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
        ))}
      </div>
    </div>
  );
}

export default App;
