import React from 'react';

const Flashcard = ({ card, isFlipped, onFlip }) => {
  if (!card) {
    return <div>Error: No card data available</div>;
  }

  return (
    <div className="flashcard-container">
      <div className="flashcard">
        <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
          <div className="flashcard-front">
            <h2>{card.italianWord}</h2>
          </div>
          <div className="flashcard-back">
            <h2>{card.englishTranslation}</h2>
            <p>{card.examples[0].italian}</p>
            <p>{card.examples[0].english}</p>
          </div>
        </div>
      </div>
      <button className="flip-button" onClick={onFlip}>Flip</button>
    </div>
  );
};

export default Flashcard;