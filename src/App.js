import React from 'react';
import {Switch, Route } from 'react-router-dom'
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path = '/' component={HomePage} />
            <Route exact path = '/GamePage' component={GamePage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
