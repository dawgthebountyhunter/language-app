import React from 'react';
import { Link } from 'react-router-dom';
import tasteOfItaly from '../images/tasteofitaly.png';

const Culture = () => {
  return (
    <div className="culture-page">
      <Link to="/" className="back-button">Back to Home</Link>
      <h1>Italian Culture</h1>
      <img src={tasteOfItaly} alt="Taste of Italy" className="culture-image" />
    </div>
  );
};

export default Culture;