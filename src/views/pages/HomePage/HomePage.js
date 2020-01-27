import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="HomePage">
      <div class="HomeHeading">
        <h1>dual n-back</h1>
        <Link to='/GamePage'>Game Page</Link>
      </div>
      <div class="GameStatus">
        Game Status
      </div>
      <div class="PlayButton">
        Play
      </div>  
    </div>
  );
};

export default HomePage
