import React from 'react'
import { Link } from 'react-router-dom'
import './ResultsPage.scss'

const ResultsPage = () => {
  return (
    <div className="ResultsPage">
      <h1>Results Page</h1>
      <Link to='/'>Results Page</Link>
    </div>
  );
};

export default ResultsPage
