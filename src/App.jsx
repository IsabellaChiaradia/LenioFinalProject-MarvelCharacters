import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CharactersProvider } from './context/context.jsx';
import Characters from './components/characters/Characters.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CharactersProvider>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/:character" element={<Characters />} />
          </Routes>
        </CharactersProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;