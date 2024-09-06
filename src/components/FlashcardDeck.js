import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Flashcard from './Flashcard';
import ReviewList from './ReviewList';
import initialVocabData from '../data/initialVocabData';

const FlashcardDeck = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [answeredCards, setAnsweredCards] = useState({});
  const [shuffledDeck, setShuffledDeck] = useState([]);
  const [totalCardsViewed, setTotalCardsViewed] = useState(0);
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState('all');
  const [showCorrectList, setShowCorrectList] = useState(false);
  const [showIncorrectList, setShowIncorrectList] = useState(false);

  const partsOfSpeech = ['all', ...new Set(initialVocabData.map(card => card.partOfSpeech))];

  useEffect(() => {
    shuffleDeck();
  }, [selectedPartOfSpeech]);

  const shuffleDeck = () => {
    const filteredDeck = selectedPartOfSpeech === 'all'
      ? initialVocabData
      : initialVocabData.filter(card => card.partOfSpeech === selectedPartOfSpeech);
    const shuffled = [...filteredDeck].sort(() => Math.random() - 0.5);
    setShuffledDeck(shuffled);
    setCurrentCardIndex(0);
    setTotalCardsViewed(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setSkippedCount(0);
    setAnsweredCards({});
  };

  if (shuffledDeck.length === 0) {
    return <div>No flashcards available for the selected part of speech.</div>;
  }

  const nextCard = () => {
    if (!isFlipped) {
      setSkippedCount(skippedCount + 1);
    }
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % shuffledDeck.length);
      setTotalCardsViewed(prev => prev + 1);
    }, 300);
  };

  const previousCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => 
        (prevIndex - 1 + shuffledDeck.length) % shuffledDeck.length
      );
    }, 300);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswer = (isCorrect) => {
    const currentCard = shuffledDeck[currentCardIndex];
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setAnsweredCards({...answeredCards, [currentCard.id]: isCorrect});
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % shuffledDeck.length);
      setTotalCardsViewed(prev => prev + 1);
    }, 300);
  };

  const resetDeck = () => {
    shuffleDeck();
  };

  const handlePartOfSpeechChange = (e) => {
    setSelectedPartOfSpeech(e.target.value);
  };

  const getCorrectCards = () => shuffledDeck.filter(card => answeredCards[card.id] === true);
  const getIncorrectCards = () => shuffledDeck.filter(card => answeredCards[card.id] === false);

  return (
    <div className="flashcard-deck">
      <Link to="/" className="back-button">Back to Home</Link>
      <div className="part-of-speech-selector">
        <label htmlFor="partOfSpeech">Select Part of Speech: </label>
        <select id="partOfSpeech" value={selectedPartOfSpeech} onChange={handlePartOfSpeechChange}>
          {partsOfSpeech.map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
      </div>
      <Flashcard card={shuffledDeck[currentCardIndex]} isFlipped={isFlipped} onFlip={handleFlip} />
      <div className="controls">
        <button onClick={previousCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
      <div className="answer-buttons">
        <button onClick={() => handleAnswer(true)}>Correct</button>
        <button onClick={() => handleAnswer(false)}>Incorrect</button>
      </div>
      <div className="score">
        <p>Correct: {correctCount}</p>
        <p>Incorrect: {incorrectCount}</p>
        <p>Skipped: {skippedCount}</p>
        <p>Total Cards Viewed: {totalCardsViewed}</p>
        <p>Total {selectedPartOfSpeech} Cards: {shuffledDeck.length}</p>
      </div>
      <button className="reset-button" onClick={resetDeck}>Reset Deck</button>
      <div className="review-buttons">
        <button onClick={() => setShowCorrectList(!showCorrectList)}>
          {showCorrectList ? 'Hide' : 'Show'} Correct Cards
        </button>
        <button onClick={() => setShowIncorrectList(!showIncorrectList)}>
          {showIncorrectList ? 'Hide' : 'Show'} Incorrect Cards
        </button>
      </div>
      {showCorrectList && (
        <ReviewList title="Correct Cards" cards={getCorrectCards()} />
      )}
      {showIncorrectList && (
        <ReviewList title="Incorrect Cards" cards={getIncorrectCards()} />
      )}
    </div>
    



  );

  return (
    <div className="flashcard-deck">
      <Link to="/" className="back-button">Back to Home</Link>
      {/* ... (keep all existing JSX) */}
    </div>
  );

};

export default FlashcardDeck;