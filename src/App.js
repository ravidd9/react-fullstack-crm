import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Clients from './components/Clients';
import Actions from './components/Actions';
import Analytics from './components/Analytics';



class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  



  render() {
    return (
      <Router>
        <div id="App">
          <NavBar />
          <Route exact path="/" render={() => <Clients />} />
          <Route exact path="/actions" render={() => <Actions />} />
          <Route exact path="/analytics" render={() => <Analytics />} />
        </div>
      </Router>
    );
  }
}

export default App;
