import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Mastering the Italian Language</h1>
        <p className="subtitle">I COOK-AH THE PASTA</p>
      </header>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/flashcards" className="nav-button">Flashcards</Link>
            </li>
            <li>
              <Link to="/culture" className="nav-button">Culture</Link>
            </li>
            {/* Add more practice types here in the future */}
          </ul>
        </nav>
      </main>
      <footer>
        <p>&copy; 2024 Deez Nutz Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;