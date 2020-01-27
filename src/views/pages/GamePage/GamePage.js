import React from 'react'
import { Link } from 'react-router-dom'
import './GamePage.scss'

const GamePage = () => {
  return (
    <div className="GamePage">
      <h1>Game Page</h1>
      <Link to='/GamePage'>Game Page</Link>
    </div>
  );
};

export default GamePage
