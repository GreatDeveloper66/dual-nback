import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <Link to='/GamePage'>Game Page</Link>
    </div>
  );
};

export default HomePage
