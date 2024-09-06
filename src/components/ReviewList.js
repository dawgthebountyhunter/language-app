import React from 'react';

const ReviewList = ({ title, cards }) => {
  return (
    <div className="review-list">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Italian</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {cards.map(card => (
            <tr key={card.id}>
              <td>{card.italianWord}</td>
              <td>{card.englishTranslation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewList;