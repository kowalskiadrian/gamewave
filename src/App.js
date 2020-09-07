import React from 'react';
import './styles/App.css';
import './styles/GameSelect.css';
import Nav from './components/Nav.js';
import GameSelect from './components/GameSelect.js';
import Tetris from './components/tetris.js';
import Rubik from './components/rubiks.js';
import Chess from './components/chess/chess.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={GameSelect}/>
          <Route path='/tetris' exact component={Tetris}/>
          <Route path='/chess' exact component={Chess}/>
          <Route path='/rubiks' exact component={Rubik}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
