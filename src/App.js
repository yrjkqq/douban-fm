import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Exercise from './app/exercise/main';
import CSS3 from './app/exercise/css3/main';
import OfficialDoc from './app/exercise/official-doc/main';
import Html5 from './app/exercise/html5/main';
import FM from './app/fm/main';

class App extends Component {
  render() {
    return (
      <>
        <Route path="/exercise" exact component={Exercise} />
        <Route path="/exercise/css3" component={CSS3} />
        <Route path="/exercise/official-doc" component={OfficialDoc} />
        <Route path="/exercise/html5" component={Html5} />
        <Route path="/fm" component={FM} />

      </>
    );
  }
}

export default App;
