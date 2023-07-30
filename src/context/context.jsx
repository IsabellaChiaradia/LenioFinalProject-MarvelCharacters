import { createContext, useContext, useState } from 'react';

const CharactersContext = createContext();

export const useCharacters = () => useContext(CharactersContext);

export const CharactersProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [favoriteComics, setFavoriteComics] = useState([]); // Assuming favoriteComics is defined here.

  return (
    <CharactersContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        favoriteComics, // Make sure to include the favoriteComics in the context value.
        setFavoriteComics, // If you have a setter for favoriteComics, add it to the context value as well.
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
