import React from 'react';
import './App.css';
import { SearchBar } from './components/search-bar/SearchBar.jsx';
import Characters from './components/characters/Characters.jsx';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Characters />
    </div>
  );
}

export default App;
