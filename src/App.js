import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import FlashcardDeck from './components/FlashcardDeck';
import Culture from './components/Culture';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/flashcards" element={<FlashcardDeck />} />
          <Route path="/culture" element={<Culture />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;