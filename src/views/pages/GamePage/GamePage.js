import React from 'react'
import { Link } from 'react-router-dom'
import './GamePage.scss'

const GamePage = () => {
  return (
    <div className="GamePage">
      <h1>Game Page</h1>
      <Link to='/ResultsPage'>Results Page</Link>
      <Link to='/'>Home Page</Link>
    </div>
  );
};

export default GamePage
