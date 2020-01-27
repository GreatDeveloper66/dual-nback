import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import HomePage from './views/pages/HomePage/HomePage';
import GamePage from './views/pages/GamePage/GamePage'
import ResultsPage from './views/pages/ResultsPage/ResultsPage'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path = '/' component={HomePage} />
            <Route exact path = '/GamePage' component={GamePage} />
            <Route exact path = '/ResultsPage' component={ResultsPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
